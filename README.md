# SMAC-AST — StarCraft Multi-Agent Challenge 自动化场景生成器

基于 Python Reflex 框架的模块化 Web 应用，用于自动生成星际争霸 II 地图场景。

## 项目结构

```
sc2_map_forge/
├── rxconfig.py                         # Reflex 配置
├── requirements.txt                    # Python 依赖
├── assets/                             # 静态资源
│
├── sc2_map_forge/                      # 主包
│   ├── __init__.py
│   ├── sc2_map_forge.py               # 🔹 应用入口 (路由注册)
│   ├── style.py                       # 🎨 全局样式常量
│   ├── constants.py                   # 📋 静态数据 (三十六计、提供商、Pipeline阶段)
│   │
│   ├── services/                      # 🔧 业务逻辑层
│   │   └── __init__.py               #    LLM 调用、Pipeline 流程 (对接原 generate.py)
│   │
│   ├── states/                        # 📦 状态管理层
│   │   ├── __init__.py
│   │   ├── generation_state.py       #    生成页面状态 (模式/种族/上传/Pipeline)
│   │   └── config_state.py           #    API 配置 & 路径配置状态
│   │
│   ├── components/                    # 🧩 UI 组件层
│   │   ├── __init__.py
│   │   ├── header.py                 #    顶部 Header + Tab 导航
│   │   ├── sidebar.py                #    侧边栏 (模式/计策/约束/上传/生成按钮)
│   │   ├── pipeline.py               #    Pipeline 阶段可视化 + 详情面板
│   │   └── output_panels.py          #    输出面板 (SC2Map/Galaxy/Python)
│   │
│   └── pages/                         # 📄 页面层
│       ├── __init__.py
│       ├── generate_page.py          #    主页面 — 地图生成
│       ├── api_config_page.py        #    API 提供商配置
│       └── path_config_page.py       #    文件路径配置
```

## 架构说明

```
┌─────────────────────────────────────────────────┐
│                   pages/                         │
│   generate_page  │  api_config_page  │  path_*   │   ← 页面组合组件
├─────────────────────────────────────────────────┤
│               components/                        │
│  header │ sidebar │ pipeline │ output_panels      │   ← 可复用 UI 组件
├─────────────────────────────────────────────────┤
│                states/                           │
│      generation_state  │  config_state           │   ← Reflex 响应式状态
├─────────────────────────────────────────────────┤
│               services/                          │
│   LLM 客户端  │  Pipeline 四阶段逻辑             │   ← 纯 Python 业务逻辑
├─────────────────────────────────────────────────┤
│        style.py  │  constants.py                 │   ← 共享配置
└─────────────────────────────────────────────────┘
```

### 各层职责

| 层         | 职责                               | 对应原 HTML 部分       |
|------------|------------------------------------|-----------------------|
| `pages/`   | 组合组件，定义路由                 | 三个 `<div class="page">` |
| `components/` | 可复用 UI 单元                 | 各 HTML section/div    |
| `states/`  | 响应式状态 + 事件处理              | JS 全局变量 + 函数     |
| `services/`| LLM 调用、Pipeline 执行            | 原 `generate.py`       |
| `style.py` | CSS 变量 → Python 常量             | `:root { --xxx }`      |
| `constants.py` | 三十六计、提供商等静态数据      | JS 中的 `STRATAGEMS` 等 |

## 快速启动

```bash
# 1. 安装依赖
pip install -r requirements.txt

# 2. 初始化 Reflex (首次)
reflex init

# 3. 启动开发服务器
reflex run
```

打开 http://localhost:3000 即可使用。

## 与原 generate.py 的对接

`services/__init__.py` 中封装了原始的四阶段生成流程:

1. **run_stage_planning** → 对应 `generate_scenario_plan()`
2. **run_stage_api_query** → 对应 `generate_api_queries()`
3. **run_stage_api_lib** → 对应 `build_api_lib()`
4. **run_stage_codegen** → 对应 `generate_map()`

如果你的项目已有 `prompts.py`、`requirements.py`、`utils.py`，
可以在 `services/__init__.py` 中导入它们替换当前的占位 prompt。

## 多提供商支持

支持 DeepSeek / OpenAI / Anthropic / GLM / Qwen / MiniMax，
在 API 配置页面设置 Key、Base URL、模型名，选择默认提供商即可。
配置会保存到 `smac_ast_config.json`，下次启动自动加载。
