/* ============================================================
   SPECTRA — interactions
   ============================================================ */

// ============================================================
// i18n — translations
// ============================================================
const langNames = { en: 'EN', zh: '中文', fr: 'FR', es: 'ES', pt: 'PT' };

const translations = {

  // ----------------------------------------------------------
  en: {
    'nav-ethos': 'Ethos', 'nav-features': 'Features', 'nav-tech': 'Tech', 'nav-diagnostics': 'Diagnostics',
    'nav-legacy': 'Legacy', 'nav-download': 'Download', 'nav-docs': 'Docs', 'nav-donate': 'Donate',
    'hero-title': 'The Swiss<br/>Army Knife<br/><span class="accent">of crypto<br/>wallets.</span>',
    'hero-sub': 'Hold. Send. Stake. Recover.<br/>No trading. No swaps. No "buy with credit card."<br/>No surface area for thieves to crawl through.',
    'hero-btn-download': 'Download Spectra', 'hero-btn-manual': 'Read the manual →',
    'hero-stat-1': 'servers between you and the chain', 'hero-stat-2': 'legacy wallet formats supported',
    'hero-stat-3': 'themes &amp; plugins', 'hero-stat-4': 'job: protect your money',
    'hero-trust': 'Zero telemetry. Zero accounts. Zero ads. Every line of code is public — read it, audit it, build it yourself, and verify the binary. We cannot track you because we built it that way.',
    'ethos-label': '/ 01 — ETHOS',
    'ethos-h2': 'Crypto was meant to be a <span class="strike">casino</span> <span class="accent">tool.</span>',
    'ethos-p1': 'Somewhere along the way, wallets became casinos. They sprouted swap buttons, credit-card on-ramps, NFT galleries, yield farms, and "trending tokens" carousels designed to make you trade until you bleed.',
    'ethos-p2': 'Each of those features is also a door. A door for a phishing site. A door for a malicious contract. A door for a hacker who only needs you to click once. We slammed every one of those doors shut.',
    'ethos-p3': 'Spectra holds your coins. It sends your coins. It stakes your coins. It recovers your coins when something goes wrong. That is the entire job.',
    'ethos-is-title': 'What Spectra is', 'ethos-not-title': 'What Spectra is not',
    'ethos-is-1': 'A wallet to hold', 'ethos-is-2': 'A tool for payment', 'ethos-is-3': 'A staking client',
    'ethos-is-4': 'A recovery toolkit', 'ethos-is-5': 'Open source. Auditable. Reproducible.',
    'ethos-not-1': 'An exchange', 'ethos-not-2': 'A DEX aggregator', 'ethos-not-3': 'A "yield optimizer"',
    'ethos-not-4': 'A meme-token launcher', 'ethos-not-5': 'A get-rich-quick machine',
    'features-label': '/ 02 — FEATURES',
    'features-title': 'Every blade you actually need.<br/><span class="muted">None of the ones that cut you.</span>',
    'f01-h': 'Multi-chain, single mind', 'f01-p': 'Bitcoin, Ethereum, Litecoin, Monero, Solana, and 40+ others under one keyring. Each chain isolated, each balance independent.',
    'f02-h': 'Self-diagnostics', 'f02-p': 'The wallet runs continuous health checks: peer connectivity, chain sync, key integrity, mempool fee sanity. When something is off, you know first.',
    'f03-h': 'Verbose logs, plain English', 'f03-p': 'Every transaction, every connection, every signature — written to a log you can actually read. Filter, search, export. Debug your own wallet.',
    'f04-h': 'Customizable down to the pixel', 'f04-p': 'Themes, layouts, keybindings, hotkeys, panel arrangement. Build your own wallet on top of ours with the plugin SDK.',
    'f05-h': 'Hardware-first', 'f05-p': 'Native support for Ledger, Trezor, Coldcard, BitBox, Keystone, and any device speaking PSBT. Air-gapped signing via QR or microSD.',
    'f06-h': 'Coin control &amp; UTXO surgery', 'f06-p': 'Hand-pick which UTXOs to spend. Label them. Freeze them. Avoid linkability. The kind of control power users have begged for.',
    'f07-h': 'Multisig &amp; PSBT', 'f07-p': '2-of-3, 3-of-5, whatever your threat model wants. Build, sign, and broadcast partially-signed transactions across machines.',
    'f08-h': 'Lightning for daily spend', 'f08-p': 'Native LN node or remote LSP — your call. Sub-cent fees, instant settlement, zero custody.',
    'f09-h': 'Stake without surrender', 'f09-p': 'Stake ETH, SOL, ATOM, DOT and others non-custodially. Your validators, your keys, your rewards.',
    'f10-h': 'Tor &amp; custom RPC', 'f10-p': 'Route through Tor by default. Connect to your own node. Never leak addresses to a third-party indexer again.',
    'f11-h': 'Encrypted backups', 'f11-p': "Shamir's Secret Sharing, BIP-39 seed plates, encrypted cloud snapshots — pick the one that matches your paranoia level.",
    'f12-h': 'Watch-only &amp; cold storage', 'f12-p': 'Monitor balances on a public terminal without ever exposing keys. Sign offline. Broadcast online. The way it was meant to work.',
    'f13-h': 'Address book with labels', 'f13-p': "Tag every address you've ever interacted with. Local-only, encrypted, never synced to anyone's cloud.",
    'f14-h': 'Custom fee oracle', 'f14-p': 'Pick from mempool.space, your own node, or a flat sat/vB. No more "the wallet picked an absurd fee."',
    'f15-h': 'Reproducible builds', 'f15-p': 'Compile the binary yourself. Compare hashes. Trust no one — including us.',
    'f16-h': 'Lightweight', 'f16-p': 'Under 40 MB. Boots cold in under a second. Runs on a 2014 ThinkPad without breaking a sweat.',
    'mc-label': '/ MULTI-CHAIN', 'mc-title': 'One wallet.<br/><span class="accent">Every chain.</span>',
    'mc-lead': 'Spectra speaks every major chain natively — no bridges, no wrapped assets, no third-party plugins. Each network runs in its own isolated keyring so a compromise on one chain can never touch another.',
    'mc-more': '+ 40 more', 'mc-p1-num': 'Isolated', 'mc-p1-desc': 'Every chain lives in its own keyring. A key leak on one network is contained — it cannot cascade to others.',
    'mc-p2-num': 'Native', 'mc-p2-desc': "No wrapped tokens, no cross-chain bridges, no third-party plugins. Direct RPC to each network's own nodes.",
    'mc-p3-num': 'Modular', 'mc-p3-desc': 'Import as many wallets as you need — each with its own seed phrase, its own chain, its own identity. Nothing is shared. Nothing is assumed. A breach in one module leaves every other untouched.',
    'proto-label': '/ PROTOCOL SUPPORT',
    'proto-title': 'Built for today.<br/><span class="accent">Ready for tomorrow.</span>',
    'proto-lead': 'Spectra tracks every major protocol upgrade across every supported chain — so when networks evolve, your wallet evolves with them. No waiting for patches. No scrambling for workarounds.',
    'proto-1-desc': 'MimbleWimble Extension Blocks shield transaction amounts and participant addresses with cryptographic proofs — full opt-in privacy without forking the base layer.',
    'proto-2-desc': 'BIP-340/341/342: Schnorr signatures enable MuSig2 key aggregation so a complex multisig is indistinguishable from a single-sig on-chain, improving privacy and reducing fees.',
    'proto-3-desc': 'Payment channels settle instantly off-chain for sub-cent fees. Spectra runs a native LN node or connects to a remote LSP — zero custody, instant settlement, your choice.',
    'proto-4-desc': 'Account Abstraction turns every wallet into a smart contract: gas sponsorship, batched transactions, and programmable recovery — without any protocol fork required.',
    'proto-5-desc': 'Ring Confidential Transactions hide amounts via Pedersen commitments. Bulletproofs+ shrinks proof sizes by over 96% versus naïve range proofs, keeping blocks lean.',
    'proto-6-desc': 'The upgraded Partially Signed Bitcoin Transaction format adds per-input and per-output roles, enabling cleaner multi-party signing workflows across hardware wallets and air-gapped setups.',
    'diag-label': '/ 03 — DIAGNOSTICS',
    'diag-h2': "The first wallet that <span class=\"accent\">tells you what's wrong</span> before you have to ask.",
    'diag-p': 'Most wallets are black boxes. When something breaks — a stuck transaction, a desync, a bad fee estimate — you\'re left guessing. Spectra ships with a live diagnostics panel and a structured log viewer that turns "it\'s broken" into "here\'s the line and here\'s the fix."',
    'diag-li-1': '<b>Health checks:</b> peer count, sync depth, mempool latency, key integrity, RPC pings.',
    'diag-li-2': '<b>Auto-repair:</b> common failures (stale UTXO cache, orphaned tx) repaired in one click.',
    'diag-li-3': '<b>Exportable bug reports:</b> redacted, signed, ready to file as a GitHub issue.',
    'legacy-label': '/ 04 — LEGACY &amp; RECOVERY',
    'legacy-title': 'Got an old wallet from 2013?<br/><span class="accent">Bring it home.</span>',
    'legacy-lead': 'Spectra is built with a fanatical commitment to backwards compatibility. If your coins exist on-chain, we will find a way to read them. We support legacy formats most modern wallets quietly dropped years ago.',
    'lc1-h': 'Wallet imports', 'lc1-p': 'wallet.dat, Electrum 1.x &amp; 2.x, Multibit, Armory, Bither, Mycelium, Blockchain.info v2/v3, Coinomi, MEW keystore, JSON keystore (v3), raw WIF, BIP-38 encrypted keys.',
    'lc2-h': 'Lost-fund scanner', 'lc2-p': "Give us a seed phrase and we'll grind every common derivation path — BIP-32, 44, 49, 84, 86, m/0', m/0/0, Ledger Live, Electrum, custom — and surface every UTXO we find.",
    'lc3-h': 'Forgotten passwords', 'lc3-p': 'Local, offline brute-forcer with custom rules: typo correction, common substitutions, dictionary + mask. Your machine. Your patience. No cloud.',
    'lc4-h': 'Forks &amp; airdrops', 'lc4-p': 'Claim BCH, BSV, BTG, ETC, ETHW from your old BTC/ETH addresses. Check eligibility for historical airdrops on chains you forgot you ever touched.',
    'dl-label': '/ 05 — DOWNLOAD', 'dl-title': 'Free. Forever. <span class="accent">Forever free.</span>',
    'dl-lead': 'No accounts. No emails. No telemetry. No "premium tier." Just a binary you can verify and run.',
    'dl-mac-meta': 'Universal · Apple Silicon + Intel', 'dl-win-meta': 'x86_64 · Win 10+',
    'dl-lin-meta': 'AppImage · deb · rpm · Flatpak', 'dl-src-meta': 'git clone &amp; build it yourself',
    'dl-src-size': '~6 min on a laptop', 'verify-label': 'VERIFY:',
    'donate-label': '/ 06 — DONATE',
    'donate-h2': 'If Spectra ever saved you money,<br/><span class="accent">please give some back.</span>',
    'donate-p': "Spectra has no investors, no token, no premium tier, no ads, and never will. The entire project runs on donations from people who think a wallet should be a wallet. If that's you, here are our addresses.",
    'footer-tagline': 'The Swiss Army Knife of Crypto Wallets.',
    'footer-h4-project': 'Project', 'footer-source-mirror': 'Source mirror', 'footer-repro': 'Reproducible builds', 'footer-audit': 'Security audits',
    'footer-h4-docs': 'Docs', 'footer-manual': 'Manual', 'footer-recovery': 'Recovery guide',
    'footer-h4-community': 'Community', 'footer-mailing': 'Mailing list', 'footer-bugs': 'Bug tracker',
    'footer-copyright': '© 2026 Spectra Contributors · GPL-3.0 · No warranty, no telemetry, no nonsense.',
  },

  // ----------------------------------------------------------
  zh: {
    'nav-ethos': '理念', 'nav-features': '功能', 'nav-tech': '技术', 'nav-diagnostics': '诊断',
    'nav-legacy': '兼容性', 'nav-download': '下载', 'nav-docs': '文档', 'nav-donate': '捐赠',
    'hero-title': '加密货币<br/>世界的<br/><span class="accent">瑞士军刀。</span>',
    'hero-sub': '持有。转账。质押。恢复。<br/>不交易，不换币，不"用信用卡买币"。<br/>没有多余的入口，让黑客无缝可钻。',
    'hero-btn-download': '下载 Spectra', 'hero-btn-manual': '阅读文档 →',
    'hero-stat-1': '你与链之间的服务器数量', 'hero-stat-2': '支持的旧版钱包格式',
    'hero-stat-3': '主题与插件', 'hero-stat-4': '使命：保护你的资产',
    'hero-trust': '零遥测，零账户，零广告。每一行代码都是公开的——读它、审计它、自己构建，验证二进制文件。我们无法追踪你，因为我们从一开始就这么设计的。',
    'ethos-label': '/ 01 — 理念',
    'ethos-h2': '加密货币本应是一种 <span class="strike">赌场</span> <span class="accent">工具。</span>',
    'ethos-p1': '不知从何时起，钱包变成了赌场。它们长出了兑换按钮、信用卡通道、NFT 画廊、流动性挖矿，以及"热门代币"轮播——目的只有一个：让你不停交易，直到血本无归。',
    'ethos-p2': '这些功能的每一项，都是一扇门。一扇门通向钓鱼网站，一扇门通向恶意合约，一扇门通向只需你点一下的黑客。我们把每一扇门都关上了。',
    'ethos-p3': 'Spectra 为你持有币，为你发送币，为你质押币，在出问题时帮你恢复币。这就是它的全部使命。',
    'ethos-is-title': 'Spectra 是什么', 'ethos-not-title': 'Spectra 不是什么',
    'ethos-is-1': '持有工具', 'ethos-is-2': '支付工具', 'ethos-is-3': '质押客户端',
    'ethos-is-4': '资产恢复工具箱', 'ethos-is-5': '开源、可审计、可复现',
    'ethos-not-1': '交易所', 'ethos-not-2': 'DEX 聚合器', 'ethos-not-3': '"收益优化器"',
    'ethos-not-4': '土狗代币发射台', 'ethos-not-5': '一夜暴富机器',
    'features-label': '/ 02 — 功能',
    'features-title': '你真正需要的每一把刀。<br/><span class="muted">没有会割伤你的那种。</span>',
    'f01-h': '多链，一脑', 'f01-p': 'Bitcoin、Ethereum、Litecoin、Monero、Solana 及 40 余种资产，共用一把钥匙。每条链独立隔离，每个余额互不干扰。',
    'f02-h': '自我诊断', 'f02-p': '钱包持续运行健康检查：节点连接、链同步、密钥完整性、内存池费用是否合理。出问题前，你是第一个知道的。',
    'f03-h': '详细日志，看得懂的语言', 'f03-p': '每一笔交易、每一次连接、每一次签名——全写进日志，可筛选、可搜索、可导出。自己调试自己的钱包。',
    'f04-h': '像素级定制', 'f04-p': '主题、布局、快捷键、面板排列，随你设定。用插件 SDK 在我们的基础上构建你自己的钱包。',
    'f05-h': '硬件优先', 'f05-p': '原生支持 Ledger、Trezor、Coldcard、BitBox、Keystone，及任何支持 PSBT 的设备。通过二维码或 microSD 进行气隙签名。',
    'f06-h': 'UTXO 精细控制', 'f06-p': '手动选择要花费的 UTXO，打标签，冻结，避免地址关联。这才是高级用户一直渴望的掌控感。',
    'f07-h': '多签与 PSBT', 'f07-p': '2/3、3/5，随你的威胁模型来定。跨设备构建、签名、广播部分签名交易。',
    'f08-h': '闪电网络日常支付', 'f08-p': '本地 LN 节点或远程 LSP，你来选。极低手续费，即时到账，完全非托管。',
    'f09-h': '质押，不失控', 'f09-p': '非托管质押 ETH、SOL、ATOM、DOT 及其他资产。你的验证节点，你的密钥，你的收益。',
    'f10-h': 'Tor 与自定义 RPC', 'f10-p': '默认走 Tor 路由。连接你自己的节点。再也不用把地址泄露给第三方索引服务。',
    'f11-h': '加密备份', 'f11-p': 'Shamir 秘密分享、BIP-39 助记词钢板、加密云端快照——按你的偏执程度自选。',
    'f12-h': '只读模式与冷存储', 'f12-p': '在公共终端查看余额，无需暴露密钥。离线签名，在线广播。本该如此。',
    'f13-h': '带标签的地址簿', 'f13-p': '为每一个交互过的地址打标签。仅本地存储，已加密，从不同步到任何云端。',
    'f14-h': '自定义手续费预言机', 'f14-p': '从 mempool.space、自己的节点或固定 sat/vB 中选择。再也不用忍受"钱包选了个荒谬的手续费"。',
    'f15-h': '可复现构建', 'f15-p': '自己编译二进制文件，对比哈希值。不信任任何人——包括我们。',
    'f16-h': '轻量级', 'f16-p': '不到 40 MB，冷启动不到一秒，在 2014 年的 ThinkPad 上也跑得飞快。',
    'mc-label': '/ 多链支持', 'mc-title': '一个钱包。<br/><span class="accent">掌控所有链。</span>',
    'mc-lead': 'Spectra 原生支持所有主流区块链——无需桥接，无需包装资产，无需第三方插件。每条网络都在独立的密钥环中运行，单链密钥泄露不会波及其他链。',
    'mc-more': '+ 40 余种', 'mc-p1-num': '隔离', 'mc-p1-desc': '每条链拥有独立密钥环。某条网络的密钥泄露被完全隔离，不会向其他链蔓延。',
    'mc-p2-num': '原生', 'mc-p2-desc': '无包装代币，无跨链桥，无第三方插件。直接通过 RPC 连接每条网络的原生节点。',
    'mc-p3-num': '模块化', 'mc-p3-desc': '按需导入任意数量的钱包——每个钱包拥有独立的助记词、独立的链、独立的身份。没有共享，没有依赖。一个模块被攻破，其余模块毫发无损。',
    'proto-label': '/ 协议支持',
    'proto-title': '为今天而建。<br/><span class="accent">为明天而生。</span>',
    'proto-lead': 'Spectra 跟踪每条支持链上的重大协议升级——网络演进时，你的钱包与它同步。无需等待补丁，无需寻找变通方案。',
    'proto-1-desc': 'MimbleWimble 扩展区块通过密码学证明屏蔽交易金额与参与者地址，无需分叉基础层，即可实现完整的可选隐私保护。',
    'proto-2-desc': 'BIP-340/341/342：Schnorr 签名支持 MuSig2 密钥聚合，使复杂的多签在链上与单签无法区分，同时提升隐私性并降低手续费。',
    'proto-3-desc': '支付通道在链下实现即时结算，手续费低至不足一分钱。Spectra 支持原生 LN 节点或远程 LSP 连接——零托管，即时到账，由你选择。',
    'proto-4-desc': '账户抽象将每个钱包变为智能合约：Gas 代付、批量交易、可编程恢复——无需任何协议层变更。',
    'proto-5-desc': '环签名保密交易通过 Pedersen 承诺隐藏金额。Bulletproofs+ 将证明大小压缩超过 96%，保持区块精简高效。',
    'proto-6-desc': '升级版部分签名比特币交易格式为每个输入与输出引入独立角色，实现了更清晰的多方签名工作流，兼容硬件钱包与气隔离设备。',
    'diag-label': '/ 03 — 诊断',
    'diag-h2': '第一款在你开口之前就<span class="accent">告诉你哪里出了问题</span>的钱包。',
    'diag-p': '大多数钱包是黑箱。当事情出错——卡住的交易、失同步、错误的手续费估算——你只能靠猜。Spectra 内置实时诊断面板和结构化日志查看器，把"它坏了"变成"这里有问题，这是修复方法"。',
    'diag-li-1': '<b>健康检查：</b>节点数量、同步深度、内存池延迟、密钥完整性、RPC 响应。',
    'diag-li-2': '<b>自动修复：</b>常见故障（过期 UTXO 缓存、孤立交易）一键修复。',
    'diag-li-3': '<b>可导出的 Bug 报告：</b>脱敏、签名，可直接提交 GitHub Issue。',
    'legacy-label': '/ 04 — 兼容性与恢复',
    'legacy-title': '手里有一个 2013 年的旧钱包？<br/><span class="accent">带它回家。</span>',
    'legacy-lead': 'Spectra 对向后兼容性有着近乎偏执的承诺。只要你的币还在链上，我们就会找到读取它们的方法。我们支持大多数现代钱包早已悄悄放弃的旧版格式。',
    'lc1-h': '钱包导入', 'lc1-p': 'wallet.dat、Electrum 1.x &amp; 2.x、Multibit、Armory、Bither、Mycelium、Blockchain.info v2/v3、Coinomi、MEW keystore、JSON keystore (v3)、原始 WIF、BIP-38 加密密钥。',
    'lc2-h': '失款扫描器', 'lc2-p': "输入一个助记词，我们会遍历所有常见派生路径——BIP-32、44、49、84、86、m/0'、m/0/0、Ledger Live、Electrum、自定义——找出每一个 UTXO。",
    'lc3-h': '忘记密码', 'lc3-p': '本地离线暴力破解，支持自定义规则：错字纠正、常见替换、字典 + 掩码。在你自己的机器上，按你自己的节奏，不上云。',
    'lc4-h': '分叉与空投', 'lc4-p': '从旧 BTC/ETH 地址领取 BCH、BSV、BTG、ETC、ETHW。查询你曾触碰过但已遗忘的链上历史空投资格。',
    'dl-label': '/ 05 — 下载', 'dl-title': '免费。永远。<span class="accent">永远免费。</span>',
    'dl-lead': '无需注册，无需邮箱，无遥测，没有"高级版"。只是一个你可以验证并运行的二进制文件。',
    'dl-mac-meta': '通用版 · Apple Silicon + Intel', 'dl-win-meta': 'x86_64 · Win 10+',
    'dl-lin-meta': 'AppImage · deb · rpm · Flatpak', 'dl-src-meta': 'git clone 并自行构建',
    'dl-src-size': '约 6 分钟（笔记本电脑）', 'verify-label': '验证：',
    'donate-label': '/ 06 — 捐赠',
    'donate-h2': '如果 Spectra 帮你省了钱，<br/><span class="accent">请考虑回馈一些。</span>',
    'donate-p': 'Spectra 没有投资人，没有代币，没有高级版，没有广告，也永远不会有。整个项目依靠那些认为钱包就该是钱包的人的捐款运营。如果你也这么认为，这是我们的收款地址。',
    'footer-tagline': '加密货币世界的瑞士军刀。',
    'footer-h4-project': '项目', 'footer-source-mirror': '源码镜像', 'footer-repro': '可复现构建', 'footer-audit': '安全审计',
    'footer-h4-docs': '文档', 'footer-manual': '使用手册', 'footer-recovery': '恢复指南',
    'footer-h4-community': '社区', 'footer-mailing': '邮件列表', 'footer-bugs': '漏洞追踪',
    'footer-copyright': '© 2026 Spectra 贡献者 · GPL-3.0 · 无担保，无遥测，无废话。',
  },

  // ----------------------------------------------------------
  fr: {
    'nav-ethos': 'Philosophie', 'nav-features': 'Fonctions', 'nav-tech': 'Tech', 'nav-diagnostics': 'Diagnostics',
    'nav-legacy': 'Compatibilité', 'nav-download': 'Télécharger', 'nav-docs': 'Docs', 'nav-donate': 'Faire un don',
    'hero-title': 'Le couteau<br/>suisse des<br/><span class="accent">portefeuilles<br/>crypto.</span>',
    'hero-sub': 'Conserver. Envoyer. Staker. Récupérer.<br/>Sans trading, sans swap, sans « acheter avec une carte de crédit ».<br/>Aucune surface d\'attaque pour les voleurs.',
    'hero-btn-download': 'Télécharger Spectra', 'hero-btn-manual': 'Lire la documentation →',
    'hero-stat-1': 'serveurs entre vous et la chaîne', 'hero-stat-2': 'formats de portefeuilles legacy supportés',
    'hero-stat-3': 'thèmes &amp; plugins', 'hero-stat-4': 'mission : protéger votre argent',
    'hero-trust': 'Zéro télémétrie. Zéro compte. Zéro publicité. Chaque ligne de code est publique — lisez-la, auditez-la, compilez-la vous-même et vérifiez le binaire. Nous ne pouvons pas vous tracer parce que nous l\'avons conçu ainsi.',
    'ethos-label': '/ 01 — PHILOSOPHIE',
    'ethos-h2': 'La crypto devait être un <span class="strike">casino</span> <span class="accent">outil.</span>',
    'ethos-p1': 'À un moment donné, les portefeuilles sont devenus des casinos. Ils ont vu pousser des boutons d\'échange, des rampes de carte de crédit, des galeries NFT, des fermes de rendement et des carrousels de « tokens tendance » conçus pour vous faire trader jusqu\'à la ruine.',
    'ethos-p2': 'Chacune de ces fonctionnalités est aussi une porte. Une porte pour un site de phishing. Une porte pour un contrat malveillant. Une porte pour un hacker qui n\'a besoin que d\'un seul clic. Nous avons claqué chacune de ces portes.',
    'ethos-p3': 'Spectra conserve vos coins. Il les envoie. Il les stake. Il les récupère quand quelque chose tourne mal. C\'est tout ce qu\'il fait.',
    'ethos-is-title': 'Ce qu\'est Spectra', 'ethos-not-title': 'Ce que Spectra n\'est pas',
    'ethos-is-1': 'Un portefeuille pour conserver', 'ethos-is-2': 'Un outil de paiement', 'ethos-is-3': 'Un client de staking',
    'ethos-is-4': 'Une boîte à outils de récupération', 'ethos-is-5': 'Open source. Auditable. Reproductible.',
    'ethos-not-1': 'Un exchange', 'ethos-not-2': 'Un agrégateur DEX', 'ethos-not-3': 'Un « optimiseur de rendement »',
    'ethos-not-4': 'Un lanceur de meme-tokens', 'ethos-not-5': 'Une machine à s\'enrichir rapidement',
    'features-label': '/ 02 — FONCTIONS',
    'features-title': 'Chaque lame dont vous avez vraiment besoin.<br/><span class="muted">Aucune qui puisse vous couper.</span>',
    'f01-h': 'Multi-chaînes, un seul esprit', 'f01-p': 'Bitcoin, Ethereum, Litecoin, Monero, Solana, et 40+ autres sous un seul trousseau. Chaque chaîne isolée, chaque solde indépendant.',
    'f02-h': 'Auto-diagnostics', 'f02-p': 'Le portefeuille effectue des contrôles de santé continus : connectivité des pairs, sync de chaîne, intégrité des clés, frais mempool. Quand quelque chose cloche, vous êtes le premier informé.',
    'f03-h': 'Logs détaillés, en clair', 'f03-p': 'Chaque transaction, chaque connexion, chaque signature — consignée dans un journal que vous pouvez réellement lire. Filtrer, rechercher, exporter. Déboguez votre propre portefeuille.',
    'f04-h': 'Personnalisable jusqu\'au pixel', 'f04-p': 'Thèmes, mises en page, raccourcis clavier, disposition des panneaux. Construisez votre propre portefeuille sur le nôtre avec le SDK de plugins.',
    'f05-h': 'Hardware en priorité', 'f05-p': 'Support natif pour Ledger, Trezor, Coldcard, BitBox, Keystone, et tout appareil parlant PSBT. Signature air-gapped via QR ou microSD.',
    'f06-h': 'Contrôle des coins &amp; chirurgie UTXO', 'f06-p': 'Choisissez manuellement quels UTXO dépenser. Étiquetez-les. Gelez-les. Évitez la traçabilité. Le genre de contrôle que les utilisateurs avancés réclamaient.',
    'f07-h': 'Multisig &amp; PSBT', 'f07-p': '2-de-3, 3-de-5, selon votre modèle de menace. Construisez, signez et diffusez des transactions partiellement signées entre appareils.',
    'f08-h': 'Lightning pour les dépenses quotidiennes', 'f08-p': 'Nœud LN natif ou LSP distant — à vous de choisir. Frais infimes, règlement instantané, zéro garde.',
    'f09-h': 'Staker sans capituler', 'f09-p': 'Stakez ETH, SOL, ATOM, DOT et autres en mode non-custodial. Vos validateurs, vos clés, vos récompenses.',
    'f10-h': 'Tor &amp; RPC personnalisé', 'f10-p': 'Routage via Tor par défaut. Connectez-vous à votre propre nœud. Ne fuites plus jamais vos adresses à un indexeur tiers.',
    'f11-h': 'Sauvegardes chiffrées', 'f11-p': 'Partage de secret de Shamir, plaques de graine BIP-39, instantanés cloud chiffrés — choisissez celui qui correspond à votre niveau de paranoïa.',
    'f12-h': 'Lecture seule &amp; stockage froid', 'f12-p': 'Surveillez les soldes sur un terminal public sans jamais exposer les clés. Signez hors ligne. Diffusez en ligne. Comme il se doit.',
    'f13-h': 'Carnet d\'adresses avec étiquettes', 'f13-p': 'Étiquetez chaque adresse avec laquelle vous avez interagi. Local uniquement, chiffré, jamais synchronisé avec le cloud de quiconque.',
    'f14-h': 'Oracle de frais personnalisé', 'f14-p': 'Choisissez parmi mempool.space, votre propre nœud, ou un sat/vB fixe. Fini les « le portefeuille a choisi des frais absurdes ».',
    'f15-h': 'Builds reproductibles', 'f15-p': 'Compilez le binaire vous-même. Comparez les hachages. Ne faites confiance à personne — pas même à nous.',
    'f16-h': 'Léger', 'f16-p': 'Moins de 40 Mo. Démarrage à froid en moins d\'une seconde. Tourne sur un ThinkPad de 2014 sans transpirer.',
    'mc-label': '/ MULTI-CHAÎNES', 'mc-title': 'Un portefeuille.<br/><span class="accent">Toutes les chaînes.</span>',
    'mc-lead': 'Spectra parle nativement chaque grande blockchain — sans ponts, sans actifs enveloppés, sans plugins tiers. Chaque réseau tourne dans son propre trousseau isolé pour qu\'une compromission sur une chaîne ne touche jamais une autre.',
    'mc-more': '+ 40 de plus', 'mc-p1-num': 'Isolé', 'mc-p1-desc': 'Chaque chaîne vit dans son propre trousseau. Une fuite de clé sur un réseau est contenue — elle ne peut pas se propager aux autres.',
    'mc-p2-num': 'Natif', 'mc-p2-desc': 'Pas de tokens enveloppés, pas de ponts cross-chain, pas de plugins tiers. RPC direct vers les nœuds propres de chaque réseau.',
    'mc-p3-num': 'Modulaire', 'mc-p3-desc': 'Importez autant de portefeuilles que vous le souhaitez — chacun avec sa propre phrase de récupération, sa propre chaîne, sa propre identité. Rien n\'est partagé. Une brèche dans un module laisse tous les autres intacts.',
    'proto-label': '/ SUPPORT DE PROTOCOLES',
    'proto-title': 'Conçu pour aujourd\'hui.<br/><span class="accent">Prêt pour demain.</span>',
    'proto-lead': 'Spectra suit chaque mise à niveau de protocole majeure sur chaque chaîne supportée — ainsi, quand les réseaux évoluent, votre portefeuille évolue avec eux. Pas d\'attente pour les correctifs.',
    'proto-1-desc': 'Les blocs d\'extension MimbleWimble protègent les montants des transactions et les adresses des participants avec des preuves cryptographiques — confidentialité opt-in complète sans forker la couche de base.',
    'proto-2-desc': 'BIP-340/341/342 : les signatures Schnorr permettent l\'agrégation de clés MuSig2 de sorte qu\'un multisig complexe est indiscernable d\'un single-sig on-chain, améliorant la confidentialité et réduisant les frais.',
    'proto-3-desc': 'Les canaux de paiement règlent instantanément hors chaîne pour des frais inférieurs au centime. Spectra exécute un nœud LN natif ou se connecte à un LSP distant — zéro garde, règlement instantané, votre choix.',
    'proto-4-desc': 'L\'abstraction de compte transforme chaque portefeuille en contrat intelligent : parrainage de gas, transactions groupées et récupération programmable — sans fork de protocole.',
    'proto-5-desc': 'Les Ring Confidential Transactions cachent les montants via des engagements de Pedersen. Bulletproofs+ réduit la taille des preuves de plus de 96 % par rapport aux preuves de plage naïves, gardant les blocs compacts.',
    'proto-6-desc': 'Le format amélioré de transaction Bitcoin partiellement signée ajoute des rôles par entrée et par sortie, permettant des flux de signature multi-parties plus propres sur les portefeuilles matériels et les configurations air-gapped.',
    'diag-label': '/ 03 — DIAGNOSTICS',
    'diag-h2': 'Le premier portefeuille qui <span class="accent">vous dit ce qui ne va pas</span> avant que vous n\'ayez à demander.',
    'diag-p': 'La plupart des portefeuilles sont des boîtes noires. Quand quelque chose se casse — une transaction bloquée, une désynchronisation, une mauvaise estimation de frais — vous restez à deviner. Spectra est livré avec un panneau de diagnostics en direct et un visualiseur de logs structuré qui transforme « c\'est cassé » en « voici la ligne et voici le correctif ».',
    'diag-li-1': '<b>Contrôles de santé :</b> nombre de pairs, profondeur de sync, latence mempool, intégrité des clés, pings RPC.',
    'diag-li-2': '<b>Réparation automatique :</b> les pannes courantes (cache UTXO périmé, tx orpheline) réparées en un clic.',
    'diag-li-3': '<b>Rapports de bugs exportables :</b> expurgés, signés, prêts à soumettre comme issue GitHub.',
    'legacy-label': '/ 04 — COMPATIBILITÉ &amp; RÉCUPÉRATION',
    'legacy-title': 'Vous avez un vieux portefeuille de 2013 ?<br/><span class="accent">Ramenez-le à la maison.</span>',
    'legacy-lead': 'Spectra est construit avec un engagement fanatique pour la rétrocompatibilité. Si vos coins existent sur la chaîne, nous trouverons un moyen de les lire. Nous supportons les formats legacy que la plupart des portefeuilles modernes ont silencieusement abandonnés il y a des années.',
    'lc1-h': 'Importation de portefeuilles', 'lc1-p': 'wallet.dat, Electrum 1.x &amp; 2.x, Multibit, Armory, Bither, Mycelium, Blockchain.info v2/v3, Coinomi, MEW keystore, JSON keystore (v3), WIF brut, clés chiffrées BIP-38.',
    'lc2-h': 'Scanner de fonds perdus', 'lc2-p': "Donnez-nous une phrase de récupération et nous explorerons chaque chemin de dérivation courant — BIP-32, 44, 49, 84, 86, m/0', m/0/0, Ledger Live, Electrum, personnalisé — et ferons surface à chaque UTXO trouvé.",
    'lc3-h': 'Mots de passe oubliés', 'lc3-p': 'Bruteforcer local et hors ligne avec règles personnalisées : correction de fautes de frappe, substitutions courantes, dictionnaire + masque. Votre machine. Votre patience. Pas de cloud.',
    'lc4-h': 'Forks &amp; airdrops', 'lc4-p': 'Réclamez BCH, BSV, BTG, ETC, ETHW depuis vos anciennes adresses BTC/ETH. Vérifiez l\'éligibilité aux airdrops historiques sur des chaînes que vous avez oublié avoir touchées.',
    'dl-label': '/ 05 — TÉLÉCHARGER', 'dl-title': 'Gratuit. Pour toujours. <span class="accent">À jamais gratuit.</span>',
    'dl-lead': 'Pas de comptes. Pas d\'emails. Pas de télémétrie. Pas de « niveau premium ». Juste un binaire que vous pouvez vérifier et exécuter.',
    'dl-mac-meta': 'Universel · Apple Silicon + Intel', 'dl-win-meta': 'x86_64 · Win 10+',
    'dl-lin-meta': 'AppImage · deb · rpm · Flatpak', 'dl-src-meta': 'git clone &amp; compilez vous-même',
    'dl-src-size': '~6 min sur un laptop', 'verify-label': 'VÉRIFIER :',
    'donate-label': '/ 06 — FAIRE UN DON',
    'donate-h2': 'Si Spectra vous a un jour fait économiser de l\'argent,<br/><span class="accent">pensez à en redonner un peu.</span>',
    'donate-p': 'Spectra n\'a pas d\'investisseurs, pas de token, pas de niveau premium, pas de publicités, et n\'en aura jamais. Le projet entier fonctionne grâce aux dons de personnes qui pensent qu\'un portefeuille doit être un portefeuille. Si c\'est votre cas, voici nos adresses.',
    'footer-tagline': 'Le couteau suisse des portefeuilles crypto.',
    'footer-h4-project': 'Projet', 'footer-source-mirror': 'Miroir source', 'footer-repro': 'Builds reproductibles', 'footer-audit': 'Audits de sécurité',
    'footer-h4-docs': 'Docs', 'footer-manual': 'Manuel', 'footer-recovery': 'Guide de récupération',
    'footer-h4-community': 'Communauté', 'footer-mailing': 'Liste de diffusion', 'footer-bugs': 'Suivi des bugs',
    'footer-copyright': '© 2026 Contributeurs Spectra · GPL-3.0 · Sans garantie, sans télémétrie, sans bêtises.',
  },

  // ----------------------------------------------------------
  es: {
    'nav-ethos': 'Filosofía', 'nav-features': 'Funciones', 'nav-tech': 'Tech', 'nav-diagnostics': 'Diagnósticos',
    'nav-legacy': 'Compatibilidad', 'nav-download': 'Descargar', 'nav-docs': 'Docs', 'nav-donate': 'Donar',
    'hero-title': 'La navaja suiza<br/>de las<br/><span class="accent">carteras crypto.</span>',
    'hero-sub': 'Guarda. Envía. Haz staking. Recupera.<br/>Sin trading, sin swaps, sin «comprar con tarjeta de crédito».<br/>Sin superficie de ataque para ladrones.',
    'hero-btn-download': 'Descargar Spectra', 'hero-btn-manual': 'Leer el manual →',
    'hero-stat-1': 'servidores entre tú y la cadena', 'hero-stat-2': 'formatos de cartera legacy soportados',
    'hero-stat-3': 'temas y plugins', 'hero-stat-4': 'objetivo: proteger tu dinero',
    'hero-trust': 'Cero telemetría. Cero cuentas. Cero anuncios. Cada línea de código es pública — léela, audítala, compílala tú mismo y verifica el binario. No podemos rastrearte porque lo construimos así.',
    'ethos-label': '/ 01 — FILOSOFÍA',
    'ethos-h2': 'Las cripto debían ser una <span class="strike">casino</span> <span class="accent">herramienta.</span>',
    'ethos-p1': 'En algún momento, las carteras se convirtieron en casinos. Brotaron botones de intercambio, rampas de tarjetas de crédito, galerías NFT, granjas de rendimiento y carruseles de «tokens en tendencia» diseñados para que hagas trading hasta quedarte sin nada.',
    'ethos-p2': 'Cada una de esas funciones también es una puerta. Una puerta para un sitio de phishing. Una puerta para un contrato malicioso. Una puerta para un hacker que solo necesita que hagas un clic. Cerramos cada una de esas puertas.',
    'ethos-p3': 'Spectra guarda tus monedas. Las envía. Las stakea. Las recupera cuando algo sale mal. Ese es todo el trabajo.',
    'ethos-is-title': 'Lo que Spectra es', 'ethos-not-title': 'Lo que Spectra no es',
    'ethos-is-1': 'Una cartera para guardar', 'ethos-is-2': 'Una herramienta de pago', 'ethos-is-3': 'Un cliente de staking',
    'ethos-is-4': 'Un kit de recuperación', 'ethos-is-5': 'Código abierto. Auditable. Reproducible.',
    'ethos-not-1': 'Un exchange', 'ethos-not-2': 'Un agregador DEX', 'ethos-not-3': 'Un «optimizador de rendimiento»',
    'ethos-not-4': 'Un lanzador de meme-tokens', 'ethos-not-5': 'Una máquina para hacerse rico rápido',
    'features-label': '/ 02 — FUNCIONES',
    'features-title': 'Cada hoja que realmente necesitas.<br/><span class="muted">Ninguna de las que te cortan.</span>',
    'f01-h': 'Multi-cadena, una mente', 'f01-p': 'Bitcoin, Ethereum, Litecoin, Monero, Solana y 40+ más bajo un solo llavero. Cada cadena aislada, cada saldo independiente.',
    'f02-h': 'Auto-diagnósticos', 'f02-p': 'La cartera ejecuta comprobaciones de salud continuas: conectividad de pares, sincronización de cadena, integridad de claves, racionalidad de tarifas del mempool. Cuando algo falla, eres el primero en saberlo.',
    'f03-h': 'Registros detallados, en texto claro', 'f03-p': 'Cada transacción, cada conexión, cada firma — escrita en un registro que puedes leer. Filtra, busca, exporta. Depura tu propia cartera.',
    'f04-h': 'Personalizable hasta el píxel', 'f04-p': 'Temas, diseños, atajos de teclado, disposición de paneles. Construye tu propia cartera sobre la nuestra con el SDK de plugins.',
    'f05-h': 'Hardware primero', 'f05-p': 'Soporte nativo para Ledger, Trezor, Coldcard, BitBox, Keystone, y cualquier dispositivo que use PSBT. Firma air-gapped mediante QR o microSD.',
    'f06-h': 'Control de monedas &amp; cirugía UTXO', 'f06-p': 'Elige manualmente qué UTXOs gastar. Etiquétalos. Congélalos. Evita la rastreabilidad. El tipo de control que los usuarios avanzados pedían.',
    'f07-h': 'Multisig &amp; PSBT', 'f07-p': '2-de-3, 3-de-5, lo que tu modelo de amenaza quiera. Construye, firma y transmite transacciones parcialmente firmadas entre máquinas.',
    'f08-h': 'Lightning para gastos diarios', 'f08-p': 'Nodo LN nativo o LSP remoto — tú decides. Tarifas mínimas, liquidación instantánea, cero custodia.',
    'f09-h': 'Staking sin rendirse', 'f09-p': 'Haz staking de ETH, SOL, ATOM, DOT y otros sin custodia. Tus validadores, tus claves, tus recompensas.',
    'f10-h': 'Tor &amp; RPC personalizado', 'f10-p': 'Enruta a través de Tor por defecto. Conéctate a tu propio nodo. Nunca más filtres direcciones a un indexador de terceros.',
    'f11-h': 'Copias de seguridad cifradas', 'f11-p': 'Shamir\'s Secret Sharing, placas de semilla BIP-39, instantáneas cloud cifradas — elige la que corresponda a tu nivel de paranoia.',
    'f12-h': 'Solo lectura &amp; almacenamiento en frío', 'f12-p': 'Monitorea saldos en una terminal pública sin exponer jamás las claves. Firma offline. Transmite online. Como debe ser.',
    'f13-h': 'Libreta de direcciones con etiquetas', 'f13-p': 'Etiqueta cada dirección con la que hayas interactuado. Solo local, cifrada, nunca sincronizada con la nube de nadie.',
    'f14-h': 'Oráculo de tarifas personalizado', 'f14-p': 'Elige entre mempool.space, tu propio nodo o un sat/vB fijo. Nunca más «la cartera eligió una tarifa absurda».',
    'f15-h': 'Compilaciones reproducibles', 'f15-p': 'Compila el binario tú mismo. Compara hashes. No confíes en nadie — incluyéndonos a nosotros.',
    'f16-h': 'Ligero', 'f16-p': 'Menos de 40 MB. Arranque en frío en menos de un segundo. Corre en un ThinkPad de 2014 sin sudar.',
    'mc-label': '/ MULTI-CADENA', 'mc-title': 'Una cartera.<br/><span class="accent">Todas las cadenas.</span>',
    'mc-lead': 'Spectra habla cada cadena principal de forma nativa — sin puentes, sin activos envueltos, sin plugins de terceros. Cada red corre en su propio llavero aislado para que un compromiso en una cadena nunca toque a otra.',
    'mc-more': '+ 40 más', 'mc-p1-num': 'Aislado', 'mc-p1-desc': 'Cada cadena vive en su propio llavero. Una filtración de clave en una red está contenida — no puede propagarse a otras.',
    'mc-p2-num': 'Nativo', 'mc-p2-desc': 'Sin tokens envueltos, sin puentes cross-chain, sin plugins de terceros. RPC directo a los propios nodos de cada red.',
    'mc-p3-num': 'Modular', 'mc-p3-desc': 'Importa tantas carteras como necesites — cada una con su propia frase semilla, su propia cadena, su propia identidad. Nada se comparte. Una brecha en un módulo deja todos los demás intactos.',
    'proto-label': '/ SOPORTE DE PROTOCOLOS',
    'proto-title': 'Construido para hoy.<br/><span class="accent">Listo para mañana.</span>',
    'proto-lead': 'Spectra rastrea cada actualización de protocolo importante en cada cadena soportada — así, cuando las redes evolucionan, tu cartera evoluciona con ellas. Sin esperar parches. Sin improvisar soluciones.',
    'proto-1-desc': 'Los bloques de extensión MimbleWimble protegen los montos de las transacciones y las direcciones de los participantes con pruebas criptográficas — privacidad opt-in completa sin bifurcar la capa base.',
    'proto-2-desc': 'BIP-340/341/342: las firmas Schnorr permiten la agregación de claves MuSig2 para que un multisig complejo sea indistinguible de un single-sig on-chain, mejorando la privacidad y reduciendo comisiones.',
    'proto-3-desc': 'Los canales de pago liquidan al instante off-chain por tarifas menores a un centavo. Spectra ejecuta un nodo LN nativo o se conecta a un LSP remoto — cero custodia, liquidación instantánea, tu elección.',
    'proto-4-desc': 'Account Abstraction convierte cada cartera en un contrato inteligente: patrocinio de gas, transacciones en lote y recuperación programable — sin ningún fork de protocolo.',
    'proto-5-desc': 'Las Ring Confidential Transactions ocultan montos mediante compromisos de Pedersen. Bulletproofs+ reduce el tamaño de las pruebas en más del 96% respecto a las pruebas de rango ingenuas, manteniendo los bloques ligeros.',
    'proto-6-desc': 'El formato mejorado de transacción Bitcoin parcialmente firmada añade roles por entrada y por salida, permitiendo flujos de firma multi-parte más limpios en carteras hardware y configuraciones air-gapped.',
    'diag-label': '/ 03 — DIAGNÓSTICOS',
    'diag-h2': 'La primera cartera que <span class="accent">te dice qué está mal</span> antes de que tengas que preguntar.',
    'diag-p': 'La mayoría de las carteras son cajas negras. Cuando algo se rompe — una transacción atascada, una desincronización, una mala estimación de tarifa — te quedas adivinando. Spectra viene con un panel de diagnósticos en vivo y un visor de registros estructurado que convierte «está roto» en «aquí está la línea y aquí está la solución».',
    'diag-li-1': '<b>Comprobaciones de salud:</b> conteo de pares, profundidad de sincronización, latencia del mempool, integridad de claves, pings RPC.',
    'diag-li-2': '<b>Reparación automática:</b> fallos comunes (caché UTXO obsoleto, tx huérfana) reparados con un clic.',
    'diag-li-3': '<b>Informes de bugs exportables:</b> redactados, firmados, listos para presentar como issue de GitHub.',
    'legacy-label': '/ 04 — COMPATIBILIDAD &amp; RECUPERACIÓN',
    'legacy-title': '¿Tienes una cartera vieja de 2013?<br/><span class="accent">Tráela a casa.</span>',
    'legacy-lead': 'Spectra está construido con un compromiso fanático con la retrocompatibilidad. Si tus monedas existen en la cadena, encontraremos la manera de leerlas. Soportamos formatos legacy que la mayoría de las carteras modernas abandonaron silenciosamente hace años.',
    'lc1-h': 'Importación de carteras', 'lc1-p': 'wallet.dat, Electrum 1.x &amp; 2.x, Multibit, Armory, Bither, Mycelium, Blockchain.info v2/v3, Coinomi, MEW keystore, JSON keystore (v3), WIF raw, claves cifradas BIP-38.',
    'lc2-h': 'Escáner de fondos perdidos', 'lc2-p': "Danos una frase semilla y exploraremos cada ruta de derivación común — BIP-32, 44, 49, 84, 86, m/0', m/0/0, Ledger Live, Electrum, personalizado — y sacaremos a la luz cada UTXO que encontremos.",
    'lc3-h': 'Contraseñas olvidadas', 'lc3-p': 'Fuerza bruta local y offline con reglas personalizadas: corrección de errores tipográficos, sustituciones comunes, diccionario + máscara. Tu máquina. Tu paciencia. Sin nube.',
    'lc4-h': 'Forks &amp; airdrops', 'lc4-p': 'Reclama BCH, BSV, BTG, ETC, ETHW desde tus antiguas direcciones BTC/ETH. Comprueba la elegibilidad para airdrops históricos en cadenas que olvidaste haber tocado.',
    'dl-label': '/ 05 — DESCARGAR', 'dl-title': 'Gratis. Para siempre. <span class="accent">Para siempre gratis.</span>',
    'dl-lead': 'Sin cuentas. Sin correos. Sin telemetría. Sin «nivel premium». Solo un binario que puedes verificar y ejecutar.',
    'dl-mac-meta': 'Universal · Apple Silicon + Intel', 'dl-win-meta': 'x86_64 · Win 10+',
    'dl-lin-meta': 'AppImage · deb · rpm · Flatpak', 'dl-src-meta': 'git clone &amp; compílalo tú mismo',
    'dl-src-size': '~6 min en un laptop', 'verify-label': 'VERIFICAR:',
    'donate-label': '/ 06 — DONAR',
    'donate-h2': 'Si Spectra alguna vez te ahorró dinero,<br/><span class="accent">por favor devuelve algo.</span>',
    'donate-p': 'Spectra no tiene inversores, ni token, ni nivel premium, ni anuncios, y nunca los tendrá. Todo el proyecto funciona gracias a donaciones de personas que creen que una cartera debe ser una cartera. Si eso eres tú, aquí están nuestras direcciones.',
    'footer-tagline': 'La navaja suiza de las carteras crypto.',
    'footer-h4-project': 'Proyecto', 'footer-source-mirror': 'Espejo de código', 'footer-repro': 'Compilaciones reproducibles', 'footer-audit': 'Auditorías de seguridad',
    'footer-h4-docs': 'Docs', 'footer-manual': 'Manual', 'footer-recovery': 'Guía de recuperación',
    'footer-h4-community': 'Comunidad', 'footer-mailing': 'Lista de correo', 'footer-bugs': 'Seguimiento de errores',
    'footer-copyright': '© 2026 Contribuidores de Spectra · GPL-3.0 · Sin garantía, sin telemetría, sin tonterías.',
  },

  // ----------------------------------------------------------
  pt: {
    'nav-ethos': 'Filosofia', 'nav-features': 'Funcionalidades', 'nav-tech': 'Tech', 'nav-diagnostics': 'Diagnósticos',
    'nav-legacy': 'Compatibilidade', 'nav-download': 'Baixar', 'nav-docs': 'Docs', 'nav-donate': 'Doar',
    'hero-title': 'O canivete suíço<br/>das<br/><span class="accent">carteiras crypto.</span>',
    'hero-sub': 'Guardar. Enviar. Fazer staking. Recuperar.<br/>Sem trading, sem swaps, sem «comprar com cartão de crédito».<br/>Sem superfície de ataque para ladrões.',
    'hero-btn-download': 'Baixar Spectra', 'hero-btn-manual': 'Ler o manual →',
    'hero-stat-1': 'servidores entre você e a cadeia', 'hero-stat-2': 'formatos de carteira legacy suportados',
    'hero-stat-3': 'temas e plugins', 'hero-stat-4': 'missão: proteger o seu dinheiro',
    'hero-trust': 'Zero telemetria. Zero contas. Zero anúncios. Cada linha de código é pública — leia-a, audite-a, compile-a você mesmo e verifique o binário. Não podemos rastrear você porque foi assim que o construímos.',
    'ethos-label': '/ 01 — FILOSOFIA',
    'ethos-h2': 'As cripto deveriam ser uma <span class="strike">cassino</span> <span class="accent">ferramenta.</span>',
    'ethos-p1': 'Em algum momento, as carteiras tornaram-se cassinos. Brotaram botões de troca, rampas de cartão de crédito, galerias NFT, fazendas de rendimento e carrosséis de «tokens em tendência» projetados para você fazer trading até sangrar.',
    'ethos-p2': 'Cada uma dessas funcionalidades também é uma porta. Uma porta para um site de phishing. Uma porta para um contrato malicioso. Uma porta para um hacker que só precisa que você clique uma vez. Fechamos cada uma dessas portas.',
    'ethos-p3': 'Spectra guarda as suas moedas. Envia as suas moedas. Faz staking das suas moedas. Recupera as suas moedas quando algo corre mal. Esse é todo o trabalho.',
    'ethos-is-title': 'O que Spectra é', 'ethos-not-title': 'O que Spectra não é',
    'ethos-is-1': 'Uma carteira para guardar', 'ethos-is-2': 'Uma ferramenta de pagamento', 'ethos-is-3': 'Um cliente de staking',
    'ethos-is-4': 'Um kit de recuperação', 'ethos-is-5': 'Código aberto. Auditável. Reproduzível.',
    'ethos-not-1': 'Uma exchange', 'ethos-not-2': 'Um agregador DEX', 'ethos-not-3': 'Um «otimizador de rendimento»',
    'ethos-not-4': 'Um lançador de meme-tokens', 'ethos-not-5': 'Uma máquina de enriquecimento rápido',
    'features-label': '/ 02 — FUNCIONALIDADES',
    'features-title': 'Cada lâmina que você realmente precisa.<br/><span class="muted">Nenhuma das que te cortam.</span>',
    'f01-h': 'Multi-cadeia, uma mente', 'f01-p': 'Bitcoin, Ethereum, Litecoin, Monero, Solana e 40+ outros num único chaveiro. Cada cadeia isolada, cada saldo independente.',
    'f02-h': 'Auto-diagnósticos', 'f02-p': 'A carteira executa verificações de saúde contínuas: conectividade de pares, sincronização de cadeia, integridade de chaves, sanidade de taxas do mempool. Quando algo está errado, você é o primeiro a saber.',
    'f03-h': 'Logs detalhados, em texto claro', 'f03-p': 'Cada transação, cada conexão, cada assinatura — escrita num log que você pode ler de verdade. Filtrar, pesquisar, exportar. Depure a sua própria carteira.',
    'f04-h': 'Personalizável até ao pixel', 'f04-p': 'Temas, layouts, atalhos de teclado, arranjo de painéis. Construa a sua própria carteira em cima da nossa com o SDK de plugins.',
    'f05-h': 'Hardware primeiro', 'f05-p': 'Suporte nativo para Ledger, Trezor, Coldcard, BitBox, Keystone e qualquer dispositivo que use PSBT. Assinatura air-gapped via QR ou microSD.',
    'f06-h': 'Controlo de moedas &amp; cirurgia UTXO', 'f06-p': 'Escolha manualmente quais UTXOs gastar. Etiquete-os. Congele-os. Evite rastreabilidade. O tipo de controlo que os utilizadores avançados sempre pediram.',
    'f07-h': 'Multisig &amp; PSBT', 'f07-p': '2-de-3, 3-de-5, o que o seu modelo de ameaça precisar. Construa, assine e transmita transações parcialmente assinadas entre máquinas.',
    'f08-h': 'Lightning para gastos diários', 'f08-p': 'Nó LN nativo ou LSP remoto — você decide. Taxas mínimas, liquidação instantânea, zero custódia.',
    'f09-h': 'Staking sem capitular', 'f09-p': 'Faça staking de ETH, SOL, ATOM, DOT e outros sem custódia. Os seus validadores, as suas chaves, as suas recompensas.',
    'f10-h': 'Tor &amp; RPC personalizado', 'f10-p': 'Encaminhe pelo Tor por padrão. Conecte-se ao seu próprio nó. Nunca mais vaze endereços para um indexador de terceiros.',
    'f11-h': 'Backups cifrados', 'f11-p': 'Shamir\'s Secret Sharing, placas de semente BIP-39, snapshots cloud cifrados — escolha o que corresponde ao seu nível de paranoia.',
    'f12-h': 'Apenas leitura &amp; armazenamento frio', 'f12-p': 'Monitorize saldos num terminal público sem nunca expor chaves. Assine offline. Transmita online. Como deve ser.',
    'f13-h': 'Livro de endereços com etiquetas', 'f13-p': 'Etiquete cada endereço com que já interagiu. Apenas local, cifrado, nunca sincronizado com a nuvem de ninguém.',
    'f14-h': 'Oráculo de taxas personalizado', 'f14-p': 'Escolha entre mempool.space, o seu próprio nó ou um sat/vB fixo. Nunca mais «a carteira escolheu uma taxa absurda».',
    'f15-h': 'Compilações reproduzíveis', 'f15-p': 'Compile o binário você mesmo. Compare hashes. Não confie em ninguém — incluindo nós.',
    'f16-h': 'Leve', 'f16-p': 'Menos de 40 MB. Arranque a frio em menos de um segundo. Corre num ThinkPad de 2014 sem esforço.',
    'mc-label': '/ MULTI-CADEIA', 'mc-title': 'Uma carteira.<br/><span class="accent">Todas as cadeias.</span>',
    'mc-lead': 'Spectra fala cada blockchain principal de forma nativa — sem pontes, sem ativos embrulhados, sem plugins de terceiros. Cada rede corre no seu próprio chaveiro isolado para que um compromisso numa cadeia nunca toque noutra.',
    'mc-more': '+ 40 mais', 'mc-p1-num': 'Isolado', 'mc-p1-desc': 'Cada cadeia vive no seu próprio chaveiro. Uma fuga de chave numa rede está contida — não pode propagar-se para outras.',
    'mc-p2-num': 'Nativo', 'mc-p2-desc': 'Sem tokens embrulhados, sem pontes cross-chain, sem plugins de terceiros. RPC direto para os próprios nós de cada rede.',
    'mc-p3-num': 'Modular', 'mc-p3-desc': 'Importe tantas carteiras quantas precisar — cada uma com a sua própria frase semente, a sua própria cadeia, a sua própria identidade. Nada é partilhado. Uma brecha num módulo deixa todos os outros intactos.',
    'proto-label': '/ SUPORTE DE PROTOCOLOS',
    'proto-title': 'Construído para hoje.<br/><span class="accent">Pronto para amanhã.</span>',
    'proto-lead': 'Spectra acompanha cada atualização de protocolo importante em cada cadeia suportada — assim, quando as redes evoluem, a sua carteira evolui com elas. Sem esperar por patches. Sem improvisar soluções.',
    'proto-1-desc': 'Os blocos de extensão MimbleWimble protegem os montantes das transações e os endereços dos participantes com provas criptográficas — privacidade opt-in completa sem bifurcar a camada base.',
    'proto-2-desc': 'BIP-340/341/342: as assinaturas Schnorr permitem a agregação de chaves MuSig2 para que um multisig complexo seja indistinguível de um single-sig on-chain, melhorando a privacidade e reduzindo taxas.',
    'proto-3-desc': 'Os canais de pagamento liquidam instantaneamente off-chain por taxas inferiores a um cêntimo. Spectra executa um nó LN nativo ou liga-se a um LSP remoto — zero custódia, liquidação instantânea, à sua escolha.',
    'proto-4-desc': 'A Account Abstraction transforma cada carteira num contrato inteligente: patrocínio de gas, transações em lote e recuperação programável — sem qualquer fork de protocolo.',
    'proto-5-desc': 'As Ring Confidential Transactions escondem montantes via compromissos de Pedersen. Bulletproofs+ reduz o tamanho das provas em mais de 96% face a provas de intervalo ingénuas, mantendo os blocos compactos.',
    'proto-6-desc': 'O formato melhorado de transação Bitcoin parcialmente assinada adiciona funções por entrada e por saída, permitindo fluxos de assinatura multi-parte mais limpos em carteiras de hardware e configurações air-gapped.',
    'diag-label': '/ 03 — DIAGNÓSTICOS',
    'diag-h2': 'A primeira carteira que <span class="accent">te diz o que está errado</span> antes de teres que perguntar.',
    'diag-p': 'A maioria das carteiras são caixas negras. Quando algo se parte — uma transação bloqueada, uma dessincronização, uma má estimativa de taxa — fica a adivinhar. Spectra vem com um painel de diagnósticos em tempo real e um visualizador de logs estruturado que transforma «está partido» em «aqui está a linha e aqui está a correção».',
    'diag-li-1': '<b>Verificações de saúde:</b> contagem de pares, profundidade de sincronização, latência do mempool, integridade de chaves, pings RPC.',
    'diag-li-2': '<b>Reparação automática:</b> falhas comuns (cache UTXO obsoleto, tx órfã) reparadas com um clique.',
    'diag-li-3': '<b>Relatórios de bugs exportáveis:</b> redigidos, assinados, prontos para submeter como issue no GitHub.',
    'legacy-label': '/ 04 — COMPATIBILIDADE &amp; RECUPERAÇÃO',
    'legacy-title': 'Tem uma carteira antiga de 2013?<br/><span class="accent">Traga-a para casa.</span>',
    'legacy-lead': 'Spectra é construído com um compromisso fanático com retrocompatibilidade. Se as suas moedas existem na cadeia, encontraremos uma forma de as ler. Suportamos formatos legacy que a maioria das carteiras modernas abandonou silenciosamente há anos.',
    'lc1-h': 'Importação de carteiras', 'lc1-p': 'wallet.dat, Electrum 1.x &amp; 2.x, Multibit, Armory, Bither, Mycelium, Blockchain.info v2/v3, Coinomi, MEW keystore, JSON keystore (v3), WIF raw, chaves cifradas BIP-38.',
    'lc2-h': 'Scanner de fundos perdidos', 'lc2-p': "Dê-nos uma frase semente e exploraremos cada caminho de derivação comum — BIP-32, 44, 49, 84, 86, m/0', m/0/0, Ledger Live, Electrum, personalizado — e traremos à superfície cada UTXO encontrado.",
    'lc3-h': 'Palavras-passe esquecidas', 'lc3-p': 'Força bruta local e offline com regras personalizadas: correção de erros de digitação, substituições comuns, dicionário + máscara. A sua máquina. A sua paciência. Sem nuvem.',
    'lc4-h': 'Forks &amp; airdrops', 'lc4-p': 'Reclame BCH, BSV, BTG, ETC, ETHW dos seus antigos endereços BTC/ETH. Verifique elegibilidade para airdrops históricos em cadeias que esqueceu ter tocado.',
    'dl-label': '/ 05 — BAIXAR', 'dl-title': 'Gratuito. Para sempre. <span class="accent">Para sempre gratuito.</span>',
    'dl-lead': 'Sem contas. Sem e-mails. Sem telemetria. Sem «nível premium». Apenas um binário que pode verificar e executar.',
    'dl-mac-meta': 'Universal · Apple Silicon + Intel', 'dl-win-meta': 'x86_64 · Win 10+',
    'dl-lin-meta': 'AppImage · deb · rpm · Flatpak', 'dl-src-meta': 'git clone &amp; compile você mesmo',
    'dl-src-size': '~6 min num laptop', 'verify-label': 'VERIFICAR:',
    'donate-label': '/ 06 — DOAR',
    'donate-h2': 'Se Spectra alguma vez te poupou dinheiro,<br/><span class="accent">por favor devolve um pouco.</span>',
    'donate-p': 'Spectra não tem investidores, nem token, nem nível premium, nem anúncios, e nunca terá. Todo o projeto funciona graças a doações de pessoas que acreditam que uma carteira deve ser uma carteira. Se é o seu caso, aqui estão os nossos endereços.',
    'footer-tagline': 'O canivete suíço das carteiras crypto.',
    'footer-h4-project': 'Projeto', 'footer-source-mirror': 'Espelho de código', 'footer-repro': 'Compilações reproduzíveis', 'footer-audit': 'Auditorias de segurança',
    'footer-h4-docs': 'Docs', 'footer-manual': 'Manual', 'footer-recovery': 'Guia de recuperação',
    'footer-h4-community': 'Comunidade', 'footer-mailing': 'Lista de correio', 'footer-bugs': 'Rastreador de bugs',
    'footer-copyright': '© 2026 Contribuidores Spectra · GPL-3.0 · Sem garantia, sem telemetria, sem disparates.',
  },
};

// ============================================================
// Language switcher
// ============================================================
let currentLang = 'en';

const htmlLangMap = { en: 'en', zh: 'zh-CN', fr: 'fr', es: 'es', pt: 'pt' };

function setLang(lang, { pushHistory = false } = {}) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = htmlLangMap[lang] || lang;

  const label = document.getElementById('langLabel');
  if (label) label.textContent = langNames[lang] || lang.toUpperCase();

  // Mark active option
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('lang-option--active', opt.dataset.lang === lang);
  });

  // Sync URL
  const url = new URL(window.location.href);
  if (lang === 'en') { url.searchParams.delete('lang'); }
  else { url.searchParams.set('lang', lang); }
  if (pushHistory) { history.pushState(null, '', url); }
  else { history.replaceState(null, '', url); }
}

// Read lang from URL on first load
(() => {
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param && translations[param]) setLang(param);
  else {
    // Still mark EN as active
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('lang-option--active', opt.dataset.lang === 'en');
    });
  }
})();

// Dropdown open/close
(() => {
  const picker   = document.getElementById('langPicker');
  const btn      = document.getElementById('langToggle');
  const dropdown = document.getElementById('langDropdown');
  if (!picker || !btn || !dropdown) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !dropdown.hidden;
    dropdown.hidden = open;
    btn.setAttribute('aria-expanded', String(!open));
  });

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      setLang(opt.dataset.lang, { pushHistory: true });
      dropdown.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', () => {
    dropdown.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ============================================================
// Cursor glow
// ============================================================
(() => {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y;
  window.addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; });
  const tick = () => {
    x += (tx - x) * 0.14; y += (ty - y) * 0.14;
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
    { cls: 't-prompt', text: 'spectra@local' }, { cls: '', text: ':~$ ' },
    { cls: '', text: 'spectra diagnose --all\n' },
    { cls: 't-dim', text: '[i] running 14 health checks...\n\n' },
    { cls: 't-ok', text: '  [✓] ' }, { cls: '', text: 'keychain integrity ........... ' }, { cls: 't-ok', text: 'OK\n' },
    { cls: 't-ok', text: '  [✓] ' }, { cls: '', text: 'wallet.dat read .............. ' }, { cls: 't-ok', text: 'OK ' }, { cls: 't-dim', text: '(legacy v0.3, 217 keys)\n' },
    { cls: 't-ok', text: '  [✓] ' }, { cls: '', text: 'btc node sync ................ ' }, { cls: 't-ok', text: 'OK ' }, { cls: 't-dim', text: '(block 882,140 / tip)\n' },
    { cls: 't-warn', text: '  [!] ' }, { cls: '', text: 'eth peer count ............... ' }, { cls: 't-warn', text: 'LOW ' }, { cls: 't-dim', text: '(2 peers, expected ≥ 8)\n' },
    { cls: 't-dim', text: '       └─ suggest: rotate bootstrap nodes\n' },
    { cls: 't-ok', text: '  [✓] ' }, { cls: '', text: 'mempool fee oracle ........... ' }, { cls: 't-ok', text: 'OK ' }, { cls: 't-dim', text: '(median 12 sat/vB)\n' },
    { cls: 't-ok', text: '  [✓] ' }, { cls: '', text: 'tor circuit .................. ' }, { cls: 't-ok', text: 'OK ' }, { cls: 't-dim', text: '(3 hops, exit DE)\n' },
    { cls: 't-ok', text: '  [✓] ' }, { cls: '', text: 'ledger device ................ ' }, { cls: 't-ok', text: 'OK ' }, { cls: 't-dim', text: '(Nano S+, fw 1.1.1)\n' },
    { cls: 't-ok', text: '  [✓] ' }, { cls: '', text: 'reproducible build hash ...... ' }, { cls: 't-ok', text: 'MATCH\n\n' },
    { cls: 't-dim', text: '13/14 checks passed · 1 warning · 0 errors\n' },
    { cls: 't-prompt', text: 'spectra@local' }, { cls: '', text: ':~$ ' },
  ];
  let lineIdx = 0, charIdx = 0, currentSpan = null;
  const newSpan = (cls) => { const s = document.createElement('span'); if (cls) s.className = cls; term.appendChild(s); return s; };
  const typeChar = () => {
    if (lineIdx >= lines.length) { const c = document.createElement('span'); c.className = 'cursor-blink'; term.appendChild(c); return; }
    const line = lines[lineIdx];
    if (!currentSpan) currentSpan = newSpan(line.cls);
    const char = line.text[charIdx];
    currentSpan.textContent += char;
    charIdx++;
    if (charIdx >= line.text.length) { lineIdx++; charIdx = 0; currentSpan = null; }
    setTimeout(typeChar, char === '\n' ? 90 : Math.random() * 6 + 4);
  };
  new IntersectionObserver((entries) => { if (entries[0].isIntersecting) { typeChar(); } }, { threshold: 0.25 }).observe(term);
})();

// ============================================================
// Reveal on scroll
// ============================================================
(() => {
  const els = document.querySelectorAll('.feature, .legacy-card, .dl-card, .hero-stats > div');
  els.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity .7s ease, transform .7s ease'; });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) { setTimeout(() => { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; }, i * 40); io.unobserve(entry.target); }
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
