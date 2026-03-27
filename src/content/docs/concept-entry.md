---
title: 概念入口
description: A definition-, evolution-, and boundary-first entry for understanding harness engineering.
---

**Harness engineering** 不是单指某个 agent 会不会写代码，而是指一整套工程化外壳如何把模型能力变成持续可运行、可恢复、可验证、可协作的系统能力。

更准确地说，它关注的是：

- 任务如何进入系统，如何被拆解、委派、恢复和完成
- agent 如何被规则、工具、状态、审批、验证与记忆层约束
- 如何把聪明模型变成能连续产出结果的工程系统
- 宿主、协议、线程生命周期与客户端表面如何共同构成可复用的运行时

## 它不等于什么

- 不等于单次 `prompt engineering`
- 不等于某个 IDE 插件或聊天入口本身
- 不等于只会写 demo 的 autonomous agent
- 不等于只提供 orchestration primitives、但没有明确宿主工作面和执行约束的抽象框架

## 演进与瓶颈

下面这张表不是官方统一分类，而是本仓库为了比较研究而采用的工程划分：

| 阶段 | 主要关注点 | 典型对象 | 主要瓶颈 |
| --- | --- | --- | --- |
| 代码补全 | 提高局部生成质量 | 补全模型、IDE inline completion | 这段代码能不能写对 |
| 对话式编程 | 跨文件理解、解释、修改 | chat-based coding assistants | 上下文组织是否足够完整 |
| Coding Agents | 直接进仓库、改文件、跑命令、做验证 | Codex、Claude Code、OpenCode 一类宿主 | 单次任务能否真正执行完 |
| Agent Harnesses | 在宿主之上补控制、恢复、记忆、规则和评审 | 宿主增强层、hooks/teams/memory systems | 长任务能否持续、可控、可恢复地跑 |
| Workflow / Orchestration | 多 agent、多模型、多审批节点协作 | 编排套件、交付工作流系统 | 系统级协调、分工与交付闭环是否稳定 |

这一演进的关键，不是“后一层取代前一层”，而是瓶颈逐层外移：先是写代码，再是理解仓库，再是完成任务，然后才是长期执行、跨会话恢复、人类审批和多角色协同。

## 通过比较来论证边界

要把 `harness engineering` 的边界说清楚，最好不要只下定义，而要和相邻对象并排比较：

| 对象 | 它主要解决什么 | 为什么不等同于 harness engineering | 与 harness 的关系 |
| --- | --- | --- | --- |
| `prompt engineering` | 改写输入、提示和任务表述 | 它通常不直接提供持久状态、工具执行、验证、审批或恢复机制 | 是 harness 的一部分，但不是整体 |
| `coding agent` 产品/宿主 | 给 agent 一个能进入真实工程环境的主执行面 | 它回答的是“agent 在哪里工作”，不自动回答“长期怎么控、怎么续跑、怎么交接” | 往往是 harness 的宿主层 |
| `agent harness` | 围绕宿主增加规则、记忆、hooks、评审、恢复与团队结构 | 它关注的是模型外部的控制面设计，而不是单个产品 UI | 是本仓库当前研究重点 |
| `workflow / orchestration` 系统 | 把多个 agent、人类和外部系统编进更大闭环 | 它的范围通常超过单个宿主或单条 agent loop | 与 harness 相邻，部分系统会把 harness 吸纳进去 |
| `skills` / 方法论系统 | 给 agent 注入执行纪律、spec、review 和工作方法 | 如果没有稳定宿主与执行面，它更像方法层而不是完整 harness | 常作为 harness 的提示层或知识层组件 |

通过这种比较可以更稳地看到本仓库的边界：我们关心的不是“所有 agent 系统”，而是模型外部那层把 agent 变成工程能力的工作面、控制面和恢复面。

## 基本构成

如果把 `harness engineering` 当成一层工程系统来看，它至少稳定涉及下面这些基本方面：

- `状态与持久化`：让 agent 能跨会话保存和恢复工作状态，而不是只活在单个上下文窗口里。主要见 [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) 与 [LangChain: The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/).
- `工具与接口表面`：为 agent 提供可用、可理解、边界清晰的工具表面。主要见 [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) 与 [Anthropic: Writing Effective Tools for Agents](https://www.anthropic.com/engineering/writing-tools-for-agents).
- `执行环境`：给 agent 一个真正能读写文件、执行命令、安装依赖并与外部系统交互的工作面。主要见 [OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)、[OpenAI: Unlocking the Codex harness: how we built the App Server](https://openai.com/index/unlocking-the-codex-harness/) 与 [LangChain: The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/).
- `反馈与验证回路`：通过测试、浏览器、日志、指标、review 等信号，让 agent 能观察结果并继续修正。主要见 [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)、[OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) 与 [LangChain: Improving Deep Agents with harness engineering](https://blog.langchain.com/improving-deep-agents-with-harness-engineering/).
- `上下文管理与知识注入`：决定 agent 在每次运行时看到什么知识、看到多少，以及如何避免上下文腐坏。主要见 [Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps)、[OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) 与 [LangChain: The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/).
- `约束、规则与边界`：用 guardrails、architecture rules、tool boundaries 和 stopping conditions 保证行为可控。主要见 [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)、[Anthropic: Writing Effective Tools for Agents](https://www.anthropic.com/engineering/writing-tools-for-agents) 与 [OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/).
- `续跑、交接与恢复`：让长任务在多轮会话之间仍能持续推进，而不是每次都从猜测当前状态开始。主要见 [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)、[Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps) 与 [LangChain: The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/).
- `宿主协议与客户端表面`：把 thread、turn、tool execution、approval、diff 和事件流暴露成稳定接口，让不同客户端共享同一套 harness 运行时。主要见 [OpenAI: Unlocking the Codex harness: how we built the App Server](https://openai.com/index/unlocking-the-codex-harness/).
- `人类控制面`：保留 intent、优先级、审批、检查点和停止条件，使 humans steer, agents execute 成立。主要见 [OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) 与 [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents).

把这些方面放在一起看，会更容易理解为什么 `harness engineering` 讨论的不是单个 prompt 或单个工具，而是 agent 持续工作的外层系统。

## 为什么现在重要

从 2025-2026 公开的一手材料看，旧说法里“模型已经够强，所以剩下只是工程包装”已经不够准确。更贴近当前状态的表述是：

- 瓶颈正在从“局部代码能不能生成出来”迁移到“agent 能不能在真实环境里持续推进、验证、恢复并交接下去”。这一点在 [OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) 和 [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) 里都讲得很明确。
- 执行环境本身已经成为 load-bearing part。OpenAI 明确把工具、sandbox、review、线程持久化与审批流当成核心系统对象；Anthropic 也把初始化环境、progress artifact、context reset 与 clean handoff 当成长任务成败关键。
- Harness 正在从“内部脚手架”走向“可复用的工程表面”。例如 [OpenAI: Unlocking the Codex harness: how we built the App Server](https://openai.com/index/unlocking-the-codex-harness/) 已经把线程、turn、item、审批和工具执行暴露成明确协议，而不只是产品内部实现细节。
- 它的重要性不是静态上升，而是随着模型改进不断换位置。新的模型会让一部分脚手架失去必要性，同时把新的瓶颈暴露出来。这一点在 [Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps) 和 [LangChain: Improving Deep Agents with harness engineering](https://blog.langchain.com/improving-deep-agents-with-harness-engineering/) 中都能看到。
