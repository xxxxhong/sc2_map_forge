"""
sc2_map_forge/components/header.py
顶部 Header + Tab 导航 — 使用 class_name 对接 global.css
"""

import reflex as rx


def header() -> rx.Component:
    return rx.el.div(
        rx.el.div("S", class_name="logo-icon"),
        rx.el.div(
            rx.el.div("SMAC-AST", class_name="app-title"),
            rx.el.div(
                "Automated Scalable Testbed-generator for StarCraft Multi-Agent Challenges",
                class_name="app-subtitle",
            ),
        ),
        class_name="app-header",
    )


def top_tabs(active: str = "generate") -> rx.Component:
    def tab(label: str, icon: str, page: str, key: str) -> rx.Component:
        cls = "top-tab active" if key == active else "top-tab"
        return rx.el.a(
            rx.el.span(icon, style={"font_size": "16px"}),
            rx.el.span(label),
            href=page,
            class_name=cls,
        )

    return rx.el.div(
        tab("生成地图", "🗺️", "/", "generate"),
        tab("API 配置", "🔧", "/api-config", "api"),
        tab("路径配置", "📁", "/path-config", "path"),
        class_name="top-tabs",
    )
