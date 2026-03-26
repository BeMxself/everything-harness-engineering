---
title: Everything Harness Engineering
description: A public overview of harness engineering, harness-like agent shells, and adjacent workflow suites.
template: splash
tableOfContents: false
hero:
  title: Everything Harness Engineering
  tagline: |
    Harness Engineering is not a single product page or a single framework tutorial.
    This site is the research-facing overview for an evolving field: how agent systems are constrained,
    orchestrated, verified, and made legible enough to run inside real engineering work.
  actions:
    - text: 先看定义
      link: /definition/
      icon: right-arrow
    - text: 看当前生态
      link: /landscape/
      variant: secondary
    - text: GitHub Repo
      link: https://github.com/BeMxself/everything-harness-engineering
      icon: external
      variant: minimal
---

## 这是什么站

这个仓库根站承担的是研究导览层，而不是单个 topic app 的承载层。

- 解释什么是 Harness Engineering
- 把官方文章、社区讨论、项目生态放进同一个观察框架
- 给后续研究专题提供稳定入口
- 保持 `topics/` 下的实验与应用独立演进

## 建议阅读顺序

1. 从 [定义](/definition/) 建立问题意识。
2. 在 [分类](/distinction/) 里看清不同系统的 primary orientation。
3. 用 [文章时间线](/timeline/) 理解概念是怎么逐步成形的。
4. 到 [当前生态](/landscape/) 对照项目差异。
5. 最后进入 [研究专题](/topics/) 看已经落到仓库里的可运行材料。

## 当前站点边界

- 根站保持轻量，负责 overview、taxonomy、linking 和 topic discovery。
- `topics/` 下的项目继续独立构建，不向根站回收实现细节。
- 这里的很多分类属于工程解释，不等同于任何单一项目的官方自我定义。

## 当前重点专题

- [framework-flow-diagrams](./topics/framework-flow-diagrams/site/)  
  一个可运行的研究应用，用来比较不同体系如何表达自动化闭环、harness 壳层、控制点、宿主依赖和角色交接方式。
