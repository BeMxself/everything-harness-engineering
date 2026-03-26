export const timelineIntro =
  "下面按发布时间排序，把 agent engineering 的基础方法、tool surface 设计、long-running harness、以及 Codex/Claude 语境中的 harness engineering 逐步串起来。读者可以先看前半段建立方法论，再看后半段理解 harness 作为 coding-agent 工程抽象是如何成形的。";

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
