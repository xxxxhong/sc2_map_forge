"""
sc2_map_forge/pages/api_config_page.py
API 提供商配置页面 — rx.el + class_name
"""

import reflex as rx

from ..components.header import header, top_tabs
from ..constants import API_PROVIDERS
from ..states.config_state import ConfigState


def _provider_radio(provider: dict) -> rx.Component:
    """单个 provider radio 选项"""
    key = provider["key"]
    return rx.el.label(
        rx.el.input(
            type="radio",
            name="defaultProvider",
            value=key,
            checked=ConfigState.default_provider == key,
            on_change=ConfigState.set_default_provider(key),
        ),
        provider["name"],
        class_name="provider-radio",
    )


def _provider_card(provider: dict) -> rx.Component:
    key = provider["key"]
    color = provider["color"]
    is_active = ConfigState.default_provider == key

    return rx.el.div(
        # Header
        rx.el.div(
            rx.el.span(
                class_name="provider-dot",
                style=rx.cond(
                    is_active,
                    {"background": color, "box_shadow": f"0 0 8px {color}"},
                    {"background": "var(--text-muted)"},
                ),
            ),
            provider["name"],
            class_name="provider-card-header",
        ),
        # Body
        rx.el.div(
            rx.el.div(
                rx.el.label("API KEY", class_name="form-label"),
                rx.el.input(
                    type="password",
                    placeholder="sk-...",
                    on_change=ConfigState.update_provider_apikey(key),
                    class_name="form-input",
                ),
            ),
            rx.el.div(
                rx.el.label("BASE URL", class_name="form-label"),
                rx.el.input(
                    default_value=provider["default_base_url"],
                    on_change=ConfigState.update_provider_baseurl(key),
                    class_name="form-input",
                ),
            ),
            rx.el.div(
                rx.el.label("模型名", class_name="form-label"),
                rx.el.input(
                    default_value=provider["default_model"],
                    on_change=ConfigState.update_provider_model(key),
                    class_name="form-input",
                ),
            ),
            class_name="provider-card-body",
        ),
        class_name=rx.cond(is_active, "provider-card provider-active", "provider-card"),
    )


def api_config_page() -> rx.Component:
    return rx.el.div(
        header(),
        top_tabs(active="api"),
        rx.el.div(
            rx.el.div("API 提供商设置", class_name="config-page-title"),
            rx.el.div("配置后点击保存，下次启动自动加载。", class_name="config-page-desc"),

            # Defaults card
            rx.el.div(
                rx.el.div("默认提供商", class_name="card-label"),

                # Radio group (matches original HTML)
                rx.el.div(
                    *[_provider_radio(p) for p in API_PROVIDERS],
                    class_name="provider-radio-group",
                ),

                # Temperature slider
                rx.el.div(
                    rx.el.div(
                        rx.el.span("TEMPERATURE", class_name="slider-label"),
                        rx.el.div(
                            rx.el.input(
                                value=ConfigState.temperature.to(str),
                                on_change=ConfigState.set_temperature,
                                class_name="form-input",
                                style={"width": "64px", "text_align": "center", "padding": "4px 8px"},
                            ),
                            rx.el.button(
                                "↻",
                                on_click=ConfigState.reset_temperature,
                                class_name="slider-reset",
                                title="Reset",
                            ),
                            class_name="slider-value-box",
                        ),
                        class_name="slider-header",
                    ),
                    rx.el.div(
                        rx.el.span("0", class_name="range-label"),
                        rx.slider(
                            value=[ConfigState.temperature],
                            min=0, max=2, step=0.1,
                            on_change=ConfigState.set_temperature_from_slider,
                            width="100%",
                            color_scheme="blue",
                        ),
                        rx.el.span("2", class_name="range-label"),
                        class_name="slider-track-wrapper",
                    ),
                    class_name="slider-group",
                ),

                # Max Tokens slider
                rx.el.div(
                    rx.el.div(
                        rx.el.span("MAX TOKENS", class_name="slider-label"),
                        rx.el.div(
                            rx.el.input(
                                value=ConfigState.max_tokens.to(str),
                                on_change=ConfigState.set_max_tokens,
                                class_name="form-input",
                                style={"width": "80px", "text_align": "center", "padding": "4px 8px"},
                            ),
                            rx.el.button(
                                "↻",
                                on_click=ConfigState.reset_max_tokens,
                                class_name="slider-reset",
                                title="Reset",
                            ),
                            class_name="slider-value-box",
                        ),
                        class_name="slider-header",
                    ),
                    rx.el.div(
                        rx.el.span("512", class_name="range-label"),
                        rx.slider(
                            value=[ConfigState.max_tokens],
                            min=512, max=16384, step=1,
                            on_change=ConfigState.set_max_tokens_from_slider,
                            width="100%",
                            color_scheme="blue",
                        ),
                        rx.el.span("16384", class_name="range-label"),
                        class_name="slider-track-wrapper",
                    ),
                    class_name="slider-group",
                ),
                class_name="api-defaults-card",
            ),

            # Provider cards grid
            rx.el.div(
                *[_provider_card(p) for p in API_PROVIDERS],
                class_name="provider-cards",
            ),

            # Save button
            rx.el.button(
                "💾 保存 API 配置",
                on_click=ConfigState.save_api_config,
                class_name="save-btn",
            ),
            rx.cond(
                ConfigState.api_save_msg != "",
                rx.el.div(
                    ConfigState.api_save_msg,
                    style={"font_size": "13px", "color": "var(--accent-blue)", "margin_top": "12px"},
                ),
            ),

            class_name="config-page",
        ),
        on_mount=ConfigState.on_load,
    )
