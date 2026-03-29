"""
sc2_map_forge/sc2_map_forge.py
应用入口 — 注册路由, 全局主题设定
"""

import reflex as rx

from .pages.generate_page import generate_page
from .pages.api_config_page import api_config_page
from .pages.path_config_page import path_config_page

app = rx.App(
    theme=rx.theme(appearance="dark"),
    stylesheets=["/global.css"],
)
app.add_page(generate_page, route="/", title="SMAC-AST · 生成地图")
app.add_page(api_config_page, route="/api-config", title="SMAC-AST · API 配置")
app.add_page(path_config_page, route="/path-config", title="SMAC-AST · 路径配置")
