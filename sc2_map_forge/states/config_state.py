"""
sc2_map_forge/states/config_state.py
API 配置 & 路径配置 的状态管理
"""

from __future__ import annotations

import json
import os
from typing import Dict

import reflex as rx

from ..constants import API_PROVIDERS

# CONFIG_FILE = "smac_ast_config.json"
import pathlib
CONFIG_FILE = str(pathlib.Path.home() / ".smac_ast" / "config.json")

# Provider keys — used to generate computed vars
_PROVIDER_KEYS = [p["key"] for p in API_PROVIDERS]


class ConfigState(rx.State):
    """API 和路径配置状态"""

    # ── API 配置 ──
    default_provider: str = "deepseek"
    temperature: float = 1.0
    max_tokens: int = 8096
    provider_configs: Dict[str, Dict[str, str]] = {}

    # ── 路径配置 ──
    upload_dir: str = "uploads"
    maps_dir: str = "maps"
    history_dir: str = "gen_history"
    base_map_path: str = "maps/raw2.SC2Map"
    api_json_path: str = "database/api.json"

    # ── UI 反馈 ──
    api_save_msg: str = ""
    path_save_msg: str = ""

    def _init_providers(self):
        """初始化默认提供商配置"""
        if not self.provider_configs:
            configs = {}
            for p in API_PROVIDERS:
                configs[p["key"]] = {
                    "apikey": "",
                    "baseurl": p["default_base_url"],
                    "model": p["default_model"],
                }
            self.provider_configs = configs

    def _get_field(self, provider_key: str, field: str) -> str:
        """安全地从 provider_configs 获取字段值"""
        return self.provider_configs.get(provider_key, {}).get(field, "")

    # ── Computed vars: 每个 provider 的每个字段 ──
    # 用于 UI input 的 value 绑定 (刷新后能正确回显)

    @rx.var
    def deepseek_apikey(self) -> str:
        return self._get_field("deepseek", "apikey")

    @rx.var
    def deepseek_baseurl(self) -> str:
        return self._get_field("deepseek", "baseurl")

    @rx.var
    def deepseek_model(self) -> str:
        return self._get_field("deepseek", "model")

    @rx.var
    def openai_apikey(self) -> str:
        return self._get_field("openai", "apikey")

    @rx.var
    def openai_baseurl(self) -> str:
        return self._get_field("openai", "baseurl")

    @rx.var
    def openai_model(self) -> str:
        return self._get_field("openai", "model")

    @rx.var
    def anthropic_apikey(self) -> str:
        return self._get_field("anthropic", "apikey")

    @rx.var
    def anthropic_baseurl(self) -> str:
        return self._get_field("anthropic", "baseurl")

    @rx.var
    def anthropic_model(self) -> str:
        return self._get_field("anthropic", "model")

    @rx.var
    def glm_apikey(self) -> str:
        return self._get_field("glm", "apikey")

    @rx.var
    def glm_baseurl(self) -> str:
        return self._get_field("glm", "baseurl")

    @rx.var
    def glm_model(self) -> str:
        return self._get_field("glm", "model")

    @rx.var
    def qwen_apikey(self) -> str:
        return self._get_field("qwen", "apikey")

    @rx.var
    def qwen_baseurl(self) -> str:
        return self._get_field("qwen", "baseurl")

    @rx.var
    def qwen_model(self) -> str:
        return self._get_field("qwen", "model")

    @rx.var
    def minimax_apikey(self) -> str:
        return self._get_field("minimax", "apikey")

    @rx.var
    def minimax_baseurl(self) -> str:
        return self._get_field("minimax", "baseurl")

    @rx.var
    def minimax_model(self) -> str:
        return self._get_field("minimax", "model")

    # ── 页面加载 ──

    @rx.event
    def on_load(self):
        """页面加载时读取配置文件"""
        self._init_providers()
        if os.path.exists(CONFIG_FILE):
            try:
                with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                    saved = json.load(f)
                self.default_provider = saved.get("default_provider", self.default_provider)
                self.temperature = saved.get("temperature", self.temperature)
                self.max_tokens = saved.get("max_tokens", self.max_tokens)
                if "providers" in saved:
                    for k, v in saved["providers"].items():
                        if k in self.provider_configs:
                            self.provider_configs[k].update(v)
                if "paths" in saved:
                    paths = saved["paths"]
                    self.upload_dir = paths.get("upload_dir", self.upload_dir)
                    self.maps_dir = paths.get("maps_dir", self.maps_dir)
                    self.history_dir = paths.get("history_dir", self.history_dir)
                    self.base_map_path = paths.get("base_map_path", self.base_map_path)
                    self.api_json_path = paths.get("api_json_path", self.api_json_path)
            except Exception:
                pass

    # ── API 配置事件 ──

    def set_default_provider(self, value: str):
        self.default_provider = value

    def set_temperature(self, value: str):
        try:
            self.temperature = max(0.0, min(2.0, float(value)))
        except ValueError:
            pass

    def set_max_tokens(self, value: str):
        try:
            self.max_tokens = max(512, min(16384, int(value)))
        except ValueError:
            pass

    def update_provider_apikey(self, provider_key: str, value: str):
        self._init_providers()
        if provider_key in self.provider_configs:
            self.provider_configs[provider_key]["apikey"] = value

    def update_provider_baseurl(self, provider_key: str, value: str):
        self._init_providers()
        if provider_key in self.provider_configs:
            self.provider_configs[provider_key]["baseurl"] = value

    def update_provider_model(self, provider_key: str, value: str):
        self._init_providers()
        if provider_key in self.provider_configs:
            self.provider_configs[provider_key]["model"] = value

    def set_temperature_from_slider(self, value: list[float]):
        """rx.slider on_change 传入的是 list"""
        if value:
            self.temperature = max(0.0, min(2.0, float(value[0])))

    def set_max_tokens_from_slider(self, value: list[float]):
        """rx.slider on_change 传入的是 list[float]"""
        if value:
            self.max_tokens = max(512, min(16384, int(value[0])))

    def reset_temperature(self):
        """重置 Temperature 到默认值"""
        self.temperature = 1.0

    def reset_max_tokens(self):
        """重置 Max Tokens 到默认值"""
        self.max_tokens = 8096

    def save_api_config(self):
        """保存 API 配置到文件"""
        self._init_providers()
        os.makedirs(os.path.dirname(CONFIG_FILE), exist_ok=True)
        config = {
            "default_provider": self.default_provider,
            "temperature": self.temperature,
            "max_tokens": self.max_tokens,
            "providers": self.provider_configs,
        }
        try:
            with open(CONFIG_FILE, "w", encoding="utf-8") as f:
                json.dump(config, f, ensure_ascii=False, indent=2)
            self.api_save_msg = "✓ API 配置已保存"
        except Exception as e:
            self.api_save_msg = f"保存失败: {e}"

    # ── 路径配置事件 ──

    def set_upload_dir(self, value: str):
        self.upload_dir = value

    def set_maps_dir(self, value: str):
        self.maps_dir = value

    def set_history_dir(self, value: str):
        self.history_dir = value

    def set_base_map_path(self, value: str):
        self.base_map_path = value

    def set_api_json_path(self, value: str):
        self.api_json_path = value

    def save_path_config(self):
        """保存路径配置"""
        os.makedirs(os.path.dirname(CONFIG_FILE), exist_ok=True)
        config = {}
        if os.path.exists(CONFIG_FILE):
            try:
                with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                    config = json.load(f)
            except Exception:
                pass

        config["paths"] = {
            "upload_dir": self.upload_dir,
            "maps_dir": self.maps_dir,
            "history_dir": self.history_dir,
            "base_map_path": self.base_map_path,
            "api_json_path": self.api_json_path,
        }
        try:
            with open(CONFIG_FILE, "w", encoding="utf-8") as f:
                json.dump(config, f, ensure_ascii=False, indent=2)
            self.path_save_msg = "✓ 路径配置已保存"
        except Exception as e:
            self.path_save_msg = f"保存失败: {e}"
