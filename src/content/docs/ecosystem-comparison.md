---
title: 生态与比较
description: A research-oriented comparison page for harness and harness-adjacent systems.
---

这页既是 `explanation`，也是轻量 `reference`。它的目标不是做胜负榜，而是帮助读者在一堆都带有 agent、workflow、skills、harness 字样的项目里，先看清“正在比较的对象”到底是不是同一层问题。

## 如何使用这页

- 如果你还没建立整体概念边界，先读 [概念入口](../concept-entry/)
- 如果你已经知道想比较什么，这页的作用是给你一套更稳的比较维度
- 表格里 `官方自述 / 定位信号` 尽量保留项目当前公开 README / Docs 的表达；后面的分类和工作面判断属于本仓库的 `repository interpretation`

为避免时间漂移，这页里的官方定位信号按 **2026-03-27** 可见的公开项目页面整理。

## 比较之前，先看哪几个维度

| 维度 | 要问的问题 | 为什么重要 |
| --- | --- | --- |
| `主工作面` | agent 主要在终端、IDE、桌面宿主里工作，还是在更高层 workflow 中被组织 | 决定系统到底是 host-first 还是 workflow-first |
| `控制中心` | 下一步主要由 runtime、policy shell、pipeline gate 还是 orchestration layer 决定 | 决定失败和恢复的成本怎样回流 |
| `持久化 / 恢复表面` | 系统有没有 memory、progress artifact、rules、handoff 之类的持续面 | 决定它能不能支撑长任务 |
| `人类控制面` | 审批、review、rules、spec、merge discipline 是不是系统对象 | 决定它是否真正支持 humans steer |
| `宿主依赖` | 它是独立宿主、宿主内扩展，还是跨宿主协调层 | 决定它是基础工作面，还是覆盖其上的第二层系统 |

## 四类对象的最小区别

- `Coding Agents`
  更偏直接执行工程任务的宿主，首先回答“agent 在哪里工作”
- `Agent Harnesses`
  更偏运行机制，重点在控制、恢复、记忆、rules、hooks、teams 和 host extension
- `Skill / Methodology Systems`
  更偏执行纪律、spec、review、context engineering 和方法层
- `Workflow / Orchestration`
  更偏任务组织，把多 agent、人类审批和交付节点编进更大闭环

这些对象会互相吸收，但如果一开始不区分，后面的比较很容易失真。

## 代表性项目比较

| 系统 | 官方自述 / 定位信号 | 研究归类 | 主工作面 | 控制 / 持久化重心 | 本仓库为什么这样归类 |
| --- | --- | --- | --- | --- | --- |
| [Codex](https://github.com/openai/codex) | Lightweight coding agent that runs in your terminal | Coding Agents | 终端中的 coding agent 宿主 | 主 loop 与 repo 工作面 | 它首先回答的是 agent 如何直接进入真实工程环境 |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-workflows) | Anthropic 官方将其描述为 agentic coding tool | Coding Agents | Claude Code 宿主工作面 | 宿主内任务执行与常用 workflow | 研究上更适合把它看作后续 harness 增强层的 host |
| [OpenCode](https://opencode.ai/) | The open source AI coding agent | Coding Agents | 开放宿主，可运行于终端、IDE 与桌面 | 开放宿主 + coding agent 表面 | 重点仍然是宿主和 agent 执行面本身 |
| [Goose](https://github.com/block/goose) | Open source, extensible AI agent | Coding Agents | 更广义的本地工程 agent 宿主 | extensible host + local execution | 虽不只做 coding，但它和这一层共享主工作面问题 |
| [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | the best agent harness; previously oh-my-opencode | Agent Harnesses | OpenCode 之上的宿主内扩展 | runtime 周围的 rules、state、commands、specialists | 它最典型地体现了“在 host 之上再加第二层控制壳” |
| [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | Your codex is not alone. Add hooks, agent teams, HUDs... | Agent Harnesses | Codex 之上的宿主内扩展 | hooks、teams、HUD、控制层 | 重点不是取代 Codex，而是给 Codex 加可控、可协作的外层机制 |
| [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Teams-first multi-agent orchestration for Claude Code | Agent Harnesses | Claude Code 之上的宿主内扩展 | teams-first orchestration + host extension | 它跨到了 orchestration，但核心仍然压在 Claude Code 宿主之上 |
| [Trellis](https://github.com/mindfold-ai/Trellis) | multi-platform AI coding framework / agent harness framing | Agent Harnesses | 跨宿主 harness 层 | 跨宿主控制面与统一工作流 | 重点是把不同 host 收束进同一套增强层 |
| [everything-claude-code](https://github.com/affaan-m/everything-claude-code) | agent harness performance optimization system | Agent Harnesses | Claude Code / related host surface 之上的增强层 | policy、commands、memory、specialists | 更像 governed agent OS，而不是单次工作流模板 |
| [superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development methodology | Skill / Methodology System | 宿主内 skills / workflow discipline | skills、checklists、process discipline | 它最强的不是宿主，而是方法和执行纪律 |
| [get-shit-done](https://github.com/gsd-build/get-shit-done) | Meta-prompting, context engineering and spec-driven development system | Skill / Methodology System | 宿主内工作流层 | spec、context engineering、meta-prompting | 更像方法系统和执行框架，而不是独立 host |
| [gstack](https://github.com/garrytan/gstack) | 15 opinionated tools that serve as CEO, Designer, Eng Manager... | Workflow / Orchestration Suite | 角色化交付 workflow | role handoff、pipeline gates、rework loops | 它的强项更像任务组织和交付闭环 |
| [ccg-workflow](https://github.com/fengshao1227/ccg-workflow) | Claude + Codex + Gemini multi-model collaboration | Workflow / Orchestration Suite | 多模型协作 workflow | model routing + collaboration flow | 主要问题是多模型如何协同，不是单宿主如何被增强 |
| [gdim-workflow-skill](https://github.com/BeMxself/gdim-workflow-skill) | 围绕 GDIM workflow skill 组织的仓库 | Workflow / Orchestration Suite | 宿主内 workflow skill 包 | workflow discipline + staged execution | 重点在 named workflow 的执行秩序 |
| [Ralph](https://github.com/snarktank/ralph) | autonomous AI agent loop that runs repeatedly until PRD items are complete | Workflow / Orchestration Suite | 独立调度外壳 | 持续 loop、PRD 驱动、完成态闭环 | 它更像围绕任务完成的自主调度器 |

## 什么时候该把它们放在一起看，什么时候不该

### 应该放在一起看的情况

- 你想比较“谁在控制下一步”
- 你想比较“失败后是回到 runtime、回到 planning，还是进入新一轮 orchestration”
- 你想比较“系统把长期执行的重量压在 host、policy、skills 还是 pipeline 上”

### 不应该直接放在一起看的情况

- 你只是想做“哪个最好用”的产品榜单
- 你把独立宿主和宿主内增强层当成同一层产品来比较
- 你把方法论系统和运行时系统混成一种“agent framework”

## 按问题进入，而不是按 hype 进入

### 如果你想先找一个主工作面

先看 `Coding Agents`：

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-workflows)
- [Codex](https://github.com/openai/codex)
- [OpenCode](https://opencode.ai/)
- [Goose](https://github.com/block/goose)
- [Aider](https://aider.chat/)

这类系统最先回答的是：agent 能不能进入真实工程环境。

### 如果你已经有宿主，想增强长期执行与控制层

先看 `Agent Harnesses`：

- [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)
- [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)
- [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)
- [Trellis](https://github.com/mindfold-ai/Trellis)
- [everything-claude-code](https://github.com/affaan-m/everything-claude-code)

这类系统更适合回答：如何把一个会执行的 agent 变成更可控、更可恢复、更可协作的工程环境。

### 如果你更关心执行纪律和开发方法

先看 `Skill / Methodology Systems`：

- [superpowers](https://github.com/obra/superpowers)
- [get-shit-done](https://github.com/gsd-build/get-shit-done)

这类系统的价值通常不在“宿主是谁”，而在“执行过程是否可复制”。

### 如果你更关心任务流转和交付闭环

先看 `Workflow / Orchestration Suites`：

- [gstack](https://github.com/garrytan/gstack)
- [ccg-workflow](https://github.com/fengshao1227/ccg-workflow)
- [gdim-workflow-skill](https://github.com/BeMxself/gdim-workflow-skill)
- [Ralph](https://github.com/snarktank/ralph)

这类系统更适合回答：如何把多个 agent、多个模型和人类审批稳定地编成一条交付链。

## Related Frameworks / Infra

- [OpenHands](https://openhands.dev/)
- [LangGraph](https://github.com/langchain-ai/langgraph)
- [Microsoft Agent Framework](https://github.com/microsoft/agent-framework)
- [CrewAI](https://www.crewai.com/)
- [GitHub Agentic Workflows](https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/)

这些项目仍然值得跟踪，但它们更偏 agent platform、graph orchestration、framework 或基础设施层，不应和可直接实践的 workflow 套件混为一谈。

## 注

- 这个表不是胜负榜，也不是稳定不变的最终定性
- 很多项目正在快速演化，名字、宿主支持和自我定位都可能继续漂移
- 这里给出的不是 canonical taxonomy，而是一个可追溯、可比较的观察切面

如果想把这个比较进一步落成可视结构，下一步建议直接进 [研究专题](../topics/) 里的 `framework-flow-diagrams`。
