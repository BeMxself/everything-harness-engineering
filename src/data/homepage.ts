const BASE = "/everything-harness-engineering";
const CONCEPT_ENTRY = `${BASE}/concept-entry/`;
const KEY_ARTICLES = `${BASE}/key-articles/`;
const ECOSYSTEM_COMPARISON = `${BASE}/ecosystem-comparison/`;

export const hero = {
  title: "Everything Harness Engineering",
  tagline:
    "所谓 harness engineering，至少包含两层相关但不同的问题：agent harness 如何提供可控、可恢复的底层能力，以及 harness engineering 如何把提示词、MCP、工具、钩子、技能、子代理等机制组织成可运行的开发方法。",
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
      "让代理不只活在单个上下文窗口里，而能跨会话保存和恢复工作状态。",
  },
  {
    title: "工具与接口表面",
    summary:
      "为代理提供可用、可理解、边界清晰的工具表面，而不是只给人类友好的接口。",
  },
  {
    title: "执行环境",
    summary:
      "给代理一个真正能读写文件、执行命令、安装依赖并与外部系统交互的工作面。",
  },
  {
    title: "反馈与验证回路",
    summary:
      "通过测试、浏览器、日志、指标、评审等信号，让代理能观察结果并继续修正。",
  },
  {
    title: "上下文管理与知识注入",
    summary:
      "决定代理在每次运行时看到什么知识、看到多少，以及如何避免上下文腐坏。",
  },
  {
    title: "约束、规则与边界",
    summary:
      "用防护栏、架构规则、工具边界和停止条件保证行为可控。",
  },
  {
    title: "续跑、交接与恢复",
    summary:
      "让长任务在多轮会话之间仍能持续推进，而不是每次都从猜测当前状态开始。",
  },
  {
    title: "人类控制面",
    summary:
      "保留意图、优先级、审批、检查点和停止条件，使“人类掌舵，代理执行”真正成立。",
  },
];

export const taxonomy = [
  {
    title: "1. 编程代理（对象层）",
    description:
      "这类系统首先提供代理直接进入真实工程环境的宿主工作面，回答的问题是代理到底在哪里工作。",
    note: "典型问题：如何让代理真正进入仓库、执行命令、修改文件并完成单次工程任务？",
    href: ECOSYSTEM_COMPARISON,
  },
  {
    title: "2. Agent Harnesses（对象层）",
    description:
      "这类系统是围绕宿主工作面的第二层对象：补上控制、恢复、记忆、规则、委派与验证能力，让代理能更长时、更可控地工作。",
    note: "典型问题：如何把编程代理提升成更可恢复、更可协作、更可治理的工程环境？",
    href: ECOSYSTEM_COMPARISON,
  },
  {
    title: "3. Harness Engineering（实践层）",
    description:
      "这不是另一类系统，而是围绕 harness 展开的工程实践：如何组合提示词、MCP、工具、钩子、技能、子代理、记忆、审批与验证回路来驾驭代理做项目开发。",
    note: "典型问题：如何把这些机制组合成稳定的方法，而不是只堆功能？",
    href: CONCEPT_ENTRY,
  },
  {
    title: "4. 工作流 / 编排（协调层）",
    description:
      "这类系统更强调多代理、多模型、人类审批和交付节点的组织方式，处理的是更大的协调闭环。",
    note: "典型问题：如何把多个代理、人类和外部系统编成一条稳定交付链？",
    href: ECOSYSTEM_COMPARISON,
  },
];

export const timeline = [
  {
    date: "2024-12",
    title: "Building Effective Agents",
    source: "Anthropic",
    summary:
      "把工作流与代理区分开来，并把简单、可组合模式当成一等工程对象来看待。",
    href: "https://www.anthropic.com/research/building-effective-agents",
  },
  {
    date: "2025-09",
    title: "Writing Effective Tools for Agents",
    source: "Anthropic",
    summary:
      "提醒我们：工具表面的设计本身就是 harness 的一部分，而不是它外面的次级问题。",
    href: "https://www.anthropic.com/engineering/writing-tools-for-agents",
  },
  {
    date: "2025-11",
    title: "Effective Harnesses for Long-Running Agents",
    source: "Anthropic",
    summary:
      "通过交接、进度跟踪与任务续跑，把 agent harness 的长任务设计具体落到编程代理场景里。",
    href: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
  },
  {
    date: "2026-02",
    title: "Harness Engineering",
    source: "OpenAI + Martin Fowler",
    summary:
      "这个词开始更清楚地落到实践层：它讨论的是如何引导、约束并把代理系统组织成稳定的开发方法。",
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
    intro: "Anthropic 官方把它描述成面向编程的代理工具；更适合把它看成编程代理的宿主。",
    category: "对象层：编程代理",
    runtimeForm: "独立代理宿主",
  },
  {
    name: "Codex",
    href: "https://github.com/openai/codex",
    starsBadge: "https://img.shields.io/github/stars/openai/codex?style=social",
    intro: "OpenAI 官方将 Codex CLI 描述为运行在本地机器上的编程代理；它的 CLI 形态是这一层的典型代表。",
    category: "对象层：编程代理",
    runtimeForm: "独立代理宿主",
  },
  {
    name: "OpenCode",
    href: "https://github.com/anomalyco/opencode",
    starsBadge: "https://img.shields.io/github/stars/anomalyco/opencode?style=social",
    intro: "官方自称开源 AI 编程代理，可作为终端、IDE 和桌面中的开放宿主。",
    category: "对象层：编程代理",
    runtimeForm: "独立代理宿主",
  },
  {
    name: "Goose",
    href: "https://github.com/block/goose",
    starsBadge: "https://img.shields.io/github/stars/block/goose?style=social",
    intro: "更广义的本地 AI 代理，重点在工程自动化；虽然不只做编程，但和这一层共享相同宿主工作面。",
    category: "对象层：编程代理",
    runtimeForm: "独立代理宿主",
  },
  {
    name: "oh-my-openagent",
    href: "https://github.com/code-yeongyu/oh-my-openagent",
    starsBadge: "https://img.shields.io/github/stars/code-yeongyu/oh-my-openagent?style=social",
    intro: "构建在 OpenCode 之上的 harness 增强层，补上规则、控制和长期执行能力。",
    category: "对象层：Agent Harnesses",
    runtimeForm: "宿主内扩展",
  },
  {
    name: "oh-my-codex",
    href: "https://github.com/Yeachan-Heo/oh-my-codex",
    starsBadge: "https://img.shields.io/github/stars/Yeachan-Heo/oh-my-codex?style=social",
    intro: "构建在 Codex 之上的控制层，加入钩子、代理团队、HUD 面板等外层机制。",
    category: "对象层：Agent Harnesses",
    runtimeForm: "宿主内扩展",
  },
  {
    name: "oh-my-claudecode",
    href: "https://github.com/Yeachan-Heo/oh-my-claudecode",
    starsBadge: "https://img.shields.io/github/stars/Yeachan-Heo/oh-my-claudecode?style=social",
    intro: "构建在 Claude Code 之上的以团队为先的编排层，强调多代理协作与调度。",
    category: "对象层：Agent Harnesses",
    runtimeForm: "宿主内扩展，可拉起外部工作进程",
  },
  {
    name: "Trellis",
    href: "https://github.com/mindfold-ai/Trellis",
    starsBadge: "https://img.shields.io/github/stars/mindfold-ai/Trellis?style=social",
    intro: "跨宿主的 harness 框架，试图把多平台编程环境统一到同一层控制面。",
    category: "对象层：Agent Harnesses",
    runtimeForm: "宿主内扩展（跨宿主）",
  },
  {
    name: "everything-claude-code",
    href: "https://github.com/affaan-m/everything-claude-code",
    starsBadge: "https://img.shields.io/github/stars/affaan-m/everything-claude-code?style=social",
    intro: "面向 agent harness 的增强系统，重点在性能优化与工作流加强。",
    category: "对象层：Agent Harnesses",
    runtimeForm: "宿主内扩展（跨宿主）",
  },
  {
    name: "superpowers",
    href: "https://github.com/obra/superpowers",
    starsBadge: "https://img.shields.io/github/stars/obra/superpowers?style=social",
    intro: "以技能、检查清单和执行纪律定义工作方法，更接近 harness engineering 的实践层，而不是 agent harness 这一层。",
    category: "实践层：Harness Engineering",
    runtimeForm: "宿主内实践层",
  },
  {
    name: "get-shit-done",
    href: "https://github.com/gsd-build/get-shit-done",
    starsBadge: "https://img.shields.io/github/stars/gsd-build/get-shit-done?style=social",
    intro: "用元提示、上下文工程与规格驱动开发组织工作方法，属于 harness engineering 的方法层。",
    category: "实践层：Harness Engineering",
    runtimeForm: "宿主内实践层",
  },
  {
    name: "gstack",
    href: "https://github.com/garrytan/gstack",
    starsBadge: "https://img.shields.io/github/stars/garrytan/gstack?style=social",
    intro: "面向交付的角色化工作流，用多角色分工来组织产品与工程推进。",
    category: "协调层：工作流 / 编排",
    runtimeForm: "宿主内技能层",
  },
  {
    name: "ccg-workflow",
    href: "https://github.com/fengshao1227/ccg-workflow",
    starsBadge: "https://img.shields.io/github/stars/fengshao1227/ccg-workflow?style=social",
    intro: "以 Claude、Codex、Gemini 为核心的多模型协作工作流。",
    category: "协调层：工作流 / 编排",
    runtimeForm: "宿主内编排",
  },
  {
    name: "Ralph",
    href: "https://github.com/snarktank/ralph",
    starsBadge: "https://img.shields.io/github/stars/snarktank/ralph?style=social",
    intro: "一个会反复运行直到 PRD 条目完成的自主代理回路，强调持续推进与任务闭环。",
    category: "协调层：工作流 / 编排",
    runtimeForm: "独立调度外壳",
  },
];

export const communityIntro =
  "围绕 agent harness 和 harness engineering 的社区讨论不是官方定义，却最能补足真实实践里的成本、失败模式、工具取舍与使用路径。";

export const communityThreads = [
  {
    title: "想开一个 harness engineering 实践的长期帖子，大家一起分享实践经验",
    href: "https://linux.do/t/topic/1791588",
    date: "2026-03-21",
    summary:
      "这是一条持续更新的实践帖，适合先看一遍社区怎样理解 harness engineering，再顺着里面提到的工具和经验继续深入。",
  },
  {
    title: "最近 harness，自主进化很火，大家有什么经验和用法吗？",
    href: "https://linux.do/t/topic/1789013/5",
    date: "2026-03-20",
    summary: "这是一组更偏经验交换的讨论，能帮助读者快速看到社区用户在实际使用里最关心的能力、成本和做法。",
  },
  {
    title: "都在聊 AI-Native Engineering，分享几个 AI coding workflow",
    href: "https://linux.do/t/topic/1778922",
    date: "2026-03-18",
    summary: "如果想把单个 harness 套件放回更大的 AI 编程流程背景里看，这帖能提供一张更宽的参照面。",
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
    summary: "这帖能帮助读者理解：社区很早就在把代理宿主往钩子、团队协作和控制层方向扩展，这正是今天很多 harness 套件的演化路径。",
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
    summary: "这帖的价值在于把长期实践沉淀成更系统的做法，适合拿来辨认哪些已经从提示技巧演化成更稳定的开发方法和外层控制结构。",
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
    title: "单一控制层 + 文档接口",
    summary:
      "讨论中反复出现一个共识：决策层不应淹没在代码细节里，更有效的做法是用文档、摘要、报告和图表压缩信息后再交给高阶决策模型。",
  },
  {
    title: "模型供应现实会同时塑造 agent harness 与 harness engineering",
    summary:
      "很多 agent harness 设计和 harness engineering 做法都不是静态教条，而是在供应稳定性、可用性和成本约束下不断漂移。",
  },
];

export const topics = [
  {
    title: "宿主与 Harness 结构图",
    description:
      "一个可运行的研究应用，用来比较不同编程代理系统里的宿主工作面、agent harness、控制中心与恢复路径。",
    href: `${BASE}/topics/host-harness-flow-diagrams/site/`,
  },
];

export const nextLinks = [
  {
    title: "我想先看精确定义",
    description: "先分清 agent harness、机制层与 harness engineering 的边界。",
    href: CONCEPT_ENTRY,
  },
  {
    title: "我想先理解怎么选路线",
    description: "如果你在比较宿主、agent harness、方法系统和工作流，先看生态与比较。",
    href: ECOSYSTEM_COMPARISON,
  },
  {
    title: "我想看这个领域是怎么形成的",
    description: "看 agent harness 的对象层问题和 harness engineering 的实践层问题是怎样逐步分化、又彼此牵连的。",
    href: KEY_ARTICLES,
  },
  {
    title: "我想直接看可运行材料",
    description: "如果你想拆开一个 agent harness 到底由哪些层组成，先看专题。",
    href: `${BASE}/topics/host-harness-flow-diagrams/site/`,
  },
];
