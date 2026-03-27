---
title: 工程观察
description: Stable engineering observations extracted from community practice materials.
---

这里收录的不是官方定义，而是从真实讨论与长期实践材料里反复出现的工程观察。它们更接近“真实使用中哪些问题总会冒出来”。

## 控制面往往比代码面更重

一个反复出现的信号是：24 小时运行里，实际代码改动往往远小于设计、协调、进度记录和交接等控制面产出。这说明 harness engineering 的瓶颈常常不在补几行代码，而在如何组织长期执行。

## 长任务的关键是 clean handoff

多位参与者都在强调上下文清洁、交接文档、计划文件与新会话续跑。会话一旦退化成普通问答，整体效率会很快下降，可恢复性因此成了长时 harness 的核心能力之一。

## Single controller + document API

讨论中多次出现一个共识：决策层不应淹没在代码细节里。更有效的做法是保留一个干净的调度层，通过结构化文档、摘要、报告和图表把信息压缩后再交给高阶决策模型。

## 模型供应现实会反过来塑造 harness

很多 harness 实践并不是静态 doctrine，而是在供应稳定性、模型可用性和成本约束下持续漂移。模型换代会直接影响规则、团队编排和交付策略。
