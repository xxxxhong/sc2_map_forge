"""
sc2_map_forge/pages/path_config_page.py
文件路径配置页面 — rx.el + class_name
"""

import reflex as rx

from ..components.header import header, top_tabs
from ..states.config_state import ConfigState


def _field(label: str, value_var, on_change, placeholder: str) -> rx.Component:
    return rx.el.div(
        rx.el.label(label, class_name="form-label"),
        rx.el.input(
            value=value_var,
            on_change=on_change,
            placeholder=placeholder,
            class_name="form-input",
        ),
    )


def path_config_page() -> rx.Component:
    return rx.el.div(
        header(),
        top_tabs(active="path"),
        rx.el.div(
            rx.el.div("文件路径设置", class_name="config-page-title"),
            rx.el.div("配置项目文件路径，保存后生效。", class_name="config-page-desc"),

            rx.el.div(
                _field("上传目录", ConfigState.upload_dir, ConfigState.set_upload_dir, "uploads"),
                _field("地图输出目录", ConfigState.maps_dir, ConfigState.set_maps_dir, "maps"),
                _field("脚本输出目录", ConfigState.history_dir, ConfigState.set_history_dir, "gen_history"),
                _field("基础地图文件路径", ConfigState.base_map_path, ConfigState.set_base_map_path, "maps/raw2.SC2Map"),
                _field("API 库 JSON 路径", ConfigState.api_json_path, ConfigState.set_api_json_path, "database/api.json"),
                class_name="path-form",
            ),

            rx.el.button(
                "💾 保存路径配置",
                on_click=ConfigState.save_path_config,
                class_name="save-btn",
            ),

            rx.cond(
                ConfigState.path_save_msg != "",
                rx.el.div(
                    rx.el.div(
                        ConfigState.path_save_msg,
                        style={
                            "font_size": "12px",
                            "color": "var(--text-muted)",
                            "margin_top": "12px",
                            "padding": "10px 14px",
                            "background": "var(--bg-card)",
                            "border": "1px solid var(--border)",
                            "border_radius": "8px",
                        },
                    ),
                ),
            ),

            class_name="config-page",
        ),
        on_mount=ConfigState.on_load,
    )
