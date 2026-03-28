# host-harness-flow-diagrams 命名与扩展评估

**日期：** 2026-03-28

## 结论

- `host-harness-flow-diagrams` 已作为当前专题新名采用。
- 这次完整重命名的目的，是在下一轮扩图前把专题边界放宽到 `host + harness + workflow system` 的比较入口。
- 如果下一轮只新增两个项目，优先加入 `Trellis` 和 `oh-my-claudecode`。

## 已确认事实

### 仓库内事实

- 当前专题路径是 `topics/host-harness-flow-diagrams`。
- 根站把这个专题描述为“比较不同 coding-agent 系统里的宿主工作面、harness 壳层、控制中心与恢复路径”。
- 当前三张图分别覆盖 `oh-my-opencode`、`gstack` 和 `everything-claude-code`。
- 根站 taxonomy 里，`oh-my-openagent` 与 `everything-claude-code` 被放在 `Agent Harnesses`，`gstack` 被放在 `工作流 / 编排套件`。
- 图数据已经把第一项标题改成了 `oh-my-openagent (formerly oh-my-opencode)`；本轮已完成专题 slug 与外部文档路径重命名，但内部部分实现 id 仍沿用 `oh-my-opencode`。

### 外部事实

- `oh-my-codex` 官方把自己描述为 `OpenAI Codex CLI` 之上的 `workflow layer`，强调 reusable workflows、durable state，以及 `team runtime`。
- `oh-my-claudecode` 官方把自己描述为 `Teams-first Multi-agent orchestration for Claude Code`，并把 `team-plan -> team-prd -> team-exec -> team-verify -> team-fix` 作为 canonical staged pipeline。
- `Trellis` 官方把自己描述为 `The best agent harness`，README 同时强调它是一个 `multi-platform AI coding framework`，通过 `.trellis/` 保持核心 workflow，再向 Claude Code、Cursor、OpenCode、Codex 等平台生成接线层。
- `Goose` 官方把自己描述为本地、可扩展、开源的 AI agent，重点是独立完成工程自动化任务，而不是作为某个宿主之上的附加 harness。

## 为什么当时建议改名

### 事实

- 当前比较对象已经不是一组同质的 “framework”。
- 现有三项里至少已经同时包含：
  - 宿主内 harness 扩展
  - 面向交付的工作流 / 编排套件
  - 带 policy shell 的 agent system

### 推断

- `framework-flow-diagrams` 这个旧名字会把读者引向“同类框架横评”，但当前专题真正比较的是系统里的四个位置关系：
  - 宿主工作面在哪里
  - harness 压在哪一层
  - 控制中心由谁承担
  - 恢复路径如何回流
- 现在还只覆盖三项，这个偏差已经出现；如果继续加入跨宿主 harness、teams-first orchestration、独立宿主 agent，这个名字会越来越误导。
- 第一项已经从 `oh-my-opencode` 演化到 `oh-my-openagent`，但专题 slug 没跟上，说明“名字落后于研究对象”已经是现实问题，而不是纯粹命名洁癖。

### 处理结果

- 已在下一轮扩图前完成完整重命名，而不是等到更多图加入后再统一搬迁。

## 已采用的新名

- `host-harness-flow-diagrams`

### 选择理由

- `host` 对齐当前专题一直在强调的宿主工作面。
- `harness` 保留这个仓库最关心的研究主轴。
- `flow-diagrams` 继续描述这个专题的材料形态，不需要读者重新理解它是做什么的。
- 这个名字既能容纳宿主内增强层，也能容纳跨宿主控制层、工作流套件，以及少量“控制组”式的独立宿主 agent。

### 曾考虑过的备选

- `agent-system-flow-diagrams`
  - 更宽，但会弱化 host/harness 这个专题当前最有辨识度的视角。
- `harness-structure-diagrams`
  - 更偏结构图，但会弱化当前应用里“按步骤回放控制闭环”的交互特征。

## 值得纳入的新项目

下面的 `官方定位` 属于事实，`纳入理由` 属于仓库解释。

| 项目 | 官方定位 | 纳入理由 | 优先级 |
| --- | --- | --- | --- |
| `Trellis` | 跨多平台的 agent harness / AI coding framework | 这是当前最缺的一类：把核心 workflow 放在平台之上，再生成各平台接线层。它能把“跨宿主控制面”这个形态明确画出来，和现有三张图形成最大结构增量。 | 高 |
| `oh-my-claudecode` | Teams-first multi-agent orchestration for Claude Code；`team-*` 是 canonical pipeline | 它和 `everything-claude-code` 都围绕 Claude Code 生态，但控制形状不同。一个是 teams-first staged pipeline，一个更像 policy-shell 主 agent 闭环，放在一起很有比较价值。 | 高 |
| `oh-my-codex` | Codex 之上的 workflow layer；保留 Codex 执行引擎，在外层增加 prompts、skills、state 和 team runtime | 它能补上“同类 harness 在另一宿主上的形状”这一维度，特别适合和 `oh-my-openagent`、`oh-my-claudecode` 做宿主差异对照。缺点是与现有图谱有部分重叠，所以优先级略低于前两项。 | 中高 |
| `Goose` | 独立的本地 AI agent / 工程自动化宿主 | 如果专题改名为更宽的 `host-harness-*` 方向，`Goose` 很适合作为“独立宿主控制组”。它能帮助读者看清：什么是宿主自身的控制闭环，什么是后加的 harness。 | 中 |

## 暂时不建议纳入这一轮的项目

| 项目 | 原因 |
| --- | --- |
| `superpowers` | 它更像技能框架与执行方法论系统，不是当前这套图例最擅长表达的“宿主-壳层-控制中心-恢复路径”结构对象。 |
| `get-shit-done` | 它更偏 meta-prompting / spec-driven workflow 方法层，适合单开一个“方法系统对比”专题，而不是直接塞进现有结构图。 |

## 建议的扩图顺序

### 如果只加 1 个

- 先加 `Trellis`。

### 如果加 2 个

- 先加 `Trellis`。
- 再加 `oh-my-claudecode`。

### 如果加 3 到 4 个

- 在前两者之后加入 `oh-my-codex`。
- 如果决定把专题明确扩成 “host + harness + workflow” 的更宽图谱，再加入 `Goose` 作为独立宿主对照。

## 建议的后续动作

- 下一步直接讨论扩图范围，而不是再回头处理 slug 或路径统一。
- 讨论纳入新案例时，优先判断它是否仍然适合放进“宿主工作面 / harness 壳层 / 控制中心 / 恢复路径”这一套比较问题里。
- 内部实现里仍沿用的 `oh-my-opencode` id 可以等到真正扩图时再一并评估是否需要改动，避免这轮把范围扩得过大。

## 参考来源

- 仓库内：
  - `/src/data/homepage.ts`
  - `/src/content/docs/topics.md`
  - `/topics/host-harness-flow-diagrams/src/data/diagrams.ts`
- 官方仓库与文档：
  - <https://github.com/Yeachan-Heo/oh-my-codex>
  - <https://github.com/Yeachan-Heo/oh-my-claudecode>
  - <https://github.com/mindfold-ai/Trellis>
  - <https://github.com/block/goose>
