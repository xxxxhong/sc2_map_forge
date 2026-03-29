// checker.js — 带完整原生库加载的 Galaxy 脚本诊断工具
const path = require('path');
const fs = require('fs');
const { Store, createTextDocument, createTextDocumentFromFs } = require('E:/plaxtony/lib/src/service/store');
const { DiagnosticsProvider } = require('E:/plaxtony/lib/src/service/diagnostics');
const { TypeChecker } = require('E:/plaxtony/lib/src/compiler/checker');
const { SC2Archive, openArchiveWorkspace } = require('E:/plaxtony/lib/src/sc2mod/archive');

// SC2GameData 仓库的根目录（克隆下来的 SC2Mapster/SC2GameData）
// 该目录下必须存在 mods/core.sc2mod/ 子目录
const SC2_DATA_PATH = 'E:/SC2GameData-master/SC2GameData-master';

// 待检查的 Galaxy 脚本文件路径
// 也可以直接把代码写成字符串赋给 testCode
const SCRIPT_FILE = 'E:/plaxtony/checker-service/20260304-230028.galaxy';
const testCode = fs.readFileSync(SCRIPT_FILE, 'utf8');

async function main() {
    const store = new Store();

    // ① 直接把 core.sc2mod 作为根 Archive
    //    core.sc2mod 是最基础的依赖，plaxtony 内部硬编码了它的依赖层级
    //    不需要 DocumentInfo 文件，allArchives 会正确展开
    const rootArchive = new SC2Archive(
        'mods/core.sc2mod',
        path.join(SC2_DATA_PATH, 'mods/core.sc2mod')
    );

    // ② modSources 告诉 plaxtony 去哪里查找其他 mod（liberty/swarm/void 等）
    const modSources = [SC2_DATA_PATH];

    // ③ 解析完整依赖链，allArchives 展开后包含 core.sc2mod 及其所有上层依赖
    console.log('正在解析 SC2 依赖链，请稍候...');
    const workspace = await openArchiveWorkspace(rootArchive, modSources);
    console.log(`依赖链解析完成，共 ${workspace.allArchives.length} 个 archive：`);
    workspace.allArchives.forEach(a => console.log(`  - ${a.name}`));

    // ④ 将工作区注册到 Store，后续的 include 路径解析依赖此映射
    await store.updateS2Workspace(workspace);

    // ⑤ 把所有 archive 里的 .galaxy 文件全部加载进 Store
    //    NativeLib.galaxy、GameLib.galaxy 等原生函数声明都在这里注入
    //    没有这一步，UnitCreate / TriggerCreate 等符号全部会报 Undeclared
    console.log('\n正在加载原生库 .galaxy 文件...');
    let totalLoaded = 0;
    for (const archive of workspace.allArchives) {
        const galaxyFiles = await archive.findFiles('**/*.galaxy');
        for (const relPath of galaxyFiles) {
            const absPath = path.join(archive.directory, relPath);
            store.updateDocument(createTextDocumentFromFs(absPath));
            totalLoaded++;
        }
    }
    console.log(`共加载 ${totalLoaded} 个 .galaxy 文件，store.documents 大小: ${store.documents.size}`);

    // 快速验证核心符号是否已注册
    const sym = store.resolveGlobalSymbol('UnitCreate');
    console.log(`UnitCreate 符号: ${sym ? '找到 ✅' : '未找到 ❌'}`);

    // ⑥ 把待检查的目标文件加载进 Store
    //    URI 使用与 workspace 路径匹配的格式，确保 include 解析正常
    const uri = 'file:///' + SCRIPT_FILE.replace(/\\/g, '/').replace(/^\//, '');
    const textDoc = createTextDocument(uri, testCode);
    store.updateDocument(textDoc);
    const sourceFile = store.documents.get(uri);

    if (!sourceFile) {
        console.error('❌ 目标文件加载失败，请检查路径');
        process.exit(1);
    }

    // ⑦ 语法诊断：由 DiagnosticsProvider 检查解析阶段产生的错误
    const diagProvider = new DiagnosticsProvider();
    diagProvider.store = store;
    const syntaxDiags = diagProvider.provideDiagnostics(uri);

    // ⑧ 语义诊断：由 TypeChecker 做符号解析、类型检查等
    const checker = new TypeChecker(store);
    const semanticDiags = checker.checkSourceFile(sourceFile, true);

    // 将诊断位置从字符偏移量转换为行列号
    function offsetToLineCol(offset) {
        const pos = textDoc.positionAt(offset);
        return { line: pos.line + 1, col: pos.character + 1 };
    }

    // 输出语法诊断结果
    console.log('\n=== 语法诊断 ===');
    if (syntaxDiags.length === 0) {
        console.log('✅ 无语法问题');
    } else {
        syntaxDiags.forEach(d => {
            const sev = d.severity === 1 ? '❌ error' : '⚠️  warning';
            console.log(`${sev}  Line ${d.range.start.line + 1}:${d.range.start.character + 1}  ${d.message}`);
        });
    }

    // 输出语义诊断结果
    console.log('\n=== 语义诊断 ===');
    if (semanticDiags.length === 0) {
        console.log('✅ 无语义问题');
    } else {
        semanticDiags.forEach(d => {
            const { line, col } = offsetToLineCol(d.start);
            const sev = d.category === 1 ? '❌ error' : '⚠️  warning';
            const msg = typeof d.messageText === 'string'
                ? d.messageText
                : d.messageText.messageText;
            console.log(`${sev}  Line ${line}:${col}  ${msg}`);
        });
    }
}

main().catch(console.error);