---
title: 生态与比较
description: 一页围绕 harness 及其相邻系统展开的比较文章。
---

带有“代理”“工作流”“技能”“harness”等字样的项目常常被放在一起讨论，但它们并不总在同一层上。

这一页现在先把公开主叙事收成两层对象：

- `AI Agents`
  直接作为工作宿主或代理产品出现，首先回答“代理在哪里运行、如何执行”
- `Agent Harnesses`
  叠加在宿主之上的外层系统，首先回答“怎样补控制、恢复、状态、角色与用户参与契约”

`Harness Engineering` 仍然保留为分析视角，用来讨论人如何围绕这些对象组织长期开发方法。更底层的 framework / runtime / automation substrate 这轮不展开，因为它们太底层，也不是本站当前公开重点。

为了让这些比较不漂移，这一页默认沿用 [文章证据工作法](../article-evidence-method/)：先参考关键文章里哪些要素最承重，再明确表格中哪些内容在保留 `官方表述`，哪些内容属于本文的 `研究解释`。

## 先建立比较坐标

- 如果你还没建立整体概念边界，先读 [概念入口](../concept-entry/)
- 如果你想知道这些比较维度是怎样从关键文章里提炼出来的，先读 [文章证据工作法](../article-evidence-method/)
- 如果你已经知道想比较什么，下表提供的是一组更稳的比较维度
- 表格里的 `官方自述 / 定位信号` 尽量保留项目当前公开 README / 文档 的表达；后面的分层归类和工作面判断属于文中的比较解释
- 这页先按 `AI Agents / Agent Harnesses` 这条对象层来对齐；方法论差异与实践差异放进归类理由里展开

官方定位信号按 **2026-04-01** 可见的公开项目页面整理。

## 比较之前，先看哪几个维度

| 维度 | 要问的问题 | 为什么重要 |
| --- | --- | --- |
| `主工作面` | 代理主要在终端、IDE、桌面宿主里工作，还是在更高层工作流中被组织 | 决定系统到底是以宿主为中心，还是以工作流为中心 |
| `控制中心` | 下一步主要由运行时、策略层、流水线关卡还是编排层决定 | 决定失败和恢复的成本怎样回流 |
| `持久化 / 恢复表面` | 系统有没有记忆、进度工件、规则、交接文档之类的持续面 | 决定它能不能支撑长任务 |
| `人类控制面` | 审批、评审、规则、规格和合并纪律是不是系统对象 | 决定它是否真正支持“人类掌舵，代理执行” |
| `宿主依赖` | 它是独立宿主、宿主内扩展，还是跨宿主协调层 | 决定它是基础工作面，还是覆盖其上的第二层系统 |

## 先把焦点收成两层对象

- `AI Agents`
  这一层是宿主或代理产品本身，例如 `Claude Code`、`Codex`、`OpenCode`、`Goose`、`Aider`
- `Agent Harnesses`
  这一层是宿主之上的外层系统，既包括 `oh-my-openagent`、`oh-my-codex`、`Trellis` 这类宿主增强型 harness，也包括 `BMAD`、`superpowers`、`get-shit-done`、`Routa`、`gstack`、`ccg-workflow`、`Ralph` 这类方法系统或交付套件

这样对齐以后，`BMAD` 和 `gstack` 可以横向比较用户参与契约与交付流，`OMO` 和 `OMX` 可以横向比较宿主之上的控制面重组，而不用再把过于底层的 framework / runtime 也拉进同一张表。

## 代表性项目比较

| 系统 | Stars | 官方自述 / 定位信号 | 分层归类 | 主工作面 | 控制 / 持久化重心 | 归类理由 |
| --- | --- | --- | --- | --- | --- | --- |
| [Codex](https://github.com/openai/codex) | ![Codex stars](https://img.shields.io/github/stars/openai/codex?style=social) | Lightweight coding agent that runs in your terminal | `AI Agents` | 终端中的编程代理宿主 | 主执行回路与仓库工作面 | 它首先回答的是代理如何直接进入真实工程环境 |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-workflows) | — | Anthropic 官方将其描述为 agentic coding tool | `AI Agents` | Claude Code 宿主工作面 | 宿主内任务执行与常用工作流 | 更适合把它看作后续 harness 增强层的宿主 |
| [OpenCode](https://opencode.ai/) | ![OpenCode stars](https://img.shields.io/github/stars/anomalyco/opencode?style=social) | The open source AI coding agent | `AI Agents` | 开放宿主，可运行于终端、IDE 与桌面 | 开放宿主与编程代理表面 | 重点仍然是宿主和代理执行面本身 |
| [Goose](https://github.com/block/goose) | ![Goose stars](https://img.shields.io/github/stars/block/goose?style=social) | Open source, extensible AI agent | `AI Agents` | 更广义的本地工程代理宿主 | 可扩展宿主与本地执行 | 虽不只做编程，但它和这一层共享主工作面问题 |
| [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | ![oh-my-openagent stars](https://img.shields.io/github/stars/code-yeongyu/oh-my-openagent?style=social) | the best agent harness; previously oh-my-opencode | `Agent Harnesses` | OpenCode 之上的宿主内扩展 | 宿主内 workflow protocol、状态、命令、后台任务与执行接力 | 它属于宿主增强型 harness：把 `ulw`、Prometheus 规划、`/start-work -> Atlas`、后台任务和持久状态重组成宿主内工作流协议 |
| [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | ![oh-my-codex stars](https://img.shields.io/github/stars/Yeachan-Heo/oh-my-codex?style=social) | workflow layer for OpenAI Codex CLI；Codex remains the execution engine | `Agent Harnesses` | Codex 之上的宿主内扩展 | Codex substrate + workflow contract + `.omx/` state + optional team runtime | 它属于宿主增强型 harness：Codex 保留 approvals、sandbox、hooks、subagents、thread persistence 等底盘，OMX 再在外层加入 prompts、workflow skills、state shell 与 team/runtime escalation |
| [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | ![oh-my-claudecode stars](https://img.shields.io/github/stars/Yeachan-Heo/oh-my-claudecode?style=social) | Teams-first multi-agent orchestration for Claude Code | `Agent Harnesses` | Claude Code 之上的宿主内扩展 | 以团队为先的编排与宿主扩展 | 它仍然属于宿主之上的 harness，只是更明显地向团队协作和编排方向扩张 |
| [Trellis](https://github.com/mindfold-ai/Trellis) | ![Trellis stars](https://img.shields.io/github/stars/mindfold-ai/Trellis?style=social) | multi-platform AI coding framework / agent harness framing | `Agent Harnesses` | 跨宿主 harness 层 | 跨宿主控制面与统一工作流 | 它属于跨宿主 harness：重点是把不同宿主收束进同一套增强层 |
| [everything-claude-code](https://github.com/affaan-m/everything-claude-code) | ![everything-claude-code stars](https://img.shields.io/github/stars/affaan-m/everything-claude-code?style=social) | agent harness performance optimization system | `Agent Harnesses` | Claude Code 及相关宿主表面之上的增强层 | 策略、命令、记忆和专门代理 | 它更像受治理的代理操作系统，仍然属于宿主之上的 harness |
| [superpowers](https://github.com/obra/superpowers) | ![superpowers stars](https://img.shields.io/github/stars/obra/superpowers?style=social) | An agentic skills framework & software development methodology | `Agent Harnesses` | 宿主内技能与工作流纪律 | 技能、清单与流程纪律 | 它属于方法系统型 harness：重点不是新宿主，而是怎样把执行纪律装进现有宿主 |
| [get-shit-done](https://github.com/gsd-build/get-shit-done) | ![get-shit-done stars](https://img.shields.io/github/stars/gsd-build/get-shit-done?style=social) | Meta-prompting, context engineering and spec-driven development system | `Agent Harnesses` | 宿主内工作流层 | 规格、上下文工程与元提示 | 它属于方法系统型 harness：更像方法系统和执行框架，而不是独立宿主 |
| [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | ![BMAD-METHOD stars](https://img.shields.io/github/stars/bmad-code-org/BMAD-METHOD?style=social) | Breakthrough Method for Agile AI Driven Development；AI-driven agile development module ecosystem | `Agent Harnesses` | 安装到 Claude Code、Cursor 等宿主里的模块化方法系统 | 专门代理、34+ workflows、技能、builder 与模块生态 | 它属于方法系统型 harness：把分析、规划、架构、实现这些阶段编成可安装的方法模块，并通过专门 agent 与 workflow 在现有宿主里运行 |
| [Routa](https://github.com/phodal/routa) | ![Routa stars](https://img.shields.io/github/stars/phodal/routa?style=social) | Build Your Agent Team for Real-World AI Development；workspace-first multi-agent coordination platform | `Agent Harnesses` | 独立协调平台，覆盖 Web 与桌面 | Kanban orchestration、Specs、Review Guard、ACP agent lifecycle、workspace memory / traces | 它属于交付套件型 harness：重点不是增强某一个宿主，而是把外部 agents 和阶段化 specialist 流程组织成可见、可回流的交付闭环 |
| [gstack](https://github.com/garrytan/gstack) | ![gstack stars](https://img.shields.io/github/stars/garrytan/gstack?style=social) | 15 opinionated tools that serve as CEO, Designer, Eng Manager... | `Agent Harnesses` | 角色化交付工作流 | 角色交接、流水线关卡与返工回路 | 它属于交付套件型 harness：强项是任务组织和交付闭环，而不是底层 agent runtime |
| [ccg-workflow](https://github.com/fengshao1227/ccg-workflow) | ![ccg-workflow stars](https://img.shields.io/github/stars/fengshao1227/ccg-workflow?style=social) | Claude + Codex + Gemini multi-model collaboration | `Agent Harnesses` | 多模型协作工作流 | 模型路由与协作流程 | 它属于交付套件型 harness：主要问题是多模型如何协同交付，而不是单宿主如何被增强 |
| [Ralph](https://github.com/snarktank/ralph) | ![Ralph stars](https://img.shields.io/github/stars/snarktank/ralph?style=social) | autonomous AI agent loop that runs repeatedly until PRD items are complete | `Agent Harnesses` | 独立调度外壳 | 持续循环、PRD 驱动与完成态闭环 | 它属于交付套件型 harness：更像围绕任务完成的自主调度与闭环系统 |

对 `BMAD`、`superpowers`、`get-shit-done`、`Routa`、`gstack`、`Ralph` 这类项目，这张表现在统一把它们放在 `Agent Harnesses` 这一层，但会在 `归类理由` 里继续区分它们究竟更像宿主增强型 harness、方法系统型 harness，还是交付套件型 harness。

## 什么时候该把它们放在一起看，什么时候不该

### 应该放在一起看的情况

- 你想比较“谁在控制下一步”
- 你想比较“失败后是回到运行时、回到规划阶段，还是进入新一轮编排”
- 你想比较“系统把长期执行的重量压在宿主、策略层、技能还是流水线上”

### 不应该直接放在一起看的情况

- 你只是想做“哪个最好用”的产品榜单
- 你把独立宿主和宿主内增强层当成同一层产品来比较
- 你把方法系统、宿主增强层和太底层的 framework / runtime 混成同一层

## 按问题进入，而不是按热点进入

### 如果你想先找一个主工作面，先看 `AI Agents`

先看：

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-workflows)
- [Codex](https://github.com/openai/codex)
- [OpenCode](https://opencode.ai/)
- [Goose](https://github.com/block/goose)
- [Aider](https://aider.chat/)

这类系统最先回答的是：代理能不能进入真实工程环境。

### 如果你已经有宿主，想增强长期执行与控制层，先看 `Agent Harnesses`

先看：

- [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)
- [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)
- [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)
- [Trellis](https://github.com/mindfold-ai/Trellis)
- [everything-claude-code](https://github.com/affaan-m/everything-claude-code)
- [Routa](https://github.com/phodal/routa)

这类系统更适合回答：如何把一个会执行的代理变成更可控、更可恢复、更可协作的工程环境。

在这一层里，还可以继续区分三种常见形态：

- `宿主增强型 harness`
  `oh-my-openagent`、`oh-my-codex`、`oh-my-claudecode`、`Trellis`、`everything-claude-code`
- `方法系统型 harness`
  `BMAD-METHOD`、`superpowers`、`get-shit-done`
- `交付套件型 harness`
  `Routa`、`gstack`、`ccg-workflow`、`Ralph`

如果只先抓一条最有代表性的链路，当前很适合从 `OpenCode -> oh-my-openagent` 开始读：

- `OpenCode`
  更适合作为 `programmable host` 来理解，它原生已经暴露了 agent / subagent、session tree、skills、MCP、permissions、question 等 substrate
- `oh-my-openagent`
  更适合作为 `workflow-bearing harness` 来理解，它把这些 substrate 重新组织成 `ulw`、Prometheus 规划、`/start-work`、task/background state 这些更明确的参与协议

更细的源码结论，尤其是 `@plan` 与 Prometheus 之间目前仍存在的文档 / 源码张力，已经转到 [研究专题](../topics/) 继续展开。

如果你想对照另一条同样典型、但宿主更不一样的链路，也很适合接着读 `Codex -> oh-my-codex`：

- `Codex`
  更适合作为 `host substrate` 来理解，它公开暴露了 `AGENTS.md`、skills、MCP、hooks、subagents、approvals / sandbox 与 thread persistence 这组原生参与接口
- `oh-my-codex`
  更适合作为 `workflow layer` 来理解，它保留 Codex 作为 execution engine，再把 `/prompts:*`、`$plan`、`$deep-interview`、`$ralph`、`$team`、`.omx/` 与 optional team runtime 组织成更明确的参与协议

这条链更适合回答：当宿主自己已经是厚 substrate 时，外层 harness 到底是在替代宿主，还是在重组用户参与契约。

把这两条已经跑通的链路并排以后，还有一个更稳定的比较轴会浮出来：

| 比较轴 | `OpenCode -> oh-my-openagent` | `Codex -> oh-my-codex` |
| --- | --- | --- |
| `宿主厚度` | `OpenCode` 已经是厚宿主，但更像一组可编程原语 | `Codex` 更像带 policy boundary 与 thread persistence 的完整 substrate |
| `外层增量` | 更像把原语重组成更强的 `workflow-bearing harness` | 更像把厚宿主再组织成更清晰的 `workflow contracts + state shell` |
| `触发接口` | `@agent`、mode、`ulw`、`@plan`、`/start-work` 一类协议入口更居中 | `turn`、`AGENTS.md`、skills、approvals 先居中，再由 `/prompts:*`、`$plan`、`$team` 收敛工作协议 |
| `用户最关键的输入` | 目标、范围、约束、是否接受 interview / 计划转执行 | 目标、规则、是否采用 OMX 启动路径、选择哪条 workflow contract |
| `恢复 / 续跑重心` | session tree、background task、`.sisyphus` 状态与执行接力 | thread persistence、`.omx/` state、hooks extension 与 optional team runtime |

也就是说，现在更稳的比较方式已经不是“哪个生态更强”，而是：

- 外层到底接手了多少控制权
- 用户在什么时候还要自己做决定
- 长任务恢复到底是回到宿主 thread，还是回到外层状态壳

## 阅读提醒

- 这张表不是胜负榜，也不是稳定不变的最终定性
- 很多项目正在快速演化，名字、宿主支持和自我定位都可能继续漂移
- 它提供的是一个可追溯、可比较的观察切面
- 这页先按 `AI Agents / Agent Harnesses` 对齐对象层；方法论差异与实践差异会继续写进归类理由里
- 表中的归类只是为了把项目放进同一张比较坐标里，不等于它们的自我定义

如果想把这个比较进一步落实成可视结构，可以继续读 [研究专题](../topics/) 里的“宿主与 Harness 结构图”。
