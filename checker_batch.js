// checker_batch.js — 批量检查指定文件夹下所有 .galaxy 文件的语法与语义错误
const path = require('path');
const fs = require('fs');
const { Store, createTextDocument, createTextDocumentFromFs } = require('E:/plaxtony/lib/src/service/store');
const { DiagnosticsProvider } = require('E:/plaxtony/lib/src/service/diagnostics');
const { TypeChecker } = require('E:/plaxtony/lib/src/compiler/checker');
const { SC2Archive, openArchiveWorkspace } = require('E:/plaxtony/lib/src/sc2mod/archive');

// SC2GameData 仓库的根目录
const SC2_DATA_PATH = 'E:/SC2GameData-master/SC2GameData-master';

// 待批量检查的文件夹路径
const TARGET_DIR = 'E:/SMAC_Auto-master/gen_history';

// 递归获取目录下所有 .galaxy 文件
function findGalaxyFiles(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findGalaxyFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.galaxy')) {
            results.push(fullPath);
        }
    }
    return results;
}

async function main() {
    // ① 初始化 Store 并加载 SC2 原生库（只做一次）
    const store = new Store();

    const rootArchive = new SC2Archive(
        'mods/core.sc2mod',
        path.join(SC2_DATA_PATH, 'mods/core.sc2mod')
    );
    const modSources = [SC2_DATA_PATH];

    console.log('正在解析 SC2 依赖链，请稍候...');
    const workspace = await openArchiveWorkspace(rootArchive, modSources);
    console.log(`依赖链解析完成，共 ${workspace.allArchives.length} 个 archive：`);
    workspace.allArchives.forEach(a => console.log(`  - ${a.name}`));

    await store.updateS2Workspace(workspace);

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
    console.log(`共加载 ${totalLoaded} 个原生库 .galaxy 文件`);

    const sym = store.resolveGlobalSymbol('UnitCreate');
    console.log(`UnitCreate 符号: ${sym ? '找到 ✅' : '未找到 ❌'}\n`);

    // ② 收集目标文件夹下所有 .galaxy 文件
    if (!fs.existsSync(TARGET_DIR)) {
        console.error(`❌ 目标目录不存在: ${TARGET_DIR}`);
        process.exit(1);
    }

    const targetFiles = findGalaxyFiles(TARGET_DIR);
    if (targetFiles.length === 0) {
        console.log('⚠️  目标目录下未找到任何 .galaxy 文件');
        process.exit(0);
    }
    console.log(`找到 ${targetFiles.length} 个 .galaxy 文件待检查\n`);
    console.log('='.repeat(60));

    // ③ 汇总统计
    let filesWithErrors = 0;
    let filesWithWarnings = 0;
    let filesClean = 0;
    const errorSummary = []; // { file, errors: [...] }

    // ④ 逐文件检查
    for (let i = 0; i < targetFiles.length; i++) {
        const filePath = targetFiles[i];
        const relName = path.relative(TARGET_DIR, filePath);
        console.log(`\n[${i + 1}/${targetFiles.length}] 检查: ${relName}`);

        let testCode;
        try {
            testCode = fs.readFileSync(filePath, 'utf8');
        } catch (e) {
            console.log(`  ❌ 读取文件失败: ${e.message}`);
            filesWithErrors++;
            continue;
        }

        const uri = 'file:///' + filePath.replace(/\\/g, '/').replace(/^\//, '');
        const textDoc = createTextDocument(uri, testCode);
        store.updateDocument(textDoc);
        const sourceFile = store.documents.get(uri);

        if (!sourceFile) {
            console.log('  ❌ 文件加载到 Store 失败');
            filesWithErrors++;
            continue;
        }

        // 语法诊断
        const diagProvider = new DiagnosticsProvider();
        diagProvider.store = store;
        const syntaxDiags = diagProvider.provideDiagnostics(uri);

        // 语义诊断
        const checker = new TypeChecker(store);
        const semanticDiags = checker.checkSourceFile(sourceFile, true);

        // 位置转换
        function offsetToLineCol(offset) {
            const pos = textDoc.positionAt(offset);
            return { line: pos.line + 1, col: pos.character + 1 };
        }

        const allDiags = [];

        // 输出语法诊断
        if (syntaxDiags.length > 0) {
            syntaxDiags.forEach(d => {
                const sev = d.severity === 1 ? 'error' : 'warning';
                const msg = `[语法] ${sev}  Line ${d.range.start.line + 1}:${d.range.start.character + 1}  ${d.message}`;
                allDiags.push({ sev, msg });
            });
        }

        // 输出语义诊断
        if (semanticDiags.length > 0) {
            semanticDiags.forEach(d => {
                const { line, col } = offsetToLineCol(d.start);
                const sev = d.category === 1 ? 'error' : 'warning';
                const msgText = typeof d.messageText === 'string'
                    ? d.messageText
                    : d.messageText.messageText;
                const msg = `[语义] ${sev}  Line ${line}:${col}  ${msgText}`;
                allDiags.push({ sev, msg });
            });
        }

        if (allDiags.length === 0) {
            console.log('  ✅ 无问题');
            filesClean++;
        } else {
            const hasError   = allDiags.some(d => d.sev === 'error');
            const hasWarning = allDiags.some(d => d.sev === 'warning');
            allDiags.forEach(d => {
                const icon = d.sev === 'error' ? '  ❌' : '  ⚠️ ';
                console.log(`${icon} ${d.msg}`);
            });
            if (hasError) {
                filesWithErrors++;
                errorSummary.push({ file: relName, diags: allDiags });
            } else if (hasWarning) {
                filesWithWarnings++;
            }
        }

        // 检查完后把该文件从 store 移除，避免符号污染下一个文件
        // removeDocument 内部会先调用 unbindSourceFile 解除符号绑定，
        // 再清理 qualifiedDocuments，最后才删 documents Map
        // 直接 store.documents.delete(uri) 会跳过 unbind，导致符号残留
        store.removeDocument(uri);
    }

    // ⑤ 汇总报告
    console.log('\n' + '='.repeat(60));
    console.log('📊 检查汇总');
    console.log('='.repeat(60));
    console.log(`  总文件数  : ${targetFiles.length}`);
    console.log(`  ✅ 无问题  : ${filesClean}`);
    console.log(`  ⚠️  仅警告  : ${filesWithWarnings}`);
    console.log(`  ❌ 有错误  : ${filesWithErrors}`);

    if (errorSummary.length > 0) {
        console.log('\n--- 有错误的文件列表 ---');
        errorSummary.forEach(({ file, diags }) => {
            const errCount = diags.filter(d => d.sev === 'error').length;
            const warnCount = diags.filter(d => d.sev === 'warning').length;
            console.log(`  ${file}  (${errCount} error, ${warnCount} warning)`);
        });
    }
}

main().catch(console.error);
