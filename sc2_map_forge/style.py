"""
sc2_map_forge/style.py
全局样式常量 — 颜色、字体、渐变等
"""

# ── 色板 ──
BG_DEEP = "#0a0c14"
BG_PANEL = "#11141f"
BG_CARD = "#181c2a"
BG_INPUT = "#1e2235"
BORDER = "#2a2f45"
BORDER_GLOW = "#3b82f6"

ACCENT_BLUE = "#3b82f6"
ACCENT_CYAN = "#06b6d4"
ACCENT_PURPLE = "#8b5cf6"
ACCENT_ORANGE = "#f59e0b"
ACCENT_GREEN = "#10b981"
ACCENT_RED = "#ef4444"

TEXT_PRIMARY = "#e2e8f0"
TEXT_SECONDARY = "#94a3b8"
TEXT_MUTED = "#475569"

GRADIENT_BLUE = "linear-gradient(135deg, #3b82f6, #06b6d4)"
GRADIENT_PURPLE = "linear-gradient(135deg, #8b5cf6, #3b82f6)"

FONT_FAMILY = "'HarmonyOS Sans', 'Inter', system-ui, sans-serif"

# ── 通用样式字典 ──
base_page_style = {
    "background": BG_DEEP,
    "color": TEXT_PRIMARY,
    "font_family": FONT_FAMILY,
    "min_height": "100vh",
}

section_style = {
    "background": BG_CARD,
    "border": f"1px solid {BORDER}",
    "border_radius": "10px",
    "overflow": "visible",
}

section_header_style = {
    "padding": "12px 16px",
    "display": "flex",
    "align_items": "center",
    "gap": "8px",
    "border_bottom": f"1px solid {BORDER}",
    "font_size": "11px",
    "font_weight": "700",
    "letter_spacing": "2px",
    "color": TEXT_SECONDARY,
    "text_transform": "uppercase",
}

input_style = {
    "width": "100%",
    "padding": "10px 12px",
    "background": BG_INPUT,
    "border": f"1px solid {BORDER}",
    "border_radius": "8px",
    "color": TEXT_PRIMARY,
    "font_size": "14px",
    "outline": "none",
    "_focus": {
        "border_color": ACCENT_BLUE,
        "box_shadow": f"0 0 0 2px rgba(59,130,246,0.15)",
    },
}

generate_btn_style = {
    "width": "100%",
    "padding": "16px",
    "border": "none",
    "border_radius": "10px",
    "background": GRADIENT_BLUE,
    "color": "white",
    "font_size": "14px",
    "font_weight": "700",
    "letter_spacing": "3px",
    "cursor": "pointer",
    "_hover": {
        "box_shadow": "0 0 30px rgba(59,130,246,0.4)",
        "transform": "translateY(-1px)",
    },
}
