---
title: 当前生态
description: A research-oriented cross-section of current harness and harness-adjacent systems.
---

当前生态不是一条直线，而是多个方向同时演化。下面的分组不是照搬论坛说法，而是结合各项目官方 repo / 官方文档里的自我描述，再按它们当前的 primary orientation 做的研究性归类。

这里的第一类指的是能直接承担工程任务、进入真实工作面的 `Coding Agents`。后面的几类则分别对应控制层、方法层和编排层，目的是让读者先看清自己在比较哪一种系统。除此之外，这里还额外加了一列“运行形态”，区分它是独立 agent 宿主、宿主内扩展，还是独立调度外壳。

## 生态切面

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

## Coding Agents

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-workflows)
- [Codex](https://github.com/openai/codex)
- [OpenCode](https://opencode.ai/)
- [Goose](https://github.com/block/goose)
- [Aider](https://aider.chat/)

这些系统通常把自己定位为 coding agent、agentic coding tool，或者 terminal AI pair programming tool。它们是很多后续 harness 增强层的宿主层。

## Agent Harnesses

- [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)
- [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)
- [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)
- [Trellis](https://github.com/mindfold-ai/Trellis)
- [everything-claude-code](https://github.com/affaan-m/everything-claude-code)

这些系统直接构建在宿主工作面之上，显式加入 hooks、agent teams、HUD、memory、guardrails、rules 和恢复机制，是当前 harness 味道最浓的一层。

## Skill / Methodology Systems

- [superpowers](https://github.com/obra/superpowers)
- [get-shit-done](https://github.com/gsd-build/get-shit-done)

这些项目更常把自己描述成技能框架、meta-prompting system、spec-driven development system 或 workflow discipline。它们未必都自称 harness，但经常构成 harness 的方法层或部件层。

## Workflow / Orchestration Suites

- [gstack](https://github.com/garrytan/gstack)
- [ccg-workflow](https://github.com/fengshao1227/ccg-workflow)
- [gdim-workflow-skill](https://github.com/BeMxself/gdim-workflow-skill)
- [Ralph](https://github.com/snarktank/ralph)

这里列的是可以直接落到真实任务编排上的 workflow layer，而不是底层图框架。它们更接近“怎么把任务持续跑下去”的工程表面。

## Related Frameworks / Infra

- [OpenHands](https://openhands.dev/)
- [LangGraph](https://github.com/langchain-ai/langgraph)
- [Microsoft Agent Framework](https://github.com/microsoft/agent-framework)
- [CrewAI](https://www.crewai.com/)
- [GitHub Agentic Workflows](https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/)

这些项目仍然值得跟踪，但它们更偏 agent platform、graph orchestration、framework 或基础设施层，不应和可直接实践的 workflow 套件混为一谈。

## 注

这个表不是胜负榜，也不是稳定不变的最终定性。很多项目正在快速演化，名字、宿主支持和自我定位都可能继续漂移；这里给出的只是一个可追溯、可比较的观察切面。
