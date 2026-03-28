---
title: 研究专题
description: Topic entrypoints for deeper, runnable research work.
---

这个部分不是“项目目录导航”，而是本仓库把综述继续压深的地方。首页和概念页负责给定义、边界和比较框架；`topics/` 负责把这些判断落成可以运行、可以检查、可以继续扩展的研究材料。

## 这里的专题应该承担什么

一个合格的 topic，至少应该回答下面几件事：

- `研究问题是什么`
  它到底在追问哪一类机制差异，而不是笼统地展示某个项目
- `材料形式是什么`
  是可运行应用、数据集、可视化、实验记录，还是机制拆解
- `当前已经能回答什么`
  现阶段最稳的发现是什么
- `当前还不能回答什么`
  哪些结论仍然只是工作假说，还需要继续补材料

也正因为如此，topic 页面应该比首页更具体，比单篇文章更可检查，但又不把 topic 内部实现细节塞回根站首页。

## 宿主与 Harness 结构图

这是当前第一个可运行专题。它不是某个框架的宣传页，而是一份可交互的比较研究材料，用来观察不同系统如何表达：

- automation loop 在哪里闭合
- harness 壳层压在系统的哪一层
- 控制中心由谁承担
- 宿主依赖和恢复路径如何被暴露出来

### 研究问题

如果把不同项目都叫作 `agent harness`，这个标签其实会遮蔽很多真正重要的差异。这个专题想解决的是更细的问题：

- 有的系统更像 runtime-centered control loop
- 有的系统更像 gated delivery pipeline
- 有的系统更像 policy-shell agent OS

它尝试把这些差异从文字判断变成可视结构。

### 这个专题里有什么

- [打开专题应用](../topics/framework-flow-diagrams/site/)
- [查看源代码](https://github.com/BeMxself/everything-harness-engineering/tree/main/topics/framework-flow-diagrams)
- [查看设计说明](https://github.com/BeMxself/everything-harness-engineering/blob/main/topics/framework-flow-diagrams/docs/specs/2026-03-25-framework-flow-diagrams-design.md)
- [查看实现计划](https://github.com/BeMxself/everything-harness-engineering/blob/main/topics/framework-flow-diagrams/docs/plans/2026-03-25-framework-flow-diagrams.md)

### 当前已经能回答什么

- `oh-my-opencode` 更适合被读成 runtime-centered harness，而不是线性交付链
- `gstack` 的强项更容易出现在 pipeline、gates 和返工成本暴露上
- `everything-claude-code` 更像 policy shell 包裹下的主 agent 控制系统，而不只是普通多 agent 分发

这些判断不是“最终定性”，但已经足以帮助读者做第一轮结构辨认。

### 当前还不能回答什么

- 还不能覆盖更多框架，所以现在更适合作为比较方法示例，而不是领域全景地图
- 还没有把每个框架的更细粒度角色、命令和 hooks 全部展开
- 还没有把时间维度、成本维度和真实任务案例叠进图里

因此，读这个专题时最好把它当作 `working research artifact`，不是最终标准图谱。

### 下一轮最值得补什么

- 增加更多框架，特别是边界更模糊的案例
- 给每张图继续补来源说明、证据边界和专题结论
- 在图之外增加“为什么这样画”的方法注记，减少读者把它误认成官方架构图的风险

## 阅读这个部分时可以期待什么

- 每个专题都尽量独立、自解释、可运行
- 这里更适合看机制如何落地，而不是只看概念定义
- 如果想先建立整体框架，可以回到 [概念入口](../concept-entry/) 或 [生态与比较](../ecosystem-comparison/) 再继续阅读
