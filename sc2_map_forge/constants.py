"""
sc2_map_forge/constants.py
静态数据: 三十六计、API 提供商注册表、Pipeline 阶段定义
"""

# ── 三十六计 ──
STRATAGEMS: list[dict] = [
    {"value": "", "label": "— 请选择计策 —"},
    {"value": "瞒天过海", "label": "第一计 · 瞒天过海"},
    {"value": "围魏救赵", "label": "第二计 · 围魏救赵"},
    {"value": "借刀杀人", "label": "第三计 · 借刀杀人"},
    {"value": "以逸待劳", "label": "第四计 · 以逸待劳"},
    {"value": "趁火打劫", "label": "第五计 · 趁火打劫"},
    {"value": "声东击西", "label": "第六计 · 声东击西"},
    {"value": "无中生有", "label": "第七计 · 无中生有"},
    {"value": "暗度陈仓", "label": "第八计 · 暗度陈仓"},
    {"value": "隔岸观火", "label": "第九计 · 隔岸观火"},
    {"value": "笑里藏刀", "label": "第十计 · 笑里藏刀"},
    {"value": "李代桃僵", "label": "第十一计 · 李代桃僵"},
    {"value": "顺手牵羊", "label": "第十二计 · 顺手牵羊"},
    {"value": "打草惊蛇", "label": "第十三计 · 打草惊蛇"},
    {"value": "借尸还魂", "label": "第十四计 · 借尸还魂"},
    {"value": "调虎离山", "label": "第十五计 · 调虎离山"},
    {"value": "欲擒故纵", "label": "第十六计 · 欲擒故纵"},
    {"value": "抛砖引玉", "label": "第十七计 · 抛砖引玉"},
    {"value": "擒贼擒王", "label": "第十八计 · 擒贼擒王"},
    {"value": "釜底抽薪", "label": "第十九计 · 釜底抽薪"},
    {"value": "浑水摸鱼", "label": "第二十计 · 浑水摸鱼"},
    {"value": "金蝉脱壳", "label": "第二十一计 · 金蝉脱壳"},
    {"value": "关门捉贼", "label": "第二十二计 · 关门捉贼"},
    {"value": "远交近攻", "label": "第二十三计 · 远交近攻"},
    {"value": "假道伐虢", "label": "第二十四计 · 假道伐虢"},
    {"value": "偷梁换柱", "label": "第二十五计 · 偷梁换柱"},
    {"value": "指桑骂槐", "label": "第二十六计 · 指桑骂槐"},
    {"value": "假痴不癫", "label": "第二十七计 · 假痴不癫"},
    {"value": "上屋抽梯", "label": "第二十八计 · 上屋抽梯"},
    {"value": "树上开花", "label": "第二十九计 · 树上开花"},
    {"value": "反客为主", "label": "第三十计 · 反客为主"},
    {"value": "美人计", "label": "第三十一计 · 美人计"},
    {"value": "空城计", "label": "第三十二计 · 空城计"},
    {"value": "反间计", "label": "第三十三计 · 反间计"},
    {"value": "苦肉计", "label": "第三十四计 · 苦肉计"},
    {"value": "连环计", "label": "第三十五计 · 连环计"},
    {"value": "走为上", "label": "第三十六计 · 走为上"},
]

# ── API 提供商注册表 ──
API_PROVIDERS: list[dict] = [
    {
        "key": "deepseek",
        "name": "DeepSeek",
        "color": "#4ade80",
        "default_base_url": "https://api.deepseek.com",
        "default_model": "deepseek-chat",
    },
    {
        "key": "openai",
        "name": "OpenAI",
        "color": "#f59e0b",
        "default_base_url": "https://api.openai.com/v1",
        "default_model": "gpt-4o",
    },
    {
        "key": "anthropic",
        "name": "Anthropic",
        "color": "#8b5cf6",
        "default_base_url": "https://api.anthropic.com",
        "default_model": "claude-sonnet-4-20250514",
    },
    {
        "key": "glm",
        "name": "GLM (智谱)",
        "color": "#38bdf8",
        "default_base_url": "https://open.bigmodel.cn/api/paas/v4",
        "default_model": "glm-4-plus",
    },
    {
        "key": "qwen",
        "name": "Qwen (通义)",
        "color": "#f472b6",
        "default_base_url": "https://dashscope.aliyuncs.com/compatible-mode/v1",
        "default_model": "qwen-plus",
    },
    {
        "key": "minimax",
        "name": "MiniMax",
        "color": "#fb923c",
        "default_base_url": "https://api.minimax.chat/v1",
        "default_model": "MiniMax-Text-01",
    },
]

# ── Pipeline 阶段 ──
PIPELINE_STAGES: list[dict] = [
    {
        "key": "planning",
        "num": 1,
        "label": "PLANNING",
        "title": "STAGE 1 · SCENARIO PLANNING",
        "desc": "根据策略和地形生成场景设计方案…",
    },
    {
        "key": "api_query",
        "num": 2,
        "label": "API QUERY",
        "title": "STAGE 2 · API QUERY GENERATION",
        "desc": "从方案中提取所需的 API 查询…",
    },
    {
        "key": "api_lib",
        "num": 3,
        "label": "API LIB",
        "title": "STAGE 3 · API LIBRARY BUILD",
        "desc": "搜索并组装 Galaxy API 函数…",
    },
    {
        "key": "codegen",
        "num": 4,
        "label": "CODEGEN",
        "title": "STAGE 4 · MAP SCRIPT GENERATION",
        "desc": "生成 Galaxy 脚本并打包 .SC2Map…",
    },
]

RACES = ["Terran", "Protoss", "Zerg"]
