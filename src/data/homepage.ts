const BASE = "/everything-harness-engineering";
const CONCEPT_ENTRY = `${BASE}/concept-entry/`;
const KEY_ARTICLES = `${BASE}/key-articles/`;
const ECOSYSTEM_COMPARISON = `${BASE}/ecosystem-comparison/`;

export const hero = {
  title: "Everything Harness Engineering",
  tagline:
    "这里整理的是 harness engineering 的定义、形成过程、主要路线和可运行研究材料，重点是把这个领域真正值得区分的对象和问题放到同一张图里。",
};

export const navItems = [
  { href: "#definition", label: "概念入口" },
  { href: "#why", label: "演进与瓶颈" },
  { href: "#timeline", label: "关键文章" },
  { href: "#fundamentals", label: "基本构成" },
  { href: "#ecosystem", label: "生态与比较" },
  { href: "#topics", label: "研究专题" },
  { href: "#community", label: "社区讨论" },
  { href: "#observations", label: "工程观察" },
  { href: "#next", label: "下一步" },
];

export const fundamentals = [
  {
    title: "状态与持久化",
    summary:
      "让 agent 不只活在单个上下文窗口里，而能跨会话保存和恢复工作状态。",
  },
  {
    title: "工具与接口表面",
    summary:
      "为 agent 提供可用、可理解、边界清晰的工具表面，而不是只给人类友好的 API。",
  },
  {
    title: "执行环境",
    summary:
      "给 agent 一个真正能读写文件、执行命令、安装依赖并与外部系统交互的工作面。",
  },
  {
    title: "反馈与验证回路",
    summary:
      "通过测试、浏览器、日志、指标、review 等信号，让 agent 能观察结果并继续修正。",
  },
  {
    title: "上下文管理与知识注入",
    summary:
      "决定 agent 在每次运行时看到什么知识、看到多少，以及如何避免上下文腐坏。",
  },
  {
    title: "约束、规则与边界",
    summary:
      "用 guardrails、architecture rules、tool boundaries 和 stopping conditions 保证行为可控。",
  },
  {
    title: "续跑、交接与恢复",
    summary:
      "让长任务在多轮会话之间仍能持续推进，而不是每次都从猜测当前状态开始。",
  },
  {
    title: "人类控制面",
    summary:
      "保留 intent、优先级、审批、检查点和停止条件，使 humans steer, agents execute 成立。",
  },
];

export const taxonomy = [
  {
    title: "1. Coding Agents",
    description:
      "这类项目官方更常直接自称 coding agent、agentic coding tool，或者像 Aider 那样强调 AI pair programming。对研究来说，它们共同提供的是 agent 直接进入真实工程环境的主执行面。",
    note: "典型问题：如何让一个 coding agent 在真实仓库里持续完成工程任务？",
    href: ECOSYSTEM_COMPARISON,
  },
  {
    title: "2. 技能 / 方法论系统",
    description:
      "更强调 skills、meta-prompting、spec-driven development、review discipline 和执行方法论，本身未必自称 harness。",
    note: "典型问题：如何让 agent 不只是“会写”，而是按一套工程方法持续推进？",
    href: ECOSYSTEM_COMPARISON,
  },
  {
    title: "3. Agent Harnesses",
    description:
      "构建在某个宿主工作面之上的第二层系统：额外加入 hooks、agent teams、memory、HUD、规则层、恢复与约束机制。",
    note: "典型问题：如何把 coding agent 提升成更可控、更长时、更协作的工程环境？",
    href: ECOSYSTEM_COMPARISON,
  },
  {
    title: "4. 工作流 / 编排套件",
    description:
      "更强调多 agent 编排、交付流程、图结构或全链路开发平台，不一定围绕某个宿主工作面，但解决的是相邻的大闭环问题。",
    note: "典型问题：如何把多个模型、工具、人类审批与交付节点编成一个稳定系统？",
    href: ECOSYSTEM_COMPARISON,
  },
];

export const timeline = [
  {
    date: "2024-12",
    title: "Building Effective Agents",
    source: "Anthropic",
    summary:
      "把 workflows 与 agents 区分开来，并把简单、可组合模式当成一等工程对象来看待。",
    href: "https://www.anthropic.com/research/building-effective-agents",
  },
  {
    date: "2025-09",
    title: "Writing Effective Tools for Agents",
    source: "Anthropic",
    summary:
      "提醒我们：tool surface 的设计本身就是 harness 的一部分，而不是它外面的次级问题。",
    href: "https://www.anthropic.com/engineering/writing-tools-for-agents",
  },
  {
    date: "2025-11",
    title: "Effective Harnesses for Long-Running Agents",
    source: "Anthropic",
    summary:
      "通过 handoff、progress tracking 与 task continuation，把 harness 设计具体落到长时 coding agent 场景里。",
    href: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
  },
  {
    date: "2026-02",
    title: "Harness Engineering",
    source: "OpenAI + Martin Fowler",
    summary:
      "这个词开始作为工程抽象真正变得可读：它讨论的是如何 steer、constrain 并 operationalize agent systems。",
    href: "https://openai.com/index/harness-engineering/",
  },
  {
    date: "2026-03",
    title: "The Anatomy of an Agent Harness",
    source: "LangChain Blog",
    summary:
      "从部件层面把 “model + harness” 这个表达拆开，让它可检查、可讨论、可比较。",
    href: "https://blog.langchain.com/the-anatomy-of-an-agent-harness/",
  },
];

export const landscapeRows = [
  {
    name: "Claude Code",
    href: "https://docs.anthropic.com/en/docs/claude-code/common-workflows",
    intro: "Anthropic 官方将其描述为 agentic coding tool；在这里更适合把它看成 coding agent 宿主。",
    category: "Coding Agents",
    runtimeForm: "独立 agent 宿主",
  },
  {
    name: "Codex",
    href: "https://github.com/openai/codex",
    starsBadge: "https://img.shields.io/github/stars/openai/codex?style=social",
    intro: "OpenAI 官方将 Codex CLI 描述为运行在本地机器上的 coding agent；其 CLI 形态是这一层的典型代表。",
    category: "Coding Agents",
    runtimeForm: "独立 agent 宿主",
  },
  {
    name: "OpenCode",
    href: "https://github.com/anomalyco/opencode",
    starsBadge: "https://img.shields.io/github/stars/anomalyco/opencode?style=social",
    intro: "官方自称 open source AI coding agent，可作为终端、IDE 和桌面中的开放宿主。",
    category: "Coding Agents",
    runtimeForm: "独立 agent 宿主",
  },
  {
    name: "Goose",
    href: "https://github.com/block/goose",
    starsBadge: "https://img.shields.io/github/stars/block/goose?style=social",
    intro: "更广义的本地 AI agent，重点在工程自动化；虽然不只做 coding，但和这一层共享相同宿主工作面。",
    category: "Coding Agents",
    runtimeForm: "独立 agent 宿主",
  },
  {
    name: "oh-my-openagent",
    href: "https://github.com/code-yeongyu/oh-my-openagent",
    starsBadge: "https://img.shields.io/github/stars/code-yeongyu/oh-my-openagent?style=social",
    intro: "构建在 OpenCode 之上的 harness 增强层，补上规则、控制和长期执行能力。",
    category: "Agent Harnesses",
    runtimeForm: "宿主内扩展",
  },
  {
    name: "oh-my-codex",
    href: "https://github.com/Yeachan-Heo/oh-my-codex",
    starsBadge: "https://img.shields.io/github/stars/Yeachan-Heo/oh-my-codex?style=social",
    intro: "构建在 Codex 之上的控制层，加入 hooks、agent teams、HUD 等外层机制。",
    category: "Agent Harnesses",
    runtimeForm: "宿主内扩展",
  },
  {
    name: "oh-my-claudecode",
    href: "https://github.com/Yeachan-Heo/oh-my-claudecode",
    starsBadge: "https://img.shields.io/github/stars/Yeachan-Heo/oh-my-claudecode?style=social",
    intro: "构建在 Claude Code 之上的 teams-first 编排层，强调多 agent 协作与调度。",
    category: "Agent Harnesses",
    runtimeForm: "宿主内扩展，可拉起外部 worker",
  },
  {
    name: "Trellis",
    href: "https://github.com/mindfold-ai/Trellis",
    starsBadge: "https://img.shields.io/github/stars/mindfold-ai/Trellis?style=social",
    intro: "跨宿主的 harness 框架，试图把多平台 coding 环境统一到同一层控制面。",
    category: "Agent Harnesses",
    runtimeForm: "宿主内扩展（跨宿主）",
  },
  {
    name: "everything-claude-code",
    href: "https://github.com/affaan-m/everything-claude-code",
    starsBadge: "https://img.shields.io/github/stars/affaan-m/everything-claude-code?style=social",
    intro: "面向 agent harness 的增强系统，重点在性能优化与工作流加强。",
    category: "Agent Harnesses",
    runtimeForm: "宿主内扩展（跨宿主）",
  },
  {
    name: "superpowers",
    href: "https://github.com/obra/superpowers",
    starsBadge: "https://img.shields.io/github/stars/obra/superpowers?style=social",
    intro: "技能框架与软件开发方法论，重点不在宿主，而在执行纪律与方法层。",
    category: "技能 / 方法论系统",
    runtimeForm: "宿主内技能层",
  },
  {
    name: "get-shit-done",
    href: "https://github.com/gsd-build/get-shit-done",
    starsBadge: "https://img.shields.io/github/stars/gsd-build/get-shit-done?style=social",
    intro: "强调 meta-prompting、context engineering 与 spec-driven development 的方法系统。",
    category: "技能 / 方法论系统",
    runtimeForm: "宿主内工作流层",
  },
  {
    name: "gstack",
    href: "https://github.com/garrytan/gstack",
    starsBadge: "https://img.shields.io/github/stars/garrytan/gstack?style=social",
    intro: "面向交付的角色化工作流，用多角色分工来组织产品与工程推进。",
    category: "工作流 / 编排套件",
    runtimeForm: "宿主内技能层",
  },
  {
    name: "ccg-workflow",
    href: "https://github.com/fengshao1227/ccg-workflow",
    starsBadge: "https://img.shields.io/github/stars/fengshao1227/ccg-workflow?style=social",
    intro: "以 Claude、Codex、Gemini 为核心的多模型协作工作流。",
    category: "工作流 / 编排套件",
    runtimeForm: "宿主内编排",
  },
  {
    name: "Ralph",
    href: "https://github.com/snarktank/ralph",
    starsBadge: "https://img.shields.io/github/stars/snarktank/ralph?style=social",
    intro: "一个会反复运行直到 PRD 条目完成的自主 agent loop，强调持续推进与任务闭环。",
    category: "工作流 / 编排套件",
    runtimeForm: "独立调度外壳",
  },
];

export const landscapePreviewRows = landscapeRows.filter((row) =>
  [
    "Claude Code",
    "Codex",
    "oh-my-codex",
    "everything-claude-code",
    "superpowers",
    "gstack",
  ].includes(row.name),
);

export const communityIntro =
  "这里单列社区讨论，不与上面的官方文章时间线混合。它们不是这个概念的官方定义，但能补足真实实践里的成本、失败模式、工具取舍与使用路径。";

export const communityThreads = [
  {
    title: "想开一个 harness engineering 实践的长期帖子，大家一起分享实践经验",
    href: "https://linux.do/t/topic/1791588",
    date: "2026-03-21",
    summary:
      "这是一条持续更新的实践帖，适合先看一遍社区是怎样理解 harness engineering 的，再顺着里面提到的工具和经验继续下钻。",
  },
  {
    title: "最近 harness，自主进化很火，大家有什么经验和用法吗？",
    href: "https://linux.do/t/topic/1789013/5",
    date: "2026-03-20",
    summary: "这是一组更偏经验交换的讨论，能帮助读者快速看到社区用户在实际使用里最关心的能力、成本和姿势。",
  },
  {
    title: "都在聊 AI-Native Engineering，分享几个 AI coding workflow",
    href: "https://linux.do/t/topic/1778922",
    date: "2026-03-18",
    summary: "如果你想把单个 harness 套件放回更大的 AI coding workflow 背景里看，这帖能提供一张更宽的参照面。",
  },
  {
    title: "Vibecoding 进阶教程总集篇——从能用到可控",
    href: "https://linux.do/t/topic/1776917",
    date: "2026-03-18",
    summary: "即使不直接使用 harness 这个词，这帖讨论的“从能用到可控”也和 harness engineering 关心的问题高度重合。",
  },
  {
    title: "OpenAI 提出 “Harness Engineering”：完全使用 Agent 进行编程的实践",
    href: "https://linux.do/t/topic/1677645/9",
    date: "2026-03-02",
    summary: "这帖适合配合 OpenAI 原文一起看，重点不在转述本身，而在看社区最先抓住了这个概念的哪些部分。",
  },
  {
    title: "Codex 增强版：对标 Claude Code 新增 Agent Teams、Hooks、anthropic api Agent 、WebUI",
    href: "https://linux.do/t/topic/1664790",
    date: "2026-02-26",
    summary: "这帖能帮助读者理解：社区很早就在把 agent 宿主往 hooks、teams 和控制层方向扩展，这正是今天很多 harness 套件的演化路径。",
  },
  {
    title: "新年来分享我的 oh-my-opencode 配置和学习心得",
    href: "https://linux.do/t/topic/1624433",
    date: "2026-02-17",
    summary: "如果你想看 OpenCode 生态里的真实配置、使用路径和踩坑经验，这帖提供了很具体的第一手材料。",
  },
  {
    title: "经过 8 个月 Claude Code 高强度实战，我们决定开源内部的最佳实践",
    href: "https://linux.do/t/topic/1539636",
    date: "2026-01-29",
    summary: "这帖的价值在于把长期实践沉淀成更系统的做法，适合拿来辨认哪些已经从提示技巧演化成工程外壳。",
  },
];

export const communityInsights = [
  {
    title: "控制面往往比代码面更重",
    summary:
      "24 小时运行里，实际代码改动往往远小于设计、协调、进度记录和交接等控制面产出。这说明瓶颈常常不在补几行代码，而在如何组织长期执行。",
  },
  {
    title: "长任务的关键是干净交接",
    summary:
      "上下文清洁、交接文档、计划文件与新会话续跑反复被强调。会话一旦退化成普通问答，整体效率会迅速下降。",
  },
  {
    title: "单一控制层 + 文档 API",
    summary:
      "讨论中反复出现一个共识：决策层不应淹没在代码细节里，更有效的做法是用文档、摘要、报告和图表压缩信息后再交给高阶决策模型。",
  },
  {
    title: "模型供应现实会反过来塑造 harness",
    summary:
      "很多 harness 实践不是静态 doctrine，而是在供应稳定性、可用性和成本约束下不断漂移。",
  },
];

export const topics = [
  {
    title: "framework-flow-diagrams",
    description:
      "一个可运行的研究应用，用来比较不同系统里的 automation loop、harness 层、控制点、宿主依赖与角色交接方式。",
    href: `${BASE}/topics/framework-flow-diagrams/site/`,
  },
];

export const nextLinks = [
  {
    title: "我想先看精确定义",
    description: "先建立工作定义、证据边界和关键判断问题。",
    href: CONCEPT_ENTRY,
  },
  {
    title: "我想先理解怎么选路线",
    description: "先看比较维度，再区分 host、harness、skills 和 workflow。",
    href: ECOSYSTEM_COMPARISON,
  },
  {
    title: "我想看这个领域是怎么形成的",
    description: "看注释型关键文章导读，理解概念如何逐步形成。",
    href: KEY_ARTICLES,
  },
  {
    title: "我想直接看可运行材料",
    description: "进入可交互专题，看这些判断如何落成研究材料。",
    href: `${BASE}/topics/framework-flow-diagrams/site/`,
  },
];
