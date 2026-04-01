---
title: 深入剖析 OMO 与 OMX
description: 拆开 OpenCode 与 Codex 各自提供了哪些 harness 机制层能力，OMO 与 OMX 如何利用并扩展这些能力，以及它们最终分别给用户定义了什么交互面。
---

这篇专题聚焦两条链路：

- `OpenCode -> OMO（oh-my-openagent）`
- `Codex -> OMX（oh-my-codex）`

正文只回答 4 件事：

1. 宿主原生已经公开了哪些 harness 机制
2. OMO / OMX 直接利用了哪些宿主接口
3. OMO / OMX 在宿主之外又补了哪些 runtime 能力
4. 用户到底在哪些命令点、决策点、恢复点参与

这里的“交互面”专指 4 类接口：

- `触发接口`
- `输入接口`
- `授权 / 决策接口`
- `续跑 / 中断 / 恢复接口`

## OpenCode 作为宿主，已经公开了哪些 harness 机制

OpenCode 的宿主层已经很厚。它不只给出一个聊天入口，也给出了委派、命令、插件、工具、规则、权限、恢复这些可以直接被外层 harness 利用的原语。

### 1. 控制与委派机制

| 机制 | OpenCode 原生能力 | 对 harness 的意义 |
| --- | --- | --- |
| `primary / subagent` | 主 agent 可切换，subagent 可自动调用，也可由用户显式 `@` 调用 | harness 直接获得主控者和 specialist 单位 |
| `child session tree` | subagent 可创建 child session，用户能进入 child session、回 parent session、左右轮换 | harness 直接获得分工后的可继续状态面 |
| `plan / build mode` | 原生就有 `Plan` 与 `Build` 两类 mode，`Plan` 默认禁写文件、禁 bash | harness 可以把规划与执行压到不同阶段 |
| `agent create` | 支持把 specialist 固化成 agent markdown | harness 可以把临时分工沉淀成长期能力 |

### 2. 命令、插件与工具扩展机制

| 机制 | OpenCode 原生能力 | 对 harness 的意义 |
| --- | --- | --- |
| `commands` | 支持内建 `/command`，也支持自定义命令；命令可带参数、说明、agent、subtask、model、temperature，并可把文件或 shell 结果注入上下文 | harness 可以把“复杂工作协议”压成稳定命令入口 |
| `plugin system` | 支持插件；插件可接入 command、file、permission、session、tool、TUI 等事件面 | harness 可以把意图路由、恢复、通知、状态治理接到宿主事件层 |
| `custom tools` | 支持自定义工具，也支持通过插件增加工具面 | harness 可以把 orchestration 专用能力做成工具，把 prompt 从控制逻辑里解放出来 |
| `session commands` | `/new`、`/sessions`、`/compact` 直接暴露 session 操作面 | harness 可以把长任务恢复和上下文压缩挂到宿主命令层 |

### 3. 上下文、规则与知识注入机制

| 机制 | OpenCode 原生能力 | 对 harness 的意义 |
| --- | --- | --- |
| `prompt + @file + !bash` | 普通 prompt、文件引用、临时 shell 输出都能进入当前任务 | harness 可以直接利用宿主现有的上下文拼装面 |
| `AGENTS / instructions` | 支持 `AGENTS.md`、`opencode.json.instructions`、project / global 级配置 | harness 直接获得长期规则层 |
| `skills` | 发现 `SKILL.md`，支持 `allow / deny / ask` | harness 可以把工作法、知识和外部工具一起挂到 skill surface 上 |
| `MCP` | 支持本地与远端 MCP，并能按 agent 精细启停 | harness 可以在宿主内扩工具边界 |

### 4. 边界、批准与结构化回问机制

| 机制 | OpenCode 原生能力 | 对 harness 的意义 |
| --- | --- | --- |
| `permissions` | `edit`、`bash`、`webfetch`、skills 都可设 `ask / allow / deny` | harness 继续沿用宿主层的行为边界 |
| `question` 工具 | 支持结构化提问、选项与自定义回答 | harness 可以把澄清、访谈、分叉决策做成明确节点 |

### 5. 持续运行与恢复机制

| 机制 | OpenCode 原生能力 | 对 harness 的意义 |
| --- | --- | --- |
| `session continuity` | 支持 session 持续、压缩、总结与切换 | harness 可以把长任务压在宿主已有 session life cycle 上 |
| `session tree navigation` | 用户能进 child session、回父 session | harness 可以继续利用多层 session 状态 |

### OpenCode 机制层总表

OpenCode 原生已经公开给外层 harness 的核心原语包括：

- agent / subagent
- child sessions
- plan / build
- commands
- plugin system
- custom tools
- prompt / file / shell context
- AGENTS / instructions
- skills
- MCP
- permissions
- question
- session continuity

这套宿主层已经足够支撑外层 harness 做规划、执行、恢复、委派和长期治理。

## OMO 直接利用了 OpenCode 的哪些接口

OMO 的重点是把 OpenCode 已有原语编成固定工作协议。它主要利用的是 OpenCode 的 agent、command、plugin、tool、session、question 这些宿主接口。

### 1. 利用 agent、subagent 与 session substrate

| 宿主接口 | OMO 的利用方式 |
| --- | --- |
| `agent / subagent` | 把 `Sisyphus`、`Hephaestus`、`Prometheus`、`Atlas` 编成固定角色系，把 `oracle`、`explore`、`librarian` 等做成显式 specialist surface |
| `child sessions` | 把子任务结果和阶段状态继续压在 parent / child session 结构里 |
| `plan / build mode` | 把规划与执行继续压成不同阶段，只是入口词和接力逻辑被 OMO 重写得更明确 |

### 2. 利用 command surface

| 宿主接口 | OMO 的利用方式 |
| --- | --- |
| `custom commands` | 把 `/start-work`、`/handoff`、`/stop-continuation`、`/ralph-loop`、`/ulw-loop` 做成稳定协议入口 |
| `session commands` | 继续利用宿主 session 命令面处理切换、压缩、恢复 |
| `command-bound agent routing` | 让不同命令把任务直接导向 `Prometheus`、`Atlas` 或 specialist 族群 |

### 3. 利用 plugin、hook 与 tool surface

| 宿主接口 | OMO 的利用方式 |
| --- | --- |
| `plugin / hook` | 用 `keyword-detector`、`start-work`、continuation、recovery、notification、runtime fallback 这类 hook 接住消息流和工具流 |
| `custom tools` | 把 `task`、`call_omo_agent`、`background_output`、`background_cancel`、session 读取类能力做成 orchestration 工具 |
| `question` 工具 | `Prometheus` 的 interview 直接接在宿主 `Question` 上 |
| `permissions` | 继续沿用宿主 `ask / allow / deny` 作为敏感动作的最终闸门 |

### 4. 利用 rules、skills 与 MCP surface

| 宿主接口 | OMO 的利用方式 |
| --- | --- |
| `rules / AGENTS` | 继续通过目录级 AGENTS 和规则注入塑造项目行为 |
| `skills` | 继续使用 `SKILL.md`，兼容 `.opencode/skills`、`.claude/skills`、`.agents/skills` 路径 |
| `MCP` | 继续使用宿主 MCP，也允许 skill-embedded MCP |

## OMO 在宿主之外又补了哪些 runtime 能力

### 1. 协议入口层

| 扩展 | 作用 |
| --- | --- |
| `ulw / ultrawork` | 默认复杂任务入口，用粗粒度目标直接触发整条控制链 |
| `Prometheus` | 负责 planning / interview / plan generation |
| `/start-work` | 把计划推进到执行态，并把执行入口固定下来 |
| `@oracle / @explore / @librarian` | 提供 specialist 快速直达面 |
| `/handoff` | 把当前状态压成交接摘要 |
| `/stop-continuation` | 停止 continuation 与 loop |

### 2. 意图路由与类别层

| 扩展 | 作用 |
| --- | --- |
| `keyword-detector / intent gate` | 根据 `ulw`、`search`、`investigate` 等关键词切换后续控制链 |
| `category system` | 委派时优先给 `category`，把模型复杂度留在系统内部消化 |
| `subagent_type` | 把任务直接导向某类 specialist，把模型选择留在系统内部 |

### 3. 任务、后台与持久任务层

| 扩展 | 作用 |
| --- | --- |
| `task` | 委派子任务时要求明确给出 `run_in_background`、`load_skills`、`category` 或 `subagent_type` |
| `call_omo_agent` | 提供更窄的 specialist 直连调用面 |
| `background_output` | 拉取后台任务结果，可异步看状态，也可阻塞等结果 |
| `background_cancel` | 取消后台任务 |
| `.sisyphus/tasks/` | 把任务写入持久化状态 |

### 4. 执行接力与恢复状态层

| 扩展 | 作用 |
| --- | --- |
| `.sisyphus/plans/` | 保存 plan 文件 |
| `.sisyphus/boulder.json` | 保存执行阶段状态 |
| `/start-work` | 基于 plan 和 boulder state 进入执行或恢复 |
| `run --session-id` | 在 CLI 层恢复已有 session |

### 5. 自动治理与故障恢复层

| 扩展 | 作用 |
| --- | --- |
| `hook stack` | 把 Message、Event、PreToolUse、PostToolUse、Transform、Params 等 hook 串成治理链 |
| `session recovery` | 处理 missing tool results、thinking block violations、JSON parse errors、context-window exceed 等失败 |
| `CLI wrapper` | `install`、`doctor`、`run`、`mcp oauth`；`run` 会等 todos 和 background child sessions idle 后再退出 |

### 6. 协作语义

OMO 公开出来的协作主干是 `controller-mediated coordination`：

- 主控者分派任务
- specialist 返回结果和 learnings
- 状态通过 session、task、notepad、hook 回流
- 用户通过命令和状态对象重新接手

公开材料没有给出一条 “任意 subagent 彼此直接发消息” 的独立总线。

## OMO 给用户定义了什么交互面

### 1. 触发接口

| 入口 | 用户用它来做什么 | 重要性 |
| --- | --- | --- |
| `ulw / ultrawork` | 启动默认复杂任务协议 | 关键 |
| `Prometheus` / 文档中的 `@plan` | 进入规划和 interview | 关键 |
| `/start-work` | 进入执行或恢复已有执行 | 关键 |
| `@oracle / @explore / @librarian` | 直接打到 specialist | 重要 |
| `task(...run_in_background...)` | 显式拉起同步或后台子任务 | 关键 |
| `/handoff` / `/stop-continuation` | 管理交接、停止与控制权回收 | 关键 |
| `run` / `run --session-id` / `/ralph-loop` / `/ulw-loop` | 启动长时运行、持续推进或恢复既有 session | 重要 |

### 2. 输入接口

#### `ulw / ultrawork`

必须提供的信息：

- `目标`
- `约束`
- `禁区`

建议补充的信息：

- 当前代码、文件或仓库上下文
- 是否要立即触发搜索、探索、资料收集

可选补充的信息：

- 详细步骤
- 具体模型选择

#### `Prometheus`

必须提供的信息：

- `目标与范围`
- `非目标`
- `必须满足的约束`
- `对 Question 的回答`

建议补充的信息：

- 测试策略偏好
- 风险容忍度

#### `/start-work`

必须提供的信息：

- `执行哪份 plan`
- `是否 resume`
- `是否带 worktree`

这里的关键输入已经从“任务目标”切成了“状态选择”。

#### `task / background`

必须提供的信息：

- `子任务边界`
- `category` 或 `subagent_type`
- `load_skills`
- `run_in_background`

建议补充的信息：

- 稍后是否拉取结果
- 是否绑定已有 `session_id`

### 3. 授权 / 决策接口

| 节点 | 用户要做什么 | 重要性 |
| --- | --- | --- |
| `permissions / skill ask` | 允许或拒绝宿主层敏感动作 | 关键 |
| `Prometheus interview` | 回答结构化问题，确认 trade-off、范围与测试策略 | 关键 |
| `specialist delegation` | 决定子任务边界、类别、是否加载 skills、是否后台运行 | 关键 |
| `continuation control` | 决定继续、停止或交接 | 关键 |

### 4. 续跑 / 中断 / 恢复接口

| 接口 | 用户拿它做什么 | 重要性 |
| --- | --- | --- |
| `/start-work` | 从 plan 进入执行，或基于 `boulder.json` 恢复 | 关键 |
| `/handoff` | 生成交接摘要，把状态压成下一 session 输入 | 关键 |
| `/stop-continuation` | 停掉 continuation | 关键 |
| `background_output` | 拉取后台任务结果 | 重要 |
| `background_cancel` | 取消后台任务 | 重要 |
| `run --session-id` | 在 CLI 层继续既有 session | 重要 |

### OMO 交互面摘要

OMO 的用户参与主要集中在 4 类节点：

- 用命令或关键词选入口协议
- 提供目标、约束、边界、禁区和子任务边界
- 在 interview、delegation、approval、continuation 节点做决定
- 通过 `/start-work`、`/handoff`、`background_output`、`run --session-id` 回到状态面继续接手

## 以 `ulw` 为例：OMO 的闭环执行过程

下面用一个具体输入把 OMO 的机制联动写清楚。

假设用户输入：

```text
ulw 为 OMO / OMX 专题新增一个章节，要求写清 ulw 如何触发、规划如何生成、执行如何启动、失败如何恢复。
约束：不要泛泛而谈，要写到 command、hook、task、Question、.sisyphus 状态。
禁区：不要只写概念对比，必须写完整执行链。
```

这条链会按下面的顺序展开。

| 阶段 | 用户在做什么 | 宿主机制 | OMO 机制 | 结果 |
| --- | --- | --- | --- | --- |
| `1. 输入进入会话` | 在当前主会话里输入一条带 `ulw` 的任务消息 | prompt 输入、当前 primary agent、session substrate | 无需额外命令，直接进入消息处理链 | 系统拿到原始任务描述 |
| `2. 关键词检测` | 用户没有额外动作 | plugin hook、`chat.message` 事件 | `keyword-detector` hook 检测到 `ulw` / `ultrawork`，把 ultrawork 指令前插进消息 | 原始 prompt 被改写成 OMO 可执行的控制指令 |
| `3. 初始路由` | 用户继续等待或补充约束 | custom tools、agent / subagent、session | ultrawork 默认链把任务导向 `task(...)` 委派面，后续可路由到 `plan`、`explore`、`librarian`、`oracle` 等 specialist | 系统决定先规划、先探索还是先查证 |
| `4. 规划与澄清` | 用户回答问题、确认边界 | `Question` 工具、permissions、child sessions | `Prometheus` 负责 interview 和规划；若信息不足，会用 `Question` 提问；规划结果写入 `.sisyphus/plans/` | 一份可执行 plan 被生成并落盘 |
| `5. 执行启动` | 用户触发 `/start-work`，或在可恢复状态下继续已有执行 | command surface、session state、agent 切换 | `start-work` hook 读取 plan 与 `.sisyphus/boulder.json`，把当前执行切到 `Atlas` 负责的执行阶段 | 执行态被创建，或已有执行态被恢复 |
| `6. 执行与委派` | 用户批准敏感动作，必要时给出补充信息 | `task` 工具、child sessions、skills、MCP、permissions | `Atlas` 或其他主控 agent 用 `task` / `call_omo_agent` 分派子任务；每个子任务必须声明 `run_in_background`、`load_skills`、`category` 或 `subagent_type` | specialist 开始工作，后台任务和子会话被拉起 |
| `7. 运行期治理` | 用户按需查看结果、取消任务、回答追问 | hook 事件、permissions、session continuity | hook 链负责 continuation、通知、runtime fallback；后台任务结果通过 `background_output` 拉取，取消通过 `background_cancel` | 长任务可继续推进，且保持可观察、可打断 |
| `8. 故障恢复` | 用户只在系统无法自恢复时接手 | recovery hooks、session state、command surface | recovery 逻辑处理 missing tool results、JSON parse errors、context-window exceed 等问题；必要时等待用户批准或补充信息 | 任务恢复继续，或停在一个明确的等待点 |
| `9. 收束与闭环` | 用户接收结果，必要时生成交接或稍后续跑 | final output、handoff、CLI run、session resume | 执行完成后，结果直接返回；如果要暂停，`/handoff` 会生成交接摘要；如果走 CLI，`run` 会等 todos 和 background child sessions idle 后退出 | 任务以“完成”或“可恢复暂停”两种稳定状态收束 |

### 这条链里每个机制各自负责什么

| 机制 | 负责的事 |
| --- | --- |
| `keyword-detector hook` | 识别 `ulw` 关键词，并把普通消息改写成 ultrawork 控制链的入口 |
| `Prompt injection` | 把用户的自然语言目标变成带协议约束的任务描述 |
| `Prometheus + Question` | 把模糊任务收束成 plan，必要时向用户拿到缺失信息 |
| `.sisyphus/plans/` | 保存规划结果，给执行阶段提供稳定输入 |
| `/start-work` hook | 读取 plan 和执行状态，正式进入或恢复执行 |
| `.sisyphus/boulder.json` | 保存执行期状态，记录当前跑到哪一步、是否在 resume |
| `task / call_omo_agent` | 把执行阶段拆成 specialist 子任务 |
| `skills / MCP / permissions` | 为子任务提供知识、工具和边界控制 |
| `background_output / background_cancel` | 给用户一个显式的后台任务控制面 |
| `recovery hooks` | 在运行期错误发生时优先自动恢复，把人工介入推迟到必要时刻 |
| `/handoff` / `run --session-id` | 把一次长任务压缩成可交接、可恢复的状态 |

### 用户在这条链里需要参与的节点

用户需要明确参与的地方主要有 5 个：

- 一开始把 `目标`、`约束`、`禁区` 说清楚。
- `Prometheus` 发起 `Question` 时，补足范围、非目标和决策条件。
- 执行前用 `/start-work` 明确选择开始执行还是恢复已有状态。
- 运行中对敏感动作做批准，必要时查看或取消后台任务。
- 完成时决定直接结束，还是用 `/handoff` / `run --session-id` 把任务留在可恢复状态。

### 这条链说明了什么

`ulw` 是一个完整控制链。入口是关键词，触发器是 hook，规划由 `Prometheus` 负责，执行由 `/start-work` 启动，specialist 通过 `task` 委派，状态保存在 `.sisyphus`，运行期故障由 recovery hooks 处理。

## Codex 作为宿主，已经公开了哪些 harness 机制

Codex 原生同样已经公开出一层很厚的 host substrate。它给出的是一整套 turn、thread、subagent、command、plugin、skill、hook、policy、sandbox 组合面。

### 1. 控制、线程与委派机制

| 机制 | Codex 原生能力 | 对 harness 的意义 |
| --- | --- | --- |
| `turn` | 一次用户输入就是一个 `turn`，也是一个明确的 agent work unit | harness 可以把工作阶段建立在清晰的 turn life cycle 上 |
| `thread lifecycle / persistence` | 支持 create、resume、fork、archive threads，并持久化 event history | harness 可以把长任务压在宿主已有 thread substrate 上 |
| `subagents` | 只有在用户明确要求时才 spawn；宿主负责 spawning、routing follow-up instructions、waiting、closing threads | harness 直接获得并行委派 runtime |
| `custom agents` | 支持在 `~/.codex/agents/` 或 `.codex/agents/` 下定义长期 specialist | harness 可以把长期角色固化到宿主里 |

### 2. 命令、插件与入口控制面

| 机制 | Codex 原生能力 | 对 harness 的意义 |
| --- | --- | --- |
| `slash commands` | App、CLI、IDE 都公开了一批命令面，如 `/permissions`、`/agent`、`/compact`、`/status`、`/model`、`/review`、`/plan-mode` | harness 可以把状态切换、权限治理、agent steering 压在宿主命令面上 |
| `skills as commands` | 可显式 `/skills` 或 `$skill`，也可按 `description` 隐式触发 | harness 可以把 workflow 直接挂到宿主 skill surface 上 |
| `plugins` | 支持插件打包 skills、apps、MCP servers，并通过 `/plugins` 安装和管理 | harness 可以把长期扩展能力打包成可分发的宿主插件 |

### 3. 规则、知识与工具接入机制

| 机制 | Codex 原生能力 | 对 harness 的意义 |
| --- | --- | --- |
| `AGENTS.md` | 做事前读取 `AGENTS.md`，按用户目录、repo root 到当前目录逐层加载 | harness 直接获得长期项目规则层 |
| `MCP` | 支持 stdio 与 streamable HTTP server，支持 OAuth 与统一配置 | harness 可以扩工具边界 |
| `config / advanced policy` | 支持 config、rules、granular approval policy、request permissions、mcp elicitations | harness 可以复用宿主政策层 |

### 4. 边界、批准与自动治理机制

| 机制 | Codex 原生能力 | 对 harness 的意义 |
| --- | --- | --- |
| `approvals + sandbox` | 支持 `read-only`、`workspace-write`、`danger-full-access` 与多种 approval policy | harness 继续沿用宿主层 autonomy 边界 |
| `granular policy` | 可把 sandbox、MCP、skills、permissions 的批准面细分治理 | harness 可以细分不同来源的批准面 |
| `hooks` | 支持 `SessionStart`、`PreToolUse`、`PostToolUse`、`UserPromptSubmit`、`Stop`；hook 本身以命令脚本运行 | harness 可以把补上下文、阻断、审计和 continuation 接到宿主事件面上 |

### Codex 机制层总表

Codex 原生已经公开给外层 harness 的核心原语包括：

- turn / thread
- subagents
- custom agents
- slash commands
- skills
- plugins
- AGENTS.md
- MCP
- config / granular policy
- approvals / sandbox
- hooks

这套 substrate 已经足够支撑外层 workflow layer 做 planning、execution、recovery 和 team coordination。

## OMX 直接利用了 Codex 的哪些接口

OMX 的重点是利用 Codex 的 execution engine、AGENTS、skills、host commands、hooks、threads、subagents，然后在上面再加一层 workflow contract。

### 1. 利用执行引擎、指令层与 policy boundary

| 宿主接口 | OMX 的利用方式 |
| --- | --- |
| `Codex execution engine` | 真正的分析、实现、验证仍由 Codex 执行 |
| `AGENTS.md` | `omx setup` 安装 prompts、skills、AGENTS、config；项目规则继续沿 Codex 指令链生效 |
| `approvals / sandbox / MCP auth` | 真正 load-bearing 的权限边界仍留在 Codex 宿主 |

### 2. 利用 skill、command 与 thread surface

| 宿主接口 | OMX 的利用方式 |
| --- | --- |
| `skills` | 把 `$plan`、`$deep-interview`、`$ralph`、`$team` 这类 workflow 直接挂到 Codex 的 skill surface |
| `host commands` | 继续利用 `/permissions`、`/agent`、`/compact`、`/status` 这类宿主命令做 runtime steering |
| `thread persistence` | 长任务延续继续依赖 Codex 的 thread substrate |
| `subagents` | 需要并行协作时，让宿主负责 worker thread 的创建、跟进与关闭 |

### 3. 利用 plugin 与 hook surface

| 宿主接口 | OMX 的利用方式 |
| --- | --- |
| `plugins` | 安装出来的 skills、prompts、runtime 工具被组织成稳定 workflow 包 |
| `Codex hooks` | 继续利用宿主 hook 事件面处理上下文补充、阻断与 continuation |
| `Stop / pause points` | 继续沿用宿主的停顿、继续和等待用户输入能力 |

## OMX 在宿主之外又补了哪些 runtime 能力

### 1. 工作协议入口层

| 扩展 | 作用 |
| --- | --- |
| `omx setup` | 安装 prompts、skills、AGENTS、config |
| `omx` / `omx --madmax --high` | 用 OMX 推荐方式进入更强默认工作面 |
| `/prompts:*` | 切到明确角色视角 |
| `$plan` | 进入规划协议 |
| `$deep-interview` | 进入澄清协议 |
| `$ralph` | 进入持续推进协议 |
| `$team` | 进入并行协作协议 |

### 2. 项目级状态壳层

| 扩展 | 作用 |
| --- | --- |
| `.omx/` | 把 plans、logs、memory、runtime state 外部化到 repo 可见状态层 |
| `.omx/logs/` | 记录 hooks 与运行日志 |
| `runtime state` | 让恢复同时依赖 thread 和项目级状态对象 |

### 3. hooks extension 与 operator surface

| 扩展 | 作用 |
| --- | --- |
| `.omx/hooks/*.mjs` | 支持 hooks 插件化 |
| `omx hooks init/status/validate/test` | 提供显式 hooks 操作面 |
| `needs-input`、`pre-tool-use`、`post-tool-use` 等 derived signals | 提供更细的可扩展事件面 |
| `omx doctor`、`omx hud --watch`、`omx explore`、`omx sparkshell` | 提供安装治理、状态观察、只读探索和有界 shell 验证入口 |

### 4. team runtime

| 扩展 | 作用 |
| --- | --- |
| `omx team ...` | 显式拉起 coordinated parallel execution |
| `status / resume / shutdown` | 提供并行任务的观察、恢复与关闭接口 |
| `lead-session side-effect policy` | 把副作用收敛到 lead session |

### 5. 协作语义

OMX 公开出来的协作主干是 `lead-session-mediated coordination`：

- worker 的创建、跟进和关闭依赖 Codex 宿主 thread / subagent substrate
- 并行运行时由 lead session 收拢状态和副作用
- 用户通过 `$team`、`status`、`resume`、`shutdown` 接手控制

公开材料没有给出一条 “任意 worker 彼此直接发消息” 的独立总线。

## OMX 给用户定义了什么交互面

### 1. 触发接口

| 入口 | 用户用它来做什么 | 重要性 |
| --- | --- | --- |
| `omx setup` | 装长期能力 | 关键 |
| `omx` / `omx --madmax --high` | 进入 OMX 默认工作面 | 关键 |
| `/prompts:*` | 选角色视角 | 重要 |
| `$plan` | 进入规划 | 关键 |
| `$deep-interview` | 进入澄清 | 关键 |
| `$ralph` | 进入持续推进 | 重要 |
| `$team` / `omx team ...` | 进入并行协作 | 关键 |
| `/permissions` / `/agent` / `/status` / `/compact` | 用宿主命令治理当前 session | 重要 |
| `omx hud --watch` / `status` / `resume` / `shutdown` | 观察和恢复长任务 | 重要 |

### 2. 输入接口

#### 默认 OMX 路径

必须提供的信息：

- `目标`
- `约束`
- `非目标`
- `选哪条 workflow`

建议补充的信息：

- `是否采用 OMX 默认启动方式`
- `team 参数`

可选补充的信息：

- 低层 Codex 细节选择

#### `$plan` / `$deep-interview`

必须提供的信息：

- `目标与边界`
- `非目标`
- `需要澄清的问题`

建议补充的信息：

- 偏好的工作视角
- 持续推进还是一次性解答

#### `$team`

必须提供的信息：

- `任务边界`
- `团队规模`
- `角色分工`

建议补充的信息：

- 是否升级到 durable runtime

### 3. 授权 / 决策接口

| 节点 | 用户要做什么 | 重要性 |
| --- | --- | --- |
| `setup / startup` | 决定是否采用 OMX 默认工作面 | 关键 |
| `workflow selection` | 决定进入 `/prompts:*`、`$plan`、`$deep-interview`、`$ralph`、`$team` 哪条协议 | 关键 |
| `approvals / sandbox` | 在宿主层批准敏感动作 | 关键 |
| `host command steering` | 通过 `/agent`、`/permissions`、`/compact`、`/status` 调整当前运行态 | 重要 |
| `team runtime control` | 通过 `status / resume / shutdown` 管理并行工作 | 关键 |

### 4. 续跑 / 中断 / 恢复接口

| 接口 | 用户拿它做什么 | 重要性 |
| --- | --- | --- |
| `.omx/` | 看项目级状态对象 | 关键 |
| `omx hud --watch` | 看运行状态 | 重要 |
| `omx team status` | 看 team runtime 状态 | 关键 |
| `omx team resume` | 恢复并行 runtime | 关键 |
| `omx team shutdown` | 关闭并行 runtime | 关键 |
| `hooks logs / runtime logs` | 回看任务为何停在当前状态 | 重要 |
| `Codex host commands` | 通过宿主命令继续压缩、切换、治理线程 | 重要 |

### OMX 交互面摘要

OMX 的用户参与主要集中在 4 类节点：

- 先决定是否采用 OMX 默认工作面
- 选 workflow 协议，并给出目标、约束、边界与 team 参数
- 在 approvals、workflow selection、host command steering、team runtime control 节点做决定
- 通过 `.omx/`、`hud`、`status`、`resume`、`shutdown` 和宿主命令回到状态面继续接手

## 两条链路最应该记住的差别

| 维度 | `OMO` | `OMX` |
| --- | --- | --- |
| `宿主基础` | OpenCode 已有 agent、session、plan/build、commands、plugins、tools、question、skills、MCP、permissions | Codex 已有 turn/thread、subagents、slash commands、plugins、AGENTS、skills、MCP、approvals、sandbox、hooks |
| `外层主要利用面` | command、plugin、tool、session、Question surface | execution engine、skills、host commands、threads、hooks、policy surface |
| `外层主要动作` | 把原语编成 `ulw`、Prometheus、`/start-work`、task/background、handoff、continuation | 把原语编成 `omx setup`、`/prompts:*`、`$plan`、`$deep-interview`、`$ralph`、`$team`、team runtime |
| `最强扩展点` | keyword-detector、task persistence、boulder state、故障恢复、CLI wrapper | `.omx/` state shell、hooks extension、team runtime、operator surface |
| `交互面核心` | 显式协议命令、状态选择、后台任务取回 | workflow 选择、宿主命令 steering、project-visible state、team runtime control |
| `协作语义` | `controller-mediated coordination` | `lead-session-mediated coordination` |
| `恢复面` | `.sisyphus` + `/start-work` + handoff + background/session | thread + `.omx/` + hooks + team runtime + host commands |
