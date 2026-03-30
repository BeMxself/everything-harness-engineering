# OpenCode -> oh-my-openagent 能力栈拆解备忘

**日期：** 2026-03-30

## 这份备忘要回答什么

这不是一份 “OpenCode 与 oh-my-openagent 全量功能罗列”。

这轮要回答的更窄问题是：

- 作为宿主，`OpenCode` 原生提供了哪些可被 harness 利用的底层能力
- `oh-my-openagent` 具体继承、包裹、补强了哪些能力
- 这里所说的“交互面”不指 UI，而指：
  - 用户在什么时机参与
  - 用户要提供什么信息
  - 用户如何主动触发某条 harness 流程
  - 用户会在哪些节点被要求授权、确认、续跑、停止或恢复

换句话说，这份备忘更关心 `user participation contract`，而不是菜单、面板、视觉入口。

## 证据边界

本轮只使用一手来源：

- OpenCode 官方文档
- oh-my-openagent 官方仓库与官方文档

本页里的判断分三层：

- `事实`：可直接回原文确认
- `官方 framing`：项目自己如何描述自己
- `本文解释`：为了比较 harness 形态而做的仓库解释

## 这里怎么定义“交互面”

本页把“交互面”拆成 4 类用户参与接口：

1. `触发接口`
   用户如何启动某个控制环，比如普通 prompt、`@agent`、`/command`、CLI 子命令
2. `输入接口`
   用户要提供什么材料，比如目标、约束、文件引用、计划要求、技能或类别偏好
3. `授权 / 决策接口`
   用户在哪些节点需要批准、拒绝、补充选择或回答问题
4. `续跑 / 中断 / 恢复接口`
   用户如何继续一个长任务、切换 session、查看子任务、停止 continuation

### 权重说明

为了避免“所有要素都重要”这种空话，这里用 3 档权重：

- `高`
  缺了它，流程要么起不来，要么会直接改变控制中心或执行走向
- `中`
  缺了还能跑，但质量、边界或效率会明显下降
- `低`
  主要是观察、便捷覆盖或高级用法，不是闭环成立的前提

## 一、OpenCode 原生 substrate：用户参与接口长什么样

下面的矩阵只谈 OpenCode 自己已经公开暴露的参与接口，不谈 oh-my-openagent 额外加的 orchestrator 逻辑。

| 能力块 | 事实 | 用户在什么时机参与 | 用户提供什么 | 权重 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `主 / 子 agent 切换` | OpenCode 区分 `primary agents` 与 `subagents`；主 agent 可用 `Tab` 切换，subagent 可被主 agent 自动调用，也可被用户用 `@` 手动调用 | 开始任务时，或中途想强制切换控制者 / specialist 时 | 选择 agent，或在消息里显式 `@general` / `@explore` 等 | 高 | 这是最直接的“谁来主控这一步”接口 |
| `会话树导航` | OpenCode 官方文档明确写到 subagent 可创建 child sessions，用户可进入 child session、左右轮换、回 parent session | 已经发生 delegation 之后，用户要检查或继续子任务时 | session 导航操作 | 中 | 这说明 OpenCode 有原生 parent/child session 结构，但官方没把它描述成 agent 之间的独立消息总线 |
| `任务描述与上下文注入` | TUI 支持普通自然语言 prompt、`@file` 文件引用、`!bash` 命令运行 | 几乎所有任务入口 | 目标描述、文件引用、临时 shell 输出 | 高 | OpenCode 的“任务入口”天然就是 prompt + 引用 + 工具结果拼接 |
| `规则 / 指令注入` | 官方文档支持 `AGENTS.md`、`opencode.json.instructions`、外部文件引用、project/global 级配置 | 预配置阶段；也会在后续所有任务里持续生效 | 项目规范、加载指令、引用文件路径 | 高 | 这类输入不是一次性 prompt，而是长期塑形的控制材料 |
| `skills` | Skills 是按需加载的 `SKILL.md` 定义；可从 `.opencode/skills/`、`.claude/skills/`、`.agents/skills/` 等路径发现；可设置 `allow / deny / ask` | 任务运行中，需要注入某种专门工作法时 | 技能定义、skill 名称、是否批准加载 | 中高 | 这里用户既可以预先放技能，也会在运行时进入批准节点 |
| `MCP` | OpenCode 支持本地与远端 MCP；启用后 MCP 工具自动与内建工具一起暴露；也可按 agent 精细启停 | 预配置阶段；或在 agent 级别调整工具面时 | MCP 配置、启停选择、可能的 OAuth / URL / 命令参数 | 中高 | 它更像“给宿主加器官”，不是一条任务流程本身 |
| `权限 / 批准` | `edit`、`bash`、`webfetch` 等可设为 `ask / allow / deny`；skills 也可设 `ask`；工具页也支持通配符批量 ask | 第一次或每次触发敏感动作时 | 允许 / 拒绝、具体命令白名单 | 高 | 这是用户对 agent 行为边界的原生闸门 |
| `question` 工具 | OpenCode 原生有 `question` 工具，可在执行中向用户提问，支持选项与自定义回答 | 任务存在歧义，需要明确偏好或实现方向时 | 偏好、需求、实现决策、补充答案 | 高 | 这是官方明确提供的“结构化回问”接口 |
| `plan / build 模式` | OpenCode 自带 `Build` 与 `Plan` 两种主 agent / mode；`Plan` 默认禁写文件、禁 bash，并可用 Tab 切换 | 想先分析再执行时 | 模式切换意图 | 中高 | 它提供了原生“先想后做”的工作面，但还不是完整 orchestration 协议 |
| `session continuity` | TUI 支持 `/new`、`/sessions`、`/compact`；还存在自动 compaction、title、summary system agents | 长对话、恢复上下文、压缩上下文时 | 手动 compact、切 session、开新 session | 中 | 这是原生 session 维护能力，为上层 harness 的续跑提供土壤 |
| `agent create` | 官方有 `opencode agent create` 交互命令，询问保存位置、职责、工具访问等，并生成 agent markdown 文件 | 用户想把某种 specialist 固化成宿主能力时 | 角色描述、prompt 偏好、工具权限 | 中 | 这是“把一次性分工变成长期 agent 定义”的原生入口 |

### 小结：OpenCode 的交互契约是什么

`事实` 上，OpenCode 已经提供了几乎所有构成 harness substrate 的基础参与接口：

- 主 / 子 agent 切换
- `@` 调用 subagent
- child session 导航
- rules / skills / MCP / permissions
- 结构化提问
- session compact / summary / resume

`本文解释`：

- OpenCode 更像一个 `programmable host`
- 它已经给了用户很多 “把材料灌进控制环” 的接口
- 但这些接口仍然比较 `primitive`
  - 你可以切 agent
  - 你可以 `@` 一个 subagent
  - 你可以开技能、开 MCP、配权限
  - 你也可以在需要时被回问
- 它并没有替用户预先组合出一套很强的“默认 orchestrated participation contract”

也就是说，OpenCode 原生交互面已经很厚，但主要还是 `可编程原语集合`，而不是 “一上来就给你几条很明确的工作流入口”。

## 二、oh-my-openagent：不是重做宿主，而是重组参与契约

从官方文档看，oh-my-openagent 的重点不是替换 OpenCode 的这些原语，而是把它们组织成更明确的工作入口与持续控制机制。

这层可以分成三类：

- `继承`
  直接复用 OpenCode 已有的 agent、skills、MCP、session、permissions 能力
- `包裹`
  给这些能力套上更清晰的入口词、角色分工与阶段切换
- `补强`
  用 hooks、background tasks、task persistence、CLI wrapper、recovery 逻辑去补足长任务治理

### 1. 继承了什么

下面这些能力，oh-my-openagent 没有“重新发明宿主”，而是在 OpenCode 的工作面上使用它们：

| 能力 | 继承方式 | 对用户参与的影响 |
| --- | --- | --- |
| `agent` | 保留 OpenCode agent 面，但把 Sisyphus / Hephaestus / Prometheus / Atlas 等放成固定主控层与 specialist 层 | 用户仍可 `Tab` 切换或显式 `@oracle` / `@explore` / `@librarian` |
| `skills` | 继续使用 `SKILL.md` 模式，并兼容 `.opencode/skills`、`.claude/skills`、`.agents/skills` 等路径 | 用户可继续把技能作为持久控制材料，而不是一次性 prompt |
| `MCP` | 既用 OpenCode 自带 MCP，也允许 skill-embedded MCP | 用户可以继续通过配置与技能把外部工具接进来 |
| `rules / AGENTS` | 文档明确提到目录级 AGENTS 注入、规则注入，并兼容 Claude Code 路径 | 用户提供项目规则的方式被保留，甚至被更多 hook 强化 |
| `permissions` | 各 agent 的 tool restriction 仍然建立在权限控制之上 | 用户仍能在宿主层面决定什么要 ask / allow / deny |
| `session` | 继续依赖 OpenCode session / child session，但又额外加了 `session_list` / `session_read` / `session_search` 等工具 | 用户更容易把“多 session”当成可利用的长期工作状态 |

### 2. 包裹成了哪些更明确的流程入口

这里是它最关键的变化。

oh-my-openagent 把 OpenCode 的底层原语重组成几条用户更容易直接调用的工作路径：

| 路径 | 用户怎么触发 | 用户主要提供什么 | 权重最高的要素 |
| --- | --- | --- | --- |
| `默认复杂任务路径` | 输入 `ultrawork` 或 `ulw` | 一个目标，必要时再补约束 | `任务目标` 高，`详细步骤` 低 |
| `显式规划路径` | `Tab` 切到 Prometheus，或按官方文档所述在 Sisyphus 中用 `@plan` | 目标、范围、约束、回答 interview、是否接受更高精度审查 | `范围与约束` 高，`回答澄清问题` 高 |
| `计划转执行路径` | `/start-work` | 要执行哪份 plan，或者默认让系统接最近计划 | `显式启动执行` 高 |
| `显式 specialist 路径` | `@oracle`、`@explore`、`@librarian` 等 | 一个更窄的问题或子任务 | `任务边界` 高 |
| `持续运行 / automation 路径` | `/ralph-loop`、`/ulw-loop`、CLI `run` | 目标，必要时的最大迭代或 session 绑定 | `停止条件或完成条件` 高 |
| `恢复 / 交接路径` | `/handoff`、再次 `/start-work`、CLI `run --session-id` | 现有 session、plan name、是否续跑 | `恢复对象` 高 |

`本文解释`：

- OpenCode 原生更像 “你有很多开关”
- oh-my-openagent 更像 “我先帮你把这些开关预接成几条标准线路”

所以从用户参与契约的角度看，它增加的不是主要是 “更多 UI”，而是：

- 更少的入口词
- 更明显的阶段承诺
- 更少的模型选择负担
- 更强的 continuation 默认值

### 3. 补强了哪些长任务治理能力

这部分最像 harness engineering，而不是简单的 host 扩展。

| 补强块 | 事实 | 对用户参与接口的影响 |
| --- | --- | --- |
| `Intent Gate / keyword-detector` | 文档反复把 intent gate 与 `keyword-detector` 作为入口分类机制来写，`ulw`、`search`、`investigate` 等关键字可激活不同模式 | 用户可以用更短、更粗粒度的 trigger，让 harness 自己决定后续编排 |
| `Category system` | delegation 时优先给 category 而不是模型名；如 `visual-engineering`、`ultrabrain`、`quick`、`deep` | 用户提供的是“工作类型”，不是底层模型；这显著降低了用户参与时的 provider / model 认知负担 |
| `Task + background` | 提供 `task`、`call_omo_agent`、`background_output`、`background_cancel`，并支持 `run_in_background` | 用户不仅能启动并行子任务，还能晚些再取结果 |
| `Task persistence` | 可选 `Sisyphus Tasks`，持久化到 `.sisyphus/tasks/`，支持依赖关系和跨 session 持续 | 用户对“任务”不再只是在当前上下文里口头说说，而是能进入持久状态机 |
| `Boulder / start-work continuity` | orchestration guide 明确写到 `/start-work` 会看 `.sisyphus/boulder.json`，决定是 fresh start 还是 resume | 用户用同一个命令就能恢复长流程，不需要重新把上下文再喂一遍 |
| `Hooks` | 功能页把 hook 分成 Message / Event / PreToolUse / PostToolUse / Transform / Params 等，并列出 continuation、recovery、notifications、runtime fallback 等内建 hook | 很多过去需要用户盯着做的事情，被挪到 harness 自动治理层 |
| `Session recovery` | 功能页明确写出 missing tool results、thinking block violations、JSON parse errors、context-window exceed 等恢复 | 用户更少在失败点被迫人工接管，更多是在恢复失败后才需要介入 |
| `CLI wrapper` | 有 `install`、`doctor`、`run`、`mcp oauth`；其中 `run` 会等待 todos 完成、background child sessions idle 才退出 | 用户可以在 TUI 之外，用 CLI 触发“完整闭环直到稳定结束”的工作模式 |

## 三、这条栈路里的“用户参与接口”到底怎么变了

如果只看“表面入口”，很容易误以为 oh-my-openagent 只是多了几个 slash commands 和更多 agents。

但从用户参与契约看，真正变化更深的是下面 4 点。

### 1. 用户从“自己拼原语”转向“选择一条参与协议”

在 OpenCode 原生里，用户通常自己决定：

- 用哪个 agent
- 要不要 `@` subagent
- 要不要配 skill
- 要不要开 MCP
- 要不要切 plan mode

在 oh-my-openagent 里，用户更像是在 3 条协议之间选一条：

- `普通 prompt`
- `ulw`
- `Prometheus 规划 -> /start-work`

这意味着用户的第一步不再只是“怎么提问”，而是“我要把自己放进哪种控制协议”。

这一点的权重是 `高`。

### 2. 用户要提供的信息，开始按流程分层

oh-my-openagent 并没有让“用户输入”消失，而是把它重新分成了不同流程所需的信息包。

#### `ulw / ultrawork`

| 要素 | 权重 | 说明 |
| --- | --- | --- |
| 目标描述 | 高 | 没有清晰目标，就没有可路由的 intent |
| 约束 / 禁区 | 高 | 因为 `ulw` 倾向于让系统自己决定，如果禁区不说，越容易被系统替你做主 |
| 实现步骤 | 低 | 这是它承诺要替用户省掉的部分 |
| 模型选择 | 低 | category 和 runtime 负责吸收这部分复杂度 |
| 中途人工盯控 | 中 | 不是必须，但复杂项目里仍可能需要 |

#### `Prometheus 规划路径`

这里先用更稳的写法。

文档把 `@plan` 与 Prometheus 并写，但源码层面对 `plan` 与 `prometheus` 做了更明显的拆分，后面会单列说明。

| 要素 | 权重 | 说明 |
| --- | --- | --- |
| 目标与范围 | 高 | interview 能否收束，取决于这里是否明确 |
| 边界 / 非目标 | 高 | 这是区分“计划”与“空话”的关键材料 |
| 回答澄清问题 | 高 | 文档明确把 Prometheus 写成 interview mode |
| 是否走 Momus 高精度回路 | 中 | 会影响计划精度和时长，但不是所有任务都必须 |
| 计划后的显式执行触发 `/start-work` | 高 | 没有这个动作，规划与执行仍然是分离的 |

#### `显式 specialist / delegation`

| 要素 | 权重 | 说明 |
| --- | --- | --- |
| delegation prompt 清晰度 | 高 | features 文档直接给了 7 要素 prompt guide |
| category 选择 | 中高 | 影响会调到哪类工作人格 / 模型 |
| load_skills 选择 | 中高 | 决定有没有任务专用知识与 MCP |
| run_in_background | 中 | 改变的是协作方式，不是任务本体 |
| 稍后拉取结果 | 中 | 决定用户是否要同步等待 |

### 3. 用户介入时机被重新排序了

OpenCode 原生里，用户的介入更多散落在整个 session 里：

- 一开始切 agent
- 中途 `@` subagent
- 遇到 ask 批准
- 需要时 `/compact`
- 想恢复时 `/sessions`

oh-my-openagent 则把介入时机前移和后移了：

- `前移`
  在文档 framing 的 `@plan` / Prometheus 路径里，用户先接受 interview，再允许执行
- `后移`
  在 `ulw`、background、continuation 路径里，用户更可能只负责启动、授权、必要时停止，而不是持续微操

`本文解释`：

- 这是一种典型 harness engineering 取向
- 它不是把用户完全踢出闭环
- 而是把用户的参与从 “每一步都管” 变成 “在关键承诺点管”

### 4. 用户主动可控的“停止 / 恢复 / 交接”接口更明确了

这是 oh-my-openagent 相比宿主更像 harness 的地方。

官方材料里已经明确给出：

- `/start-work`
  从计划进入执行，或基于 `boulder.json` 恢复
- `/stop-continuation`
  停掉 ralph loop、todo continuation、boulder 相关 continuation
- `/handoff`
  生成交接摘要，把当前状态变成下一 session 的输入材料
- `background_output`
  取回后台 agent 结果
- `background_cancel`
  取消后台 agent
- `bunx oh-my-opencode run`
  等 todos 和 background tasks 都 idle 才退出

这一组接口的权重是 `高`，因为它们直接决定：

- 用户是不是还能在长任务中重新拿回控制权
- 用户是不是能把一次长会话拆成多个 session
- harness 是不是有资格被叫做 “可治理的 runtime” 而不是“一次性 prompt 套件”

## 四、关于 subagent communication：现在最稳的说法应该是什么

用户特别关心 `subagent` 之间到底能不能通信。

基于当前这轮一手材料，最稳的说法不是“有”或“没有”这么简单，而是：

- `OpenCode`
  官方清楚公开了：
  - primary / subagent 结构
  - Task tool 权限
  - child sessions
  - parent / child 导航
  但没有把能力表述成一个独立的 “agent-to-agent message bus”
- `oh-my-openagent`
  官方材料把协作写成：
  - orchestrator 委派
  - workers 返回 `results + learnings`
  - learnings 写入 notepads
  - tasks / boulder / sessions 提供持续状态
  - background_output 作为异步结果取回接口

因此这轮最稳的仓库解释应当是：

- `subagent communication` 更适合被描述为 `controller-mediated coordination`
- 也就是：主控者分派，子任务返回结果，状态通过 session / task / notepad / hook 回流
- 而不是把它写成 “任意 subagent 彼此直接发消息”的显式总线

这点对后面继续研究 Codex 生态很重要，因为不同宿主对 “subagent” 的公开语义差别非常大。

## 五、源码核实：5 条链路

下面这部分只记录本轮已经读到源码的链路，优先记录那些会改变“用户参与契约”理解的地方。

| 链路 | 源码核实结果 | 对用户参与契约的影响 |
| --- | --- | --- |
| `ulw / ultrawork` | `src/hooks/keyword-detector/hook.ts` 说明 `ulw` 不是单独 agent，而是 `keyword-detector` 在 `chat.message` 阶段把 ultrawork 指令前插进消息；planner agent 会过滤掉 `ultrawork` 关键词，background task session 也跳过这类注入。`src/hooks/keyword-detector/ultrawork/default.ts` 又把后续工作明确导向 `task(subagent_type="plan" / "explore" / "librarian" / "oracle")`。`src/plugin/ultrawork-model-override.ts` 还允许按 agent 配置重写 ultrawork 的 model / variant。 | 用户触发 `ulw` 时，本质上是在触发一条 `关键词 -> 提示词注入 -> 委派策略 -> 可选模型重写` 的控制链，而不是在“切换到某个固定 worker”。因此用户最关键的输入不是步骤，而是 `目标`、`约束`、`禁区`。 |
| `Prometheus interview` | `src/agents/prometheus/system-prompt.ts` 把 Prometheus prompt 组装为 `identity constraints + interview mode + plan generation + high accuracy + template + behavioral summary`，同时把 `question` 权限显式设为 `allow`。`src/agents/prometheus/gpt.ts` 又明确要求“用 `Question` tool 呈现结构化多选问题”。 | Prometheus 的 interview 不是单纯“多聊几轮”，而是 `宿主 Question 能力 + planner prompt 规则` 的组合。用户的主要参与时机集中在 `澄清需求`、`选择 trade-off`、`确认测试策略` 这些决策节点。 |
| `@plan / plan / prometheus` | `src/plugin-handlers/agent-config-handler.ts` 显示：当 `planner_enabled && replace_plan` 时，系统单独构造 `prometheus`，并把原本的 `plan` 从主 agent 位移除，再通过 `buildPlanDemoteConfig()` 重建成只继承 model 相关设置的 `subagent`。`src/plugin-handlers/config-handler.test.ts` 明确断言：`plan` 被降级后没有 Prometheus prompt，而 `prometheus` 才持有 planner prompt；`prometheus` 的 mode 是 `all`。`src/tools/delegate-task/tools.test.ts` 又明确断言 `isPlanAgent(\"prometheus\") === false`，同时 `PLAN_FAMILY_NAMES = [\"plan\", \"prometheus\"]`，也就是两者共享 plan-family 权限语义，但不共享同一 planner prompt。OpenCode 官方 agents 文档只说明“用户可用 `@` 直接 mention subagent，agent markdown 文件名就是 agent 名称”；在 oh-my-openagent 插件源码里，本轮没有找到把 `@plan` 显式改写为 Prometheus 的实现。 | 对“交互面”的最稳写法应改成：`Prometheus` 与被降级后的 `plan` 在配置层已经解耦。文档把 `@plan` 当成 Prometheus 入口，但插件源码并没有证实这条别名映射。因此，`@plan automatically switches to Prometheus` 目前更适合作为 `文档说法`，不是 `源码已证实事实`。 |
| `/start-work` | `src/hooks/start-work/start-work-hook.ts` 表明 `/start-work` 是独立 hook，不是 Prometheus 的延长动作。它只在 prompt 中出现 `<session-context>` 时激活，优先把当前 session agent 更新为 `atlas`，然后读取或重建 `.sisyphus/boulder.json`，在 `.sisyphus/plans/` 里找 plan，并在 resume 时把当前 session id 追加进状态。`src/hooks/start-work/parse-user-request.ts` 还会主动剥离 `ultrawork` / `ulw` 关键词。`src/features/boulder-state/storage.ts` 证实 plan 文件定位、progress 统计、boulder state 读写都落在 `.sisyphus` 状态层。 | `/start-work` 对用户来说是一个非常强的 `显式执行接力点`。用户不需要重新描述任务本身，而是主要决定 `执行哪份 plan`、`是否续跑`、`是否带 worktree`。这说明执行入口的关键输入不是“目标”，而是“状态选择”。 |
| `task / background / task persistence` | `src/tools/delegate-task/tools.ts` 强制 `task` 必须显式提供 `run_in_background` 与 `load_skills`，并且必须二选一地提供 `category` 或 `subagent_type`；如果给了 `category`，会改写成 `Sisyphus-Junior` 路径。`src/tools/call-omo-agent/tools.ts` 则是更窄的直接 specialist 调用，只允许 `explore`、`librarian`、`oracle`、`hephaestus`、`metis`、`momus`、`multimodal-looker`。`src/tools/background-task/create-background-output.ts` 证明后台任务结果既可非阻塞取状态，也可阻塞等待，还能返回 `full_session`。`src/tools/task/task-create.ts` 与 `src/features/claude-tasks/storage.ts` 则表明任务可持久化为 JSON，并记录 `threadID`。 | 用户和 harness 的交互不再只有“一次性 prompt”。用户可以显式选择 `同步 / 后台`、稍后再拉结果、继续已有 `session_id`，或把工作写入持久 task list。换句话说，用户参与面已经延伸到 `延后消费结果` 与 `恢复既有任务对象`。 |

### 本轮被源码消解掉的两个旧假说

- `ulw` 现在不该再写成“可能是组合机制”。源码已经足够说明它确实是 `关键词触发 + 注入 + 委派 + 可选模型重写` 的组合链。
- Prometheus 也不该再写成“可能主要靠普通对话往返”。源码已经足够说明它确实接上了 OpenCode 的 `Question` 能力，只是具体提问节奏仍主要受 planner prompt 驱动。

## 六、当前最稳的结论

### 稳结论 1

`OpenCode` 原生已经公开暴露了相当完整的 harness substrate：

- agent / subagent
- child sessions
- skills
- MCP
- permissions
- structured question
- rules / instructions
- plan/build 分工
- session continuity

所以它不是一个“只有聊天框的宿主”，而是一个可编排的 host runtime。

### 稳结论 2

`oh-my-openagent` 的主要增量，不是再造一遍这些底层接口，而是把它们重组为更明确的用户参与协议：

- `ulw`
- `Prometheus / 文档中的 @plan 入口`
- `/start-work`
- `/handoff`
- `/stop-continuation`
- background tasks / resumable execution / CLI run

因此它更像 `workflow-bearing harness`，而不是“多放几个 agent preset”这么简单。

### 稳结论 3

如果只讨论“用户交互面”，oh-my-openagent 最重要的改变量不是 UI，而是：

- 用户在什么时候被要求参与
- 用户输入的材料是否按阶段分层
- 用户是否拥有清晰的开始、承诺、停止、恢复、交接接口

这正是 harness engineering 与普通 host customization 的分水岭之一。

## 七、仍需保留为工作假说的点

### 工作假说 1

`@plan` 是否在 OpenCode 宿主层还存在一条插件外的 alias / parser 映射，把 `plan` 自动导向 `Prometheus`。

目前能确认的是：

- oh-my-openagent 插件源码里没有找到这条映射
- 文档却反复把 `@plan` 写成 “等同于 Prometheus”

所以这件事现在只能保留为 `宿主层尚未取证完成`。

### 工作假说 2

oh-my-openagent 的 agent-to-agent 协作主干，目前更像 `主控 orchestrator + 状态回流`，而不是 peer-to-peer bus；但如果源码里存在更直接的 message passing 或 shared session mutation，还需要下一轮核实。

## 八、当前已看到的文档漂移

这一点值得单独记一下，避免后面误当作稳事实。

- `orchestration guide` 与 `overview` 把 `@plan` 写成 “automatically switches to Prometheus” 或 “和直接切到 Prometheus 没有功能差别”
- 但插件源码显示：
  - `prometheus` 是单独创建的 planner agent
  - `plan` 会在 `replace_plan=true` 时被降级成只继承 model 参数的 subagent
  - 目前没有在插件层找到 `@plan -> prometheus` 的显式别名映射

- `README` 的 “Planning. Prometheus” 小节写成了 “`/start-work` calls Prometheus”
- 但 `orchestration guide` 与 `features reference` 更明确地把 `/start-work` 写成：
  - 从 `Prometheus-generated plan` 进入执行
  - 由 `Atlas` 执行计划
  - 若存在 `boulder.json`，则进入 resume mode

因此这轮更稳的写法应该是：

- `Prometheus` 负责 interview 和 plan generation
- `@plan` 是否等价于 Prometheus，当前只能写成 `文档声称如此，插件源码未完全证实`
- `/start-work` 负责把计划推进到 Atlas 执行闭环

同时保留注记：当前官方文档内部存在少量表述漂移。

## 参考来源

- OpenCode 官方文档
  - [Agents](https://opencode.ai/docs/agents/)
  - [TUI](https://opencode.ai/docs/tui/)
  - [Tools](https://opencode.ai/docs/tools/)
  - [Skills](https://opencode.ai/docs/skills/)
  - [MCP servers](https://opencode.ai/docs/mcp-servers/)
  - [Rules](https://opencode.ai/docs/rules/)
  - [Modes](https://opencode.ai/docs/modes/)
- oh-my-openagent 官方仓库与文档
  - [README](https://github.com/code-yeongyu/oh-my-openagent/blob/dev/README.md)
  - [Overview](https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/guide/overview.md)
  - [Orchestration Guide](https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/guide/orchestration.md)
  - [Features Reference](https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/reference/features.md)
  - [Configuration Reference](https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/reference/configuration.md)
  - [CLI Reference](https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/reference/cli.md)
