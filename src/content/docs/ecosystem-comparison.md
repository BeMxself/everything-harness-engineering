---
title: 生态与比较
description: 一页围绕 harness 及其相邻系统展开的比较文章。
---

带有“代理”“工作流”“技能”“harness”等字样的项目常常被放在一起讨论，但它们并不总在同一层上。

把 `agent harness` 和 `harness engineering` 拆开以后，更稳的读法是先分两条比较轴：

- `对象层`
  编程代理、agent harness，以及更大的工作流 / 编排系统
- `实践层`
  harness engineering，以及常见的技能 / 方法系统

并排比较它们，不是为了排座次，而是为了先判断自己到底在看“系统对象”，还是在看“人如何组织这些对象做开发”。

为了让这些比较不漂移，这一页默认沿用 [文章证据工作法](../article-evidence-method/)：先参考关键文章里哪些要素最承重，再明确表格中哪些内容在保留 `官方表述`，哪些内容属于本文的 `研究解释`。

## 先建立比较坐标

- 如果你还没建立整体概念边界，先读 [概念入口](../concept-entry/)
- 如果你想知道这些比较维度是怎样从关键文章里提炼出来的，先读 [文章证据工作法](../article-evidence-method/)
- 如果你已经知道想比较什么，下表提供的是一组更稳的比较维度
- 表格里的 `官方自述 / 定位信号` 尽量保留项目当前公开 README / 文档 的表达；后面的归类和工作面判断属于文中的比较解释
- 其中有些格子写的是 `对象归类`，有些格子写的是 `实践定位`，它们不是同一条轴

官方定位信号按 **2026-03-27** 可见的公开项目页面整理。

## 比较之前，先看哪几个维度

| 维度 | 要问的问题 | 为什么重要 |
| --- | --- | --- |
| `主工作面` | 代理主要在终端、IDE、桌面宿主里工作，还是在更高层工作流中被组织 | 决定系统到底是以宿主为中心，还是以工作流为中心 |
| `控制中心` | 下一步主要由运行时、策略层、流水线关卡还是编排层决定 | 决定失败和恢复的成本怎样回流 |
| `持久化 / 恢复表面` | 系统有没有记忆、进度工件、规则、交接文档之类的持续面 | 决定它能不能支撑长任务 |
| `人类控制面` | 审批、评审、规则、规格和合并纪律是不是系统对象 | 决定它是否真正支持“人类掌舵，代理执行” |
| `宿主依赖` | 它是独立宿主、宿主内扩展，还是跨宿主协调层 | 决定它是基础工作面，还是覆盖其上的第二层系统 |

## 两条比较轴下常见的五种位置

- `编程代理（Coding Agents）`
  更偏宿主对象，首先回答“代理在哪里工作”
- `Agent Harnesses`
  更偏 agent harness 这一层，回答“如何在宿主之上补控制、恢复、记忆、规则与委派”
- `Harness Engineering`
  更偏工程实践层，回答“人如何围绕这些对象和机制组织长期开发方法”
- `技能 / 方法系统`
  更像实践层里的常见承载形态，回答“这种方法通过什么规范、技能、规格和检查清单落地”
- `工作流 / 编排`
  更偏更大范围的协调层，回答“如何把多个代理、人类审批和交付节点组织进闭环”

这些层次会互相吸收，但如果一开始不区分，后面的比较很容易失真。尤其是在编程代理语境里，宿主、`agent harness`、`harness engineering` 的实践层，以及工作流叠加层，本来就是几类不同的问题。

## 代表性项目比较

| 系统 | Stars | 官方自述 / 定位信号 | 对象归类 / 实践定位 | 主工作面 | 控制 / 持久化重心 | 归类理由 |
| --- | --- | --- | --- | --- | --- | --- |
| [Codex](https://github.com/openai/codex) | ![Codex stars](https://img.shields.io/github/stars/openai/codex?style=social) | Lightweight coding agent that runs in your terminal | 对象层：编程代理 | 终端中的编程代理宿主 | 主执行回路与仓库工作面 | 它首先回答的是代理如何直接进入真实工程环境 |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-workflows) | — | Anthropic 官方将其描述为 agentic coding tool | 对象层：编程代理 | Claude Code 宿主工作面 | 宿主内任务执行与常用工作流 | 更适合把它看作后续 harness 增强层的宿主 |
| [OpenCode](https://opencode.ai/) | ![OpenCode stars](https://img.shields.io/github/stars/anomalyco/opencode?style=social) | The open source AI coding agent | 对象层：编程代理 | 开放宿主，可运行于终端、IDE 与桌面 | 开放宿主与编程代理表面 | 重点仍然是宿主和代理执行面本身 |
| [Goose](https://github.com/block/goose) | ![Goose stars](https://img.shields.io/github/stars/block/goose?style=social) | Open source, extensible AI agent | 对象层：编程代理 | 更广义的本地工程代理宿主 | 可扩展宿主与本地执行 | 虽不只做编程，但它和这一层共享主工作面问题 |
| [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | ![oh-my-openagent stars](https://img.shields.io/github/stars/code-yeongyu/oh-my-openagent?style=social) | the best agent harness; previously oh-my-opencode | 对象层：Agent Harnesses | OpenCode 之上的宿主内扩展 | 以 runtime 为中心的规则、状态、命令、后台任务与专门代理 | 当前更稳的读法是：它不是单纯多放几个 agent preset，而是把 `ulw`、规划到执行接力、后台任务和持久状态重组成宿主内工作流协议 |
| [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | ![oh-my-codex stars](https://img.shields.io/github/stars/Yeachan-Heo/oh-my-codex?style=social) | Your codex is not alone. Add hooks, agent teams, HUDs... | 对象层：Agent Harnesses | Codex 之上的宿主内扩展 | 钩子、团队、HUD、控制层 | 重点不是取代 Codex，而是给 Codex 加可控、可协作的外层机制 |
| [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | ![oh-my-claudecode stars](https://img.shields.io/github/stars/Yeachan-Heo/oh-my-claudecode?style=social) | Teams-first multi-agent orchestration for Claude Code | 对象层：Agent Harnesses | Claude Code 之上的宿主内扩展 | 以团队为先的编排与宿主扩展 | 它明显跨到了编排层，但主要仍以内嵌在 Claude Code 宿主上的增强层出现 |
| [Trellis](https://github.com/mindfold-ai/Trellis) | ![Trellis stars](https://img.shields.io/github/stars/mindfold-ai/Trellis?style=social) | multi-platform AI coding framework / agent harness framing | 对象层：Agent Harnesses | 跨宿主 harness 层 | 跨宿主控制面与统一工作流 | 重点是把不同宿主收束进同一套增强层 |
| [everything-claude-code](https://github.com/affaan-m/everything-claude-code) | ![everything-claude-code stars](https://img.shields.io/github/stars/affaan-m/everything-claude-code?style=social) | agent harness performance optimization system | 对象层：Agent Harnesses | Claude Code 及相关宿主表面之上的增强层 | 策略、命令、记忆和专门代理 | 更像受治理的代理操作系统，而不是单次工作流模板 |
| [superpowers](https://github.com/obra/superpowers) | ![superpowers stars](https://img.shields.io/github/stars/obra/superpowers?style=social) | An agentic skills framework & software development methodology | 实践层：技能 / 方法系统 | 宿主内技能与工作流纪律 | 技能、清单与流程纪律 | 它最强的不是宿主，而是它如何承载 harness engineering 的执行纪律 |
| [get-shit-done](https://github.com/gsd-build/get-shit-done) | ![get-shit-done stars](https://img.shields.io/github/stars/gsd-build/get-shit-done?style=social) | Meta-prompting, context engineering and spec-driven development system | 实践层：技能 / 方法系统 | 宿主内工作流层 | 规格、上下文工程与元提示 | 更像方法系统和执行框架，而不是独立宿主 |
| [gstack](https://github.com/garrytan/gstack) | ![gstack stars](https://img.shields.io/github/stars/garrytan/gstack?style=social) | 15 opinionated tools that serve as CEO, Designer, Eng Manager... | 协调层：工作流 / 编排 | 角色化交付工作流 | 角色交接、流水线关卡与返工回路 | 它的强项更像任务组织和交付闭环 |
| [ccg-workflow](https://github.com/fengshao1227/ccg-workflow) | ![ccg-workflow stars](https://img.shields.io/github/stars/fengshao1227/ccg-workflow?style=social) | Claude + Codex + Gemini multi-model collaboration | 协调层：工作流 / 编排 | 多模型协作工作流 | 模型路由与协作流程 | 主要问题是多模型如何协同，不是单宿主如何被增强 |
| [Ralph](https://github.com/snarktank/ralph) | ![Ralph stars](https://img.shields.io/github/stars/snarktank/ralph?style=social) | autonomous AI agent loop that runs repeatedly until PRD items are complete | 协调层：工作流 / 编排 | 独立调度外壳 | 持续循环、PRD 驱动与完成态闭环 | 它更像围绕任务完成的自主调度器 |

对 `superpowers`、`get-shit-done` 这类项目，这张表主要是在写它们对 `harness engineering` 的实践定位，而不是把它们误当成另一类宿主产品。

## 什么时候该把它们放在一起看，什么时候不该

### 应该放在一起看的情况

- 你想比较“谁在控制下一步”
- 你想比较“失败后是回到运行时、回到规划阶段，还是进入新一轮编排”
- 你想比较“系统把长期执行的重量压在宿主、策略层、技能还是流水线上”

### 不应该直接放在一起看的情况

- 你只是想做“哪个最好用”的产品榜单
- 你把独立宿主和宿主内增强层当成同一层产品来比较
- 你把方法论系统和运行时系统混成一种“代理框架”

## 按问题进入，而不是按热点进入

### 如果你想先找一个主工作面

先看 `编程代理（Coding Agents）`：

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-workflows)
- [Codex](https://github.com/openai/codex)
- [OpenCode](https://opencode.ai/)
- [Goose](https://github.com/block/goose)
- [Aider](https://aider.chat/)

这类系统最先回答的是：代理能不能进入真实工程环境。

### 如果你已经有宿主，想增强长期执行与控制层

先看 `Agent Harnesses`：

- [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)
- [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)
- [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)
- [Trellis](https://github.com/mindfold-ai/Trellis)
- [everything-claude-code](https://github.com/affaan-m/everything-claude-code)

这类系统更适合回答：如何把一个会执行的代理变成更可控、更可恢复、更可协作的工程环境。

如果只先抓一条最有代表性的链路，当前很适合从 `OpenCode -> oh-my-openagent` 开始读：

- `OpenCode`
  更适合作为 `programmable host` 来理解，它原生已经暴露了 agent / subagent、session tree、skills、MCP、permissions、question 等 substrate
- `oh-my-openagent`
  更适合作为 `workflow-bearing harness` 来理解，它把这些 substrate 重新组织成 `ulw`、Prometheus 规划、`/start-work`、task/background state 这些更明确的参与协议

更细的源码结论，尤其是 `@plan` 与 Prometheus 之间目前仍存在的文档 / 源码张力，已经转到 [研究专题](../topics/) 继续展开。

### 如果你更关心执行纪律和开发方法

先看 `技能 / 方法系统`：

- [superpowers](https://github.com/obra/superpowers)
- [get-shit-done](https://github.com/gsd-build/get-shit-done)

这类系统最重要的价值，通常不在“它是不是一个 agent harness”，而在“它怎样承载 harness engineering”。它们经常进入 harness engineering 的核心实践层，也可能被某个 harness 吸纳，但不应自动等同于 `agent harness` 本身。

### 如果你更关心任务流转和交付闭环

先看 `工作流 / 编排套件`：

- [gstack](https://github.com/garrytan/gstack)
- [ccg-workflow](https://github.com/fengshao1227/ccg-workflow)
- [Ralph](https://github.com/snarktank/ralph)

这类系统更适合回答：如何把多个代理、多个模型和人类审批稳定地编成一条交付链。

## 相关框架与基础设施

- [OpenHands](https://openhands.dev/)
- [LangGraph](https://github.com/langchain-ai/langgraph)
- [Microsoft Agent Framework](https://github.com/microsoft/agent-framework)
- [CrewAI](https://www.crewai.com/)
- [GitHub Agentic Workflows](https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/)

这些项目仍然值得跟踪，但它们更偏代理平台、图编排、框架或基础设施层，不应和可直接实践的工作流套件混为一谈。是否把它们纳入更广义的 harness 讨论，要看研究问题是在问“系统如何被工程化”，还是在问“代理在哪个软件层里被组织”。

## 阅读提醒

- 这张表不是胜负榜，也不是稳定不变的最终定性
- 很多项目正在快速演化，名字、宿主支持和自我定位都可能继续漂移
- 它提供的是一个可追溯、可比较的观察切面
- 表中既有 `对象归类`，也有 `实践定位`；这两者都影响路线选择，但不是同一条分类轴
- 表中的归类只是为了把项目放进同一张比较坐标里，不等于它们的自我定义

如果想把这个比较进一步落实成可视结构，可以继续读 [研究专题](../topics/) 里的“宿主与 Harness 结构图”。
