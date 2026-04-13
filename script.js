/* ============================================================
   SPECTRA — interactions
   ============================================================ */

// ============================================================
// i18n — translations
// ============================================================
const translations = {
  en: {
    // Nav
    'nav-ethos':       'Ethos',
    'nav-features':    'Features',
    'nav-diagnostics': 'Diagnostics',
    'nav-legacy':      'Legacy',
    'nav-download':    'Download',
    'nav-donate':      'Donate',

    // Hero
    'hero-title':       'The Swiss<br/>Army Knife<br/><span class="accent">of crypto<br/>wallets.</span>',
    'hero-sub':         'Hold. Send. Stake. Recover.<br/>No trading. No swaps. No "buy with credit card."<br/>No surface area for thieves to crawl through.',
    'hero-btn-download':'Download Spectra',
    'hero-btn-manual':  'Read the manual →',
    'hero-stat-1':      'servers between you and the chain',
    'hero-stat-2':      'legacy wallet formats supported',
    'hero-stat-3':      'themes &amp; plugins',
    'hero-stat-4':      'job: protect your money',

    // Ethos
    'ethos-label':     '/ 01 — ETHOS',
    'ethos-h2':        'Crypto was meant to be a <span class="strike">casino</span> <span class="accent">tool.</span>',
    'ethos-p1':        'Somewhere along the way, wallets became casinos. They sprouted swap buttons, credit-card on-ramps, NFT galleries, yield farms, and "trending tokens" carousels designed to make you trade until you bleed.',
    'ethos-p2':        'Each of those features is also a door. A door for a phishing site. A door for a malicious contract. A door for a hacker who only needs you to click once. We slammed every one of those doors shut.',
    'ethos-p3':        'Spectra holds your coins. It sends your coins. It stakes your coins. It recovers your coins when something goes wrong. That is the entire job.',
    'ethos-is-title':  'What Spectra is',
    'ethos-is-1':      'A wallet to hold',
    'ethos-is-2':      'A tool for payment',
    'ethos-is-3':      'A staking client',
    'ethos-is-4':      'A recovery toolkit',
    'ethos-is-5':      'Open source. Auditable. Reproducible.',
    'ethos-not-title': 'What Spectra is not',
    'ethos-not-1':     'An exchange',
    'ethos-not-2':     'A DEX aggregator',
    'ethos-not-3':     'A "yield optimizer"',
    'ethos-not-4':     'A meme-token launcher',
    'ethos-not-5':     'A get-rich-quick machine',

    // Multi-chain
    'mc-label':   '/ MULTI-CHAIN',
    'mc-title':   'One wallet.<br/><span class="accent">Every chain.</span>',
    'mc-lead':    'Spectra speaks every major chain natively — no bridges, no wrapped assets, no third-party plugins. Each network runs in its own isolated keyring so a compromise on one chain can never touch another.',
    'mc-more':    '+ 40 more',
    'mc-p1-num':  'Isolated',
    'mc-p1-desc': 'Every chain lives in its own keyring. A key leak on one network is contained — it cannot cascade to others.',
    'mc-p2-num':  'Native',
    'mc-p2-desc': 'No wrapped tokens, no cross-chain bridges, no third-party plugins. Direct RPC to each network\'s own nodes.',
    'mc-p3-num':  'Unified',
    'mc-p3-desc': 'One seed phrase, one interface, one address book. All chains. No app-switching, no separate installs.',

    // Features
    'features-label': '/ 02 — FEATURES',
    'features-title': 'Every blade you actually need.<br/><span class="muted">None of the ones that cut you.</span>',
    'f01-h': 'Multi-chain, single mind',
    'f01-p': 'Bitcoin, Ethereum, Litecoin, Monero, Solana, and 40+ others under one keyring. Each chain isolated, each balance independent.',
    'f02-h': 'Self-diagnostics',
    'f02-p': 'The wallet runs continuous health checks: peer connectivity, chain sync, key integrity, mempool fee sanity. When something is off, you know first.',
    'f03-h': 'Verbose logs, plain English',
    'f03-p': 'Every transaction, every connection, every signature — written to a log you can actually read. Filter, search, export. Debug your own wallet.',
    'f04-h': 'Customizable down to the pixel',
    'f04-p': 'Themes, layouts, keybindings, hotkeys, panel arrangement. Build your own wallet on top of ours with the plugin SDK.',
    'f05-h': 'Hardware-first',
    'f05-p': 'Native support for Ledger, Trezor, Coldcard, BitBox, Keystone, and any device speaking PSBT. Air-gapped signing via QR or microSD.',
    'f06-h': 'Coin control &amp; UTXO surgery',
    'f06-p': 'Hand-pick which UTXOs to spend. Label them. Freeze them. Avoid linkability. The kind of control power users have begged for.',
    'f07-h': 'Multisig &amp; PSBT',
    'f07-p': '2-of-3, 3-of-5, whatever your threat model wants. Build, sign, and broadcast partially-signed transactions across machines.',
    'f08-h': 'Lightning for daily spend',
    'f08-p': 'Native LN node or remote LSP — your call. Sub-cent fees, instant settlement, zero custody.',
    'f09-h': 'Stake without surrender',
    'f09-p': 'Stake ETH, SOL, ATOM, DOT and others non-custodially. Your validators, your keys, your rewards.',
    'f10-h': 'Tor &amp; custom RPC',
    'f10-p': 'Route through Tor by default. Connect to your own node. Never leak addresses to a third-party indexer again.',
    'f11-h': 'Encrypted backups',
    'f11-p': "Shamir's Secret Sharing, BIP-39 seed plates, encrypted cloud snapshots — pick the one that matches your paranoia level.",
    'f12-h': 'Watch-only &amp; cold storage',
    'f12-p': 'Monitor balances on a public terminal without ever exposing keys. Sign offline. Broadcast online. The way it was meant to work.',
    'f13-h': 'Address book with labels',
    'f13-p': "Tag every address you've ever interacted with. Local-only, encrypted, never synced to anyone's cloud.",
    'f14-h': 'Custom fee oracle',
    'f14-p': 'Pick from mempool.space, your own node, or a flat sat/vB. No more "the wallet picked an absurd fee."',
    'f15-h': 'Reproducible builds',
    'f15-p': 'Compile the binary yourself. Compare hashes. Trust no one — including us.',
    'f16-h': 'Lightweight',
    'f16-p': 'Under 40 MB. Boots cold in under a second. Runs on a 2014 ThinkPad without breaking a sweat.',

    // Diagnostics
    'diag-label': '/ 03 — DIAGNOSTICS',
    'diag-h2':    'The first wallet that <span class="accent">tells you what\'s wrong</span> before you have to ask.',
    'diag-p':     'Most wallets are black boxes. When something breaks — a stuck transaction, a desync, a bad fee estimate — you\'re left guessing. Spectra ships with a live diagnostics panel and a structured log viewer that turns "it\'s broken" into "here\'s the line and here\'s the fix."',
    'diag-li-1':  '<b>Health checks:</b> peer count, sync depth, mempool latency, key integrity, RPC pings.',
    'diag-li-2':  '<b>Auto-repair:</b> common failures (stale UTXO cache, orphaned tx) repaired in one click.',
    'diag-li-3':  '<b>Exportable bug reports:</b> redacted, signed, ready to file as a GitHub issue.',

    // Legacy
    'legacy-label': '/ 04 — LEGACY &amp; RECOVERY',
    'legacy-title': 'Got an old wallet from 2013?<br/><span class="accent">Bring it home.</span>',
    'legacy-lead':  'Spectra is built with a fanatical commitment to backwards compatibility. If your coins exist on-chain, we will find a way to read them. We support legacy formats most modern wallets quietly dropped years ago.',
    'lc1-h': 'Wallet imports',
    'lc1-p': 'wallet.dat, Electrum 1.x &amp; 2.x, Multibit, Armory, Bither, Mycelium, Blockchain.info v2/v3, Coinomi, MEW keystore, JSON keystore (v3), raw WIF, BIP-38 encrypted keys.',
    'lc2-h': 'Lost-fund scanner',
    'lc2-p': "Give us a seed phrase and we'll grind every common derivation path — BIP-32, 44, 49, 84, 86, m/0', m/0/0, Ledger Live, Electrum, custom — and surface every UTXO we find.",
    'lc3-h': 'Forgotten passwords',
    'lc3-p': 'Local, offline brute-forcer with custom rules: typo correction, common substitutions, dictionary + mask. Your machine. Your patience. No cloud.',
    'lc4-h': 'Forks &amp; airdrops',
    'lc4-p': 'Claim BCH, BSV, BTG, ETC, ETHW from your old BTC/ETH addresses. Check eligibility for historical airdrops on chains you forgot you ever touched.',

    // Download
    'dl-label':    '/ 05 — DOWNLOAD',
    'dl-title':    'Free. Forever. <span class="accent">Forever free.</span>',
    'dl-lead':     'No accounts. No emails. No telemetry. No "premium tier." Just a binary you can verify and run.',
    'dl-mac-meta': 'Universal · Apple Silicon + Intel',
    'dl-win-meta': 'x86_64 · Win 10+',
    'dl-lin-meta': 'AppImage · deb · rpm · Flatpak',
    'dl-src-meta': 'git clone &amp; build it yourself',
    'dl-src-size': '~6 min on a laptop',
    'verify-label':'VERIFY:',

    // Donate
    'donate-label': '/ 06 — DONATE',
    'donate-h2':    'If Spectra ever saved you money,<br/><span class="accent">please give some back.</span>',
    'donate-p':     'Spectra has no investors, no token, no premium tier, no ads, and never will. The entire project runs on donations from people who think a wallet should be a wallet. If that\'s you, here are our addresses.',

    // Footer
    'footer-tagline':       'The Swiss Army Knife of Crypto Wallets.',
    'footer-h4-project':    'Project',
    'footer-source-mirror': 'Source mirror',
    'footer-repro':         'Reproducible builds',
    'footer-audit':         'Security audits',
    'footer-h4-docs':       'Docs',
    'footer-manual':        'Manual',
    'footer-recovery':      'Recovery guide',
    'footer-h4-community':  'Community',
    'footer-mailing':       'Mailing list',
    'footer-bugs':          'Bug tracker',
    'footer-copyright':     '© 2026 Spectra Contributors · GPL-3.0 · No warranty, no telemetry, no nonsense.',
  },

  zh: {
    // Nav
    'nav-ethos':       '理念',
    'nav-features':    '功能',
    'nav-diagnostics': '诊断',
    'nav-legacy':      '兼容性',
    'nav-download':    '下载',
    'nav-donate':      '捐赠',

    // Hero
    'hero-title':       '加密货币<br/>世界的<br/><span class="accent">瑞士军刀。</span>',
    'hero-sub':         '持有。转账。质押。恢复。<br/>不交易，不换币，不"用信用卡买币"。<br/>没有多余的入口，让黑客无缝可钻。',
    'hero-btn-download':'下载 Spectra',
    'hero-btn-manual':  '阅读文档 →',
    'hero-stat-1':      '你与链之间的服务器数量',
    'hero-stat-2':      '支持的旧版钱包格式',
    'hero-stat-3':      '主题与插件',
    'hero-stat-4':      '使命：保护你的资产',

    // Ethos
    'ethos-label':     '/ 01 — 理念',
    'ethos-h2':        '加密货币本应是一种 <span class="strike">赌场</span> <span class="accent">工具。</span>',
    'ethos-p1':        '不知从何时起，钱包变成了赌场。它们长出了兑换按钮、信用卡通道、NFT 画廊、流动性挖矿，以及"热门代币"轮播——目的只有一个：让你不停交易，直到血本无归。',
    'ethos-p2':        '这些功能的每一项，都是一扇门。一扇门通向钓鱼网站，一扇门通向恶意合约，一扇门通向只需你点一下的黑客。我们把每一扇门都关上了。',
    'ethos-p3':        'Spectra 为你持有币，为你发送币，为你质押币，在出问题时帮你恢复币。这就是它的全部使命。',
    'ethos-is-title':  'Spectra 是什么',
    'ethos-is-1':      '持有工具',
    'ethos-is-2':      '支付工具',
    'ethos-is-3':      '质押客户端',
    'ethos-is-4':      '资产恢复工具箱',
    'ethos-is-5':      '开源、可审计、可复现',
    'ethos-not-title': 'Spectra 不是什么',
    'ethos-not-1':     '交易所',
    'ethos-not-2':     'DEX 聚合器',
    'ethos-not-3':     '"收益优化器"',
    'ethos-not-4':     '土狗代币发射台',
    'ethos-not-5':     '一夜暴富机器',

    // Multi-chain
    'mc-label':   '/ 多链支持',
    'mc-title':   '一个钱包。<br/><span class="accent">掌控所有链。</span>',
    'mc-lead':    'Spectra 原生支持所有主流区块链——无需桥接，无需包装资产，无需第三方插件。每条网络都在独立的密钥环中运行，单链密钥泄露不会波及其他链。',
    'mc-more':    '+ 40 余种',
    'mc-p1-num':  '隔离',
    'mc-p1-desc': '每条链拥有独立密钥环。某条网络的密钥泄露被完全隔离，不会向其他链蔓延。',
    'mc-p2-num':  '原生',
    'mc-p2-desc': '无包装代币，无跨链桥，无第三方插件。直接通过 RPC 连接每条网络的原生节点。',
    'mc-p3-num':  '统一',
    'mc-p3-desc': '一个助记词，一套界面，一本地址簿。管理所有链。无需切换应用，无需分开安装。',

    // Features
    'features-label': '/ 02 — 功能',
    'features-title': '你真正需要的每一把刀。<br/><span class="muted">没有会割伤你的那种。</span>',
    'f01-h': '多链，一脑',
    'f01-p': 'Bitcoin、Ethereum、Litecoin、Monero、Solana 及 40 余种资产，共用一把钥匙。每条链独立隔离，每个余额互不干扰。',
    'f02-h': '自我诊断',
    'f02-p': '钱包持续运行健康检查：节点连接、链同步、密钥完整性、内存池费用是否合理。出问题前，你是第一个知道的。',
    'f03-h': '详细日志，看得懂的语言',
    'f03-p': '每一笔交易、每一次连接、每一次签名——全写进日志，可筛选、可搜索、可导出。自己调试自己的钱包。',
    'f04-h': '像素级定制',
    'f04-p': '主题、布局、快捷键、面板排列，随你设定。用插件 SDK 在我们的基础上构建你自己的钱包。',
    'f05-h': '硬件优先',
    'f05-p': '原生支持 Ledger、Trezor、Coldcard、BitBox、Keystone，及任何支持 PSBT 的设备。通过二维码或 microSD 进行气隙签名。',
    'f06-h': 'UTXO 精细控制',
    'f06-p': '手动选择要花费的 UTXO，打标签，冻结，避免地址关联。这才是高级用户一直渴望的掌控感。',
    'f07-h': '多签与 PSBT',
    'f07-p': '2/3、3/5，随你的威胁模型来定。跨设备构建、签名、广播部分签名交易。',
    'f08-h': '闪电网络日常支付',
    'f08-p': '本地 LN 节点或远程 LSP，你来选。极低手续费，即时到账，完全非托管。',
    'f09-h': '质押，不失控',
    'f09-p': '非托管质押 ETH、SOL、ATOM、DOT 及其他资产。你的验证节点，你的密钥，你的收益。',
    'f10-h': 'Tor 与自定义 RPC',
    'f10-p': '默认走 Tor 路由。连接你自己的节点。再也不用把地址泄露给第三方索引服务。',
    'f11-h': '加密备份',
    'f11-p': 'Shamir 秘密分享、BIP-39 助记词钢板、加密云端快照——按你的偏执程度自选。',
    'f12-h': '只读模式与冷存储',
    'f12-p': '在公共终端查看余额，无需暴露密钥。离线签名，在线广播。本该如此。',
    'f13-h': '带标签的地址簿',
    'f13-p': '为每一个交互过的地址打标签。仅本地存储，已加密，从不同步到任何云端。',
    'f14-h': '自定义手续费预言机',
    'f14-p': '从 mempool.space、自己的节点或固定 sat/vB 中选择。再也不用忍受"钱包选了个荒谬的手续费"。',
    'f15-h': '可复现构建',
    'f15-p': '自己编译二进制文件，对比哈希值。不信任任何人——包括我们。',
    'f16-h': '轻量级',
    'f16-p': '不到 40 MB，冷启动不到一秒，在 2014 年的 ThinkPad 上也跑得飞快。',

    // Diagnostics
    'diag-label': '/ 03 — 诊断',
    'diag-h2':    '第一款在你开口之前就<span class="accent">告诉你哪里出了问题</span>的钱包。',
    'diag-p':     '大多数钱包是黑箱。当事情出错——卡住的交易、失同步、错误的手续费估算——你只能靠猜。Spectra 内置实时诊断面板和结构化日志查看器，把"它坏了"变成"这里有问题，这是修复方法"。',
    'diag-li-1':  '<b>健康检查：</b>节点数量、同步深度、内存池延迟、密钥完整性、RPC 响应。',
    'diag-li-2':  '<b>自动修复：</b>常见故障（过期 UTXO 缓存、孤立交易）一键修复。',
    'diag-li-3':  '<b>可导出的 Bug 报告：</b>脱敏、签名，可直接提交 GitHub Issue。',

    // Legacy
    'legacy-label': '/ 04 — 兼容性与恢复',
    'legacy-title': '手里有一个 2013 年的旧钱包？<br/><span class="accent">带它回家。</span>',
    'legacy-lead':  'Spectra 对向后兼容性有着近乎偏执的承诺。只要你的币还在链上，我们就会找到读取它们的方法。我们支持大多数现代钱包早已悄悄放弃的旧版格式。',
    'lc1-h': '钱包导入',
    'lc1-p': 'wallet.dat、Electrum 1.x &amp; 2.x、Multibit、Armory、Bither、Mycelium、Blockchain.info v2/v3、Coinomi、MEW keystore、JSON keystore (v3)、原始 WIF、BIP-38 加密密钥。',
    'lc2-h': '失款扫描器',
    'lc2-p': "输入一个助记词，我们会遍历所有常见派生路径——BIP-32、44、49、84、86、m/0'、m/0/0、Ledger Live、Electrum、自定义——找出每一个 UTXO。",
    'lc3-h': '忘记密码',
    'lc3-p': '本地离线暴力破解，支持自定义规则：错字纠正、常见替换、字典 + 掩码。在你自己的机器上，按你自己的节奏，不上云。',
    'lc4-h': '分叉与空投',
    'lc4-p': '从旧 BTC/ETH 地址领取 BCH、BSV、BTG、ETC、ETHW。查询你曾触碰过但已遗忘的链上历史空投资格。',

    // Download
    'dl-label':    '/ 05 — 下载',
    'dl-title':    '免费。永远。<span class="accent">永远免费。</span>',
    'dl-lead':     '无需注册，无需邮箱，无遥测，没有"高级版"。只是一个你可以验证并运行的二进制文件。',
    'dl-mac-meta': '通用版 · Apple Silicon + Intel',
    'dl-win-meta': 'x86_64 · Win 10+',
    'dl-lin-meta': 'AppImage · deb · rpm · Flatpak',
    'dl-src-meta': 'git clone 并自行构建',
    'dl-src-size': '约 6 分钟（笔记本电脑）',
    'verify-label':'验证：',

    // Donate
    'donate-label': '/ 06 — 捐赠',
    'donate-h2':    '如果 Spectra 帮你省了钱，<br/><span class="accent">请考虑回馈一些。</span>',
    'donate-p':     'Spectra 没有投资人，没有代币，没有高级版，没有广告，也永远不会有。整个项目依靠那些认为钱包就该是钱包的人的捐款运营。如果你也这么认为，这是我们的收款地址。',

    // Footer
    'footer-tagline':       '加密货币世界的瑞士军刀。',
    'footer-h4-project':    '项目',
    'footer-source-mirror': '源码镜像',
    'footer-repro':         '可复现构建',
    'footer-audit':         '安全审计',
    'footer-h4-docs':       '文档',
    'footer-manual':        '使用手册',
    'footer-recovery':      '恢复指南',
    'footer-h4-community':  '社区',
    'footer-mailing':       '邮件列表',
    'footer-bugs':          '漏洞追踪',
    'footer-copyright':     '© 2026 Spectra 贡献者 · GPL-3.0 · 无担保，无遥测，无废话。',
  },
};

// ============================================================
// Language switcher
// ============================================================
let currentLang = 'en';

function setLang(lang, { pushHistory = false } = {}) {
  currentLang = lang;
  const t = translations[lang];

  // Plain text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML nodes (contain spans, <br/> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update <html lang=""> for accessibility
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Update button label to show the OTHER language
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'en' ? '中文' : 'EN';

  // Sync URL query param without reloading the page
  const url = new URL(window.location.href);
  if (lang === 'en') {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', lang);
  }
  if (pushHistory) {
    history.pushState(null, '', url);
  } else {
    history.replaceState(null, '', url);
  }
}

// Read lang from URL on first load
(() => {
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param && translations[param]) setLang(param);
})();

// Toggle button
(() => {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'zh' : 'en', { pushHistory: true });
  });
})();

// ============================================================
// Cursor glow
// ============================================================
(() => {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x, ty = y;

  window.addEventListener('pointermove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  const tick = () => {
    x += (tx - x) * 0.14;
    y += (ty - y) * 0.14;
    glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();
})();

// ============================================================
// Terminal typewriter
// ============================================================
(() => {
  const term = document.getElementById('terminal');
  if (!term) return;

  const lines = [
    { cls: 't-prompt', text: 'spectra@local' },
    { cls: '',          text: ':~$ ' },
    { cls: '',          text: 'spectra diagnose --all\n' },
    { cls: 't-dim',     text: '[i] running 14 health checks...\n\n' },

    { cls: 't-ok',      text: '  [✓] ' },
    { cls: '',          text: 'keychain integrity ........... ' },
    { cls: 't-ok',      text: 'OK\n' },

    { cls: 't-ok',      text: '  [✓] ' },
    { cls: '',          text: 'wallet.dat read .............. ' },
    { cls: 't-ok',      text: 'OK ' },
    { cls: 't-dim',     text: '(legacy v0.3, 217 keys)\n' },

    { cls: 't-ok',      text: '  [✓] ' },
    { cls: '',          text: 'btc node sync ................ ' },
    { cls: 't-ok',      text: 'OK ' },
    { cls: 't-dim',     text: '(block 882,140 / tip)\n' },

    { cls: 't-warn',    text: '  [!] ' },
    { cls: '',          text: 'eth peer count ............... ' },
    { cls: 't-warn',    text: 'LOW ' },
    { cls: 't-dim',     text: '(2 peers, expected ≥ 8)\n' },
    { cls: 't-dim',     text: '       └─ suggest: rotate bootstrap nodes\n' },

    { cls: 't-ok',      text: '  [✓] ' },
    { cls: '',          text: 'mempool fee oracle ........... ' },
    { cls: 't-ok',      text: 'OK ' },
    { cls: 't-dim',     text: '(median 12 sat/vB)\n' },

    { cls: 't-ok',      text: '  [✓] ' },
    { cls: '',          text: 'tor circuit .................. ' },
    { cls: 't-ok',      text: 'OK ' },
    { cls: 't-dim',     text: '(3 hops, exit DE)\n' },

    { cls: 't-ok',      text: '  [✓] ' },
    { cls: '',          text: 'ledger device ................ ' },
    { cls: 't-ok',      text: 'OK ' },
    { cls: 't-dim',     text: '(Nano S+, fw 1.1.1)\n' },

    { cls: 't-ok',      text: '  [✓] ' },
    { cls: '',          text: 'reproducible build hash ...... ' },
    { cls: 't-ok',      text: 'MATCH\n\n' },

    { cls: 't-dim',     text: '13/14 checks passed · 1 warning · 0 errors\n' },
    { cls: 't-prompt',  text: 'spectra@local' },
    { cls: '',          text: ':~$ ' },
  ];

  let lineIdx = 0;
  let charIdx = 0;
  let currentSpan = null;

  const newSpan = (cls) => {
    const s = document.createElement('span');
    if (cls) s.className = cls;
    term.appendChild(s);
    return s;
  };

  const typeChar = () => {
    if (lineIdx >= lines.length) {
      const cursor = document.createElement('span');
      cursor.className = 'cursor-blink';
      term.appendChild(cursor);
      return;
    }
    const line = lines[lineIdx];
    if (!currentSpan) currentSpan = newSpan(line.cls);
    const char = line.text[charIdx];
    currentSpan.textContent += char;
    charIdx++;
    if (charIdx >= line.text.length) {
      lineIdx++;
      charIdx = 0;
      currentSpan = null;
    }
    const delay = char === '\n' ? 90 : (Math.random() * 6 + 4);
    setTimeout(typeChar, delay);
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typeChar();
      observer.disconnect();
    }
  }, { threshold: 0.25 });
  observer.observe(term);
})();

// ============================================================
// Reveal on scroll
// ============================================================
(() => {
  const els = document.querySelectorAll('.feature, .legacy-card, .dl-card, .hero-stats > div');
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .7s ease, transform .7s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 40);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
})();

// ============================================================
// Click-to-copy donation addresses
// ============================================================
(() => {
  document.querySelectorAll('.addr code').forEach(code => {
    code.style.cursor = 'pointer';
    code.title = 'Click to copy';
    code.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        const orig = code.textContent;
        code.textContent = '✓ copied';
        setTimeout(() => { code.textContent = orig; }, 1200);
      } catch { /* clipboard blocked */ }
    });
  });
})();
