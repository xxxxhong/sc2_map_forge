"""
sc2_map_forge/components/output_panels.py
输出面板 — rx.el + class_name
"""

import reflex as rx

from ..states.generation_state import GenerationState


def _card(dot_cls: str, title: str, body_content: rx.Component) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.div(
                rx.el.span(class_name=f"out-dot {dot_cls}"),
                title,
                class_name="output-title",
            ),
            class_name="output-card-header",
        ),
        rx.el.div(body_content, class_name="output-card-body"),
        class_name="output-card",
    )


def sc2map_card() -> rx.Component:
    body = rx.cond(
        GenerationState.map_ready,
        rx.el.div(
            rx.el.div("⬡", class_name="sc2map-icon"),
            rx.el.div(
                rx.el.div(GenerationState.uploaded_filename, style={"font_size": "14px", "font_weight": "700", "color": "var(--text-primary)"}),
                rx.el.div("包含 MapScript.galaxy · 就绪", style={"font_size": "12px", "color": "var(--text-muted)"}),
                rx.el.div(
                    "📁 ",
                    GenerationState.output_dir,
                    style={"font_size": "11px", "color": "var(--accent-cyan)", "margin_top": "8px", "word_break": "break-all"},
                ),
                style={"text_align": "center"},
            ),
            rx.el.button(
                "⬇ 查看输出目录",
                on_click=GenerationState.download_all,
                class_name="sc2map-download-btn",
            ),
            class_name="sc2map-download-area",
        ),
        rx.el.div(
            rx.el.div("⬡", class_name="out-icon"),
            rx.el.p("生成完成后可下载 .SC2Map 文件"),
            class_name="output-empty",
        ),
    )
    return _card("sc2map", "SC2MAP 文件", body)


def galaxy_card() -> rx.Component:
    body = rx.cond(
        GenerationState.galaxy_code != "",
        rx.el.pre(GenerationState.galaxy_code),
        rx.el.div(
            rx.el.div("{ }", class_name="out-icon"),
            rx.el.p("Galaxy 脚本代码预览"),
            class_name="output-empty",
        ),
    )
    return _card("galaxy", "Galaxy 脚本", body)


def python_card() -> rx.Component:
    body = rx.cond(
        GenerationState.python_code != "",
        rx.el.pre(GenerationState.python_code),
        rx.el.div(
            rx.el.div("🐍", class_name="out-icon"),
            rx.el.p("Python 环境代码预览"),
            class_name="output-empty",
        ),
    )
    return _card("python", "Python ENV", body)


def output_panels() -> rx.Component:
    return rx.el.div(
        sc2map_card(),
        galaxy_card(),
        python_card(),
        class_name="output-panels",
    )
