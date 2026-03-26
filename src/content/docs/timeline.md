---
title: 文章时间线
description: Primary-source timeline for the emergence of harness engineering as an engineering abstraction.
---

下面按发布时间排序，把 agent engineering 的基础方法、tool surface 设计、long-running harness、以及 Codex / Claude 语境中的 harness engineering 串起来。建议先读前半段建立方法论，再读后半段理解 harness 作为 coding-agent 工程抽象是如何成形的。

## 2024-12-19 · Anthropic

### [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

这是理解该领域的起点之一。它先把 workflows 与 agents 区分开来，并强调很多成功系统依赖的是简单、可组合的模式，而不是先上复杂框架。

## 2025-09-11 · Anthropic

### [Writing Effective Tools for Agents](https://www.anthropic.com/engineering/writing-tools-for-agents)

如果说上一篇更接近回答“agent 应该怎么组织”，这一篇更接近回答“tool surface 应该怎么设计”。对 harness engineering 来说，工具形态、反馈结构和评估方法本身就是 harness 的组成部分。

## 2025-11-26 · Anthropic

### [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

这是 harness 从一般 agent 方法论进一步落到长期运行 coding agent 场景的关键文章。initializer agent、incremental coding、progress file、clean handoff 等机制在这里被讲得很具体。

## 2026-01-23 · OpenAI

### [Unrolling the Codex Agent Loop](https://openai.com/index/unrolling-the-codex-agent-loop/)

这篇把注意力从抽象方法论切到 Codex 实际运行机制，帮助理解一个 coding agent loop 到底由哪些部件组成。

## 2026-02-04 · OpenAI

### [Unlocking the Codex Harness](https://openai.com/index/unlocking-the-codex-harness/)

这篇把 App Server、conversation primitives 和 protocol 选型单独拉出来讲，提醒我们 harness 不只是 prompt 层，也是宿主运行时与 client/runtime 契约设计问题。

## 2026-02-11 · OpenAI

### [Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/)

这篇把 humans steer, agents execute 推到非常系统化的层面，并把 repository knowledge、agent legibility、architecture guardrails、merge philosophy 这些概念讲清楚，基本定义了今天很多 coding harness 讨论的共同语境。

## 2026-02-17 · Martin Fowler

### [Harness Engineering](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)

这篇的重要价值在于把 harness engineering 从单一厂商的工程实践提升成更一般化的工程抽象：用于约束、校正和驾驭 AI agents 的一整套工具与实践。

## 2026-03-10 · LangChain Blog

### [The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/)

它把 “Agent = Model + Harness” 讲得非常直白，同时把 durable storage、bash/code execution、memory、compaction、verification 和 Ralph loop 拆成了更细的工程部件。

## 如何使用这条时间线

- 先区分 fact 和 interpretation
- 优先阅读 primary source
- 把文章放回它们各自的 host/runtime 语境中理解，而不是抽空成统一模板
