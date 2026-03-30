# Codex -> oh-my-codex 能力栈拆解备忘

**日期：** 2026-03-30

## 这份备忘要回答什么

这不是一份 “Codex 与 oh-my-codex 全量功能罗列”。

这轮要回答的更窄问题是：

- 作为宿主，`Codex` 原生提供了哪些可被 harness 利用的底层能力
- `oh-my-codex` 具体继承、包裹、补强了哪些能力
- 这里所说的“交互面”不指 UI，而指：
  - 用户在什么时机参与
  - 用户要提供什么信息
  - 用户如何主动触发某条 harness 流程
  - 用户会在哪些节点被要求授权、确认、续跑、停止或恢复

换句话说，这份备忘更关心 `user participation contract`，而不是菜单、面板、视觉入口。

## 证据边界

本轮只使用一手来源：

- OpenAI 官方 Codex 文档
- OpenAI 官方 Codex 博客文章
- `Yeachan-Heo/oh-my-codex` 官方仓库与官方文档

本页里的判断分三层：

- `事实`：可直接回原文确认
- `官方 framing`：项目自己如何描述自己
- `本文解释`：为了比较 harness 形态而做的仓库解释

补充约束：

- 关于当前用户可见能力边界，优先以 `developers.openai.com/codex/*` 为准
- 关于 Codex 作为宿主 / harness 的内部形态，允许引用 OpenAI 官方博客
- 关于 `oh-my-codex` 的实现定位，优先以 README 与 docs 为准；若文档未明确展开，则只写成工作假说

## 这里怎么定义“交互面”

本页把“交互面”拆成 4 类用户参与接口：

1. `触发接口`
   用户如何启动某个控制环，比如普通 prompt、`$skill`、`/agent`、`omx setup`
2. `输入接口`
   用户要提供什么材料，比如目标、约束、项目规则、skills、MCP、team 参数
3. `授权 / 决策接口`
   用户在哪些节点需要批准、拒绝、补充选择或回答问题
4. `续跑 / 中断 / 恢复接口`
   用户如何继续一个长任务、切换 agent 线程、让 hooks 继续、恢复 team runtime

### 权重说明

为了避免“所有要素都重要”这种空话，这里用 3 档权重：

- `高`
  缺了它，流程要么起不来，要么直接改变控制中心或执行边界
- `中`
  缺了还能跑，但质量、边界或效率会明显下降
- `低`
  主要是观察、便捷覆盖或高级用法，不是闭环成立的前提

## 一、为什么这里要把 Codex 读成 host substrate，而不是把 OMX 当宿主

这点需要先说清楚。

`事实` 上，OpenAI 官方博客已经把 Codex 明确区分成：

- `Codex harness`
- 以及建立在其上的 CLI / cloud / IDE / app 等表面形态

OpenAI 公开写到：

- Codex harness 负责 core agent loop
- 它还负责 thread lifecycle and persistence
- 负责 config and auth
- 负责 tool execution and extensions，并把 skills 与 MCP 纳入一致的 policy model

OpenAI 还进一步把 `Codex core` 描述成：

- 既是 agent 代码所在的 library
- 也是可被 spin up、用来运行单个 Codex thread 的 runtime

`本文解释`：

- 对这条研究线来说，`Codex` 不能只被看成“一个聊天框宿主”
- 更稳的读法是：`Codex` 本身已经是一套可继承、可加层、可调 policy、可持久化线程的 `host substrate`
- 这也是为什么 `oh-my-codex` 更适合被读成 “workflow layer on top of Codex” 而不是 “自己重新当宿主”

## 二、Codex 原生 substrate：用户参与接口长什么样

下面这张矩阵只谈 Codex 自己已经公开暴露的参与接口，不谈 `oh-my-codex` 额外加的 workflow layer。

| 能力块 | 事实 | 用户在什么时机参与 | 用户提供什么 | 权重 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `普通 prompt / turn 启动` | Codex 把一次用户输入定义成一个 `turn`；App Server 文章把 turn 写成 “one unit of agent work initiated by user input” | 每次开始一轮任务时 | 任务目标、补充消息、继续指令 | 高 | 这是最基础的触发接口 |
| `AGENTS.md` 分层指导 | 官方文档写明 Codex 会在做事前读取 `AGENTS.md`，并按 `~/.codex` + repo root 到当前目录的层级加载；离当前目录更近的文件优先 | 预配置阶段；后续每轮任务都会持续生效 | 项目规范、目录级规则、长期工作偏好 | 高 | 这是最典型的“ durable input surface ” |
| `skills` | 官方 skills 文档明确写到：既可显式用 `/skills` 或 `$skill` 触发，也可按 `description` 隐式触发；扫描 repo / user / admin / system 多层路径 | 想显式调用某种 workflow，或让 Codex 自动匹配专门工作法时 | skill 名称、skill 目录、`SKILL.md`、可选脚本与 references | 中高 | 用户既可直接触发，也可预先把工作法做成长期能力 |
| `MCP` | 官方 MCP 文档写明 Codex 支持 stdio 与 streamable HTTP server，支持 bearer auth 与 `codex mcp login <server-name>` OAuth；CLI 和 IDE 共用 `config.toml` | 预配置阶段；任务需要外部系统时 | MCP server 配置、认证、启停、工具 allow/deny | 中高 | 它扩的是能力边界，不是单条流程本身 |
| `subagents` | 官方文档写明 Codex 只有在用户明确要求时才会 spawn subagents；会负责 spawning、routing follow-up instructions、waiting、closing threads；用户可用 `/agent` 切换与查看 thread，也可要求 steer / stop / close | 任务太大、要并行、要 specialist 时 | 显式委派要求、agent 名称、分工边界 | 高 | 这是原生 delegation surface |
| `custom agents` | 官方文档支持 `~/.codex/agents/` 或 `.codex/agents/` 下的 TOML 文件，定义 `name`、`description`、`developer_instructions`，可继承 model / sandbox / MCP / skills | 想把某类 specialist 固化成长期能力时 | agent 配置、developer instructions、默认 MCP / skills / sandbox | 中高 | 这是把一次性分工固化成宿主能力的接口 |
| `approvals + sandbox` | 官方 sandboxing 文档写明 3 种常见 sandbox mode：`read-only`、`workspace-write`、`danger-full-access`；常见 approval policy：`untrusted`、`on-request`、`never`；app/IDE 有 permissions selector，CLI 可用 `/permissions` | 要控制 Codex 可做什么、何时必须停下来问人时 | 模式选择、批准、规则、允许的边界 | 高 | 这是用户对 agent autonomy 的原生闸门 |
| `granular policy` | advanced config 文档明确支持 granular approval policy，例如 `sandbox_approval`、`rules`、`mcp_elicitations`、`request_permissions`、`skill_approval` | 要把不同来源的批准面分开治理时 | 更细粒度的批准 / 自动拒绝策略 | 中高 | 这让用户参与从“全开 / 全关”变成细分政策设计 |
| `hooks` | 官方 hooks 文档支持 `SessionStart`、`PreToolUse`、`PostToolUse`、`UserPromptSubmit`、`Stop`；从 `~/.codex/hooks.json` 与 repo `.codex/hooks.json` 发现；可注入 additionalContext、block prompt、或在 `Stop` 自动创建 continuation prompt | 想把某些治理逻辑前置、后置，或自动续跑时 | hooks.json、命令 hook、阻断 / continuation 逻辑 | 中高 | 这已经是很典型的 harness engineering extension point |
| `thread lifecycle / persistence` | App Server 文章明确写到 Codex creates / resumes / forks / archives threads，并持久化 event history；server 也可在 agent 需要输入时 pause turn 等待客户端响应 | 长任务、恢复上下文、跨 client 续接时 | thread 选择、继续消息、客户端响应 | 中 | 它对普通用户不总是直接可见，但对长任务契约很重要 |

### 小结：Codex 的交互契约是什么

`事实` 上，Codex 原生已经公开暴露了相当厚的一层 host substrate：

- prompt / turn
- `AGENTS.md`
- skills
- MCP
- approvals / sandbox
- subagents
- hooks
- custom agents
- thread persistence

`本文解释`：

- Codex 原生交互面并不薄
- 用户已经可以把很多东西灌进控制环：
  - 目标
  - 规则
  - workflow skills
  - 外部工具
  - sandbox / approval policy
  - specialist agents
  - hook-driven continuation
- 它更像 `programmable host substrate`
- 但这些入口很多仍偏 `primitive`
  - 有很多能力
  - 有很多配置位
  - 有很多可插的 extension point
  - 但用户仍然经常要自己决定 “现在该走哪条工作协议”

这正是 `oh-my-codex` 可以切入的地方。

## 三、oh-my-codex：不是替换宿主，而是重组工作协议

`官方 framing` 很明确：

- OMX 是 `a workflow layer for OpenAI Codex CLI`
- `Codex does the actual agent work`
- `Codex remains the execution engine`

因此，OMX 这层更适合分成三类来理解：

- `继承`
  继续使用 Codex 的原生 substrate
- `包裹`
  把原本分散的能力组织成更清晰的入口
- `补强`
  在 Codex 之外增加更持久的状态、hooks、team runtime 和 operator surface

### 1. 继承了什么

| 能力 | 继承方式 | 对用户参与的影响 |
| --- | --- | --- |
| `Codex 执行引擎` | README 明确写到 Codex 负责 actual agent work，OMX 不替代宿主 | 用户仍然是在 Codex 上完成真正的分析、实现、验证 |
| `AGENTS.md` 指令层 | getting-started 文档写明 `omx setup` 会安装 prompts、skills、`AGENTS.md`、config；并且 OMX 默认通过 `-c model_instructions_file="<cwd>/AGENTS.md"` 叠加项目指令，且“does not replace/bypass Codex core system policies” | 用户给出的长期项目规则，仍然通过 Codex 的指令链生效 |
| `skills` | getting-started 文档明确把 skill 安装路径写成 `~/.codex/skills/*/SKILL.md`；README 也把 `$plan`、`$ralph`、`$team` 等写成 skills / workflows | OMX 不是自造一套独立技能系统，而是在 Codex skill surface 上加 workflow |
| `prompts` | getting-started 文档把 prompt 安装路径写成 `~/.codex/prompts/`；README 把 `/prompts:*` 当成主要 in-session surface | 用户依旧是在 Codex session 里调用 prompt surfaces，只是内容由 OMX 安装与约定 |
| `approvals / sandbox / MCP` | 因为 Codex 仍是 execution engine，且 OMX 明说不 bypass Codex core system policies，所以权限、sandbox、MCP auth 仍主要由宿主负责 | 用户的批准、权限模式、MCP 认证与边界，不会因为用了 OMX 而脱离 Codex |

### 2. 包裹成了哪些更明确的流程入口

这里是 OMX 最关键的变化。

它没有让用户每次都从一堆底层能力里自己拼，而是把它们收敛成更稳定的入口。

| 路径 | 用户怎么触发 | 用户主要提供什么 | 权重最高的要素 |
| --- | --- | --- | --- |
| `强化启动路径` | `omx` 或 README 推荐的 `omx --madmax --high`；getting-started 还给了 `omx --xhigh --madmax` 的 trusted environments 版本 | 启动偏好、信任边界、性能 / 并发强度 | `是否以 OMX 方式启动 Codex` 高 |
| `安装 / 脚手架路径` | `omx setup`，有问题时 `omx doctor` | 项目目录、是否接受 prompts / skills / AGENTS / config 脚手架 | `把长期能力装进去` 高 |
| `角色 prompt 路径` | `/prompts:architect "..."`、`/prompts:executor "..."` 等 | 目标、希望切换到的工作视角 | `工作视角` 中高，`原始长 prompt 细节` 低 |
| `规划路径` | `$plan "..."` | 目标、边界、想要的执行思路 | `目标与边界` 高 |
| `澄清路径` | `$deep-interview` | 还不够清晰的问题、非目标、约束 | `澄清意图` 高 |
| `持续执行路径` | `$ralph "..."` | 一个需要持续推进而不是一次性答复的目标 | `停止条件 / 持续性预期` 高 |
| `并行协作路径` | `$team "..."` 或 `omx team 3:executor "..."` | 团队规模、角色、并行任务目标 | `分工参数` 中高，`任务边界` 高 |
| `只读 / operator 路径` | `omx explore --prompt "..."`、`omx sparkshell ...`、`omx hud --watch` | 仓库问题、shell 命令、监控需求 | `是否进入 support/operator 面` 中 |

`本文解释`：

- 在 Codex 原生里，用户常常在“能力原语”之间自己选
- 在 OMX 里，用户更常在“工作协议”之间选

这意味着用户第一步不再只是：

- “我要不要开 subagent”
- “我要不要显式触发 skill”
- “我要不要自己写一串很长的 instructions”

而更像是：

- “我现在是先做角色化分析，还是先做计划，还是直接走持续执行 / 团队协作”

### 3. 补强了哪些 harness-engineering 能力

这些能力更像是 OMX 真正把 Codex substrate 变成“更可治理 workflow layer”的地方。

| 补强块 | 事实 | 对用户参与接口的影响 |
| --- | --- | --- |
| `.omx/` durable state | README 明确写 `.omx/` stores plans, logs, memory, and runtime state | 用户不再只依赖会话上下文；项目状态有了 repo-visible 的外部化承载 |
| `hooks extension` | 官方 `hooks-extension.md` 明确支持 `.omx/hooks/*.mjs` 插件；`omx hooks init/status/validate/test`；事件含 `session-start`、`session-end`、`turn-complete`、`session-idle`；可选 derived events 有 `needs-input`、`pre-tool-use`、`post-tool-use` | 用户或团队可以把“什么时候通知、什么时候补状态、什么时候触发外部系统”升级成可编程面，而不是只靠口头约定 |
| `read-only runtime SDK` | hook SDK 暴露 `sdk.state.*` 与 `sdk.omx.session.read()`、`sdk.omx.hud.read()` 等，并明确读取 repo-root `.omx/state/*.json` | 扩展层可以消费 runtime state，但不会直接篡改宿主核心逻辑 |
| `team-safe side-effect policy` | hooks 文档明确写：team-worker session 默认跳过 plugin side effects，以 lead session 作为 canonical side-effect emitter | 公开文档已经透露出一种“主控 session 居中”的协作治理方式 |
| `team runtime` | README 把 `omx team ... / status / resume / shutdown` 定位成只有在需要 durable tmux/worktree coordination 时才用的 optional path | 用户获得了显式的“并行运行 / 查看状态 / 恢复 / 关闭”接口，而不必把所有协作都塞进一个 Codex thread |
| `operator surfaces` | README 把 `omx doctor`、`omx hud --watch`、`omx explore`、`omx sparkshell` 单列为 advanced/operator surfaces | 用户可以把问题分发到“安装治理”“状态观察”“只读探索”“有界 shell 验证”等不同面，而不是只有聊天入口 |

## 四、这条栈路里的“用户参与契约”到底怎么变了

如果只看表面，很容易把 `oh-my-codex` 误读成：

- 多装了几个 prompt
- 多了几个 skills
- 多了一个 `.omx/`

但从 `user participation contract` 看，变化更深的是下面 4 点。

### 1. 用户从“自己拼 Codex 原语”转向“选择一条 OMX 协议”

在 Codex 原生里，用户经常自己决定：

- 要不要显式 `$skill`
- 要不要接 MCP
- 要不要自定义 agent
- 要不要提示 Codex spawn subagents
- 要不要自己写 hooks 与 policy

在 OMX 里，官方推荐路径明显更收敛：

1. `omx setup`
2. `omx --madmax --high`
3. `/prompts:architect "..."`
4. `$plan "..."`
5. 只有任务长大时才让 agent 拉起 `$ralph`、`$team` 或别的 workflow

这一点的权重是 `高`。

### 2. 用户要提供的信息，开始按流程重新分层

#### `Codex 原生`

| 要素 | 权重 | 说明 |
| --- | --- | --- |
| 任务目标 | 高 | 每个 turn 的基础输入 |
| `AGENTS.md` / repo guidance | 高 | 直接改变默认行为与规则边界 |
| approval / sandbox 选择 | 高 | 直接决定 agent autonomy |
| skill / MCP / agent 配置 | 中高 | 影响能力面与工作法 |
| hook 逻辑 | 中高 | 影响阻断、补充上下文、自动 continuation |

#### `OMX 默认路径`

| 要素 | 权重 | 说明 |
| --- | --- | --- |
| 目标描述 | 高 | 没有清晰目标，就无法决定该用哪条 workflow |
| 约束 / 非目标 | 高 | 因为 OMX 倾向于帮用户做 workflow 选择，所以禁区越要提前说明 |
| 选哪种入口 | 高 | `/prompts:*`、`$plan`、`$deep-interview`、`$ralph`、`$team` 会把后续参与协议导向不同形态 |
| team 参数 | 中高 | 只有在并行协作时才会成为 load-bearing 输入 |
| 低层 Codex 细节选择 | 中 | 很多这类复杂度被 `omx setup` 和推荐启动方式吸收掉了，因此不再是用户每轮都要主动处理的主输入 |

### 3. 用户介入时机被重新排序了

Codex 原生里，用户介入点比较分散：

- 发 prompt
- 配规则
- 批准命令
- 提示 spawn subagents
- 管理 `/agent`
- 必要时写 hooks 与策略

OMX 则把介入时机重新排成更像协议的几段：

- `前置`
  先用 `omx setup` 把 prompts、skills、AGENTS、config 装好
- `起手`
  以 `omx` / `omx --madmax --high` 方式进入更强的默认工作面
- `协议选择`
  用 `/prompts:*` 或 `$plan` / `$deep-interview` 选当前工作协议
- `升级`
  只有任务增大时才进入 `$ralph`、`$team`、team runtime
- `观察 / 恢复`
  用 `.omx/`、`omx hud --watch`、`omx team status/resume/shutdown` 处理持久运行

`本文解释`：

- Codex 更像 “能力原语集合”
- OMX 更像 “先给你一条主路径，再决定什么时候升级”

### 4. 续跑 / 恢复接口从“宿主线程”扩成了“宿主线程 + `.omx/` 状态 + team runtime”

这点对 harness engineering 很关键。

`事实` 上：

- Codex 宿主有 thread lifecycle / persistence
- hooks 的 `Stop` 还能自动创建 continuation prompt
- OMX 则把 plans / logs / memory / runtime state 显式写进 `.omx/`
- team runtime 还有 `status / resume / shutdown`
- hooks plugin 日志落到 `.omx/logs/hooks-YYYY-MM-DD.jsonl`

因此更稳的仓库解释是：

- Codex 的恢复主要还是 `thread-centric`
- OMX 把恢复面扩成了 `thread + project-visible state + operator controls`

这会直接改变用户对“一个任务还活着吗”的判断方式。

## 五、关于 subagent communication：现在最稳的说法应该是什么

用户特别关心 `subagent` 或 `team` 之间到底能不能直接通信。

基于当前这轮一手材料，最稳的说法不是“有”或“没有”这么简单，而是：

- `Codex`
  官方明确公开了：
  - subagent 只会在用户明确要求时 spawn
  - Codex 自己负责 spawning、routing follow-up instructions、waiting、closing threads
  - 用户可用 `/agent` 查看和切换 thread，也可让 Codex steer / stop / close 某个 subagent
  但官方没有把能力表述成一个公开的 peer-to-peer `agent message bus`
- `oh-my-codex`
  官方 README 把 `$team` 描述成 coordinated parallel execution
  hooks 文档又明确说 team-worker session 默认跳过 side effects，由 lead session 作为 canonical side-effect emitter
  这更像一种 `lead-session-mediated coordination`

因此这轮最稳的仓库解释应当是：

- `subagent communication` 更适合暂时写成 `controller-mediated` 或 `lead-session-mediated coordination`
- 也就是：主控层负责拉起 worker，follow-up instructions 由宿主或 lead session 路由，结果和状态再回流
- 目前没有公开证据支持把它写成 “任意 worker 彼此直接发消息”的显式总线

这点对后面继续研究 Codex 生态很重要，因为不同宿主公开出来的 “subagent” 语义差异会很大。

## 六、当前最稳的结论

### 稳结论 1

`Codex` 不该只被写成一个终端界面。

OpenAI 官方资料已经足够支持把它读成：

- 有 agent loop
- 有 thread persistence
- 有 config/auth
- 有 skills / MCP / hooks / subagents / approvals / sandbox
- 能被多个 client surface 复用的 host substrate

### 稳结论 2

`oh-my-codex` 的核心增量，不是取代这些底层接口，而是把它们重新组织成更明确的工作协议：

- `omx setup`
- `omx` / `omx --madmax --high`
- `/prompts:*`
- `$plan`
- `$deep-interview`
- `$ralph`
- `$team`
- `.omx/` state
- optional team runtime

因此它更像 `workflow-bearing layer on top of Codex`，而不是“更多提示词集合”这么简单。

### 稳结论 3

如果只讨论“用户交互面”，OMX 最重要的改变量不是 UI，而是：

- 把触发面收敛成几条推荐入口
- 把状态外部化到 `.omx/`
- 把恢复 / 观察 / 团队并行变成显式 operator surface
- 同时仍把 approvals、sandbox、MCP auth 这些 load-bearing 决策留在 Codex 宿主

### 稳结论 4

在当前公开资料里，`Codex -> oh-my-codex` 这条栈路最像：

- `Codex` 提供底层控制环和 policy boundary
- `OMX` 提供 workflow contract、state shell、team/runtime escalation

所以这条路的研究重点不该是“谁替代了谁”，而该是：

- 哪些能力还留在宿主里
- 哪些能力被提升成外层 workflow layer
- 用户究竟在什么时候还要自己做决定

## 七、仍需保留为工作假说的点

### 工作假说 1

`$team` 背后的并行协作，到底有多少是：

- 直接复用 Codex 原生 subagents / threads
- 多少又是额外借助 tmux / worktree runtime 在宿主外侧搭出来的协调层

README 和 docs 已经说明它是 coordinated parallel work，但当前这轮还不适合把内部通信拓扑写死。

### 工作假说 2

OMX hooks 的 derived signals 里已经出现了 `needs-input`、`pre-tool-use`、`post-tool-use`，这说明它有意把“用户要不要介入”也纳入可扩展事件面。但这些事件与 Codex 原生 approvals / prompt blocking 如何组合，当前公开文档还没有完全展开。

### 工作假说 3

Codex 公共文档目前最明确的是 approval request 这类 user input pause 点；如果后续要更精确比较 Claude Code / OpenCode / Codex 在“结构化回问”上的差异，还需要单独核实 Codex 当前公开的 elicitation surface。

## 参考来源

- OpenAI 官方文档
  - [Customization](https://developers.openai.com/codex/concepts/customization/)
  - [Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md/)
  - [Agent Skills](https://developers.openai.com/codex/skills/)
  - [Model Context Protocol](https://developers.openai.com/codex/mcp/)
  - [Subagents](https://developers.openai.com/codex/subagents/)
  - [Hooks](https://developers.openai.com/codex/hooks/)
  - [Sandboxing](https://developers.openai.com/codex/concepts/sandboxing/)
  - [Advanced Configuration](https://developers.openai.com/codex/config-advanced/)
- OpenAI 官方博客
  - [Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/)
  - [Unlocking the Codex harness: how we built the App Server](https://openai.com/index/unlocking-the-codex-harness/)
- oh-my-codex 官方仓库与文档
  - [README](https://github.com/Yeachan-Heo/oh-my-codex)
  - [Getting Started](https://github.com/Yeachan-Heo/oh-my-codex/blob/main/docs/getting-started.html)
  - [Agents](https://github.com/Yeachan-Heo/oh-my-codex/blob/main/docs/agents.html)
  - [Hooks Extension](https://github.com/Yeachan-Heo/oh-my-codex/blob/main/docs/hooks-extension.md)
