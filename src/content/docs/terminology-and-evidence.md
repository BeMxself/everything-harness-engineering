---
title: 术语与证据边界
description: How this repository distinguishes fact, vendor framing, and repository interpretation.
---

这页是本站的 `reference` 补充页。它不试图继续扩展概念，而是固定本站写作和研究时使用的一组边界规则。

如果你想知道 `harness engineering` 本身是什么，先看 [概念入口](../concept-entry/)；如果你想知道本站在下判断时到底依赖什么、哪些又只是我们的研究解释，这页就是那块地基。

## 本站里的三层证据

本站的判断尽量拆成三层：

| 层级 | 它是什么 | 在文中通常长什么样 |
| --- | --- | --- |
| `fact` | 可以直接回到一手来源核对的陈述 | “OpenAI 把 thread / turn / item 暴露成 conversation primitives” |
| `vendor framing` | 项目官方对自己的定位、自述和命名方式 | “X 官方称自己是 coding agent / agent harness / workflow system” |
| `repository interpretation` | 本仓库为了比较研究而做的工程划分与解释 | “我们把它归到 Agent Harnesses / Workflow Orchestration” |

这三层不是互斥关系，但不能混写。

### `fact`

`fact` 的标准不是“听起来合理”，而是“能回到一手材料确认”。一手材料包括：

- 官方博客 / engineering post
- 官方 docs
- 官方 repo README
- 官方协议、API 或架构说明

例如：

- Anthropic 区分 `workflows` 和 `agents`
- OpenAI 的 Codex App Server 公开了 `thread / turn / item` 这组 conversation primitives
- LangChain 在其博客里明确提出 `Agent = Model + Harness`

这些都可以算 `fact`，因为原文里能直接找到。

### `vendor framing`

`vendor framing` 指项目或厂商如何描述自己。它很重要，因为它是理解一个系统“想解决什么问题”的第一入口，但它不自动等于跨项目通用定义。

例如：

- 一个项目官方自称 `coding agent`
- 一个项目 README 把自己叫作 `agent harness`
- 一个项目把自己描述为 `multi-agent orchestration`

这些都应优先保留原表达，再决定本仓库如何解释它。

### `repository interpretation`

`repository interpretation` 是本站真正的研究工作所在。它的目的不是取代官方定义，而是把不同来源放进同一个可比较坐标系里。

例如：

- 我们把某项目视为 `host-first`
- 我们认为某套系统更像 `workflow overlay` 而不是 `core harness`
- 我们认为某篇文章强调的是 `long-running harness design`，不是 `client protocol`

这类判断可以很有价值，但必须明确标注为本仓库解释，而不是写成“官方就是这样定义的”。

## 本站里几个最容易混淆的词

### `agent harness`

本站里用它来指模型外面那层让 agent 能工作、能恢复、能被约束的外壳系统。它偏系统对象。

它通常包括：

- prompt / context injection
- tools / skills / middleware
- execution environment / sandbox / filesystem
- memory / progress artifact / handoff surface
- verification / review / approval / guardrails

### `harness engineering`

本站里用它来指设计、调试、约束、简化和演化这层外壳的工程实践。它偏方法与实践。

简化地说：

- `harness` 是对象
- `harness engineering` 是围绕这个对象进行的工程活动

### `host`

`host` 指 agent 实际工作的主工作面，例如终端、IDE、桌面 app 或某个核心 runtime。它首先回答“agent 在哪里工作”。

在本站里，像 Codex、Claude Code、OpenCode 这类通常更适合先看成 `host`。

### `workflow / orchestration`

它更偏任务组织，关注的是多 agent、多模型、多审批节点如何被编进一个更大的闭环。

它可以与 harness 深度重叠，但不自动等于 harness。尤其当一个系统主要讨论的是阶段流转和任务分工，而不是主工作面、恢复面和控制面时，更适合优先看作 workflow / orchestration。

### `skills / methodology`

它更偏执行纪律和方法层，例如 spec-driven development、review discipline、context engineering、checklists。

它有时会成为 harness 的一层，但也可能独立存在于 harness 之外，所以本站通常把它们当作 `harness-adjacent` 对象来处理。

## 本站研究范围的默认前提

如果没有额外说明，本站默认讨论的是：

- `coding-agent / software-engineering` 语境
- agent 直接进入 repo、命令行、浏览器、测试或其他真实工程工作面
- 长任务、恢复、验证、人类控制面这些问题已经变得重要

这意味着：

- 我们不会把所有 agent systems 都自动纳入核心研究范围
- 我们也不会把某个厂商在自己产品里的 `harness` 用法，自动扩张成所有场景的统一定义

## 什么时候本站会有意保留模糊性

有些边界本来就在漂移，本站会保留这种不稳定性，而不是强行裁成硬边：

- `host` 与 `harness` 会互相吸收
- `harness` 与 `workflow` 经常重叠
- `skills` 有时只是 overlay，有时已经成为 load-bearing part
- 模型进步会让一些 harness 组件失去必要性，也会让新的组件变得重要

因此，本站更看重“当前主要重心”而不是“永久类别”。

## 写作与阅读规则

如果你在本站看到一句判断，最稳的读取方式是：

1. 先问：这是 `fact`、`vendor framing`，还是 `repository interpretation`？
2. 再问：这个判断是在什么语境下成立？
3. 最后问：它是在说 `host`、`harness`、`workflow`，还是方法层？

这套规则也会持续约束本站后续新增内容。

## 从这里继续读

- 如果你想回到完整概念定义，去 [概念入口](../concept-entry/)
- 如果你想看这些边界如何落到项目比较里，去 [生态与比较](../ecosystem-comparison/)
- 如果你想看一手材料如何支撑这些边界，去 [关键文章](../key-articles/)
