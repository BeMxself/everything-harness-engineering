---
title: 关键文章
description: Primary-source reading guide for how harness engineering takes shape.
---

这页不是简单时间线，而是一份注释型导读。它想回答两件事：

- `harness engineering` 是怎样从一般 agent 方法、tool surface 设计与长时执行问题，逐步收敛成今天这个工程抽象的
- 每篇文章在本仓库的研究框架里，到底补了哪一层，而不只是“值得一读”

## 怎么读这组文章

| 阅读阶段 | 先看什么 | 想解决的问题 |
| --- | --- | --- |
| 方法背景 | Anthropic 的前两篇 | agent 应该怎样组织，tool surface 应该怎样设计 |
| 长时执行 | Anthropic 长任务文章 + OpenAI Codex loop / harness 文章 | 长任务怎样续跑、验证、恢复，以及宿主如何被协议化 |
| 抽象上浮 | OpenAI / Martin Fowler / LangChain | 如何把厂商实践提升成可比较、可拆解的工程对象 |

如果你还没有建立整体边界，建议先回到 [概念入口](../concept-entry/)；如果你想先搞清楚本站如何区分 `fact`、`vendor framing` 和 `repository interpretation`，先读 [术语与证据边界](../terminology-and-evidence/)；如果你已经知道大概在看什么，但想判断各类项目差异，再接 [生态与比较](../ecosystem-comparison/)。

## 2024-12-19 · Anthropic

### [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

- `这篇新增了什么`
  它把 `workflows` 和 `agents` 明确分开，并把“简单、可组合模式”放到一等工程位置。这使后续对 harness 的讨论不必一开始就滑向“大而全平台”。
- `在本站框架里的位置`
  它最直接支撑的是 [概念入口](../concept-entry/) 里对 `workflow / orchestration` 与 `agent harness` 的区分，也给“不要把所有 agent 系统混成一种东西”提供了方法背景。
- `阅读时要注意`
  这篇更像 agent systems 的方法起点，还没有进入 coding-host、持久线程或宿主协议这些问题。
- `建议接着读`
  读完后最自然的是接 [Writing Effective Tools for Agents](https://www.anthropic.com/engineering/writing-tools-for-agents)，把方法层推进到工具表面层。

## 2025-09-11 · Anthropic

### [Writing Effective Tools for Agents](https://www.anthropic.com/engineering/writing-tools-for-agents)

- `这篇新增了什么`
  它把工具描述、输入输出结构、反馈可读性和评估方式拉到台前，提醒我们：tool surface 不是外围配件，而是 agent 能否稳定工作的 load-bearing part。
- `在本站框架里的位置`
  它直接支撑 [概念入口](../concept-entry/) 里的“工具与接口表面”“约束、规则与边界”这两层，也解释了为什么很多 harness 讨论最终都会回到 tool design。
- `阅读时要注意`
  这篇谈的是 agent-facing interface，不等同于给人类设计 API。把这两者混掉，会误判很多 harness 设计。
- `建议接着读`
  如果你想看工具表面怎样进一步变成长任务控制问题，下一篇应该读 [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)。

## 2025-11-26 · Anthropic

### [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

- `这篇新增了什么`
  这是 Anthropic 把 harness 从一般 agent 方法论进一步压到长时 coding 工作流的关键文章。initializer、incremental coding、progress artifact、clean handoff 这些机制在这里首次变得很具体。
- `在本站框架里的位置`
  它最直接支撑 [概念入口](../concept-entry/) 中的“续跑、交接与恢复”“反馈与验证回路”，也和 [工程观察](../engineering-observations/) 里的 `clean handoff` 判断互相照应。
- `阅读时要注意`
  这篇很强，但它关注的是长任务控制，不是完整的宿主协议层设计；因此它和 OpenAI 后面的 App Server / conversation primitives 视角是互补关系。
- `建议接着读`
  如果你想知道长任务闭环在具体宿主里长什么样，接 [Unrolling the Codex Agent Loop](https://openai.com/index/unrolling-the-codex-agent-loop/) 最顺。

## 2026-01-23 · OpenAI

### [Unrolling the Codex Agent Loop](https://openai.com/index/unrolling-the-codex-agent-loop/)

- `这篇新增了什么`
  它把注意力从抽象方法拉回实际宿主，把一个 coding agent loop 拆回一串可检查、可讨论的运行部件。
- `在本站框架里的位置`
  它是 [宿主与 Harness 结构图](../topics/) 这个专题最直接的背景材料之一，因为它帮助我们把“loop 到底在哪里闭合”从口号变成可画、可比较的对象。
- `阅读时要注意`
  这篇主要解决 loop 可见性，不单独回答 protocol surface、client/runtime 契约或多客户端共享运行时这些问题。
- `建议接着读`
  下一篇自然是 [Unlocking the Codex Harness](https://openai.com/index/unlocking-the-codex-harness/)，看运行时外壳如何被进一步协议化。

## 2026-02-04 · OpenAI

### [Unlocking the Codex Harness](https://openai.com/index/unlocking-the-codex-harness/)

- `这篇新增了什么`
  它把 conversation primitives、App Server 和 client/runtime 边界单独拉出来讲，说明 harness 不只是提示词组织和工具调用，也是一层可复用的宿主运行时与协议设计。
- `在本站框架里的位置`
  它是 [概念入口](../concept-entry/) 里“宿主协议与客户端表面”那一项最直接的一手来源，也解释了为什么本仓库把“host”单独当成研究对象。
- `阅读时要注意`
  这篇最重要的不是某个产品实现细节，而是它把 thread、turn、approval、tool execution 暴露成了稳定接口。
- `建议接着读`
  读完它，再看 [Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/) 会更容易理解“为什么这些运行时对象值得被工程化”。

## 2026-02-11 · OpenAI

### [Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/)

- `这篇新增了什么`
  这是把 `humans steer, agents execute` 讲得最系统的一篇。repository knowledge、agent legibility、architecture guardrails、merge philosophy 等概念在这里被拼成了一套完整的工程语境。
- `在本站框架里的位置`
  它基本定义了本站首页和 [概念入口](../concept-entry/) 的主论证框架，也是“人类控制面”“规则与边界”这些页面主张最核心的一手来源之一。
- `阅读时要注意`
  这篇很容易被读成“Codex 使用指南”，但它更有价值的部分其实是工程抽象，而不是产品技巧。
- `建议接着读`
  读完以后建议并行看 [Martin Fowler 那篇](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)，看看这个概念如何从厂商实践上浮成一般工程语言。

## 2026-02-17 · Martin Fowler

### [Harness Engineering](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)

- `这篇新增了什么`
  它把 harness engineering 从单一厂商语境里抽出来，提升成更一般的工程抽象：一整套用于约束、校正和驾驭 AI agents 的工具与实践。
- `在本站框架里的位置`
  它帮助本站保持边界感。我们不是在写某个产品的术语表，而是在追踪一个正在形成中的工程对象。
- `阅读时要注意`
  它的价值更偏解释层和概念层，不提供像 Anthropic / OpenAI 那样具体的长任务机制细节。
- `建议接着读`
  如果你想把抽象重新拆回部件层，接 [The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/) 很合适。

## 2026-03-10 · LangChain Blog

### [The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/)

- `这篇新增了什么`
  它把 “Agent = Model + Harness” 讲得非常直白，并把 durable storage、bash/code execution、memory、compaction、verification、Ralph loop 这些部件拆成了可以逐项检查的工程对象。
- `在本站框架里的位置`
  它最直接支撑本站把 harness 拆成“状态、工具、执行环境、反馈、恢复、人类控制面”等稳定构件，而不是把 harness 当成单个产品功能。
- `阅读时要注意`
  这篇非常适合做部件清单，但它不是官方统一标准；把它当作比较框架时，仍然需要回到具体 host/runtime 语境。
- `建议接着读`
  读完可以直接进入 [研究专题](../topics/)，看看这些部件差异如何在可运行比较材料里被画出来。

## 从这条时间线可以提炼什么

- 最先成熟的不是“万能 agent”，而是对 `workflow`、`tools` 和 `feedback` 的工程化理解。
- 真正把 harness 讨论推深的，不是模型能力本身，而是长任务、恢复、协议和人类控制面。
- 这个概念的上浮路径很清楚：先是方法，后是长时执行，再是宿主运行时，最后才是一般化工程抽象。
- 因此，读这些文章时最好同时区分三件事：`fact`、`vendor framing`、`repository interpretation`。

## 下一步怎么读

- 如果你现在最想把概念边界说清楚，回到 [概念入口](../concept-entry/)。
- 如果你已经开始问“那具体项目到底该怎么分”，去 [生态与比较](../ecosystem-comparison/)。
- 如果你想看这些判断如何变成可运行研究材料，直接进入 [研究专题](../topics/)。
