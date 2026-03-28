# host-harness-flow-diagrams 扩图纳入判断表

**日期：** 2026-03-28

## 用途

这份备忘不是最终扩图清单，而是下一轮扩图前的纳入判断表。它的目标是把候选对象放回同一套比较问题里，避免一边画图一边临时决定“什么对象算同类、什么对象只是参考材料”。

与这份备忘对应的 machine-readable skeleton 现在位于：

- `/topics/host-harness-flow-diagrams/src/data/expansionCandidates.ts`

## 当前基线

当前专题已经有 3 个基线案例：

- `oh-my-openagent`
- `gstack`
- `everything-claude-code`

当前图最稳定的比较问题仍然是这 4 个：

- 宿主工作面在哪里
- harness 壳层压在哪一层
- 控制中心由谁承担
- 恢复路径如何回流

因此，扩图时最重要的不是“多加几个热门项目”，而是判断新对象能不能被放进这 4 个问题里，而且还能带来新的结构信息。

## 结论摘要

- `everything-claude-code` 保持为现有基线案例，不用拿它替代 `oh-my-claudecode`。
- 第一层核心新增候选：`Trellis`、`oh-my-codex`
- 第二层边界案例：`get-shit-done`
- 同作者 family 参考：`oh-my-claudecode`
- 可选控制组：`Goose`

## 判断标准

一个对象越接近下面 4 条，就越适合进入当前专题：

- `有清晰宿主工作面`
  读者能看出它依附在哪个宿主，或者它自己就是宿主
- `有可画出的控制中心`
  不是只有方法论口号，而是真的存在主控点、阶段主线或可追踪的控制结构
- `有可追踪的恢复路径`
  出错、返工、重排或继续执行的路径能被明确画出来
- `能提供新的结构增量`
  不只是“另一个同类实现”，而是能补出现有图里还没有被看清的形态

## 纳入判断表

下面的 `官方定位` 属于事实；`结构价值`、`图中应突出什么` 和 `建议层级` 属于仓库解释。

| 对象 | 官方定位 | 结构价值 | 建议层级 | 图中最该突出什么 |
| --- | --- | --- | --- | --- |
| `everything-claude-code` | agent harness performance optimization system；skills、instincts、memory、security、research-first development，面向 Claude Code、Codex、OpenCode、Cursor 等 | 它已经承担了“policy / memory / rules layer 持续压在主 agent 闭环上”的基线角色 | 保持现有基线 | `policy shell` 如何持续塑造主控闭环，而不是只在外围提供辅助 |
| `Trellis` | the best agent harness；multi-platform AI coding framework，支持 Claude Code、Cursor、OpenCode、Codex 等 | 它最能补出现有图里还缺的“核心 workflow 在平台之上，再向各宿主生成接线层”这类结构 | 第一层核心新增 | `平台之上的控制面` 与 `平台之下的宿主接线层` 如何分层 |
| `oh-my-codex` | OpenAI Codex CLI 上的 workflow layer；保留 Codex 作为 execution engine，在外层提供 prompts、skills、`.omx/` state、`$team` | 它能把同一类 orchestration family 放到 Codex 宿主上观察，增量比再加一个 Claude 侧 case 更大 | 第一层核心新增 | `Codex host` 如何与外层 workflow / runtime help 叠合，而不是被完全替代 |
| `oh-my-claudecode` | teams-first multi-agent orchestration for Claude Code；canonical pipeline 是 `team-plan → team-prd → team-exec → team-verify → team-fix` | 它和 `oh-my-codex` 明显属于同作者 family，但更像 family 参考样本，而不是下一轮必须单独成图的新槽位 | family 参考，暂不单列第一层 | 如果以后单独成图，重点应是 `teams-first staged pipeline` 在 Claude Code 宿主上的着力点 |
| `get-shit-done` | meta-prompting、context engineering、spec-driven development system；覆盖 Claude Code、OpenCode、Gemini CLI、Codex、Cursor 等 | 它能把专题边界往“workflow protocol case”拉宽，是很好的边界对象，但比前两者更容易把图带向方法论流程图 | 第二层边界案例 | `clarification → codebase map → roadmap → plan/execute` 这条协议化工作流，究竟是在宿主之上形成控制闭环，还是只是方法模板 |
| `Goose` | local, extensible, open source AI agent；automates engineering tasks from start to finish | 它适合作为“独立宿主控制组”，帮助读者区分宿主自身闭环与后加 harness | 可选控制组 | `宿主本体` 自己的控制闭环长什么样，以及它和附加 harness 有什么边界 |

## why `everything-claude-code` 不能替代 `oh-my-claudecode`

这两者都和 Claude Code 生态有关，但它们在当前专题里承担的结构角色并不相同。

- `everything-claude-code` 更像 `policy + rules + memory + security` 的持续治理层
- `oh-my-claudecode` 更像 `teams-first orchestration pipeline`

也就是说，它们不是“二选一的同类替代品”，而是两种不同控制形态。当前之所以不把 `oh-my-claudecode` 放进第一层，不是因为它被 `everything-claude-code` 替代了，而是因为同作者 family 里 `oh-my-codex` 这一步能带来更大的宿主差异增量。

## `oh-my-codex` 和 `oh-my-claudecode` 应该怎么处理

我的建议是：

- 先把它们当成 `同一个 orchestration family`
- 不要在下一轮一上来就把它们 `硬并成同一张图`
- 如果这个 family 只给一个新增槽位，先画 `oh-my-codex`

理由有两点：

- 官方自己已经把两者描述成同一套 orchestration experience 在不同宿主上的展开
- 但当前专题恰好最关心宿主工作面，因此“同 family 但不同 host surface”本身就是重要信息，不能为了省槽位把它抹平

更具体地说，`oh-my-codex` 更值得先画，是因为当前基线里已经有 `everything-claude-code` 作为 Claude 侧案例；如果再先加 `oh-my-claudecode`，新增的信息更多会落在“另一种 Claude 侧 orchestration”上，而不是宿主差异上。

## 建议的扩图顺序

### 第一层

- `Trellis`
- `oh-my-codex`

### 第二层

- `get-shit-done`

### 第三层或控制组

- `Goose`

### 参考但暂不单独成图

- `oh-my-claudecode`

## 如果后面要把 `oh-my-codex` / `oh-my-claudecode` 合成 family 视图

不建议直接做成“同一张图只换标题”。更合适的做法是：

- 保留同一套 family-level control skeleton
- 把 `host surface`、`team runtime`、`native integration` 这几块做成宿主特异层
- 明确标注哪部分是 family 共性，哪部分是 host-specific adaptation

这样既能保留同作者方法论的一致性，也不会损失当前专题最关心的宿主差异。

## 当前最稳的下一步

- 下一轮正式扩图时，先围绕 `Trellis` 和 `oh-my-codex` 补图
- 同时把 `get-shit-done` 作为边界对象保留在 scope 里，不再默认排除
- 到真正要画 `get-shit-done` 时，再专门判断它是继续沿用现有图例，还是需要为“workflow protocol case”加一层说明

## 参考来源

- 现有仓库材料
  - `/topics/host-harness-flow-diagrams/src/data/diagrams.ts`
  - `/src/content/docs/topics.md`
  - `/src/data/homepage.ts`
- 官方仓库
  - <https://github.com/mindfold-ai/Trellis>
  - <https://github.com/Yeachan-Heo/oh-my-codex>
  - <https://github.com/Yeachan-Heo/oh-my-claudecode>
  - <https://github.com/affaan-m/everything-claude-code>
  - <https://github.com/gsd-build/get-shit-done>
  - <https://github.com/block/goose>
