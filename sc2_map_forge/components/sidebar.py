"""
sc2_map_forge/components/sidebar.py
侧边栏 — 使用 rx.el + class_name 精确还原原始 HTML 样式
"""

import reflex as rx

from ..constants import STRATAGEMS, RACES
from ..states.generation_state import GenerationState


def _section(title: str, *children) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.span(class_name="dot"),
            title,
            class_name="section-header",
        ),
        rx.el.div(*children, class_name="section-body"),
        class_name="section",
    )


def _label(text: str) -> rx.Component:
    return rx.el.label(text, class_name="form-label")


def mode_toggle() -> rx.Component:
    return rx.el.div(
        rx.el.button(
            "MACRO",
            on_click=GenerationState.set_mode("macro"),
            class_name=rx.cond(GenerationState.mode == "macro", "mode-btn active", "mode-btn"),
        ),
        rx.el.button(
            "MICRO",
            on_click=GenerationState.set_mode("micro"),
            class_name=rx.cond(GenerationState.mode == "micro", "mode-btn active", "mode-btn"),
        ),
        class_name="mode-toggle",
    )


def stratagem_select() -> rx.Component:
    items = [s["label"] for s in STRATAGEMS if s["value"]]
    return rx.select(
        items,
        placeholder="— 请选择计策 —",
        on_change=GenerationState.set_stratagem_by_label,
        width="100%",
        class_name="form-select",
    )


def scenario_section() -> rx.Component:
    return rx.cond(
        GenerationState.is_macro,
        _section(
            "SCENARIO INPUT",
            rx.el.div(
                _label("Stratagem (三十六计)"),
                stratagem_select(),
                style={"margin_bottom": "14px"},
            ),
            rx.el.div(
                rx.el.textarea(
                    placeholder="描述你想生成的场景，例如 'A defensive position with siege tanks on high ground against Zerg ground assault...'",
                    value=GenerationState.strategy_text,
                    on_change=GenerationState.set_strategy_text,
                    class_name="form-textarea",
                ),
            ),
        ),
    )


def _player_chip(race: str) -> rx.Component:
    return rx.el.button(
        race,
        on_click=GenerationState.toggle_player_race(race),
        class_name=rx.cond(
            GenerationState.player_race == race,
            "race-chip selected",
            "race-chip",
        ),
    )


def _enemy_chip(race: str) -> rx.Component:
    return rx.el.button(
        race,
        on_click=GenerationState.toggle_enemy_race(race),
        class_name=rx.cond(
            GenerationState.enemy_race == race,
            "race-chip selected",
            "race-chip",
        ),
    )


def constraints_section() -> rx.Component:
    return _section(
        "CONSTRAINTS",
        rx.el.div(
            _label("Player Race"),
            rx.el.div(
                *[_player_chip(r) for r in RACES],
                class_name="race-grid",
            ),
        ),
        rx.el.div(
            _label("Enemy Race"),
            rx.el.div(
                *[_enemy_chip(r) for r in RACES],
                class_name="race-grid",
            ),
        ),
        rx.el.div(
            _label("Player Unit Count"),
            rx.el.input(
                type="number",
                value=GenerationState.player_unit_count.to(str),
                on_change=GenerationState.set_player_count,
                class_name="form-input",
                placeholder="e.g., 10",
            ),
        ),
        rx.el.div(
            _label("Enemy Unit Count"),
            rx.el.input(
                type="number",
                value=GenerationState.enemy_unit_count.to(str),
                on_change=GenerationState.set_enemy_count,
                class_name="form-input",
                placeholder="e.g., 10",
            ),
        ),
    )


def terrain_section() -> rx.Component:
    return _section(
        "TERRAIN",
        rx.el.div(
            rx.upload(
                rx.el.div(
                    rx.cond(
                        GenerationState.uploaded_filename != "",
                        rx.el.div(
                            rx.el.div(
                                "✓ ",
                                GenerationState.uploaded_filename,
                                style={"color": "var(--accent-green)", "font_size": "13px", "font_weight": "600"},
                            ),
                            rx.el.div("点击替换", style={"font_size": "12px", "color": "var(--text-muted)", "margin_top": "4px"}),
                        ),
                        rx.el.div(
                            rx.el.div("⬡", style={"font_size": "28px", "opacity": "0.5"}),
                            rx.el.div("点击上传 .SC2Map 文件", style={"font_size": "13px", "color": "var(--text-muted)"}),
                        ),
                    ),
                    style={"text_align": "center", "padding": "20px"},
                ),
                id="terrain_upload",
                on_drop=GenerationState.handle_upload(  # type: ignore
                    rx.upload_files(upload_id="terrain_upload")
                ),
                border="none",
                padding="0",
            ),
            class_name=rx.cond(
                GenerationState.uploaded_filename != "",
                "file-upload has-file",
                "file-upload",
            ),
        ),
    )


def generate_button() -> rx.Component:
    return rx.el.button(
        rx.cond(
            GenerationState.is_generating,
            rx.hstack(rx.spinner(size="1"), rx.text("GENERATING..."), spacing="2", align="center"),
            rx.text("▶ GENERATE"),
        ),
        on_click=GenerationState.start_generation,
        disabled=GenerationState.is_generating,
        class_name="generate-btn",
    )


def sidebar() -> rx.Component:
    return rx.el.div(
        mode_toggle(),
        scenario_section(),
        constraints_section(),
        terrain_section(),
        generate_button(),
        class_name="sidebar",
    )
