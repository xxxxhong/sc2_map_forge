"""
sc2_map_forge/pages/generate_page.py
主页面 — 地图生成
"""

import reflex as rx

from ..components.header import header, top_tabs
from ..components.sidebar import sidebar
from ..components.pipeline import pipeline_bar, stage_detail_panel
from ..components.output_panels import output_panels
from ..states.generation_state import GenerationState


def generate_page() -> rx.Component:
    return rx.el.div(
        header(),
        top_tabs(active="generate"),
        rx.el.div(
            sidebar(),
            rx.el.div(
                pipeline_bar(),
                stage_detail_panel(),
                output_panels(),
                class_name="main-content",
            ),
            class_name="app-layout",
        ),
        on_mount=GenerationState.on_load,
    )
