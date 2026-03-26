---
title: 分类
description: A working research taxonomy for harness-like systems.
---

下面不是任何单一社区或单一项目官方给出的统一 taxonomy，而是为了帮助读者阅读生态而做的一层分组。许多项目横跨多个象限，这里只标记它们当前最主要的工作重心。

这组分类最重要的作用，是把“正在比较的对象”先分开：有些项目提供的是可直接承担工程任务的 agent 宿主，有些提供的是覆盖其上的控制层，有些则主要提供方法论、交付流程或编排能力。

## 1. Coding Agents

直接让 coding agent 进入真实工程环境：repo、工具调用、权限、验证与执行闭环都围绕 agent 的实际工作面展开。

典型问题：
如何让一个 coding agent 在真实仓库里持续完成工程任务？

## 2. Skill / Methodology Systems

更强调 skills、meta-prompting、spec-driven development、review discipline 和执行方法论，本身未必自称 harness。

典型问题：
如何让 agent 不只是会写，而是按一套工程方法持续推进？

## 3. Orchestration / Delivery Systems

更强调多 agent 编排、交付流程、图结构或全链路开发平台，不一定围绕某个宿主工作面，但解决的是相邻的大闭环问题。

典型问题：
如何把多个模型、工具、人类审批与交付节点编成一个稳定系统？

## 4. Agent Harnesses

构建在宿主工作面之上的第二层系统，显式加入 hooks、agent teams、memory、HUD、规则层、恢复和约束机制。

典型问题：
如何把 coding agent 提升成更可控、更长时、更协作的工程环境？

## 使用这个分类时的注意点

- 这里是研究性分类，不是胜负榜
- official terminology 优先，但很多分组仍然属于工程解释
- 随着项目自我定位漂移，分类也应该继续修订
