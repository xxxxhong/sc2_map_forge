"""
sc2_map_forge/components/pipeline.py
Pipeline 阶段可视化 + 详情面板 — rx.el + class_name
"""

import reflex as rx

from ..constants import PIPELINE_STAGES
from ..states.generation_state import GenerationState


def stage_node(stage: dict, index: int) -> rx.Component:
    status = GenerationState.stage_statuses[index]
    is_active = GenerationState.active_stage == index

    node_cls = rx.cond(
        status == "done",
        "stage-node completed",
        rx.cond(is_active, "stage-node active", "stage-node"),
    )
    num_cls = rx.cond(
        status == "done",
        "stage-num",  # CSS handles .completed .stage-num
        "stage-num",
    )

    return rx.el.div(
        rx.el.div(str(stage["num"]), class_name="stage-num"),
        rx.el.div(
            rx.el.div(stage["label"], class_name="stage-label"),
            rx.el.div(status, class_name="stage-status"),
            class_name="stage-info",
        ),
        on_click=GenerationState.view_stage(index),
        class_name=node_cls,
    )


def stage_connector(index: int) -> rx.Component:
    cls = rx.cond(
        GenerationState.stage_statuses[index] == "done",
        "stage-connector completed",
        "stage-connector",
    )
    return rx.el.div(class_name=cls)


def pipeline_bar() -> rx.Component:
    nodes = []
    for i, stage in enumerate(PIPELINE_STAGES):
        nodes.append(stage_node(stage, i))
        if i < len(PIPELINE_STAGES) - 1:
            nodes.append(stage_connector(i))
    return rx.el.div(*nodes, class_name="pipeline")


def _badge() -> rx.Component:
    status = GenerationState.current_stage_status
    badge_cls = rx.cond(
        status == "running",
        "panel-badge badge-running",
        rx.cond(status == "done", "panel-badge badge-done", "panel-badge badge-waiting"),
    )
    badge_text = rx.cond(
        status == "running",
        "RUNNING",
        rx.cond(status == "done", "COMPLETE", "WAITING"),
    )
    return rx.el.div(badge_text, class_name=badge_cls)


def stage_detail_panel() -> rx.Component:
    return rx.el.div(
        # Header
        rx.el.div(
            rx.el.div(GenerationState.current_stage_title, class_name="panel-title"),
            _badge(),
            class_name="panel-header",
        ),
        # Body
        rx.el.div(
            rx.cond(
                GenerationState.current_stage_output != "",
                rx.el.pre(GenerationState.current_stage_output),
                rx.cond(
                    GenerationState.current_stage_status == "running",
                    rx.el.div(
                        rx.el.div("⟳", class_name="icon-large", style={"animation": "spin 2s linear infinite"}),
                        rx.el.p(GenerationState.current_stage_desc),
                        class_name="empty-state",
                    ),
                    rx.el.div(
                        rx.el.div("⬡", class_name="icon-large"),
                        rx.el.p("配置参数后点击 GENERATE 启动 Pipeline"),
                        class_name="empty-state",
                    ),
                ),
            ),
            class_name="panel-body",
        ),
        class_name="stage-panel",
    )
