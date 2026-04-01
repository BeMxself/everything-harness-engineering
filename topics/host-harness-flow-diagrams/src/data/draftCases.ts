import type { DraftCase } from "./types";

export const trellisDraftCase: DraftCase = {
  id: "trellis",
  title: "Trellis Draft",
  state: "draft",
  summary: {
    en: "A draft skeleton for a platform-level workflow core that fans out into host-specific wiring, then returns through review, memory, and platform maintenance.",
    zh: "一个 draft skeleton，用来表达平台级 workflow core 如何向宿主专属 wiring 扩散，再通过 review、memory 和 platform maintenance 回流。",
  },
  nodes: [
    {
      id: "task",
      label: "task",
      purpose: {
        en: "User task or repo goal entering the Trellis workflow.",
        zh: "进入 Trellis workflow 的用户任务或仓库目标。",
      },
      lane: "entry",
    },
    {
      id: "workflow-core",
      label: "workflow core",
      purpose: {
        en: "The shared `.trellis/` workflow core that keeps specs, tasks, context, and process recognizable across tools.",
        zh: "共享的 `.trellis/` workflow core，把 specs、tasks、context 和 process 保持在多工具间可识别。",
      },
      lane: "core",
    },
    {
      id: "spec-memory",
      label: "spec / task / workspace memory",
      purpose: {
        en: "Specs, task context, and workspace memory carried in `.trellis/` directories.",
        zh: "保存在 `.trellis/` 目录中的 specs、task context 与 workspace memory。",
      },
      lane: "memory",
    },
    {
      id: "platform-wiring",
      label: "platform wiring",
      purpose: {
        en: "Generated platform-specific entry points such as `.claude/`, `.codex/`, `.opencode/`, and related command surfaces.",
        zh: "生成出来的宿主专属 entry points，例如 `.claude/`、`.codex/`、`.opencode/` 及其命令工作面。",
      },
      lane: "wiring",
    },
    {
      id: "host-surface",
      label: "host surface",
      purpose: {
        en: "The actual host tool where AI work runs: Claude Code, Codex, OpenCode, Cursor, and others.",
        zh: "AI 真正运行的宿主工具面，如 Claude Code、Codex、OpenCode、Cursor 等。",
      },
      lane: "host",
    },
    {
      id: "execution-loop",
      label: "execution loop",
      purpose: {
        en: "Task execution, checks, and agent or command flow inside the host once Trellis context is loaded.",
        zh: "Trellis context 装载完成后，在宿主内部发生的 task execution、checks 与 agent / command flow。",
      },
      lane: "execution",
    },
    {
      id: "review-memory-return",
      label: "review / memory return",
      purpose: {
        en: "Review outcomes and session learnings return into task state, specs, and workspace journals.",
        zh: "Review 结果与 session learnings 回流进 task state、specs 和 workspace journals。",
      },
      lane: "return",
    },
    {
      id: "update-migration",
      label: "update / migration",
      purpose: {
        en: "Trellis updates regenerate or migrate platform wiring while preserving the shared workflow core.",
        zh: "Trellis 更新会重生成或迁移平台 wiring，同时保留共享 workflow core。",
      },
      lane: "maintenance",
    },
  ],
  steps: [
    {
      id: "s1-intake",
      label: "intake task",
      summary: {
        en: "A task enters the shared Trellis workflow instead of starting from an isolated host prompt.",
        zh: "任务先进入共享 Trellis workflow，而不是从孤立的 host prompt 开始。",
      },
    },
    {
      id: "s2-inject",
      label: "inject core context",
      summary: {
        en: "Specs, tasks, and workspace memory from `.trellis/` are injected or loaded into the active host path.",
        zh: "来自 `.trellis/` 的 specs、tasks 与 workspace memory 被注入或加载进当前宿主路径。",
      },
    },
    {
      id: "s3-dispatch",
      label: "dispatch through host wiring",
      summary: {
        en: "Platform wiring adapts the shared workflow into host-specific commands, hooks, agents, or entry files.",
        zh: "平台 wiring 把共享 workflow 适配成宿主专属的 commands、hooks、agents 或 entry files。",
      },
    },
    {
      id: "s4-review-return",
      label: "review / memory return",
      summary: {
        en: "Execution results feed review, task updates, and workspace memory so the next session re-enters with real context.",
        zh: "执行结果会回流到 review、task updates 与 workspace memory，使下一次 session 带着真实上下文再进入。",
      },
    },
    {
      id: "s5-platform-sync",
      label: "platform sync",
      summary: {
        en: "Updates and migrations keep the shared `.trellis/` core aligned with each enabled host integration.",
        zh: "更新与迁移会让共享 `.trellis/` core 持续和各个已启用宿主集成保持一致。",
      },
    },
  ],
  openQuestions: [
    {
      en: "How much of the adapter layer should be compressed into one `platform wiring` node versus shown as separate host adapters?",
      zh: "adapter layer 应该被压缩进一个 `platform wiring` 节点，还是拆成多个宿主 adapter 才更合理？",
    },
    {
      en: "For non-Claude platforms without full hook support, should manual command loading appear as a separate control point?",
      zh: "对于缺少完整 hook 支持的非 Claude 平台，manual command loading 要不要作为单独控制点画出来？",
    },
    {
      en: "Should update / migration stay in the draft skeleton, or move to a supplemental maintenance note outside the main loop?",
      zh: "`update / migration` 应该留在 draft skeleton 里，还是移到主闭环之外的 supplemental maintenance note？",
    },
  ],
  evidenceNotes: [
    {
      en: "Official materials repeatedly describe `.trellis/` as the shared workflow core that keeps specs, tasks, and memory recognizable across tools.",
      zh: "官方材料反复把 `.trellis/` 描述为共享 workflow core，用来让 specs、tasks 和 memory 在多工具间保持可识别。",
    },
    {
      en: "The multi-platform guide makes the strongest distinction between the shared core and host-specific generated integration files.",
      zh: "多平台指南最明确地区分了共享 core 和宿主专属生成的 integration files。",
    },
    {
      en: "Real-world scenarios emphasize return paths through task state, review, and workspace memory rather than a one-shot command launcher.",
      zh: "真实场景文档强调的是经由 task state、review 与 workspace memory 的回流路径，而不是一次性的 command launcher。",
    },
  ],
  sources: [
    {
      label: "Trellis repository",
      href: "https://github.com/mindfold-ai/Trellis",
      note: {
        en: "Primary source for the shared `.trellis/` core, generated platform wiring, and supported host list.",
        zh: "用于确认共享 `.trellis/` core、生成式平台 wiring 与支持宿主列表的主来源。",
      },
    },
    {
      label: "Trellis multi-platform guide",
      href: "https://docs.trytrellis.app/guide/ch13-multi-platform",
      note: {
        en: "Primary source for how Trellis maps the workflow core into Claude Code, Codex, Cursor, OpenCode, and other host integrations.",
        zh: "用于确认 Trellis 如何把 workflow core 映射到 Claude Code、Codex、Cursor、OpenCode 等宿主集成的主来源。",
      },
    },
    {
      label: "Trellis real-world scenarios",
      href: "https://docs.trytrellis.app/guide/ch08-real-world",
      note: {
        en: "Used to ground the review / memory return path in published workflow examples.",
        zh: "用于把 review / memory return 路径锚定到公开 workflow 示例中。",
      },
    },
  ],
};

export const omxDraftCase: DraftCase = {
  id: "oh-my-codex",
  title: "OMX Draft",
  state: "draft",
  summary: {
    en: "A Codex-host draft showing how native Codex substrate and OMX workflow contracts combine: Codex keeps execution, policy, and delegation surfaces, while OMX layers prompts, reusable workflows, `.omx/` state, and optional team runtime around it.",
    zh: "一张以 Codex host 为中心的 draft 草图，用来表达 Codex 原生 substrate 与 OMX workflow contract 如何叠合：Codex 保留 execution、policy 与 delegation surface，OMX 则在外层叠加 prompts、可复用 workflows、`.omx/` state 与可选的 team runtime。",
  },
  nodes: [
    {
      id: "task",
      label: "task",
      purpose: {
        en: "User task entering a Codex thread, where the first trigger, input, and approval surfaces still start at the host layer before OMX selects a workflow path.",
        zh: "进入 Codex thread 的用户任务；最初的触发、输入与批准面仍先落在宿主层，然后 OMX 才决定走哪条 workflow 路径。",
      },
      lane: "entry",
    },
    {
      id: "codex-native-surfaces",
      label: "codex native surfaces",
      purpose: {
        en: "Codex-native control surfaces such as `AGENTS.md`, skills, MCP, hooks, approvals, and subagents that shape host behavior before OMX protocols take over.",
        zh: "Codex 原生控制面，例如 `AGENTS.md`、skills、MCP、hooks、approvals 与 subagents；在 OMX protocol 接管之前，它们先塑造宿主行为。",
      },
      lane: "wiring",
    },
    {
      id: "codex-host",
      label: "codex substrate",
      purpose: {
        en: "The Codex host substrate that still owns agent execution, approvals and sandbox, AGENTS guidance, skills, MCP, hooks, and subagent thread control.",
        zh: "Codex 的宿主 substrate；它仍然掌管 agent execution、approvals 与 sandbox、AGENTS guidance、skills、MCP、hooks，以及 subagent thread control。",
      },
      lane: "host",
    },
    {
      id: "prompt-skill-layer",
      label: "workflow contracts",
      purpose: {
        en: "OMX workflow contracts such as `/prompts:*`, `$plan`, `$deep-interview`, `$ralph`, and `$team` that reorganize how users trigger and steer Codex.",
        zh: "OMX 的 workflow contracts，例如 `/prompts:*`、`$plan`、`$deep-interview`、`$ralph`、`$team`；它们会重组用户触发与驾驭 Codex 的方式。",
      },
      lane: "wiring",
    },
    {
      id: "omx-state",
      label: ".omx state",
      purpose: {
        en: "Plans, logs, memory, runtime state, and hook logs stored under `.omx/`.",
        zh: "保存在 `.omx/` 下的 plans、logs、memory、runtime state 与 hook logs。",
      },
      lane: "memory",
    },
    {
      id: "workflow-escalation",
      label: "workflow escalation",
      purpose: {
        en: "Decision point where OMX keeps work in a lightweight host-centric flow or escalates into heavier workflows and optional team runtime.",
        zh: "OMX 判断继续保持以宿主为中心的轻量执行，还是升级到更重 workflow 与可选 team runtime 的决策点。",
      },
      lane: "core",
    },
    {
      id: "team-runtime",
      label: "team runtime",
      purpose: {
        en: "Optional tmux/worktree coordination layer used only when the task grows large enough.",
        zh: "只有任务足够大时才启用的 tmux/worktree coordination layer。",
      },
      lane: "execution",
    },
    {
      id: "execution-loop",
      label: "execution loop",
      purpose: {
        en: "The Codex-side implementation, analysis, or persistent execution flow where host substrate and OMX workflow contracts actually converge.",
        zh: "真正发生在 Codex 侧的 implementation、analysis 或 persistent execution flow；宿主 substrate 与 OMX workflow contract 会在这里汇合。",
      },
      lane: "execution",
    },
    {
      id: "verification-return",
      label: "verification / memory return",
      purpose: {
        en: "Results return through verification, hook signals, and `.omx/` state instead of ending at one prompt run.",
        zh: "结果会通过 verification、hook signals 与 `.omx/` state 回流，而不是停在一次 prompt run。",
      },
      lane: "return",
    },
  ],
  steps: [
    {
      id: "s1-start-strong",
      label: "start stronger",
      summary: {
        en: "OMX starts a stronger Codex session by default, but Codex still owns approvals, sandbox, hooks, and thread control.",
        zh: "OMX 默认会先把 Codex session 启动得更强，但 approvals、sandbox、hooks 与 thread control 仍由 Codex 掌管。",
      },
    },
    {
      id: "s2-load-workflow-help",
      label: "load workflow help",
      summary: {
        en: "The picture now separates Codex-native surfaces from OMX workflow contracts, so the host substrate and outer protocol layer stop reading as one fused shell.",
        zh: "现在这张图会把 Codex 原生 surfaces 和 OMX workflow contracts 拆开，因此宿主 substrate 与外层 protocol layer 不再被读成一个熔在一起的壳层。",
      },
    },
    {
      id: "s3-escalate-workflows",
      label: "escalate workflows",
      summary: {
        en: "Users choose an initial protocol, then OMX decides when to stay lightweight versus escalating into `$ralph`, `$team`, or deeper runtime help.",
        zh: "用户先选择初始协议，然后 OMX 再决定是保持轻量执行，还是升级到 `$ralph`、`$team` 或更深的 runtime help。",
      },
    },
    {
      id: "s4-team-runtime",
      label: "optional team runtime",
      summary: {
        en: "Team runtime appears as an optional escalation path, not as the default starting point.",
        zh: "team runtime 是可选升级路径，不是默认起点。",
      },
    },
    {
      id: "s5-return-state",
      label: "return through state",
      summary: {
        en: "Verification results, hook traces, and runtime state return into `.omx/`, then feed both Codex thread recovery and the next OMX workflow choice.",
        zh: "verification results、hook traces 与 runtime state 会回流进 `.omx/`，然后同时影响 Codex thread recovery 与下一轮 OMX workflow choice。",
      },
    },
  ],
  openQuestions: [
    {
      en: "How much of `$team` should be read as Codex-native thread or subagent coordination versus tmux/worktree runtime layered outside the host?",
      zh: "`$team` 到底有多少应该读成 Codex 原生 thread / subagent coordination，又有多少是叠在宿主外侧的 tmux/worktree runtime？",
    },
    {
      en: "Should the formal diagram split Codex-native substrate (`AGENTS.md`, skills, MCP, approvals, hooks, subagents) from OMX workflow contracts instead of compressing them into one host-plus-shell story?",
      zh: "正式图里是否应该把 Codex 原生 substrate（`AGENTS.md`、skills、MCP、approvals、hooks、subagents）从 OMX workflow contracts 里单独拆出来，而不是继续压成一条 host-plus-shell 叙事？",
    },
    {
      en: "Should `.omx/` state stay one node, or split into plans/logs/memory/runtime and hook traces once the diagram becomes formal?",
      zh: "当图进入更正式阶段时，`.omx/` state 应该保持单节点，还是拆成 plans/logs/memory/runtime 与 hook traces 多层？",
    },
  ],
  evidenceNotes: [
    {
      en: "OpenAI's Codex docs and official blog are already enough to read Codex as host substrate, with AGENTS guidance, skills, MCP, hooks, subagents, approvals, sandboxing, and thread persistence.",
      zh: "OpenAI 官方 Codex 文档与博客已经足够支持把 Codex 读成 host substrate，它原生暴露了 AGENTS guidance、skills、MCP、hooks、subagents、approvals、sandboxing 与 thread persistence。",
    },
    {
      en: "The README and getting-started docs state explicitly that OMX is a workflow layer for Codex CLI, Codex remains the execution engine, and `/prompts:*`, `$plan`, `$deep-interview`, `$ralph`, and `$team` are the main reusable workflow surfaces.",
      zh: "README 与 getting-started 文档明确写到 OMX 是 Codex CLI 的 workflow layer、Codex 仍然是 execution engine，而 `/prompts:*`、`$plan`、`$deep-interview`、`$ralph`、`$team` 构成了主要的可复用 workflow surfaces。",
    },
    {
      en: "The official hooks extension docs and README both support reading `.omx/` plus optional team runtime as the long-task governance layer, not as the default shape of every session.",
      zh: "官方 hooks extension 文档与 README 都支持把 `.omx/` 加上可选 team runtime 读成长任务治理层，而不是每个 session 的默认形状。",
    },
  ],
  sources: [
    {
      label: "Codex customization docs",
      href: "https://developers.openai.com/codex/concepts/customization/",
      note: {
        en: "Primary source for reading Codex as a host substrate with AGENTS guidance, skills, MCP, and subagents.",
        zh: "用于确认 Codex 作为 host substrate、并公开暴露 AGENTS guidance、skills、MCP 与 subagents 的主来源。",
      },
    },
    {
      label: "Codex App Server blog",
      href: "https://openai.com/index/unlocking-the-codex-harness/",
      note: {
        en: "Primary source for Codex harness, thread persistence, and the shared policy model around tools, skills, and MCP.",
        zh: "用于确认 Codex harness、thread persistence 以及 tools、skills、MCP 共享 policy model 的主来源。",
      },
    },
    {
      label: "oh-my-codex repository",
      href: "https://github.com/Yeachan-Heo/oh-my-codex",
      note: {
        en: "Primary source for OMX positioning as a Codex workflow layer, reusable workflow contracts, `.omx/` state, and optional team runtime.",
        zh: "用于确认 OMX 作为 Codex workflow layer、可复用 workflow contracts、`.omx/` state 与可选 team runtime 的主来源。",
      },
    },
  ],
};

export const gsdDraftCase: DraftCase = {
  id: "get-shit-done",
  title: "GSD Workflow Protocol Draft",
  state: "draft",
  summary: {
    en: "A workflow-protocol draft showing how GSD wraps multi-host installation surfaces around a discuss → plan → execute → verify loop backed by `.planning/` state.",
    zh: "一张 workflow-protocol draft，表达 GSD 如何在多宿主安装面之上建立 `discuss → plan → execute → verify` 这条由 `.planning/` state 支撑的循环。",
  },
  nodes: [
    {
      id: "idea-request",
      label: "idea / request",
      purpose: {
        en: "The feature request or project idea entering the protocol loop.",
        zh: "进入 protocol loop 的功能请求或项目想法。",
      },
      lane: "entry",
    },
    {
      id: "planning-state",
      label: ".planning state",
      purpose: {
        en: "Project, requirements, roadmap, phase context, and verification artifacts stored under `.planning/`.",
        zh: "保存在 `.planning/` 下的 project、requirements、roadmap、phase context 与 verification artifacts。",
      },
      lane: "memory",
    },
    {
      id: "discuss-phase",
      label: "discuss phase",
      purpose: {
        en: "Clarifies decisions and gray areas before deeper research or planning begins.",
        zh: "在更深的 research 或 planning 开始前，先澄清决策与灰区。",
      },
      lane: "core",
    },
    {
      id: "plan-phase",
      label: "plan phase",
      purpose: {
        en: "Researches implementation approaches, creates atomic plans, and checks them against phase goals.",
        zh: "研究实现方式、生成 atomic plans，并检查它们是否满足 phase goals。",
      },
      lane: "core",
    },
    {
      id: "execute-phase",
      label: "execute phase",
      purpose: {
        en: "Runs plans in waves, using fresh contexts and parallel execution where dependencies allow.",
        zh: "按 waves 执行 plans，在依赖允许时使用 fresh contexts 与并行执行。",
      },
      lane: "execution",
    },
    {
      id: "verify-phase",
      label: "verify work",
      purpose: {
        en: "Walks the user through deliverables, diagnoses failures, and prepares fix plans.",
        zh: "带用户逐项确认 deliverables、诊断失败原因，并准备 fix plans。",
      },
      lane: "return",
    },
    {
      id: "ship-next",
      label: "ship / next milestone",
      purpose: {
        en: "Ships verified work, completes milestones, and restarts the loop for the next phase or milestone.",
        zh: "交付已验证工作、完成里程碑，并为下一 phase 或 milestone 重启这条循环。",
      },
      lane: "maintenance",
    },
    {
      id: "host-runtime-surface",
      label: "host runtime surface",
      purpose: {
        en: "Claude Code, Codex, Cursor, OpenCode, Gemini, and other host-specific install surfaces used to run the protocol.",
        zh: "Claude Code、Codex、Cursor、OpenCode、Gemini 等宿主专属安装与运行工作面，用来承载这套 protocol。",
      },
      lane: "host",
    },
  ],
  steps: [
    {
      id: "s1-initialize",
      label: "initialize project",
      summary: {
        en: "The system turns an idea into project files, requirements, roadmap, and base planning state.",
        zh: "系统会把想法转成 project files、requirements、roadmap 与基础 planning state。",
      },
    },
    {
      id: "s2-discuss",
      label: "discuss phase",
      summary: {
        en: "The protocol clarifies what the user actually wants before research and planning get more specific.",
        zh: "在 research 和 planning 更具体之前，这条 protocol 会先澄清用户真正想要的东西。",
      },
    },
    {
      id: "s3-plan",
      label: "plan phase",
      summary: {
        en: "Research and plan generation create small executable units tied back to roadmap goals.",
        zh: "research 与 plan generation 会生成可执行的小单元，并把它们重新绑定到 roadmap goals 上。",
      },
    },
    {
      id: "s4-execute-verify",
      label: "execute + verify",
      summary: {
        en: "Execution runs in waves and returns through verification, fix plans, and updated planning artifacts.",
        zh: "执行会按 waves 运行，并通过 verification、fix plans 与更新后的 planning artifacts 回流。",
      },
    },
    {
      id: "s5-ship-loop",
      label: "ship and repeat",
      summary: {
        en: "Verified work ships, milestones complete, and the same protocol restarts for the next slice of work.",
        zh: "验证完成的工作被交付，里程碑结束，然后同一套 protocol 会为下一段工作重新开始。",
      },
    },
  ],
  openQuestions: [
    {
      en: "How visible should the host layer be when the protocol is explicitly designed to feel host-agnostic after installation?",
      zh: "当这套 protocol 安装完成后刻意想呈现为 host-agnostic 时，host layer 应该被画得多明显？",
    },
    {
      en: "Should `map-codebase` and quick/fast modes stay outside the main loop, or appear as optional side-entry paths into the protocol?",
      zh: "`map-codebase` 与 quick/fast modes 应该留在主循环外，还是作为可选 side-entry paths 进入这条 protocol？",
    },
    {
      en: "How much of milestone / workstream management belongs in the same diagram versus a later supplemental view?",
      zh: "milestone / workstream management 有多少应该留在同一张图里，多少应该移到后续 supplemental view？",
    },
  ],
  evidenceNotes: [
    {
      en: "The README explicitly frames GSD as a meta-prompting, context engineering, and spec-driven development system rather than as a host replacement.",
      zh: "README 明确把 GSD 定义成 meta-prompting、context engineering 与 spec-driven development system，而不是宿主替代品。",
    },
    {
      en: "The published `How It Works` section centers the protocol loop on initialize, discuss, plan, execute, verify, and repeat/ship milestones.",
      zh: "公开的 `How It Works` 明确把 protocol loop 放在 initialize、discuss、plan、execute、verify 与 repeat/ship milestones 上。",
    },
    {
      en: "The same README also keeps installation and command surfaces distributed across multiple hosts, which is why the host layer matters but does not dominate the diagram.",
      zh: "同一份 README 也把安装与命令工作面分散在多个宿主上，这也是为什么 host layer 重要，但不应该主导整张图。",
    },
  ],
  sources: [
    {
      label: "get-shit-done repository",
      href: "https://github.com/gsd-build/get-shit-done",
      note: {
        en: "Primary source for GSD positioning, multi-host installation surfaces, and the discuss → plan → execute → verify workflow.",
        zh: "用于确认 GSD 定位、多宿主安装面，以及 discuss → plan → execute → verify workflow 的主来源。",
      },
    },
    {
      label: "GSD user guide",
      href: "https://github.com/gsd-build/get-shit-done/blob/main/docs/USER-GUIDE.md",
      note: {
        en: "Official guide for command usage, config toggles, and detailed workflow behavior.",
        zh: "官方用户指南，用来补充命令用法、配置开关和更细的 workflow 行为。",
      },
    },
  ],
};

export const bmadDraftCase: DraftCase = {
  id: "bmad-method",
  title: "BMAD-METHOD Draft",
  state: "draft",
  summary: {
    en: "A method-system draft showing how BMAD installs host-facing skills and commands, routes work through specialized agents and structured workflows, and keeps progress in `_bmad/` plus `_bmad-output/` artifacts.",
    zh: "一张 method-system draft，表达 BMAD 如何安装面向宿主的 skills 与 commands，经由 specialized agents 和 structured workflows 推进工作，并把进度沉淀在 `_bmad/` 与 `_bmad-output/` artifacts 中。",
  },
  nodes: [
    {
      id: "project-request",
      label: "project / request",
      purpose: {
        en: "The feature request, product idea, or existing codebase change entering the BMad method.",
        zh: "进入 BMad method 的功能请求、产品想法或既有代码库改动。",
      },
      lane: "entry",
    },
    {
      id: "host-ide-surface",
      label: "host IDE surface",
      purpose: {
        en: "Claude Code, Cursor, and related AI IDE surfaces where BMAD skills and workflows actually run.",
        zh: "Claude Code、Cursor 等 AI IDE 工作面；BMAD 的 skills 与 workflows 最终都在这里运行。",
      },
      lane: "host",
    },
    {
      id: "skill-command-surface",
      label: "skills / commands",
      purpose: {
        en: "Generated `bmad-*` skills, workflow skills, and command-style entry points that let the user start work directly from the host.",
        zh: "生成出来的 `bmad-*` skills、workflow skills 与命令式入口；用户可以直接从宿主里触发它们。",
      },
      lane: "wiring",
    },
    {
      id: "workflow-guide",
      label: "help / status guide",
      purpose: {
        en: "`bmad-help` and workflow-status logic that inspect project state and point the user to the next required or optional step.",
        zh: "`bmad-help` 与 workflow-status 这一层会读取项目状态，并把用户导向下一步必须做或可选做的事情。",
      },
      lane: "core",
    },
    {
      id: "specialized-agents",
      label: "specialized agents",
      purpose: {
        en: "Installed BMad personas such as PM, Architect, Developer, Scrum Master, UX, and QA, each with a bounded role and trigger set.",
        zh: "安装进来的 BMad 专门 agent，例如 PM、Architect、Developer、Scrum Master、UX、QA；每个 agent 都带着明确角色和触发集。",
      },
      lane: "core",
    },
    {
      id: "bmad-config",
      label: "_bmad config",
      purpose: {
        en: "Installed module manifests, agents, workflows, prompts, and configuration generated into the `_bmad/` folder.",
        zh: "安装后写入 `_bmad/` 的 module manifests、agents、workflows、prompts 与配置。",
      },
      lane: "memory",
    },
    {
      id: "phase-workflows",
      label: "phase workflows",
      purpose: {
        en: "Structured workflows for brainstorming, PRD, architecture, epics, stories, quick flow, and other phase-specific work.",
        zh: "用于 brainstorming、PRD、architecture、epics、stories、quick flow 等阶段任务的结构化 workflows。",
      },
      lane: "core",
    },
    {
      id: "implementation-loop",
      label: "implementation / review loop",
      purpose: {
        en: "The actual execution, implementation, and review work that happens after a workflow hands off concrete tasks.",
        zh: "workflow 交出具体任务以后发生的真实执行、实现与评审工作。",
      },
      lane: "execution",
    },
    {
      id: "bmad-output-state",
      label: "_bmad-output artifacts",
      purpose: {
        en: "Planning artifacts, project context, sprint tracking, and other durable output files that preserve phase progress across sessions.",
        zh: "planning artifacts、project context、sprint tracking 等可持续输出文件；它们会把 phase progress 跨 session 保存下来。",
      },
      lane: "memory",
    },
    {
      id: "party-builder",
      label: "party mode / builder",
      purpose: {
        en: "Multi-agent discussion plus module and workflow extension surfaces that expand BMad beyond the default core path.",
        zh: "多 agent 讨论能力，以及 module / workflow 扩展面；它们把 BMad 从默认核心路径继续向外扩展。",
      },
      lane: "maintenance",
    },
  ],
  steps: [
    {
      id: "s1-install-init",
      label: "install and initialize",
      summary: {
        en: "The installer selects modules, generates host-facing skills, and creates `_bmad/` plus `_bmad-output/` in the project.",
        zh: "安装器会选择 modules、生成宿主可调用的 skills，并在项目里创建 `_bmad/` 与 `_bmad-output/`。",
      },
    },
    {
      id: "s2-choose-entry",
      label: "choose entry skill",
      summary: {
        en: "The user starts with `bmad-help`, a workflow skill, or an agent skill depending on whether they need routing or already know the next task.",
        zh: "用户会从 `bmad-help`、workflow skill 或 agent skill 里选择入口；取决于他是需要先找路，还是已经知道下一步要做什么。",
      },
    },
    {
      id: "s3-load-agent-workflow",
      label: "load agent + workflow",
      summary: {
        en: "BMAD loads the selected agent persona or workflow, then uses installed definitions in `_bmad/` to run the next structured phase.",
        zh: "BMAD 会装载选中的 agent persona 或 workflow，再利用 `_bmad/` 里的安装定义推进下一段结构化 phase。",
      },
    },
    {
      id: "s4-write-and-execute",
      label: "write artifacts + execute",
      summary: {
        en: "PRDs, architecture, stories, project context, sprint tracking, and implementation results are written out while execution and review continue in the host.",
        zh: "PRD、architecture、stories、project context、sprint tracking 与实现结果会持续写出，同时执行与评审在宿主里继续推进。",
      },
    },
    {
      id: "s5-collaborate-extend",
      label: "collaborate and extend",
      summary: {
        en: "Party Mode, Builder, and installed modules expand the system, while help and status surfaces use saved artifacts to route the next step.",
        zh: "Party Mode、Builder 与已安装 modules 会继续扩展系统，而 help / status 会利用已保存的 artifacts 把用户导向下一步。",
      },
    },
  ],
  openQuestions: [
    {
      en: "Should agent menu triggers be shown as a separate control surface from generated skills, or is one `skills / commands` node enough for the comparison view?",
      zh: "agent menu triggers 应该和生成出来的 skills 拆成两个控制面，还是在比较图里压缩成一个 `skills / commands` 节点就够了？",
    },
    {
      en: "How much of `_bmad/` and `_bmad-output/` should stay as separate nodes, given one stores installed method definitions while the other stores project progress?",
      zh: "在一个保存安装后的方法定义、另一个保存项目进度的前提下，`_bmad/` 与 `_bmad-output/` 应该分成两个节点到什么程度？",
    },
    {
      en: "Does Party Mode belong in the main closed loop, or should it move into a supplemental collaboration view if the diagram gets too crowded?",
      zh: "如果主图过于拥挤，Party Mode 应该留在主闭环里，还是移到补充协作视图里？",
    },
  ],
  evidenceNotes: [
    {
      en: "The official getting-started flow says installation creates `_bmad/` and `_bmad-output/`, then directs the user to begin from `bmad-help` inside an AI IDE.",
      zh: "官方 getting-started 流程明确写到，安装后会生成 `_bmad/` 与 `_bmad-output/`，然后把用户引导到 AI IDE 里的 `bmad-help` 开始。",
    },
    {
      en: "The skills reference states that the installer generates one skill per agent, workflow, task, and tool, making generated skills the main runtime entry surface.",
      zh: "skills reference 明确说，安装器会按 agent、workflow、task 与 tool 生成 skill，因此生成出来的 skills 才是主要运行入口。",
    },
    {
      en: "The README and reference docs describe 12+ specialized agents, 34+ workflows, Party Mode, Builder, and workflow-status guidance as the distinctive load-bearing parts of the system.",
      zh: "README 与 reference docs 把 12+ specialized agents、34+ workflows、Party Mode、Builder 与 workflow-status guidance 一起描述成这套系统最承重的部分。",
    },
  ],
  sources: [
    {
      label: "BMAD-METHOD repository",
      href: "https://github.com/bmad-code-org/BMAD-METHOD",
      note: {
        en: "Primary source for BMAD positioning, module ecosystem, 34+ workflows, specialized agents, Party Mode, and installation entry points.",
        zh: "用于确认 BMAD 定位、module ecosystem、34+ workflows、specialized agents、Party Mode 与安装入口的主来源。",
      },
    },
    {
      label: "BMAD getting started",
      href: "https://docs.bmad-method.org/tutorials/getting-started/",
      note: {
        en: "Used to ground `_bmad/`, `_bmad-output/`, workflow initialization, and the host-side starting path via `bmad-help`.",
        zh: "用于确认 `_bmad/`、`_bmad-output/`、workflow initialization，以及从 `bmad-help` 开始的宿主侧入口。",
      },
    },
    {
      label: "BMAD skills reference",
      href: "https://docs.bmad-method.org/reference/commands/",
      note: {
        en: "Used to ground generated skills as the main entry mechanism for agents, workflows, tasks, and tools.",
        zh: "用于确认生成出来的 skills 是 agents、workflows、tasks 与 tools 的主要进入机制。",
      },
    },
    {
      label: "BMAD agents reference",
      href: "https://docs.bmad-method.org/reference/agents/",
      note: {
        en: "Used to ground specialized agents, skill IDs, and agent menu triggers.",
        zh: "用于确认 specialized agents、skill IDs 与 agent menu triggers。",
      },
    },
    {
      label: "BMAD core tools",
      href: "https://docs.bmad-method.org/reference/core-tools/",
      note: {
        en: "Used to ground `bmad-party-mode` and help/status-style routing tools.",
        zh: "用于确认 `bmad-party-mode` 与 help / status 这类路由工具。",
      },
    },
  ],
};

export const draftCases: DraftCase[] = [
  trellisDraftCase,
  omxDraftCase,
  gsdDraftCase,
  bmadDraftCase,
];
