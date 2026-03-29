"""
sc2_map_forge/services/llm_service.py
封装大模型调用逻辑 — 对接原始 generate.py 的流程
支持多提供商(OpenAI-compatible / Anthropic)
"""

from __future__ import annotations

import json
import os
import shutil
import subprocess
import time
from dataclasses import dataclass, field
from typing import Optional

# ── 类型定义 ──


@dataclass
class ProviderConfig:
    """单个提供商配置"""
    key: str
    api_key: str = ""
    base_url: str = ""
    model: str = ""


@dataclass
class GenerationConfig:
    """一次生成任务的完整参数"""
    mode: str = "macro"  # "macro" | "micro"
    strategy: str = ""
    stratagem: str = ""
    player_race: Optional[str] = None
    enemy_race: Optional[str] = None
    player_unit_count: int = 10
    enemy_unit_count: int = 10
    terrain_file_path: Optional[str] = None
    temperature: float = 1.0
    max_tokens: int = 8096


@dataclass
class StageResult:
    """单个阶段的输出"""
    stage_key: str
    status: str = "waiting"  # "waiting" | "running" | "done" | "error"
    output: str = ""
    error: str = ""


@dataclass
class GenerationResult:
    """完整生成结果"""
    stages: list[StageResult] = field(default_factory=list)
    galaxy_code: str = ""
    python_code: str = ""
    map_path: str = ""


# ── LLM 客户端工厂 ──

import logging

logger = logging.getLogger(__name__)


def create_llm_client(provider: ProviderConfig):
    """
    创建 OpenAI 兼容客户端。
    依赖: pip install openai
    """
    try:
        from openai import OpenAI
        return OpenAI(
            api_key=provider.api_key,
            base_url=provider.base_url,
            timeout=180,  # 3 分钟超时，避免无限等待
        )
    except ImportError:
        raise RuntimeError("请先安装 openai: pip install openai")


def call_llm(
    client,
    model: str,
    prompt: str,
    temperature: float = 1.0,
    max_tokens: int = 8096,
) -> str:
    """
    通用 LLM 调用，返回纯文本响应。
    """
    logger.info(f"[LLM] 调用 model={model}, prompt长度={len(prompt)}, max_tokens={max_tokens}")
    try:
        response = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            temperature=temperature,
            max_tokens=max_tokens,
            stream=False,
        )
        content = response.choices[0].message.content
        logger.info(f"[LLM] 返回 {len(content)} 字符")
        return content
    except Exception as e:
        logger.error(f"[LLM] 调用失败: {e}")
        raise


# ── 生成流程 (对应原 generate.py 的四个阶段) ──


def run_stage_planning(
    client,
    model: str,
    config: GenerationConfig,
    terrain_xml: str,
) -> str:
    """
    阶段 1: 场景规划
    对接原始 generate_scenario_plan()
    """
    constraints = []
    if config.player_race:
        constraints.append(f"Player Race: {config.player_race}")
    if config.enemy_race:
        constraints.append(f"Enemy Race: {config.enemy_race}")
    constraints.append(
        f"Unit Count: approximately {config.player_unit_count} "
        f"player units and {config.enemy_unit_count} enemy units"
    )

    constraint_text = "\n".join(f"- {c}" for c in constraints)

    # 这里可以替换为你原项目的 PROMPTS_ROLE/PROMPTS_TASK 模板
    prompt = f"""You are a StarCraft II scenario designer.

Design a detailed battle scenario based on the following:

1. Strategy/Stratagem: {config.stratagem or config.strategy or '(auto-generate)'}

2. Terrain XML:
{terrain_xml[:2000]}

3. Constraints:
{constraint_text}

Output a structured scenario plan including:
- Force composition for both sides
- Positioning and phases
- Victory/defeat conditions
- Terrain utilization notes
"""
    return call_llm(client, model, prompt, config.temperature, config.max_tokens)


def run_stage_api_query(client, model: str, plan: str, config: GenerationConfig) -> list[str]:
    """
    阶段 2: API 查询生成
    对接原始 generate_api_queries()
    """
    prompt = f"""Based on this scenario plan, generate a JSON array of search queries
to find the Galaxy API functions needed to implement it.

Plan:
{plan}

Return ONLY a JSON array of strings, e.g.:
["create units with facing direction", "issue attack order to unit group", ...]
"""
    raw = call_llm(client, model, prompt, config.temperature, config.max_tokens)
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        # 尝试提取 JSON
        import re
        match = re.search(r"\[.*\]", raw, re.DOTALL)
        if match:
            return json.loads(match.group())
        return [raw]


def run_stage_api_lib(queries: list[str]) -> str:
    """
    阶段 3: API 库构建
    对接原始 build_api_lib() — 需要 ChromaDB 和嵌入模型
    如果环境中没有这些依赖，返回占位文本
    """
    try:
        import chromadb
        from chromadb.config import Settings
        from sentence_transformers import SentenceTransformer

        DB_DIR = "chroma_db"
        chroma = chromadb.Client(
            Settings(
                persist_directory=DB_DIR,
                anonymized_telemetry=False,
                is_persistent=True,
            )
        )
        collection_func = chroma.get_collection("galaxy_functions")

        # 必选函数
        required_ids = [
            "libNtve_InitLib", "VisEnable", "Point",
            "libNtve_gf_CreateUnitsWithDefaultFacing",
            "UnitGroup", "UnitGroupCount", "UnitGroupIssueOrder",
            "OrderTargetingPoint", "AbilityCommand", "UnitGetType",
            "TriggerCreate", "TriggerAddEventMapInit",
            "TriggerAddEventUnitDied", "TriggerAddEventUnitRangePoint",
            "RegionEntireMap", "UnitFilter", "EventUnit",
        ]

        embedding_model = SentenceTransformer(
            "BAAI/bge-base-en-v1.5", cache_folder="models"
        )

        for q in queries:
            query_emb = embedding_model.encode(
                f"Represent this query for retrieving relevant Galaxy API functions: {q}"
            ).tolist()
            results = collection_func.query(
                query_embeddings=[query_emb], n_results=1
            )
            if results["ids"][0]:
                fid = results["ids"][0][0]
                if fid not in required_ids:
                    required_ids.append(fid)

        docs = collection_func.get(ids=required_ids)["documents"]
        return "\n\n".join(docs)

    except Exception:
        # 无 ChromaDB 时的占位
        lines = [f"[API Library - {len(queries)} queries matched]", ""]
        for i, q in enumerate(queries, 1):
            lines.append(f"  {i}. {q}")
        lines.append("\n(ChromaDB 未配置，显示查询摘要)")
        return "\n".join(lines)


def run_stage_codegen(
    client,
    model: str,
    plan: str,
    terrain_xml: str,
    api_lib: str,
    config: GenerationConfig,
) -> str:
    """
    阶段 4: Galaxy 脚本生成
    对接原始 generate_map()
    """
    prompt = f"""You are a Galaxy script programmer for StarCraft II maps.

Generate a complete MapScript.galaxy file based on:

1. Scenario Plan:
{plan}

2. Terrain:
{terrain_xml[:1500]}

3. Available API Functions:
{api_lib[:3000]}

Output ONLY the Galaxy script code. No explanation.
"""
    return call_llm(client, model, prompt, config.temperature, config.max_tokens)


# ── 完整流水线 ──


def run_full_pipeline(
    provider: ProviderConfig,
    config: GenerationConfig,
    terrain_xml: str = "",
    on_stage_update=None,
) -> GenerationResult:
    """
    执行完整四阶段流水线。
    on_stage_update(stage_index, status, output) 可用于推送进度。
    """
    result = GenerationResult(
        stages=[
            StageResult(stage_key="planning"),
            StageResult(stage_key="api_query"),
            StageResult(stage_key="api_lib"),
            StageResult(stage_key="codegen"),
        ]
    )

    client = create_llm_client(provider)

    def update(idx, status, output=""):
        result.stages[idx].status = status
        result.stages[idx].output = output
        if on_stage_update:
            on_stage_update(idx, status, output)

    try:
        # Stage 1
        update(0, "running")
        plan = run_stage_planning(client, provider.model, config, terrain_xml)
        update(0, "done", plan)

        # Stage 2
        update(1, "running")
        queries = run_stage_api_query(client, provider.model, plan, config)
        queries_text = json.dumps(queries, ensure_ascii=False, indent=2)
        update(1, "done", queries_text)

        # Stage 3
        update(2, "running")
        api_lib = run_stage_api_lib(queries)
        update(2, "done", api_lib)

        # Stage 4
        update(3, "running")
        galaxy_code = run_stage_codegen(
            client, provider.model, plan, terrain_xml, api_lib, config
        )
        update(3, "done", galaxy_code)

        result.galaxy_code = galaxy_code
        return result

    except Exception as e:
        # 标记当前运行阶段为错误
        for stage in result.stages:
            if stage.status == "running":
                stage.status = "error"
                stage.error = str(e)
                break
        return result
