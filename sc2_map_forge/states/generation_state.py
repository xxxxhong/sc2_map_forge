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

    def set_mode(self, mode: str):
        self.mode = mode

    def set_stratagem(self, value: str):
        self.stratagem = value

    def set_stratagem_by_label(self, label: str):
        """从下拉选择的 label 查找对应的 value"""
        for s in STRATAGEMS:
            if s["label"] == label:
                self.stratagem = s["value"]
                return
        self.stratagem = ""

    def set_strategy_text(self, value: str):
        self.strategy_text = value

    def toggle_player_race(self, race: str):
        self.player_race = "" if self.player_race == race else race

    def toggle_enemy_race(self, race: str):
        self.enemy_race = "" if self.enemy_race == race else race

    def set_player_count(self, value: str):
        try:
            self.player_unit_count = max(1, min(100, int(value)))
        except ValueError:
            pass

    def set_enemy_count(self, value: str):
        try:
            self.enemy_unit_count = max(1, min(200, int(value)))
        except ValueError:
            pass

    def view_stage(self, idx: int):
        self.active_stage = idx

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
            self.stage_statuses = ["waiting", "waiting", "waiting", "waiting"]
            self.stage_outputs = ["", "", "", ""]
            self.galaxy_code = ""
            self.python_code = ""
            self.map_ready = False

        # 从 ConfigState 获取提供商信息 (跨 state 读取)
        from .config_state import ConfigState

        async with self:
            config_state = await self.get_state(ConfigState)
            provider_key = config_state.default_provider or "deepseek"
            providers = config_state.provider_configs
            p_cfg = providers.get(provider_key, {})

            provider = ProviderConfig(
                key=provider_key,
                api_key=p_cfg.get("apikey", ""),
                base_url=p_cfg.get("baseurl", ""),
                model=p_cfg.get("model", ""),
            )

            gen_config = GenerationConfig(
                mode=self.mode,
                strategy=self.strategy_text,
                stratagem=self.stratagem,
                player_race=self.player_race or None,
                enemy_race=self.enemy_race or None,
                player_unit_count=self.player_unit_count,
                enemy_unit_count=self.enemy_unit_count,
                terrain_file_path=self.uploaded_file_path,
                temperature=config_state.temperature,
                max_tokens=config_state.max_tokens,
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
            self.active_stage = 3

        # ── 保存生成结果到磁盘 ──
        import time as _time
        tag = _time.strftime("%Y%m%d-%H%M%S")

        # 从 ConfigState 读取输出目录
        async with self:
            config_state2 = await self.get_state(ConfigState)
            history_dir = config_state2.history_dir or "gen_history"

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
        if self.galaxy_file_path and os.path.exists(self.galaxy_file_path):
            return rx.download(self.galaxy_file_path, filename="MapScript.galaxy")

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
