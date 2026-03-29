"""
sc2_map_forge/states/generation_state.py
生成页面的核心状态管理 — 模式切换、种族选择、文件上传、Pipeline 执行
"""

from __future__ import annotations

import asyncio
import json
import os
import time
from typing import Optional

import reflex as rx

from ..constants import PIPELINE_STAGES, RACES, STRATAGEMS
from ..services import (
    GenerationConfig,
    GenerationResult,
    ProviderConfig,
    run_full_pipeline,
)


class GenerationState(rx.State):
    """地图生成页面的状态"""

    # ── 配置文件 (与 ConfigState 共用，放用户目录避免热重载) ──
    _CONFIG_FILE = str(__import__("pathlib").Path.home() / ".smac_ast" / "config.json")

    # ── 模式 ──
    mode: str = "macro"  # "macro" | "micro"

    # ── Scenario 输入 ──
    stratagem: str = ""
    strategy_text: str = ""

    # ── 约束 ──
    player_race: str = ""
    enemy_race: str = ""
    player_unit_count: int = 10
    enemy_unit_count: int = 10

    # ── 文件上传 ──
    uploaded_filename: str = ""
    uploaded_file_path: str = ""

    # ── Pipeline 状态 ──
    stage_statuses: list[str] = ["waiting", "waiting", "waiting", "waiting"]
    stage_outputs: list[str] = ["", "", "", ""]
    active_stage: int = 0
    is_generating: bool = False

    # ── 输出 ──
    galaxy_code: str = ""
    python_code: str = ""
    map_ready: bool = False
    output_dir: str = ""
    galaxy_file_path: str = ""

    # ── 事件处理 ──

    # 防抖: 避免每次输入都写文件触发 Reflex 热重载
    _last_save_time: float = 0.0

    def _save_inputs(self):
        """将生成页面的输入保存到配置文件 (带 2 秒防抖)"""
        import time as _t
        now = _t.time()
        # 距上次保存不到 2 秒就跳过，减少文件写入频率
        if now - self._last_save_time < 2.0:
            return
        self._last_save_time = now

        config = {}
        if os.path.exists(self._CONFIG_FILE):
            try:
                with open(self._CONFIG_FILE, "r", encoding="utf-8") as f:
                    config = json.load(f)
            except Exception:
                pass

        config["generation"] = {
            "mode": self.mode,
            "stratagem": self.stratagem,
            "strategy_text": self.strategy_text,
            "player_race": self.player_race,
            "enemy_race": self.enemy_race,
            "player_unit_count": self.player_unit_count,
            "enemy_unit_count": self.enemy_unit_count,
        }
        try:
            with open(self._CONFIG_FILE, "w", encoding="utf-8") as f:
                json.dump(config, f, ensure_ascii=False, indent=2)
        except Exception:
            pass

    def _force_save_inputs(self):
        """强制保存（不防抖，用于重要操作如选择计策、切换模式）"""
        self._last_save_time = 0.0
        self._save_inputs()

    @rx.event
    def on_load(self):
        """页面加载时恢复上次的输入"""
        if os.path.exists(self._CONFIG_FILE):
            try:
                with open(self._CONFIG_FILE, "r", encoding="utf-8") as f:
                    config = json.load(f)
                gen = config.get("generation", {})
                self.mode = gen.get("mode", self.mode)
                self.stratagem = gen.get("stratagem", self.stratagem)
                self.strategy_text = gen.get("strategy_text", self.strategy_text)
                self.player_race = gen.get("player_race", self.player_race)
                self.enemy_race = gen.get("enemy_race", self.enemy_race)
                self.player_unit_count = gen.get("player_unit_count", self.player_unit_count)
                self.enemy_unit_count = gen.get("enemy_unit_count", self.enemy_unit_count)
            except Exception:
                pass

    def set_mode(self, mode: str):
        self.mode = mode
        self._force_save_inputs()

    def set_stratagem(self, value: str):
        self.stratagem = value
        self._force_save_inputs()

    def set_stratagem_by_label(self, label: str):
        """从下拉选择的 label 查找对应的 value"""
        for s in STRATAGEMS:
            if s["label"] == label:
                self.stratagem = s["value"]
                self._force_save_inputs()
                return
        self.stratagem = ""
        self._force_save_inputs()

    def set_strategy_text(self, value: str):
        self.strategy_text = value
        self._save_inputs()

    def toggle_player_race(self, race: str):
        self.player_race = "" if self.player_race == race else race
        self._force_save_inputs()

    def toggle_enemy_race(self, race: str):
        self.enemy_race = "" if self.enemy_race == race else race
        self._force_save_inputs()

    def set_player_count(self, value):
        try:
            self.player_unit_count = max(1, min(100, int(float(value))))
            self._save_inputs()
        except (ValueError, TypeError):
            pass

    def set_enemy_count(self, value):
        try:
            self.enemy_unit_count = max(1, min(200, int(float(value))))
            self._save_inputs()
        except (ValueError, TypeError):
            pass

    # 用户是否手动点击了某个 stage（生成期间不自动跳转）
    _user_selected_stage: bool = False

    def view_stage(self, idx: int):
        self.active_stage = idx
        if self.is_generating:
            self._user_selected_stage = True

    async def handle_upload(self, files: list[rx.UploadFile]):
        """处理 .SC2Map 文件上传"""
        if not files:
            return
        upload_file = files[0]
        upload_data = await upload_file.read()
        filename = upload_file.filename or "terrain.SC2Map"

        # 保存到临时目录
        save_dir = rx.get_upload_dir()
        os.makedirs(save_dir, exist_ok=True)
        save_path = os.path.join(save_dir, filename)
        with open(save_path, "wb") as f:
            f.write(upload_data)

        self.uploaded_filename = filename
        self.uploaded_file_path = save_path

    @rx.event(background=True)
    async def start_generation(self):
        """启动四阶段 Pipeline (后台任务)"""
        async with self:
            if not self.uploaded_filename:
                return rx.window_alert("请先上传 .SC2Map 地形文件")
            if self.is_generating:
                return

            self.is_generating = True
            self._user_selected_stage = False
            self.stage_statuses = ["waiting", "waiting", "waiting", "waiting"]
            self.stage_outputs = ["", "", "", ""]
            self.galaxy_code = ""
            self.python_code = ""
            self.map_ready = False

        # 从配置文件直接读取提供商信息 (不依赖 ConfigState 内存状态)
        from .config_state import ConfigState

        config_data = {}
        config_file = self._CONFIG_FILE
        if os.path.exists(config_file):
            try:
                with open(config_file, "r", encoding="utf-8") as f:
                    config_data = json.load(f)
            except Exception:
                pass

        provider_key = config_data.get("default_provider", "deepseek")
        p_cfg = config_data.get("providers", {}).get(provider_key, {})

        provider = ProviderConfig(
            key=provider_key,
            api_key=p_cfg.get("apikey", ""),
            base_url=p_cfg.get("baseurl", ""),
            model=p_cfg.get("model", ""),
        )

        async with self:
            config_state = await self.get_state(ConfigState)

            gen_config = GenerationConfig(
                mode=self.mode,
                strategy=self.strategy_text,
                stratagem=self.stratagem,
                player_race=self.player_race or None,
                enemy_race=self.enemy_race or None,
                player_unit_count=self.player_unit_count,
                enemy_unit_count=self.enemy_unit_count,
                terrain_file_path=self.uploaded_file_path,
                temperature=config_data.get("temperature", 1.0),
                max_tokens=config_data.get("max_tokens", 8096),
            )

        # 读取地形
        terrain_xml = ""
        try:
            from ..services import extract_terrain  # type: ignore
            terrain_xml = extract_terrain(gen_config.terrain_file_path)
        except Exception:
            terrain_xml = f"(terrain file: {gen_config.terrain_file_path or 'unknown'})"

        # 逐阶段执行，每个阶段都推送状态
        from ..services import (
            create_llm_client,
            run_stage_planning,
            run_stage_api_query,
            run_stage_api_lib,
            run_stage_codegen,
        )

        try:
            client = create_llm_client(provider)
        except Exception as e:
            async with self:
                self.is_generating = False
                self.stage_statuses = ["error", "waiting", "waiting", "waiting"]
                self.stage_outputs = [f"创建 LLM 客户端失败: {e}", "", "", ""]
                self.active_stage = 0
            return

        # ── Stage 1: Planning ──
        async with self:
            self.stage_statuses = ["running", "waiting", "waiting", "waiting"]
            if not self._user_selected_stage:
                self.active_stage = 0

        try:
            plan = await asyncio.to_thread(
                run_stage_planning, client, provider.model, gen_config, terrain_xml
            )
        except Exception as e:
            async with self:
                self.is_generating = False
                self.stage_statuses = ["error", "waiting", "waiting", "waiting"]
                self.stage_outputs = [f"Planning 失败: {e}", "", "", ""]
            return

        async with self:
            self.stage_statuses = ["done", "running", "waiting", "waiting"]
            self.stage_outputs[0] = plan
            if not self._user_selected_stage:
                self.active_stage = 1

        # ── Stage 2: API Query ──
        try:
            import json as _json
            queries = await asyncio.to_thread(
                run_stage_api_query, client, provider.model, plan, gen_config
            )
            queries_text = _json.dumps(queries, ensure_ascii=False, indent=2)
        except Exception as e:
            async with self:
                self.is_generating = False
                self.stage_statuses = ["done", "error", "waiting", "waiting"]
                self.stage_outputs[1] = f"API Query 失败: {e}"
            return

        async with self:
            self.stage_statuses = ["done", "done", "running", "waiting"]
            self.stage_outputs[1] = queries_text
            if not self._user_selected_stage:
                self.active_stage = 2

        # ── Stage 3: API Lib ──
        try:
            api_lib = await asyncio.to_thread(run_stage_api_lib, queries)
        except Exception as e:
            async with self:
                self.is_generating = False
                self.stage_statuses = ["done", "done", "error", "waiting"]
                self.stage_outputs[2] = f"API Lib 构建失败: {e}"
            return

        async with self:
            self.stage_statuses = ["done", "done", "done", "running"]
            self.stage_outputs[2] = api_lib
            if not self._user_selected_stage:
                self.active_stage = 3

        # ── Stage 4: Codegen ──
        try:
            galaxy_code = await asyncio.to_thread(
                run_stage_codegen,
                client, provider.model, plan, terrain_xml, api_lib, gen_config
            )
        except Exception as e:
            async with self:
                self.is_generating = False
                self.stage_statuses = ["done", "done", "done", "error"]
                self.stage_outputs[3] = f"Codegen 失败: {e}"
            return

        async with self:
            self.stage_statuses = ["done", "done", "done", "done"]
            self.stage_outputs[3] = galaxy_code
            self.galaxy_code = galaxy_code
            self.map_ready = True
            self.is_generating = False
            self._user_selected_stage = False
            self.active_stage = 3

        # ── 保存生成结果到磁盘 ──
        import time as _time
        tag = _time.strftime("%Y%m%d-%H%M%S")

        # 从配置文件读取输出目录
        history_dir = config_data.get("paths", {}).get("history_dir", "gen_history")

        output_dir = os.path.join(history_dir, tag)
        os.makedirs(output_dir, exist_ok=True)

        # 保存 Galaxy 脚本
        galaxy_path = os.path.join(output_dir, "MapScript.galaxy")
        with open(galaxy_path, "w", encoding="utf-8") as f:
            f.write(galaxy_code)

        # 保存 Planning 结果
        plan_path = os.path.join(output_dir, "debug_planning.txt")
        with open(plan_path, "w", encoding="utf-8") as f:
            f.write(plan)

        # 保存 API 查询
        query_path = os.path.join(output_dir, "debug_searching.txt")
        with open(query_path, "w", encoding="utf-8") as f:
            f.write(queries_text)

        # 保存 API Lib
        lib_path = os.path.join(output_dir, "debug_api_lib.txt")
        with open(lib_path, "w", encoding="utf-8") as f:
            f.write(api_lib)

        async with self:
            self.output_dir = output_dir
            self.galaxy_file_path = galaxy_path

    def download_galaxy(self):
        """下载 Galaxy 脚本"""
        if self.galaxy_code:
            return rx.download(
                data=self.galaxy_code,
                filename="MapScript.galaxy",
            )

    def download_all(self):
        """下载整个输出目录（提示用户路径）"""
        if self.output_dir:
            return rx.window_alert(f"生成结果已保存到: {os.path.abspath(self.output_dir)}")

    # ── 计算属性 ──

    @rx.var
    def current_stage_title(self) -> str:
        if 0 <= self.active_stage < len(PIPELINE_STAGES):
            return PIPELINE_STAGES[self.active_stage]["title"]
        return ""

    @rx.var
    def current_stage_status(self) -> str:
        if 0 <= self.active_stage < len(self.stage_statuses):
            return self.stage_statuses[self.active_stage]
        return "waiting"

    @rx.var
    def current_stage_output(self) -> str:
        if 0 <= self.active_stage < len(self.stage_outputs):
            return self.stage_outputs[self.active_stage]
        return ""

    @rx.var
    def current_stage_desc(self) -> str:
        if 0 <= self.active_stage < len(PIPELINE_STAGES):
            return PIPELINE_STAGES[self.active_stage]["desc"]
        return ""

    @rx.var
    def is_macro(self) -> bool:
        return self.mode == "macro"

    @rx.var
    def stratagem_label(self) -> str:
        """将 stratagem value 转回 label 供 rx.select 回显"""
        if not self.stratagem:
            return ""
        for s in STRATAGEMS:
            if s["value"] == self.stratagem:
                return s["label"]
        return ""
