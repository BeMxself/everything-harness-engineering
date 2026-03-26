---
title: 社区讨论
description: Community-sourced observations that complement the official timeline.
---

这里单列社区讨论，不与上面的官方文章时间线混合。下面的结论主要来自 LINUX DO 讨论串在 2026-03-21 到 2026-03-26 之间的持续更新。它们不是这个概念的官方定义，但很有价值，因为里面出现了真实成本、真实失败模式和真实工具取舍。

## 主要讨论串

- [想开一个 harness engineering 实践的长期帖子，大家一起分享实践经验](https://linux.do/t/topic/1791588)

## 相关材料

- [新年来分享我的 oh-my-opencode 配置和学习心得](https://linux.do/t/topic/1624433)
- [OpenAI 提出 “Harness Engineering”：完全使用 Agent 进行编程的实践](https://linux.do/t/topic/1677645/9)
- [最近 harness，自主进化很火，大家有什么经验和用法吗？](https://linux.do/t/topic/1789013/5)
- [经过 8 个月 Claude Code 高强度实战，我们决定开源内部的最佳实践](https://linux.do/t/topic/1539636)
- [都在聊 AI-Native Engineering，分享几个 AI coding workflow](https://linux.do/t/topic/1778922)
- [Codex 增强版：对标 Claude Code 新增 Agent Teams、Hooks、anthropic api Agent 、WebUI](https://linux.do/t/topic/1664790)
- [Vibecoding 进阶教程总集篇——从能用到可控](https://linux.do/t/topic/1776917)

## 社区里最有价值的工程观察

### 控制面往往比代码面更重

一个反复出现的信号是：24 小时运行里，实际代码改动往往远小于设计、协调、进度记录和交接等控制面产出。这说明 harness engineering 的瓶颈常常不在补几行代码，而在如何组织长期执行。

### 长任务的关键是 clean handoff

多位参与者都在强调上下文清洁、交接文档、计划文件与新会话续跑。会话一旦退化成普通问答，整体效率会很快下降，可恢复性因此成了长时 harness 的核心能力之一。

### Single controller + document API

讨论中多次出现一个共识：决策层不应淹没在代码细节里。更有效的做法是保留一个干净的调度层，通过结构化文档、摘要、报告和图表把信息压缩后再交给高阶决策模型。

### 模型供应现实会反过来塑造 harness

很多 harness 实践并不是静态 doctrine，而是在供应稳定性、模型可用性和成本约束下持续漂移。模型换代会直接影响规则、团队编排和交付策略。

## 如何看待这些材料

- 它们主要提供实践信号，不等于 canonical definition
- 它们能补足官方文章不容易呈现的失败模式和长期成本
- 它们最适合与 [文章时间线](/timeline/) 交叉阅读
