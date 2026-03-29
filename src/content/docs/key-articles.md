---
title: 关键文章
description: 追踪 agent harness 与 harness engineering 如何逐步分化成形的一手材料导读。
---

这些文章不只是在共同解释一个词，而是在补两条逐渐分开的线：一条解释 `agent harness` 作为系统对象如何变清晰，另一条解释 `harness engineering` 如何上浮成工程实践语言。

- 哪些文章更偏 `agent harness` 与机制层
- 哪些文章更偏 `harness engineering` 的实践层
- 每篇文章到底补上了哪一层，而不只是“值得一读”

## 先分两条线读

| 线索 | 主要文章 | 想看清什么 |
| --- | --- | --- |
| `agent harness / 机制线` | Anthropic tools、Anthropic 长任务、OpenAI Codex loop / harness、LangChain anatomy | 宿主外壳、工具表面、恢复、协议和部件构成是如何成形的 |
| `harness engineering / 实践线` | OpenAI Harness Engineering、Martin Fowler、社区长期实践 | 人类如何围绕这些对象组织长期开发、交接、评审与控制 |

## 建议的阅读顺序

| 阅读阶段 | 先看什么 | 想解决的问题 |
| --- | --- | --- |
| 方法背景 | Anthropic 的前两篇 | 代理应该怎样组织，工具表面应该怎样设计 |
| `agent harness` / 机制线 | Anthropic 长任务文章 + OpenAI Codex loop / harness + LangChain | 长任务怎样续跑、验证、恢复，以及宿主如何被协议化、部件如何被拆开 |
| `harness engineering` / 实践线 | OpenAI + Martin Fowler + 社区实践 | 人如何围绕这些对象组织稳定开发、交接与控制 |

如果你还没有建立整体边界，建议先回到 [概念入口](../concept-entry/)；如果你想先搞清楚文中如何区分 `事实陈述`、`官方表述` 和 `研究解释`，先读 [术语与证据边界](../terminology-and-evidence/)；如果你已经知道大概在看什么，但想判断各类项目差异，再接 [生态与比较](../ecosystem-comparison/)。

## 2024-12-19 · Anthropic

### [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

- `新增重点`
  它把 `workflows` 和 `agents` 明确分开，并把“简单、可组合模式”放到一等工程位置。这使后续对 harness 的讨论不必一开始就滑向“大而全平台”。
- `它补上了哪一层`
  它最直接支撑的是方法背景，也帮助 [概念入口](../concept-entry/) 把 `工作流 / 编排` 与 `agent harness` 分开；但它还不是在直接定义 `harness engineering` 的实践层。
- `阅读提醒`
  这篇更像代理系统的方法起点，还没有进入编程宿主、持久线程或宿主协议这些问题。
- `接着读`
  读完后最自然的是接 [Writing Effective Tools for Agents](https://www.anthropic.com/engineering/writing-tools-for-agents)，把方法层推进到工具表面层。

## 2025-09-11 · Anthropic

### [Writing Effective Tools for Agents](https://www.anthropic.com/engineering/writing-tools-for-agents)

- `新增重点`
  它把工具描述、输入输出结构、反馈可读性和评估方式拉到台前，提醒我们：工具表面不是外围配件，而是代理能否稳定工作的承重部分。
- `它补上了哪一层`
  它更偏 `agent harness` 的工具表面与机制层，也解释了为什么很多 harness 讨论最终都会回到工具设计。
- `阅读提醒`
  这篇谈的是面向代理的接口，不等同于给人类设计接口。把这两者混掉，会误判很多 harness 设计。
- `接着读`
  如果你想看工具表面怎样进一步变成长任务控制问题，下一篇应该读 [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)。

## 2025-11-26 · Anthropic

### [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

- `新增重点`
  这是 Anthropic 把 harness 从一般代理方法论进一步压到长时编程工作流的关键文章。初始化器、渐进式编程、进度工件、干净交接这些机制在这篇文章里首次变得非常具体。
- `它补上了哪一层`
  它更偏 `agent harness` 如何支撑长任务、恢复与交接，也为后面的 `harness engineering` 实践总结提供了具体基础。
- `阅读提醒`
  这篇很强，但它关注的是长任务控制，不是完整的宿主协议层设计；因此它和 OpenAI 后面的 App Server 与会话原语视角是互补关系。
- `接着读`
  如果你想知道长任务闭环在具体宿主里长什么样，接 [Unrolling the Codex Agent Loop](https://openai.com/index/unrolling-the-codex-agent-loop/) 最顺。

## 2026-01-23 · OpenAI

### [Unrolling the Codex Agent Loop](https://openai.com/index/unrolling-the-codex-agent-loop/)

- `新增重点`
  它把注意力从抽象方法拉回实际宿主，把一个编程代理回路拆回一串可检查、可讨论的运行部件。
- `它补上了哪一层`
  它更偏 `agent harness` 的运行回路层，也是 [宿主与 Harness 结构图](../topics/) 这个专题最直接的背景材料之一。
- `阅读提醒`
  这篇主要解决执行回路的可见性，不单独回答协议表面、客户端与运行时的契约，或多客户端共享运行时这些问题。
- `接着读`
  下一篇自然是 [Unlocking the Codex Harness](https://openai.com/index/unlocking-the-codex-harness/)，看运行时外壳如何被进一步协议化。

## 2026-02-04 · OpenAI

### [Unlocking the Codex Harness](https://openai.com/index/unlocking-the-codex-harness/)

- `新增重点`
  它把会话原语、App Server 和客户端与运行时的边界单独拉出来讲，说明 harness 不只是提示词组织和工具调用，也是一层可复用的宿主运行时与协议设计。
- `它补上了哪一层`
  它更偏 `agent harness` 的宿主协议与客户端表面，也解释了为什么宿主要被单独当成研究对象。
- `阅读提醒`
  这篇最重要的不是某个产品实现细节，而是它把 `thread`、`turn`、`approval`、`tool execution` 暴露成了稳定接口。
- `接着读`
  读完它，再看 [Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/) 会更容易理解“为什么这些运行时对象值得被工程化”。

## 2026-02-11 · OpenAI

### [Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/)

- `新增重点`
  这是把“人类掌舵，代理执行”讲得最系统的一篇。仓库知识、代理可读性、架构防护栏、合并哲学等概念在这篇文章里被拼成了一套完整的工程语境。
- `它补上了哪一层`
  它更偏 `harness engineering` 的实践层主论证，也是“人类控制面”“规则与边界”这些主张最核心的一手来源之一。
- `阅读提醒`
  这篇很容易被读成“Codex 使用指南”，但它更有价值的部分其实是工程抽象，而不是产品技巧。
- `接着读`
  读完以后建议并行看 [Martin Fowler 那篇](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)，看看这个概念如何从厂商实践上浮成一般工程语言。

## 2026-02-17 · Martin Fowler

### [Harness Engineering](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)

- `新增重点`
  它把 harness engineering 从单一厂商语境里抽出来，提升成更一般的工程抽象：一整套用于约束、校正和驾驭 AI 代理的工具与实践。
- `它补上了哪一层`
  它更偏 `harness engineering` 的解释层与概念层，帮助整组文章保持边界感。
- `阅读提醒`
  它的价值更偏解释层和概念层，不提供像 Anthropic / OpenAI 那样具体的长任务机制细节。
- `接着读`
  如果你想把抽象重新拆回部件层，接 [The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/) 很合适。

## 2026-03-10 · LangChain Blog

### [The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/)

- `新增重点`
  它把 “Agent = Model + Harness” 讲得非常直白，并把持久存储、bash / 代码执行、记忆、压缩、验证、Ralph loop 这些部件拆成了可以逐项检查的工程对象。
- `它补上了哪一层`
  它最直接支撑 `agent harness` 的构件层拆解，把 harness 拆成“状态、工具、执行环境、反馈、恢复、人类控制面”等稳定部件。
- `阅读提醒`
  这篇非常适合做部件清单，但它不是官方统一标准；把它当作比较框架时，仍然需要回到具体宿主与运行时语境。
- `接着读`
  读完可以直接进入 [研究专题](../topics/)，看看这些部件差异如何在可运行比较材料里被画出来。

## 从这条时间线可以提炼什么

- 最先成熟的不是“万能代理”，而是对工作流、工具表面和反馈回路的工程化理解；这条线更多通向 `agent harness` 与机制层。
- 真正把话题推到 `harness engineering` 的，是长任务、恢复、人类控制面、交接与长期方法问题。
- 因此这条时间线最好拆成两条：一条解释 `agent harness` 如何成形，另一条解释 `harness engineering` 如何上浮成实践语言。
- 因此，读这些文章时最好同时区分三件事：`事实陈述`、`官方表述`、`研究解释`。

## 下一步怎么读

- 如果你现在最想把概念边界说清楚，回到 [概念入口](../concept-entry/)。
- 如果你已经开始问“那具体项目到底该怎么分”，去 [生态与比较](../ecosystem-comparison/)。
- 如果你想看这些判断如何变成可运行研究材料，直接进入 [研究专题](../topics/)。
