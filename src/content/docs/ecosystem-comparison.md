---
title: 生态与比较
description: A research-oriented comparison page for harness and harness-adjacent systems.
---

这一页首先服务于读者的选择判断：现在都有哪些值得看的 harness、类 harness 和相邻工作流系统，它们分别更像哪一类，又该怎么避免把不同层次的问题混成一种产品比较。

独立 agent 宿主并不意味着不做 harness；很多宿主本身也在持续吸收 harness 能力。所以下面的比较看的是当前主要重心，而不是假定这些项目彼此绝对分离。

## 怎么区分这些项目

这组分组最重要的作用，是把“正在比较的对象”先分开：有些项目提供的是可直接承担工程任务的 agent 宿主，有些提供的是覆盖其上的控制层，有些则主要提供方法论、交付流程或编排能力。

其中 `Agent Harnesses` 和 `Workflow / Orchestration` 最容易被混在一起，但两者并不等价。

更严格地说，`Agent Harnesses` 更接近一层运行基础设施。它主要解决的是 agent 如何被约束、如何续跑、如何恢复、如何保存状态、如何交接、如何调用工具，以及如何与其他 agent 或人类控制面协作。

`Workflow / Orchestration` 则更接近上层任务组织。它更关注阶段流转、委派协作、多 agent 分工、审批节点和交付闭环。

两者经常一起出现，是因为很多 harness 套件都会把 workflow/orchestration 一并做进来；如果没有任务流转和协作结构，底层 harness 的价值很难在真实工程里充分体现。

但 `Workflow / Orchestration` 不能简单视为 `harness engineering` 的子集。你完全可以先搭出一个工作流或编排层，让多个 agent、步骤或审批节点跑起来，即使它背后的恢复、状态、记忆、通信、规则等底层机制还很薄，甚至相当脆弱。这样的系统可以是 workflow/orchestration，但未必已经是成熟的 harness engineering。

因此，更稳妥的理解方式是：

- `Coding Agents` 更偏直接执行工程任务的宿主
- `Agent Harnesses` 更偏运行机制
- `Skill / Methodology Systems` 更偏方法层与纪律层
- `Workflow / Orchestration` 更偏任务组织
- 很多实际项目会同时跨越两层，所以这里按“主要重心”来比较
## 代表性项目比较

| 系统 | 官方自述 / 定位信号 | 研究归类 | 运行形态 | 宿主 / 主要范围 |
| --- | --- | --- | --- | --- |
| [Codex](https://github.com/openai/codex) | Lightweight coding agent that runs in your terminal | Coding Agents | 独立 agent 宿主 | 终端中的 coding agent |
| [OpenCode](https://opencode.ai/) | The open source AI coding agent | Coding Agents | 独立 agent 宿主 | 开放宿主，可运行于终端、IDE 与桌面 |
| [Goose](https://github.com/block/goose) | Open source, extensible AI agent | Coding Agents | 独立 agent 宿主 | 更广义的本地工程 agent，覆盖 coding 场景 |
| [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | the best agent harness; previously oh-my-opencode | Agent Harnesses | 宿主内扩展 | 构建在 OpenCode 之上的 harness 层 |
| [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | Your codex is not alone. Add hooks, agent teams, HUDs... | Agent Harnesses | 宿主内扩展 | 构建在 Codex 之上的控制层 |
| [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Teams-first multi-agent orchestration for Claude Code | Agent Harnesses | 宿主内扩展，可拉起外部 worker | 构建在 Claude Code 之上的编排层 |
| [Trellis](https://github.com/mindfold-ai/Trellis) | The best agent harness; multi-platform AI coding framework | Agent Harnesses | 宿主内扩展（跨宿主） | 跨宿主 harness 层 |
| [everything-claude-code](https://github.com/affaan-m/everything-claude-code) | The agent harness performance optimization system | Agent Harnesses | 宿主内扩展（跨宿主） | 跨宿主增强层 |
| [superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development methodology | Skill / Methodology System | 宿主内技能层 | skills + workflow discipline |
| [get-shit-done](https://github.com/gsd-build/get-shit-done) | Meta-prompting, context engineering and spec-driven development system | Skill / Methodology System | 宿主内工作流层 | spec-driven workflow layer |
| [gstack](https://github.com/garrytan/gstack) | 15 opinionated tools that serve as CEO, Designer, Eng Manager... | Workflow / Orchestration Suite | 宿主内技能层 | 面向交付的角色化工作流 |
| [ccg-workflow](https://github.com/fengshao1227/ccg-workflow) | Claude + Codex + Gemini multi-model collaboration | Workflow / Orchestration Suite | 宿主内编排 | 多模型协作工作流 |
| [gdim-workflow-skill](https://github.com/BeMxself/gdim-workflow-skill) | Repository centers on a named workflow skill | Workflow / Orchestration Suite | 宿主内技能层 | 基于 GDIM 的 workflow skill 包 |
| [Ralph](https://github.com/snarktank/ralph) | Ralph is an autonomous AI agent loop that runs repeatedly until all PRD items are complete. | Workflow / Orchestration Suite | 独立调度外壳 | 持续运行直到任务项完成的自主 agent loop |

## 按主要重心继续看

### Coding Agents

这些系统通常把自己定位为 coding agent、agentic coding tool，或者 terminal AI pair programming tool。它们是很多后续 harness 增强层的宿主层。

代表项目：
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-workflows)
- [Codex](https://github.com/openai/codex)
- [OpenCode](https://opencode.ai/)
- [Goose](https://github.com/block/goose)
- [Aider](https://aider.chat/)

### Agent Harnesses

这些系统直接构建在宿主工作面之上，显式加入 hooks、agent teams、HUD、memory、guardrails、rules 和恢复机制，是当前 harness 味道最浓的一层。

代表项目：
- [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)
- [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)
- [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)
- [Trellis](https://github.com/mindfold-ai/Trellis)
- [everything-claude-code](https://github.com/affaan-m/everything-claude-code)

### Skill / Methodology Systems

这些项目更常把自己描述成技能框架、meta-prompting system、spec-driven development system 或 workflow discipline。它们未必都自称 harness，但经常构成 harness 的方法层或部件层。

代表项目：
- [superpowers](https://github.com/obra/superpowers)
- [get-shit-done](https://github.com/gsd-build/get-shit-done)

### Workflow / Orchestration Suites

这里列的是可以直接落到真实任务编排上的 workflow layer，而不是底层图框架。它们更接近“怎么把任务持续跑下去”的工程表面。

代表项目：
- [gstack](https://github.com/garrytan/gstack)
- [ccg-workflow](https://github.com/fengshao1227/ccg-workflow)
- [gdim-workflow-skill](https://github.com/BeMxself/gdim-workflow-skill)
- [Ralph](https://github.com/snarktank/ralph)

## Related Frameworks / Infra

- [OpenHands](https://openhands.dev/)
- [LangGraph](https://github.com/langchain-ai/langgraph)
- [Microsoft Agent Framework](https://github.com/microsoft/agent-framework)
- [CrewAI](https://www.crewai.com/)
- [GitHub Agentic Workflows](https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/)

这些项目仍然值得跟踪，但它们更偏 agent platform、graph orchestration、framework 或基础设施层，不应和可直接实践的 workflow 套件混为一谈。

## 注

这个表不是胜负榜，也不是稳定不变的最终定性。很多项目正在快速演化，名字、宿主支持和自我定位都可能继续漂移；这里给出的只是一个可追溯、可比较的观察切面。
