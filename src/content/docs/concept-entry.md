---
title: 概念入口
description: A definition-, evolution-, and boundary-first entry for understanding harness engineering.
---

这页是一篇 `explanation` 型入口，不是术语表，也不是产品使用指南。它想回答的核心问题只有一个：

`harness engineering` 到底在讨论哪一层工程对象，为什么它既不等于 prompt engineering，也不等于某个 coding agent 产品本身？

## 先讲证据边界

这页里的内容刻意分成两层：

- `fact`
  来自 Anthropic、OpenAI、Martin Fowler、LangChain 等公开一手材料，尤其是 [关键文章](../key-articles/)
- `repository interpretation`
  是本仓库为了比较研究而给出的工程划分，用来帮助读者区分 host、harness、workflow、skills 等不同对象

因此，这页不是在宣布某个官方统一定义，而是在给出一个可追溯、可比较、可继续扩展的研究性工作定义。

## 工作定义

**Harness engineering** 不是单指某个 agent 会不会写代码，而是指一整套工程化外壳如何把模型能力变成持续可运行、可恢复、可验证、可协作的系统能力。

更准确地说，它关心的是模型外面那层让 agent 变得 `durable`、`legible`、`controllable` 的系统：

- 任务如何进入系统，如何被拆解、委派、恢复和完成
- agent 如何被规则、工具、状态、审批、验证与记忆层约束
- 如何把聪明模型变成能连续产出结果的工程系统
- 宿主、协议、线程生命周期与客户端表面如何共同构成可复用运行时

如果只想记住一句话，可以记成：

> `harness engineering` 研究的不是“模型会不会”，而是“系统怎样让 agent 持续、可控地工作”。

## 它不等于什么

- 不等于单次 `prompt engineering`
- 不等于某个 IDE 插件或聊天入口本身
- 不等于只会写 demo 的 `autonomous agent`
- 不等于只提供 orchestration primitives、但没有明确宿主工作面和执行约束的抽象框架

换句话说，只要一个说法还没有回答“agent 在哪里工作、谁来控制下一步、状态如何续跑、人类怎样介入”，它就还没有真正进入 harness engineering 的讨论中心。

## 它要求系统回答哪些关键问题

把这个概念说清楚，最好的方法不是重复定义，而是看一个系统是否真的回答了下面这些问题：

| 问题 | 它在追问什么 | 如果答不上来会怎样 |
| --- | --- | --- |
| agent 在哪里工作 | 它有没有真实宿主工作面，能不能读写 repo、跑命令、接触外部系统 | 系统会退回到“会说不会做” |
| 谁决定下一步 | 主控制中心在 runtime、pipeline、policy layer 还是人工审批 | 长任务里很快会失去节奏 |
| 什么东西会被持续保存 | state、memory、progress artifact、handoff 文档是否能跨轮继续工作 | 会话一断就从头理解 |
| 失败如何回流 | failure 是回到原控制器、回到 planning，还是只做局部 retry | 失败恢复成本不可见 |
| 人类怎样 steer | 审批、边界、规则、review、merge discipline 是否是系统对象 | 系统会变成不可读黑箱 |

这五个问题，也是后面 [生态与比较](../ecosystem-comparison/) 和 [研究专题](../topics/) 的主比较坐标。

## 演进与瓶颈

下面这张表不是官方统一分类，而是本仓库为了比较研究而采用的工程划分：

| 阶段 | 主要关注点 | 典型对象 | 主要瓶颈 |
| --- | --- | --- | --- |
| 代码补全 | 提高局部生成质量 | 补全模型、IDE inline completion | 这段代码能不能写对 |
| 对话式编程 | 跨文件理解、解释、修改 | chat-based coding assistants | 上下文组织是否足够完整 |
| Coding Agents | 直接进仓库、改文件、跑命令、做验证 | Codex、Claude Code、OpenCode 一类宿主 | 单次任务能否真正执行完 |
| Agent Harnesses | 在宿主之上补控制、恢复、记忆、规则和评审 | 宿主增强层、hooks/teams/memory systems | 长任务能否持续、可控、可恢复地跑 |
| Workflow / Orchestration | 多 agent、多模型、多审批节点协作 | 编排套件、交付工作流系统 | 系统级协调、分工与交付闭环是否稳定 |

关键不在“后一层取代前一层”，而在瓶颈逐层外移：先是写代码，再是理解仓库，再是完成任务，然后才是长期执行、跨会话恢复、人类审批和多角色协同。

## 通过比较来论证边界

要把 `harness engineering` 的边界说清楚，最好不要只下定义，而要和相邻对象并排比较：

| 对象 | 它主要解决什么 | 为什么不等同于 harness engineering | 与 harness 的关系 |
| --- | --- | --- | --- |
| `prompt engineering` | 改写输入、提示和任务表述 | 它通常不直接提供持久状态、工具执行、验证、审批或恢复机制 | 是 harness 的一部分，但不是整体 |
| `coding agent` 产品 / 宿主 | 给 agent 一个能进入真实工程环境的主执行面 | 它回答的是“agent 在哪里工作”，不自动回答“长期怎么控、怎么续跑、怎么交接” | 往往是 harness 的宿主层 |
| `agent harness` | 围绕宿主增加规则、记忆、hooks、评审、恢复与团队结构 | 它关注的是模型外部的控制面设计，而不是单个产品 UI | 是本仓库当前研究重点 |
| `workflow / orchestration` 系统 | 把多个 agent、人类和外部系统编进更大闭环 | 它的范围通常超过单个宿主或单条 agent loop | 与 harness 相邻，部分系统会把 harness 吸纳进去 |
| `skills` / 方法论系统 | 给 agent 注入执行纪律、spec、review 和工作方法 | 如果没有稳定宿主与执行面，它更像方法层而不是完整 harness | 常作为 harness 的提示层或知识层组件 |

通过这种比较可以更稳地看到本仓库的边界：我们关心的不是“所有 agent 系统”，而是模型外部那层把 agent 变成工程能力的工作面、控制面和恢复面。

## 基本构成

如果把 `harness engineering` 当成一层工程系统来看，它至少稳定涉及下面这些方面：

| 构成 | 它回答什么 | 典型来源 |
| --- | --- | --- |
| `状态与持久化` | agent 怎样跨会话保存和恢复工作状态 | Anthropic 长任务文章、LangChain anatomy |
| `工具与接口表面` | agent 面对的 tool surface 是否可理解、边界清晰 | Anthropic agent / tools 两篇 |
| `执行环境` | agent 是否有真实 repo、命令和外部系统工作面 | OpenAI harness / app server 文章 |
| `反馈与验证回路` | 测试、浏览器、日志、review 如何反向塑造下一轮 | Anthropic 长任务、OpenAI harness、LangChain 深代理材料 |
| `上下文管理与知识注入` | 每轮到底带什么知识继续运行 | Anthropic long-running apps、OpenAI harness |
| `约束、规则与边界` | guardrails、tool boundaries、stopping conditions 怎样工作 | Anthropic tools / agents、OpenAI harness |
| `续跑、交接与恢复` | 长任务如何 clean handoff，而不是重新猜状态 | Anthropic 长任务、社区实践材料 |
| `宿主协议与客户端表面` | thread、turn、approval、diff、tool execution 怎样变成稳定接口 | OpenAI app server / harness |
| `人类控制面` | humans steer, agents execute 如何真正成立 | OpenAI harness、Anthropic agent systems |

如果你想看这些构成在真实比较里如何展开，下一步应该进入 [研究专题](../topics/)。

## 为什么现在重要

从 2025-2026 的公开材料看，“模型已经够强，所以剩下只是工程包装”这个说法已经不够准确。更贴近当前状态的表述是：

- 瓶颈正在从“局部代码能不能生成出来”迁移到“agent 能不能在真实环境里持续推进、验证、恢复并交接下去”
- 执行环境本身已经成为 `load-bearing part`
- harness 正在从“内部脚手架”走向“可复用的工程表面”
- 它的重要性不是静态上升，而是随着模型改进不断换位置，新的模型会让旧脚手架失去必要性，也会暴露新的瓶颈

这也是为什么本仓库既要保留 [关键文章](../key-articles/) 的时间线，又要单独保留 [工程观察](../engineering-observations/) 和 [生态与比较](../ecosystem-comparison/) 这两种页面。

## 下一步怎么读

- 如果你想知道这个概念是怎样形成的，去 [关键文章](../key-articles/)
- 如果你已经开始问“那具体项目怎么分”，去 [生态与比较](../ecosystem-comparison/)
- 如果你想看这些判断怎样落到可运行材料，去 [研究专题](../topics/)
