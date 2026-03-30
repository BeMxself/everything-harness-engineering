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

如果你还没有建立整体边界，建议先回到 [概念入口](../concept-entry/)；如果你想先搞清楚文中如何区分 `事实陈述`、`官方表述` 和 `研究解释`，先读 [术语与证据边界](../terminology-and-evidence/)；如果你想先看“这页到底用什么方法读文章”，先读 [文章证据工作法](../article-evidence-method/)；如果你已经知道大概在看什么，但想判断各类项目差异，再接 [生态与比较](../ecosystem-comparison/)。

## 精读时先抓六个要素

如果只记“这篇讲了 harness”，很快就会把几条线混在一起。更稳的做法，是先看每篇文章把注意力压在什么要素上。

- `回路 / 编排`：任务怎样被拆开、推进、续跑，代理回路怎样被组织
- `工具 / ACI`：工具定义、工具边界、参数与返回结构怎样影响代理行为
- `状态 / 上下文`：进度、记忆、持久化、压缩、跨上下文续跑怎样成立
- `宿主 / 协议`：运行时、客户端、线程会话原语、宿主边界怎样暴露出来
- `验证 / 反馈`：测试、浏览器验证、错误回流、评审回路怎样支撑正确性
- `治理 / 控制`：人类控制面、规则、架构约束、合并纪律怎样被工程化

下面的“权重”不是官方定义，而是为了比较文章重心而做的 `研究解释`：

- `极高`：文章主论证基本围绕该要素展开
- `高`：承重支柱之一，但不是唯一主轴
- `中`：明确涉及，但更多在服务主轴
- `低`：只作为背景、边界或轻度触及

## 关键文章精读矩阵

| 文章 | 回路 / 编排 | 工具 / ACI | 状态 / 上下文 | 宿主 / 协议 | 验证 / 反馈 | 治理 / 控制 | 一句话抓手 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Anthropic · Building Effective Agents | 极高 | 高 | 中 | 低 | 高 | 中 | 先把 `workflow` 和 `agent` 分开，再强调“从简单、可组合模式起步” |
| Anthropic · Writing Effective Tools for Agents | 中 | 极高 | 高 | 中 | 极高 | 中 | 工具不是 API 包装，而是面向代理的承重接口，必须靠评估反复打磨 |
| Anthropic · Effective Harnesses for Long-Running Agents | 高 | 中 | 极高 | 中 | 极高 | 中 | 长任务不是靠单次大 prompt，而是靠进度工件、干净交接与端到端验证续跑 |
| OpenAI · Unrolling the Codex Agent Loop | 极高 | 高 | 极高 | 高 | 中 | 中 | 把 harness 先还原成可检查的 agent loop，再讨论上下文与性能管理 |
| OpenAI · Unlocking the Codex Harness | 中 | 高 | 极高 | 极高 | 中 | 高 | 当 harness 要被多客户端复用时，线程、回合、事件和审批就必须协议化 |
| OpenAI · Harness Engineering | 高 | 中 | 高 | 高 | 极高 | 极高 | 人类的主要工作从写代码转向设计脚手架、反馈回路和控制系统 |
| Martin Fowler · Harness Engineering | 低 | 低 | 中 | 低 | 低 | 高 | 价值在于把厂商实践抽成可讨论语言，同时提醒约束与维护成本问题 |
| LangChain · The Anatomy of an Agent Harness | 中 | 高 | 极高 | 高 | 高 | 中 | 它把分散在不同厂商文章里的 harness 部件一次性拆成组件清单 |

## 再往下一层，区分三种句子

如果要继续深读，最好把每篇文章里的句子再拆成三层：

- `可直接回原文确认`
  文章里明确写出来、可以直接回源核对的内容
- `原文 framing`
  作者想把读者带去哪里看问题，它如何给自己设定主题和边界
- `本文解释`
  为了比较而做的仓库解释，用来判断它更补的是哪一层

下面每篇文章都按这个方式补一轮，目的是帮助后续比较时不把原文、作者 framing 和仓库判断混写成一种声音。

## 2024-12-19 · Anthropic

### [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

- `新增重点`
  它把 `workflows` 和 `agents` 明确分开，并把“简单、可组合模式”放到一等工程位置。这使后续对 harness 的讨论不必一开始就滑向“大而全平台”。
- `它补上了哪一层`
  它最直接支撑的是方法背景，也帮助 [概念入口](../concept-entry/) 把 `工作流 / 编排` 与 `agent harness` 分开；但它还不是在直接定义 `harness engineering` 的实践层。
- `核心观点`
  这篇文章最重要的动作不是“鼓励大家上 agent”，而是先把 `workflow` 和 `agent` 作为两种不同复杂度的系统对象分开，再用一组可组合模式说明：很多有效系统依赖的不是厚框架，而是简单模式、透明规划和经过测试的工具接口。
- `核心要素权重`
  `回路 / 编排` 极高 · `工具 / ACI` 高 · `状态 / 上下文` 中 · `宿主 / 协议` 低 · `验证 / 反馈` 高 · `治理 / 控制` 中
- `可直接回原文确认`
  Anthropic 明确区分了 `workflows` 和 `agents`，并把 prompt chaining、routing、parallelization、orchestrator-workers、evaluator-optimizer 列成常见模式，同时强调“先找最简单的方案”。
- `原文 framing`
  它把自己定位成一篇构建 agentic systems 的方法文章，主张简单、透明、可测试的模式优先于复杂框架。
- `本文解释`
  这使它更像 `agent harness` 讨论的前置方法背景，而不是已经进入 `harness engineering` 实践层的主文。
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
- `核心观点`
  这篇把工具重新定义成 `deterministic systems` 与 `non-deterministic agents` 之间的契约，因此核心不是“多接几个 API”，而是通过选对工具、收紧边界、优化返回上下文和持续跑评估，把代理的行动空间塑形成稳定可用的接口。
- `核心要素权重`
  `回路 / 编排` 中 · `工具 / ACI` 极高 · `状态 / 上下文` 高 · `宿主 / 协议` 中 · `验证 / 反馈` 极高 · `治理 / 控制` 中
- `可直接回原文确认`
  文章明确讨论了工具选择、namespacing、返回高信号上下文、token 效率、错误信息设计，以及如何用 held-out evaluations 衡量工具表现。
- `原文 framing`
  它把工具写成一种“面向代理的契约设计”问题，而不是人类 API 设计的简单平移，并且把评估过程当成改工具的主方法。
- `本文解释`
  因此它最强地支撑的是 `工具 / ACI` 与 `验证 / 反馈` 这两类要素，也解释了为什么很多 harness 研究最后都会回到工具表面。
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
- `核心观点`
  这篇的中心判断是：长任务失败的根源不只是模型能力，而是“每个上下文窗口都像新班次接手”。因此 harness 必须把项目状态外化为初始化脚手架、功能清单、进度文件、git 历史和固定的启动检查，再用浏览器级验证把每一轮工作压回干净、可续跑的状态。
- `核心要素权重`
  `回路 / 编排` 高 · `工具 / ACI` 中 · `状态 / 上下文` 极高 · `宿主 / 协议` 中 · `验证 / 反馈` 极高 · `治理 / 控制` 中
- `可直接回原文确认`
  Anthropic 给出的方案包含 initializer agent、coding agent、feature list、progress file、git commits、`init.sh` 和浏览器自动化测试，并明确指出长任务里的两类失败模式。
- `原文 framing`
  它在解决的是“跨多个 context windows 持续推进复杂任务”这个具体问题，而不是一般性的客户端协议设计。
- `本文解释`
  所以这篇文章最承重的是 `状态 / 上下文` 与 `验证 / 反馈`，并把 `agent harness` 从一般方法推进到了长任务控制对象。
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
- `核心观点`
  这篇文章的主轴是把 harness 先还原成最朴素的 `agent loop`：用户输入、模型推理、工具调用、观察结果、结束回合。它真正补上的，不只是循环图本身，而是 prompt 结构、工具枚举、上下文增长、缓存命中、无状态请求与 compaction 这些“运行时责任”也属于 harness。
- `核心要素权重`
  `回路 / 编排` 极高 · `工具 / ACI` 高 · `状态 / 上下文` 极高 · `宿主 / 协议` 高 · `验证 / 反馈` 中 · `治理 / 控制` 中
- `可直接回原文确认`
  OpenAI 明确拆解了 agent loop、prompt items、`instructions / tools / input`、多轮上下文增长、prompt caching、stateless requests、ZDR 约束与 compaction 机制。
- `原文 framing`
  它想把 Codex 的核心回路“unroll”出来，让读者看到一个软件代理在运行时到底承担哪些职责。
- `本文解释`
  因而它是 `agent harness` 运行回路层最重要的一篇背景文，也让“上下文管理属于 harness 责任”这件事变得非常明确。
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
- `核心观点`
  这篇文章真正要解决的问题是：当同一个 harness 要同时服务 CLI、IDE、桌面和 Web 时，哪些对象必须稳定下来。OpenAI 给出的答案是把会话拆成 `thread / turn / item` 这组三层原语，再把流式输出、审批暂停、事件生命周期和客户端握手统一进 App Server 协议。
- `核心要素权重`
  `回路 / 编排` 中 · `工具 / ACI` 高 · `状态 / 上下文` 极高 · `宿主 / 协议` 极高 · `验证 / 反馈` 中 · `治理 / 控制` 高
- `可直接回原文确认`
  OpenAI 把 App Server 描述为双向 JSON-RPC API，并明确给出了 `item / turn / thread` 三层原语、审批暂停流、流式 delta 生命周期，以及多客户端复用同一 harness 的模式。
- `原文 framing`
  它把重点放在“怎样把同一个 Codex harness 稳定暴露给 CLI、IDE、桌面和 Web”这个集成问题上。
- `本文解释`
  这意味着文章真正补上的，是 `宿主 / 协议` 这一层，而不是一般意义上的工具技巧或提示词组织。
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
- `核心观点`
  这篇文章最重要的结论是：在 `agent-first` 开发里，人类工程师的主要工作不再是直接写代码，而是持续把仓库知识、可观测性、评审回路、架构约束、垃圾回收和合并纪律编码进系统，让代理能够在高吞吐下仍然保持可读、可控、可恢复。
- `核心要素权重`
  `回路 / 编排` 高 · `工具 / ACI` 中 · `状态 / 上下文` 高 · `宿主 / 协议` 高 · `验证 / 反馈` 极高 · `治理 / 控制` 极高
- `可直接回原文确认`
  OpenAI 明确写到 `no manually-written code`、docs 作为 system of record、custom linters 与 structural tests、agent-to-agent review、background cleanup tasks，以及人类主要通过 prompts 和 acceptance criteria 与系统交互。
- `原文 framing`
  文章把核心问题定义成“怎样最大化稀缺的人类时间和注意力”，并把重点放在 environments、feedback loops 和 control systems 的设计上。
- `本文解释`
  因此这篇最核心地支撑 `harness engineering` 的实践层主论证，也让 `治理 / 控制` 第一次成为比“单个机制”更居中的研究对象。
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
- `核心观点`
  这篇文章的价值不在补系统细节，而在做两件事：一是把 OpenAI 的案例重新抽象成 `context engineering`、`architectural constraints`、`garbage collection` 三类实践；二是明确提出怀疑和边界，比如功能验证缺口、约束成本、旧代码库是否值得 retrofit。
- `核心要素权重`
  `回路 / 编排` 低 · `工具 / ACI` 低 · `状态 / 上下文` 中 · `宿主 / 协议` 低 · `验证 / 反馈` 低 · `治理 / 控制` 高
- `可直接回原文确认`
  Martin Fowler 明确把 OpenAI 的案例归纳成 `context engineering`、`architectural constraints`、`garbage collection` 三类，并直说自己觉得原文缺少对功能与行为验证的展开。
- `原文 framing`
  这是一篇解释与反思性质的文章，它更关心“我们能从这个案例学到什么抽象和问题”，而不是复述底层机制细节。
- `本文解释`
  所以它最有价值的不是补对象层，而是把 `harness engineering` 提升成一个更可讨论、也更可怀疑的工程语言。
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
- `核心观点`
  这篇文章的核心作用，是把前面散落在不同厂商文章中的高权重要素一次性列成部件表：文件系统与 git 提供耐久状态，bash 与代码执行提供通用动作面，sandbox 提供安全宿主，memory / search 提供新知识注入，Ralph loop 与 self-verification 把长程执行重新闭环。
- `核心要素权重`
  `回路 / 编排` 中 · `工具 / ACI` 高 · `状态 / 上下文` 极高 · `宿主 / 协议` 高 · `验证 / 反馈` 高 · `治理 / 控制` 中
- `可直接回原文确认`
  LangChain 直接提出 `Agent = Model + Harness`，并把 filesystem、git、bash、sandbox、memory/search、Ralph loop、planning 与 self-verification 当作核心 harness primitives。
- `原文 framing`
  它想做的是“定义 harness 并拆组件”，把模型外面的承重部分一次性摊开。
- `本文解释`
  因此它更像部件清单和比较框架，而不是某家厂商的正式架构定义；拿来比较很有用，但仍然需要回到具体宿主语境里校准。
- `阅读提醒`
  这篇非常适合做部件清单，但它不是官方统一标准；把它当作比较框架时，仍然需要回到具体宿主与运行时语境。
- `接着读`
  读完可以直接进入 [研究专题](../topics/)，看看这些部件差异如何在可运行比较材料里被画出来。

## 从这条时间线可以提炼什么

- 最先成熟的不是“万能代理”，而是 `回路 / 编排`、`工具 / ACI` 与 `验证 / 反馈` 这三类更可工程化的要素；这条线更多通向 `agent harness` 的机制层。
- 到 Anthropic 长任务文章时，权重开始明显转向 `状态 / 上下文` 与 `恢复`，也就是“怎样跨上下文继续工作”。
- OpenAI 的两篇 Codex 文章把重心拆成两层：`Unrolling` 更强调运行回路与上下文管理，`Unlocking` 更强调宿主运行时与协议原语。
- 真正把话题推到 `harness engineering` 的，是 OpenAI 那篇关于仓库可读性、架构约束、反馈回路和合并哲学的文章；它的主轴已经不是部件，而是 `治理 / 控制`。
- Martin Fowler 的作用是把这些实践从单一产品经验提升成可讨论的解释语言，同时保留对成本、约束与适用范围的怀疑。
- LangChain 的作用则是把前面分散出现的高权重要素重新收束成一张构件清单，便于横向比较。
- 因此，这条时间线最好拆成两条：一条解释 `agent harness` 如何成形，另一条解释 `harness engineering` 如何上浮成实践语言。
- 因此，读这些文章时最好同时区分三件事：`事实陈述`、`官方表述`、`研究解释`。

## 下一步怎么读

- 如果你现在最想把概念边界说清楚，回到 [概念入口](../concept-entry/)。
- 如果你已经开始问“那具体项目到底该怎么分”，去 [生态与比较](../ecosystem-comparison/)。
- 如果你想看这些判断如何变成可运行研究材料，直接进入 [研究专题](../topics/)。
