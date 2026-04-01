---
title: 研究专题
description: 更深入、可运行的研究专题入口。
---

研究专题不再停留在定义和比较框架，而是把判断压到可运行、可检查、可继续扩展的研究材料里。当前专题主要聚焦 `AI Agents` 与 `Agent Harnesses` 之间的结构差异，以及 `Harness Engineering` 怎样把这些能力组织成长期开发方法。

这里默认继承 [文章证据工作法](../article-evidence-method/) 的基本读法：专题不是凭印象画图，而是先回到关键文章与项目公开材料，判断哪些要素最承重，再把那组判断压成可运行、可检查的研究材料。

## 专题应该承担什么

一个合格的专题，至少应该回答下面几件事：

- `研究问题是什么`
  它到底在追问哪一类机制差异，而不是笼统地展示某个项目
- `材料形式是什么`
  是可运行应用、数据集、可视化、实验记录，还是机制拆解
- `当前已经能回答什么`
  现阶段最稳的发现是什么
- `当前还不能回答什么`
  哪些结论仍然只是工作假说，还需要继续补材料

因此，专题应该比首页更具体，比单篇文章更可检查，但又不把内部实现细节重新塞回总览页。

## 专题怎样继承前面的读法

在这个仓库里，专题不是另一套独立语言，而是把前面页面里的判断继续往下压：

- 从 [关键文章](../key-articles/) 继承 `文章重心`
  先看一手材料更重 `回路 / 编排`、`状态 / 上下文`、`宿主 / 协议`，还是 `治理 / 控制`
- 从 [术语与证据边界](../terminology-and-evidence/) 继承 `句子分层`
  尽量区分哪些是公开材料可直接确认的内容，哪些是项目官方 framing，哪些是仓库为了比较而做的研究解释
- 从 [生态与比较](../ecosystem-comparison/) 继承 `比较问题`
  重点比较 `AI Agents` 与 `Agent Harnesses` 之间的控制中心、持久化 / 恢复表面、人类控制面和宿主依赖，而不是把所有项目都摊平成同一类产品

换句话说，专题不是把文章再说一遍，而是把已经形成的判断转成更可检查的研究形式。

## 当前专题目录

- [宿主与 Harness 结构图](../topics/host-harness-flow-diagrams/site/)
  一个可运行的比较研究应用，用来观察宿主工作面、harness 壳层、控制中心、用户参与契约与恢复路径如何被不同系统表达。
- [深入剖析 OMO 与 OMX](./omo-and-omx/)
  一篇配套分析文章，专门拆 `OpenCode`、`Codex` 各自提供了哪些 harness 机制层能力，`OMO` 与 `OMX` 如何利用并扩展这些机制，以及它们最终分别给用户定义了什么交互面。

## 宿主与 Harness 结构图

这是当前第一个可运行专题。它不是某个框架的宣传页，而是一份可交互的比较研究材料，主要用来观察 `AI Agents` 与 `Agent Harnesses` 这一层如何表达对象结构：

- 自动化回路在哪里闭合
- harness 壳层压在系统的哪一层
- 控制中心由谁承担
- 宿主依赖和恢复路径如何被暴露出来

如果把它放回 [文章证据工作法](../article-evidence-method/) 的六个要素里看，这个专题当前主要是在放大：

- `回路 / 编排`
- `状态 / 上下文`
- `宿主 / 协议`
- `治理 / 控制`

它现在还没有系统放大 `工具 / ACI` 的细粒度差异，也还没有把 `验证 / 反馈` 的真实任务成本完整叠进来。

### 研究问题

如果把不同项目都叫作 `agent harness`，这个标签其实会遮蔽很多真正重要的差异。这个专题想解决的是更细的问题：

- 有的系统更像以运行时为中心的控制回路
- 有的系统更像带门禁的交付流水线
- 有的系统更像策略壳层包裹的代理操作系统

它尝试把这些差异从文字判断变成可视结构。

### 证据边界

这个专题里的图不是官方架构图，而是研究图。更准确地说：

- `可直接回原文确认`
  项目公开仓库、官方文档、官方博客里能直接找到的术语、角色、回路和表面
- `项目 framing`
  各个系统如何对外描述自己是宿主、harness、团队工作流还是交付流水线
- `专题解释`
  为了让横向比较成立，仓库把这些系统压成“控制中心、壳层位置、恢复路径、宿主依赖”这几个切面

因此，专题最适合被读成“可运行的比较解释”，而不是“项目官方自我定义的可视化”。

### 这个专题里有什么

- [打开专题应用](../topics/host-harness-flow-diagrams/site/)
- [查看源代码](https://github.com/BeMxself/everything-harness-engineering/tree/main/topics/host-harness-flow-diagrams)
- [查看设计说明](https://github.com/BeMxself/everything-harness-engineering/blob/main/topics/host-harness-flow-diagrams/docs/specs/2026-03-25-host-harness-flow-diagrams-design.md)
- [查看实现计划](https://github.com/BeMxself/everything-harness-engineering/blob/main/topics/host-harness-flow-diagrams/docs/plans/2026-03-25-host-harness-flow-diagrams.md)
- [查看命名与扩展评估](https://github.com/BeMxself/everything-harness-engineering/blob/main/topics/host-harness-flow-diagrams/docs/research/2026-03-28-host-harness-flow-diagrams-name-and-expansion-assessment.md)
- [查看扩图纳入判断表](https://github.com/BeMxself/everything-harness-engineering/blob/main/topics/host-harness-flow-diagrams/docs/research/2026-03-28-expansion-scope-matrix.md)
- [查看 OpenCode -> oh-my-openagent 能力栈拆解备忘](https://github.com/BeMxself/everything-harness-engineering/blob/main/topics/host-harness-flow-diagrams/docs/research/2026-03-30-opencode-oh-my-openagent-capability-stack.md)
- [查看 Codex -> oh-my-codex 能力栈拆解备忘](https://github.com/BeMxself/everything-harness-engineering/blob/main/topics/host-harness-flow-diagrams/docs/research/2026-03-30-codex-oh-my-codex-capability-stack.md)
- [查看配套专题文章：深入剖析 OMO 与 OMX](./omo-and-omx/)

### 当前已经能回答什么

- `oh-my-openagent`（原 `oh-my-opencode`）更适合被读成建立在 OpenCode 宿主之上的 `workflow-bearing harness`，而不是一条线性交付链
- `gstack` 的强项更容易出现在交付流水线、门禁点和返工成本暴露上
- `everything-claude-code` 更像策略壳层包裹下的主代理控制系统，而不只是普通多代理分发
- `OpenCode -> oh-my-openagent` 这条链已经可以更稳地拆成：`OpenCode` 是 `programmable host`，`oh-my-openagent` 是建立在其上的 `workflow-bearing harness`
- `Codex -> oh-my-codex` 这条链已经可以更稳地拆成：`Codex` 是带有 `AGENTS.md`、skills、MCP、hooks、subagents、approvals / sandbox 与 thread persistence 的 `host substrate`，`oh-my-codex` 则是在其外层重组 workflow contract、`.omx/` state 与 optional team runtime
- 在 `oh-my-openagent` 里，`ulw` 更适合被读成 `关键词触发 + 提示词注入 + 委派策略 + 可选模型重写` 的组合链，而不是一个单独 agent
- `/start-work` 已经可以稳定地视作“计划转执行”的显式接力点，它把 `.sisyphus/plans/` 与 `boulder.json` 状态推进到 `Atlas` 执行闭环
- `Prometheus` 的 interview 与 planning 已有源码支撑，但 `@plan` 是否等价于 Prometheus 目前仍只能写成文档 framing，不能直接写成已证实源码事实
- 在 `oh-my-codex` 里，最值得关注的已经不只是 prompts 或 team mode 本身，而是“哪些控制面仍留在宿主里，哪些被 OMX 提升成 workflow contract 与 project-visible state”

这些判断不是“最终定性”，但已经足以帮助读者做第一轮结构辨认。

这些判断里已经有一部分从“工作假说”推进到了“源码支撑的专题结论”，但它们仍然首先服务于结构辨认，而不是替代项目官方架构图。

### 当前还不能回答什么

- 还不能覆盖更多宿主链路与 harness 家族，所以现在更适合作为比较方法示例，而不是领域全景地图
- 还没有把每个框架的更细粒度角色、命令和钩子全部展开
- 还没有把时间维度、成本维度和真实任务案例叠进图里
- 还没有把“哪些判断来自原文、哪些来自专题解释”直接显示在图面或图旁
- 还不能最终确认 `@plan` 这条入口在宿主层是否存在插件外 alias，把 `plan` 自动导向 `Prometheus`

更适合把这个专题看成仍在演进的研究材料，而不是最终标准图谱。

### 下一轮最值得补什么

- 增加更多框架，特别是边界更模糊的案例
- 给每张图继续补来源说明、证据边界和专题结论
- 在图之外增加“为什么这样画”的方法注记，减少读者把它误认成官方架构图的风险
- 让专题页本身更明确地区分“当前稳结论”和“仍需补证据的工作假说”
- 继续补 `OpenCode` 宿主层源码证据，优先核对 `@mention`、`Question`、session / subagent 导航这些会改变用户参与契约判断的路径
- 继续补 `Codex / oh-my-codex` 在 `$team`、hooks derived signals、approval pause 与 thread/runtime 协作上的更细路径，尤其是 worker coordination 的公开语义

## 阅读这个部分时可以期待什么

- 每个专题都尽量独立、自解释、可运行
- 更适合用来观察机制如何落地，而不是只看概念定义
- 如果想先建立整体框架，可以回到 [概念入口](../concept-entry/) 或 [生态与比较](../ecosystem-comparison/) 再继续阅读
- 如果想先理解“专题判断是怎么从文章里长出来的”，先读 [文章证据工作法](../article-evidence-method/)
