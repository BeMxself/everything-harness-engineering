export const pageMeta = {
  title: "Harness Engineering Overview",
  description:
    "A public overview of harness engineering: what it is, why it matters, key articles, and the current landscape of harness and harness-like agent workflow suites.",
  updatedAt: "2026-03-26",
  githubUrl: "https://github.com/BeMxself/everything-harness-engineering",
};

export const sectionNav = [
  { href: "#definition", label: "定义" },
  { href: "#distinction", label: "分类" },
  { href: "#timeline", label: "文章时间线" },
  { href: "#discussion", label: "社区讨论" },
  { href: "#landscape", label: "当前生态" },
  { href: "#topics", label: "研究专题" },
];

export const definitionCards = [
  {
    title: "它关注什么",
    items: [
      "任务如何进入系统，如何被拆解、委派、恢复和完成",
      "agent 如何受规则、工具、状态、审批、验证与记忆层约束",
      "如何把“聪明模型”变成“能连续产出结果的工程系统”",
    ],
  },
  {
    title: "它不等于什么",
    items: [
      "不等于单次 prompt engineering",
      "不等于某个 IDE 插件本身",
      "不等于只会写 demo 的 autonomous agent",
    ],
  },
  {
    title: "为什么现在重要",
    items: [
      "模型能力已经足够强，真正的瓶颈开始转向系统化约束与执行环境",
      "团队需要的是可重复、可验证、可恢复、可协作的 agent 工程链路",
      "“agent 能做什么”正在快速让位于“你如何 harness 它”",
    ],
  },
];

export const distinctionCards = [
  {
    title: "1. Native Coding Shells",
    description:
      "直接给 coding agent 一个真实工作面：终端、repo、工具调用、权限、验证与执行闭环都围绕宿主 shell 展开。",
    note: "典型问题：如何让单个 coding agent 在真实仓库里持续完成工程任务？",
  },
  {
    title: "2. Harness Overlays",
    description:
      "构建在某个宿主 shell 之上的“第二层系统”：额外加入 hooks、agent teams、memory、HUD、规则层、恢复与约束机制。",
    note: "典型问题：如何把原生 shell 提升成更可控、更长时、更协作的工程环境？",
  },
  {
    title: "3. Skill / Methodology Systems",
    description:
      "更强调 skills、meta-prompting、spec-driven development、review discipline 和执行方法论，本身未必自称 harness。",
    note: "典型问题：如何让 agent 不只是“会写”，而是按一套工程方法持续推进？",
  },
  {
    title: "4. Orchestration / Delivery Systems",
    description:
      "更强调多 agent 编排、交付流程、图结构或全链路开发平台，不一定围绕某个宿主 shell，但解决的是相邻的大闭环问题。",
    note: "典型问题：如何把多个模型、工具、人类审批与交付节点编成一个稳定系统？",
  },
];

export const timelineArticles = [
  {
    title: "Building Effective Agents",
    url: "https://www.anthropic.com/research/building-effective-agents",
    source: "2024-12-19 · Anthropic",
    summary:
      "这是理解该领域的起点之一。它先把 workflows 与 agents 区分开来，并强调很多成功系统依赖的是简单、可组合的模式，而不是先上复杂框架。",
  },
  {
    title: "Writing Effective Tools for Agents",
    url: "https://www.anthropic.com/engineering/writing-tools-for-agents",
    source: "2025-09-11 · Anthropic",
    summary:
      "如果说前一篇回答“agent 应该怎么组织”，这一篇更接近回答“tool surface 应该怎么设计”。这对 harness 工程尤其关键，因为工具形态、反馈结构和评估方法本身就是 harness 的一部分。",
  },
  {
    title: "Effective Harnesses for Long-Running Agents",
    url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
    source: "2025-11-26 · Anthropic",
    summary:
      "这是“harness”从一般 agent 方法论进一步落到长期运行 coding agent 场景的关键文章。它把 initializer agent、incremental coding、progress file、clean handoff 这些机制说得很具体。",
  },
  {
    title: "Unrolling the Codex Agent Loop",
    url: "https://openai.com/index/unrolling-the-codex-agent-loop/",
    source: "2026-01-23 · OpenAI",
    summary:
      "这篇开始把注意力从抽象方法论切到 Codex 实际运行机制本身，帮助理解一个 coding agent 的 loop 到底由哪些部件组成。",
  },
  {
    title: "Unlocking the Codex Harness",
    url: "https://openai.com/index/unlocking-the-codex-harness/",
    source: "2026-02-04 · OpenAI",
    summary:
      "这篇把 App Server、conversation primitives 和 protocol 选型拉出来单独讲，说明 harness 不只是 prompt 层，也是宿主运行时与 client/runtime 契约设计问题。",
  },
  {
    title: "Harness Engineering: Leveraging Codex in an Agent-First World",
    url: "https://openai.com/index/harness-engineering/",
    source: "2026-02-11 · OpenAI",
    summary:
      "这篇文章把“humans steer, agents execute”推到极致，并把 repository knowledge、agent legibility、architecture guardrails、merge philosophy 这些概念系统化，基本定义了今天很多 coding harness 讨论的共同语境。",
  },
  {
    title: "Harness Engineering",
    url: "https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html",
    source: "2026-02-17 · Martin Fowler",
    summary:
      "这篇的重要价值在于把 harness engineering 从单一厂商的工程实践，提升成更一般化的工程抽象：用于约束、校正和驾驭 AI agents 的一整套工具与实践。",
  },
  {
    title: "The Anatomy of an Agent Harness",
    url: "https://blog.langchain.com/the-anatomy-of-an-agent-harness/",
    source: "2026-03-10 · LangChain Blog",
    summary:
      "这是帖子里明确提到但之前首页漏掉的一篇。它把 “Agent = Model + Harness” 这个表达讲得很直白，同时把 durable storage、bash/code execution、memory、compaction、verification 和 Ralph loop 拆成了一套更细的工程部件。",
  },
];

export const communityThreads = [
  {
    title: "想开一个 harness engineering 实践的长期帖子，大家一起分享实践经验",
    url: "https://linux.do/t/topic/1791588",
    source: "主讨论串",
    summary: "这是当前首页所吸收的核心社区材料。下面这组帖子，都是它正文里直接点名或挂链引用过的相关材料。",
  },
  {
    title: "新年来分享我的 oh-my-opencode 配置和学习心得",
    url: "https://linux.do/t/topic/1624433",
    source: "相关帖子",
    summary: "OMO 社区实践入口之一，很多关于 OMO 的配置和使用路径都可以从这里往回追。",
  },
  {
    title: "OpenAI 提出 “Harness Engineering”：完全使用 Agent 进行编程的实践",
    url: "https://linux.do/t/topic/1677645/9",
    source: "相关帖子",
    summary: "站内对 OpenAI 文章的转述与讨论，适合观察社区如何在早期阶段消化这个概念。",
  },
  {
    title: "最近 harness，自主进化很火，大家有什么经验和用法吗？",
    url: "https://linux.do/t/topic/1789013/5",
    source: "相关帖子",
    summary: "偏经验交流，能补足社区用户对 harness、自主进化和使用姿势的第一手体感。",
  },
  {
    title: "经过 8 个月 Claude Code 高强度实战，我们决定开源内部的最佳实践",
    url: "https://linux.do/t/topic/1539636",
    source: "相关帖子",
    summary: "适合和 harness engineering 视角交叉阅读，区分哪些是提示技巧，哪些已经变成系统化工程壳层。",
  },
  {
    title: "都在聊 AI-Native Engineering，分享几个 AI coding workflow",
    url: "https://linux.do/t/topic/1778922",
    source: "相关帖子",
    summary: "这是横向资料库，能帮助把单个 harness 套件放回更大的 workflow 和 AI-native engineering 生态中观察。",
  },
  {
    title: "Codex 增强版：对标 Claude Code 新增 Agent Teams、Hooks、anthropic api Agent 、WebUI",
    url: "https://linux.do/t/topic/1664790",
    source: "相关帖子",
    summary: "体现了社区很早就在用“增强层”和“编排层”的思路扩展 coding shell，这条路径与 harness overlay 很相近。",
  },
  {
    title: "Vibecoding 进阶教程总集篇——从能用到可控",
    url: "https://linux.do/t/topic/1776917",
    source: "相关帖子",
    summary: "虽然不一定直接使用 harness 一词，但它讨论的“可控性”与 harness engineering 关注的目标高度重叠。",
  },
];

export const communityInsights = [
  {
    title: "控制面往往比代码面更重",
    summary:
      "讨论串里最有价值的实测信号之一，是 24 小时运行里“实际代码改动”远小于“设计、协调、进度记录、交接”等控制面产出。这说明 harness engineering 的瓶颈常常不在补几行代码，而在如何组织长期执行。",
  },
  {
    title: "长任务的关键是 clean handoff",
    summary:
      "多位参与者都在强调上下文清洁、交接文档、计划文件与新会话续跑。会话跑久后如果只退化成普通问答，整体效率会迅速下降，说明“可恢复性”是长时 harness 的核心能力之一。",
  },
  {
    title: "single controller + document API",
    summary:
      "讨论中反复出现一个共识：决策层不应淹没在代码细节里。更有效的做法是保留一个干净的调度层，通过结构化文档、摘要、报告和图表把信息压缩后再交给高阶决策模型。",
  },
  {
    title: "模型供应现实会反过来塑造 harness",
    summary:
      "讨论串后期的模型配置已经从早期参考 OMO 社区配置，逐步转向以 `gpt-5.4` 和 `gpt-5.3-codex` 为主。这提醒我们：很多 harness 实践不是静态 doctrine，而是在供应稳定性、可用性和成本约束下不断漂移。",
  },
];

export const landscapeRows = [
  ["Codex", "https://github.com/openai/codex", "Lightweight coding agent that runs in your terminal", "Native Coding Shell", "终端中的 coding agent"],
  ["OpenCode", "https://opencode.ai/", "The open source coding agent", "Native Coding Shell", "开放式 coding shell / runtime"],
  ["Goose", "https://github.com/block/goose", "Open source, extensible AI agent", "Native Coding Shell", "通用 agent，包含 coding 场景"],
  ["oh-my-openagent", "https://github.com/code-yeongyu/oh-my-openagent", "the best agent harness; previously oh-my-opencode", "Harness Overlay", "构建在 OpenCode 之上的 harness 层"],
  ["oh-my-codex", "https://github.com/Yeachan-Heo/oh-my-codex", "Your codex is not alone. Add hooks, agent teams, HUDs...", "Harness Overlay", "构建在 Codex 之上的控制层"],
  ["oh-my-claudecode", "https://github.com/Yeachan-Heo/oh-my-claudecode", "Teams-first multi-agent orchestration for Claude Code", "Harness Overlay", "构建在 Claude Code 之上的编排层"],
  ["everything-claude-code", "https://github.com/affaan-m/everything-claude-code", "The agent harness performance optimization system", "Harness Overlay", "跨 Claude Code / Codex / OpenCode 的增强层"],
  ["superpowers", "https://github.com/obra/superpowers", "An agentic skills framework & software development methodology", "Skill / Methodology System", "skills + workflow discipline"],
  ["get-shit-done", "https://github.com/gsd-build/get-shit-done", "Meta-prompting, context engineering and spec-driven development system", "Skill / Methodology System", "spec-driven workflow layer"],
  ["gstack", "https://github.com/garrytan/gstack", "15 opinionated tools that serve as CEO, Designer, Eng Manager...", "Workflow / Orchestration Suite", "面向交付的角色化工作流"],
  ["ccg-workflow", "https://github.com/fengshao1227/ccg-workflow", "Claude + Codex + Gemini multi-model collaboration", "Workflow / Orchestration Suite", "多模型协作工作流"],
  ["gdim-workflow-skill", "https://github.com/BeMxself/gdim-workflow-skill", "No concise GitHub tagline; repository centers on a named workflow skill", "Workflow / Orchestration Suite", "基于 GDIM 的 workflow skill 包"],
  ["Ralph", "https://github.com/Yeachan-Heo/oh-my-codex", "OMX docs describe $ralph as persistent sequential execution", "Workflow / Orchestration Suite", "OMX 内的持久执行工作流"],
] as const;

export const landscapeColumns = [
  {
    title: "Native Coding Shells",
    items: [
      ["Claude Code", "https://docs.anthropic.com/en/docs/claude-code/common-workflows"],
      ["Codex", "https://github.com/openai/codex"],
      ["OpenCode", "https://opencode.ai/"],
      ["Goose", "https://github.com/block/goose"],
      ["Aider", "https://aider.chat/"],
    ],
    note: "官方自述大多把自己定位为 coding agent 或 coding shell。它们是很多后续 harness overlay 的宿主层。",
  },
  {
    title: "Harness Overlays",
    items: [
      ["oh-my-openagent", "https://github.com/code-yeongyu/oh-my-openagent"],
      ["oh-my-codex", "https://github.com/Yeachan-Heo/oh-my-codex"],
      ["oh-my-claudecode", "https://github.com/Yeachan-Heo/oh-my-claudecode"],
      ["everything-claude-code", "https://github.com/affaan-m/everything-claude-code"],
    ],
    note: "这些系统直接构建在宿主 shell 之上，显式加入 hooks、agent teams、HUD、memory、guardrails、rules 和恢复机制，是当前“harness”味道最浓的一层。",
  },
  {
    title: "Skill / Methodology Systems",
    items: [
      ["superpowers", "https://github.com/obra/superpowers"],
      ["get-shit-done", "https://github.com/gsd-build/get-shit-done"],
    ],
    note: "这些项目常把自己描述成 skills framework、meta-prompting system、spec-driven development system 或 multi-model collaboration workflow。它们未必都自称 harness，但经常构成 harness 的方法层或部件层。",
  },
  {
    title: "Workflow / Orchestration Suites",
    items: [
      ["gstack", "https://github.com/garrytan/gstack"],
      ["ccg-workflow", "https://github.com/fengshao1227/ccg-workflow"],
      ["gdim-workflow-skill", "https://github.com/BeMxself/gdim-workflow-skill"],
      ["Ralph (OMX workflow)", "https://github.com/Yeachan-Heo/oh-my-codex"],
    ],
    note: "这里列的是可以直接落到真实任务编排上的 workflow layer，而不是底层图框架。它们更接近“怎么把任务持续跑下去”的工程表面。",
  },
  {
    title: "Related Frameworks / Infra",
    items: [
      ["OpenHands", "https://openhands.dev/"],
      ["LangGraph", "https://github.com/langchain-ai/langgraph"],
      ["Microsoft Agent Framework", "https://github.com/microsoft/agent-framework"],
      ["CrewAI", "https://www.crewai.com/"],
      ["GitHub Agentic Workflows", "https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/"],
    ],
    note: "这些项目仍然值得跟踪，但它们更偏 agent platform、graph orchestration、framework 或基础设施层，不应和可直接实践的 workflow 套件混为一谈。",
  },
];

export const topics = [
  {
    title: "framework-flow-diagrams",
    summary:
      "一个可运行的研究应用，用来比较不同体系如何表达自动化闭环、harness 壳层、控制点、宿主依赖和角色交接方式。它适合拿来做横向观察，而不是只看某一个项目自己的宣传话术。",
    openUrl: "./topics/framework-flow-diagrams/site/",
    sourceUrl: "https://github.com/BeMxself/everything-harness-engineering/tree/main/topics/framework-flow-diagrams",
  },
];
