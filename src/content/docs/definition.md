---
title: 定义
description: What harness engineering means in this repository and why it matters now.
---

# What Is Harness Engineering

这里的 **harness engineering** 不是单指某个 agent 会不会写代码，而是指一整套工程化外壳如何把模型能力变成持续可运行的系统能力。

更准确地说，它关注的是：

- 任务如何进入系统，如何被拆解、委派、恢复和完成
- agent 如何被规则、工具、状态、审批、验证与记忆层约束
- 如何把聪明模型变成能连续产出结果的工程系统

## 它不等于什么

- 不等于单次 prompt engineering
- 不等于某个 IDE 插件本身
- 不等于只会写 demo 的 autonomous agent

## 为什么现在重要

- 模型能力已经足够强，真正的瓶颈开始转向系统化约束与执行环境
- 团队需要的是可重复、可验证、可恢复、可协作的 agent 工程链路
- “agent 能做什么”正在快速让位于“你如何 harness 它”

## 这个仓库中的定义方式

这个仓库把 Harness Engineering 当成一个研究问题来处理，而不是某家厂商的专有术语：

- 哪些控制面机制在长时任务中真正有效
- 哪些宿主 shell 和 overlay 形成了稳定分层
- 哪些方法论只是提示技巧，哪些已经变成 durable engineering surface
- 哪些 topic 值得进一步做成可运行研究专题
