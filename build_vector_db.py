"""
scripts/build_vector_db.py
导入 Galaxy API 数据到 ChromaDB 向量数据库

用法:
    python scripts/build_vector_db.py

前置条件:
    1. pip install chromadb sentence-transformers
    2. 将 galaxy_api.json 放在 database/ 目录下

会创建两个 collection:
    - galaxy_functions: Galaxy 函数 API
    - galaxy_presets:   Galaxy 预设值
"""

import json
import os
import sys
import time

# ── 配置 ──
API_FILE = os.environ.get("GALAXY_API_FILE", "database/galaxy_api.json")
CHROMA_DIR = os.environ.get("CHROMA_DIR", "chroma_db")
MODEL_NAME = "BAAI/bge-base-en-v1.5"
MODEL_CACHE = str(__import__("pathlib").Path.home() / ".smac_ast" / "models")

FUNCTION_FIELDS = [
    "title", "identifier", "description", "grammar", "flags",
    "return_type", "prototype", "raw_text", "detail_url",
]

PRESET_FIELDS = [
    "title", "base_type", "raw_text", "detail_url",
]


# ── 文本构造 ──

def build_function_text(entry: dict) -> str:
    param_lines = []
    for p in entry.get("parameters", []):
        param_lines.append(f"- {p['name']}: {p['type']}")
    param_block = "\n".join(param_lines) if param_lines else "(none)"

    return f"""Function: {entry.get('title', '')}
Identifier: {entry.get('identifier', '')}

Description:
{entry.get('description', '')}

Return Type:
{entry.get('return_type', '')}

Parameters:
{param_block}

Prototype:
{entry.get('prototype', '')}""".strip()


def build_preset_text(entry: dict) -> str:
    value_lines = []
    for v in entry.get("values", []):
        value_lines.append(
            f"- {v.get('name')} (identifier: {v.get('identifier')}, code: {v.get('code')})"
        )
    value_block = "\n".join(value_lines) if value_lines else "(none)"

    return f"""Preset: {entry.get('title', '')}

Base Type: {entry.get('base_type', '')}

Values:
{value_block}""".strip()


# ── 主逻辑 ──

def main():
    # 检查数据文件
    if not os.path.exists(API_FILE):
        print(f"❌ 数据文件不存在: {API_FILE}")
        print(f"   请将 galaxy_api.json 放到 {os.path.dirname(API_FILE) or '.'} 目录下")
        sys.exit(1)

    print(f"📂 数据文件: {API_FILE}")
    print(f"📂 向量库目录: {CHROMA_DIR}")
    print()

    # 加载数据
    with open(API_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    function_entries = [e for e in data if e.get("entry_type") == "function"]
    preset_entries = [e for e in data if e.get("entry_type") == "preset"]
    print(f"📊 函数条目: {len(function_entries)}")
    print(f"📊 预设条目: {len(preset_entries)}")
    print()

    # 加载 embedding 模型
    print(f"🔄 加载 embedding 模型: {MODEL_NAME}")
    t0 = time.time()
    from sentence_transformers import SentenceTransformer
    model = SentenceTransformer(MODEL_NAME, cache_folder=MODEL_CACHE)
    print(f"   ✅ 模型加载完成 ({time.time() - t0:.1f}s)")
    print()

    # 初始化 ChromaDB
    import chromadb
    from chromadb.config import Settings

    os.makedirs(CHROMA_DIR, exist_ok=True)
    chroma = chromadb.Client(
        Settings(
            persist_directory=CHROMA_DIR,
            anonymized_telemetry=False,
            is_persistent=True,
        )
    )

    # ── 导入 galaxy_functions ──
    if function_entries:
        print("🔧 构建 galaxy_functions collection...")
        if "galaxy_functions" in [c.name for c in chroma.list_collections()]:
            chroma.delete_collection("galaxy_functions")
            print("   (已删除旧 collection)")

        col_func = chroma.create_collection("galaxy_functions")

        documents = []
        ids = []
        metadatas = []
        for e in function_entries:
            documents.append(build_function_text(e))
            ids.append(str(e["identifier"]))
            metadata = {}
            for k in FUNCTION_FIELDS:
                if k in e:
                    metadata[k] = str(e[k])  # ChromaDB metadata 只支持 str/int/float
            metadata["parameters"] = json.dumps(e.get("parameters", []))
            metadatas.append(metadata)

        print(f"   🔄 生成 {len(documents)} 个函数的 embeddings...")
        t0 = time.time()
        embeddings = model.encode(documents, normalize_embeddings=True)
        print(f"   ✅ Embeddings 完成 ({time.time() - t0:.1f}s)")

        col_func.add(
            documents=documents,
            embeddings=embeddings.tolist(),
            ids=ids,
            metadatas=metadatas,
        )
        print(f"   ✅ galaxy_functions: {col_func.count()} 条已导入")
        print()

    # ── 导入 galaxy_presets ──
    if preset_entries:
        print("🔧 构建 galaxy_presets collection...")
        if "galaxy_presets" in [c.name for c in chroma.list_collections()]:
            chroma.delete_collection("galaxy_presets")
            print("   (已删除旧 collection)")

        col_preset = chroma.create_collection("galaxy_presets")

        documents = []
        ids = []
        metadatas = []
        for e in preset_entries:
            documents.append(build_preset_text(e))
            ids.append(str(e["title"]))
            metadata = {}
            for k in PRESET_FIELDS:
                if k in e:
                    metadata[k] = str(e[k])
            metadata["values"] = json.dumps(e.get("values", []))
            metadatas.append(metadata)

        print(f"   🔄 生成 {len(documents)} 个预设的 embeddings...")
        t0 = time.time()
        embeddings = model.encode(documents, normalize_embeddings=True)
        print(f"   ✅ Embeddings 完成 ({time.time() - t0:.1f}s)")

        col_preset.add(
            documents=documents,
            embeddings=embeddings.tolist(),
            ids=ids,
            metadatas=metadatas,
        )
        print(f"   ✅ galaxy_presets: {col_preset.count()} 条已导入")
        print()

    # 验证
    print("=" * 50)
    print("📋 验证结果:")
    for c in chroma.list_collections():
        print(f"   {c.name}: {c.count()} documents")
    print()
    print("✅ 向量数据库构建完成！")


if __name__ == "__main__":
    main()
