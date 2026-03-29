import type { ComparisonDiagram } from "./types";

export const trellisDraftDiagram: ComparisonDiagram = {
  id: "trellis-draft",
  title: "Trellis",
  summary: {
    en: "A platform-over-core comparison view showing how Trellis keeps one `.trellis/` workflow core while generating host-specific wiring into Claude Code, Codex, OpenCode, Cursor, and related tools.",
    zh: "一张 platform-over-core 的比较视图，用来表达 Trellis 如何保留统一的 `.trellis/` workflow core，再向 Claude Code、Codex、OpenCode、Cursor 等宿主生成 wiring。",
  },
  emphasis: {
    automationLoop: "high",
    harness: "high",
    control: "high",
    hostDependency: "medium",
  },
  notes: {
    whyThisLoopMatters: {
      en: "Trellis is most interesting when read as a workflow core that persists above host-specific entry points, not as a single-host prompt pack.",
      zh: "Trellis 最值得观察的地方，是它作为高于宿主 entry points 的 workflow core 持续存在，而不是一个单宿主 prompt pack。",
    },
    whereTheHarnessLives: {
      en: "The harness lives in the shared `.trellis/` structure plus the generated platform wiring that adapts the same workflow to each host.",
      zh: "这层 harness 主要存在于共享 `.trellis/` 结构，以及把同一套 workflow 适配到各宿主的 generated platform wiring 中。",
    },
  },
  readingGuide: {
    keyQuestion: {
      en: "How much of the control loop lives in the platform-level workflow core, and how much is delegated into host-specific wiring?",
      zh: "控制闭环究竟有多少留在平台级 workflow core 中，又有多少被下放到宿主专属 wiring？",
    },
    howToRead: {
      en: "Read the shared workflow core first, then trace how platform wiring fans out into host surfaces before returning through review, memory, and update paths.",
      zh: "先读共享 workflow core，再沿着 platform wiring 如何向 host surface 扩散去看，最后观察 review、memory 与 update 路径如何回流。",
    },
    evidenceBoundary: {
      en: "The `.trellis/` core and platform-specific directories follow official Trellis materials. The relative control topology here is repository interpretation used for comparison.",
      zh: "`.trellis/` core 和各平台目录尽量沿用 Trellis 官方材料；这里的相对控制拓扑则是为了比较而做的仓库解释。",
    },
    currentLimit: {
      en: "This comparison view compresses many platform-specific differences into one shared wiring layer, so it shows structure better than per-platform operational detail.",
      zh: "这张比较视图把大量平台差异压缩进一个 shared wiring layer，因此更擅长表达结构，不是逐平台操作细节图。",
    },
  },
  takeaways: [
    {
      en: "The platform-level workflow core is the load-bearing part of Trellis, while each host contributes a thinner integration layer.",
      zh: "平台级 workflow core 才是 Trellis 的 load-bearing part，而各宿主提供的是更薄的 integration layer。",
    },
    {
      en: "Control returns through review, task state, and workspace memory instead of ending at the host command boundary.",
      zh: "控制会通过 review、task state 与 workspace memory 回流，而不是停在宿主命令边界上。",
    },
    {
      en: "Updates and migrations matter because Trellis is not only a workflow shape, but also a maintained cross-platform wiring system.",
      zh: "更新与迁移本身也很重要，因为 Trellis 不只是 workflow shape，还是一套被持续维护的 cross-platform wiring system。",
    },
  ],
  sources: [
    {
      label: "Trellis repository",
      href: "https://github.com/mindfold-ai/Trellis",
      note: {
        en: "Primary source for the `.trellis/` workflow core, generated platform wiring, and supported hosts.",
        zh: "用于确认 `.trellis/` workflow core、生成式平台 wiring 与支持宿主的主来源。",
      },
    },
    {
      label: "Trellis multi-platform guide",
      href: "https://docs.trytrellis.app/guide/ch13-multi-platform",
      note: {
        en: "Used to ground host-specific wiring differences across Claude Code, Codex, Cursor, OpenCode, and other hosts.",
        zh: "用于把 Claude Code、Codex、Cursor、OpenCode 等宿主的 wiring 差异锚定到官方多平台指南中。",
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
  nodes: [
    {
      id: "task",
      label: "task",
      kind: "entry",
      description: "User task or repo goal entering Trellis",
      position: { x: 24, y: 290 },
    },
    {
      id: "workflow-core",
      label: "workflow core",
      kind: "control",
      host: "multi-host",
      description: "Shared `.trellis/` workflow core",
      position: { x: 425, y: 280 },
    },
    {
      id: "spec-memory",
      label: "spec / task / workspace memory",
      kind: "memory",
      description: "Specs, task state, and workspace journals",
      position: { x: 447, y: 560 },
    },
    {
      id: "platform-wiring",
      label: "platform wiring",
      kind: "shell",
      host: "multi-host",
      description: "Generated host-specific entry points and adapters",
      position: { x: 980, y: 140 },
    },
    {
      id: "host-surface",
      label: "host surface",
      kind: "shell",
      host: "multi-host",
      description: "Claude Code / Codex / OpenCode / Cursor and other hosts",
      position: { x: 980, y: 420 },
    },
    {
      id: "execution-loop",
      label: "execution loop",
      kind: "execution",
      description: "Host-side commands, agents, hooks, and task execution",
      position: { x: 1520, y: 286 },
    },
    {
      id: "review-memory-return",
      label: "review / memory return",
      kind: "verification",
      description: "Checks, task updates, and workspace learning return",
      position: { x: 2050, y: 286 },
    },
    {
      id: "update-migration",
      label: "update / migration",
      kind: "shell",
      host: "multi-host",
      description: "Regenerates platform wiring while preserving core workflow",
      position: { x: 1522, y: 560 },
    },
  ],
  edges: [
    { id: "e1", source: "task", target: "workflow-core", kind: "main" },
    { id: "e2", source: "spec-memory", target: "workflow-core", kind: "feedback" },
    { id: "e3", source: "workflow-core", target: "platform-wiring", kind: "main" },
    { id: "e4", source: "platform-wiring", target: "host-surface", kind: "implicit" },
    { id: "e5", source: "host-surface", target: "execution-loop", kind: "main" },
    { id: "e6", source: "execution-loop", target: "review-memory-return", kind: "main" },
    { id: "e7", source: "review-memory-return", target: "spec-memory", kind: "feedback" },
    {
      id: "e8",
      source: "workflow-core",
      target: "update-migration",
      kind: "implicit",
      controlPoints: [{ x: 890, y: 620 }],
    },
    { id: "e9", source: "update-migration", target: "platform-wiring", kind: "feedback" },
    {
      id: "e10",
      source: "review-memory-return",
      target: "workflow-core",
      kind: "feedback",
      controlPoints: [{ x: 1460, y: 120 }, { x: 760, y: 120 }],
    },
  ],
  steps: [
    {
      id: "s1-intake",
      label: { en: "Intake task", zh: "接收任务" },
      activeNodeIds: ["task", "workflow-core"],
      activeEdgeIds: ["e1"],
      note: {
        en: "A task enters the shared Trellis workflow instead of starting from an isolated host prompt.",
        zh: "任务先进入共享 Trellis workflow，而不是从孤立的 host prompt 开始。",
      },
    },
    {
      id: "s2-inject",
      label: { en: "Inject core context", zh: "注入核心上下文" },
      activeNodeIds: ["workflow-core", "spec-memory", "platform-wiring"],
      activeEdgeIds: ["e2", "e3"],
      note: {
        en: "Specs, task state, and workspace memory from `.trellis/` are injected into the active workflow path.",
        zh: "来自 `.trellis/` 的 specs、task state 与 workspace memory 被注入当前 workflow path。",
      },
    },
    {
      id: "s3-dispatch",
      label: { en: "Dispatch through hosts", zh: "向宿主分发" },
      activeNodeIds: ["platform-wiring", "host-surface", "execution-loop"],
      activeEdgeIds: ["e4", "e5"],
      note: {
        en: "Platform wiring adapts the shared workflow into host-specific surfaces before execution proceeds.",
        zh: "平台 wiring 会先把共享 workflow 适配成宿主专属 surface，再进入执行。",
      },
    },
    {
      id: "s4-review-return",
      label: { en: "Review and return", zh: "评审与回流" },
      activeNodeIds: ["execution-loop", "review-memory-return", "spec-memory", "workflow-core"],
      activeEdgeIds: ["e6", "e7", "e10"],
      note: {
        en: "Review outcomes feed task state and workspace memory so the next session returns with structured context.",
        zh: "Review 结果会反馈进 task state 与 workspace memory，使下一次 session 带着结构化上下文回来。",
      },
    },
    {
      id: "s5-platform-sync",
      label: { en: "Sync platform wiring", zh: "同步平台 wiring" },
      activeNodeIds: ["workflow-core", "update-migration", "platform-wiring"],
      activeEdgeIds: ["e8", "e9"],
      note: {
        en: "Updates and migrations keep generated host wiring aligned with the shared core workflow.",
        zh: "更新与迁移让生成出来的 host wiring 持续和共享 core workflow 保持一致。",
      },
    },
  ],
};

export const omxDraftDiagram: ComparisonDiagram = {
  id: "oh-my-codex-draft",
  title: "oh-my-codex",
  summary: {
    en: "A Codex-centered comparison view showing OMX as a workflow and runtime help layer that wraps prompts, skills, `.omx/` state, and optional team runtime around the host.",
    zh: "一张以 Codex 为中心的比较视图，表达 OMX 如何把 prompts、skills、`.omx/` state 与可选 team runtime 包在宿主外层。",
  },
  emphasis: {
    automationLoop: "high",
    harness: "high",
    control: "high",
    hostDependency: "high",
  },
  notes: {
    whyThisLoopMatters: {
      en: "OMX matters most when read as a workflow-help layer that keeps Codex central instead of trying to replace it with a parallel runtime.",
      zh: "OMX 最值得观察的地方，是它作为 workflow-help layer 保持 Codex 居中，而不是试图用并行 runtime 替换它。",
    },
    whereTheHarnessLives: {
      en: "The harness lives in prompts, skills, `.omx/` state, and optional runtime escalation around the Codex host.",
      zh: "这层 harness 主要存在于 Codex host 外层的 prompts、skills、`.omx/` state 和可选 runtime escalation 中。",
    },
  },
  readingGuide: {
    keyQuestion: {
      en: "What stays inside the Codex host, and what is lifted into OMX as reusable workflow help?",
      zh: "什么留在 Codex host 里，什么被提到 OMX 这层 reusable workflow help 中？",
    },
    howToRead: {
      en: "Read Codex host and workflow escalation together: OMX starts with lightweight prompt/skill help, then escalates only when larger workflows are warranted.",
      zh: "把 Codex host 和 workflow escalation 放在一起读：OMX 会先提供轻量 prompt/skill help，再在任务变大时才升级到更重 workflows。",
    },
    evidenceBoundary: {
      en: "The Codex host, `.omx/`, prompts, skills, and team runtime all follow public OMX terminology. Their relative control shape here is repository interpretation for comparison.",
      zh: "Codex host、`.omx/`、prompts、skills、team runtime 这些术语都尽量沿用 OMX 公开表述；相对控制形态则是为了比较而做的仓库解释。",
    },
    currentLimit: {
      en: "This comparison view compresses many workflow-specific branches into one escalation lane, so it shows host-to-workflow structure better than every operator surface in detail.",
      zh: "这张比较视图把大量 workflow-specific branches 压进一条 escalation lane，因此更擅长表达 host-to-workflow 结构，而不是逐个 operator surface 的细节。",
    },
  },
  takeaways: [
    {
      en: "Codex remains the execution engine even when OMX adds richer workflow help around it.",
      zh: "即便 OMX 在外层加入更丰富的 workflow help，Codex 仍然是 execution engine。",
    },
    {
      en: "Workflow escalation is load-bearing: OMX becomes more interesting when it decides when to stay lightweight versus when to pull in heavier workflows.",
      zh: "workflow escalation 是 load-bearing 的：OMX 最有意思的地方在于它会决定何时保持轻量，何时拉起更重 workflows。",
    },
    {
      en: "The optional team runtime should be read as a late-stage escalation path, not the default shape of the whole system.",
      zh: "可选的 team runtime 应该被读成后段升级路径，而不是整个系统的默认形状。",
    },
  ],
  sources: [
    {
      label: "oh-my-codex repository",
      href: "https://github.com/Yeachan-Heo/oh-my-codex",
      note: {
        en: "Primary source for OMX as a Codex workflow layer with prompts, skills, `.omx/`, and optional team runtime.",
        zh: "用于确认 OMX 作为 Codex workflow layer，以及 prompts、skills、`.omx/` 与可选 team runtime 的主来源。",
      },
    },
  ],
  nodes: [
    {
      id: "task",
      label: "task",
      kind: "entry",
      description: "User task entering the Codex session",
      position: { x: 24, y: 286 },
    },
    {
      id: "codex-host",
      label: "codex host",
      kind: "control",
      host: "codex",
      description: "Codex remains the execution engine",
      position: { x: 420, y: 286 },
    },
    {
      id: "prompt-skill-layer",
      label: "prompt / skill layer",
      kind: "shell",
      host: "codex",
      description: "Reusable prompts and workflow surfaces",
      position: { x: 420, y: 76 },
    },
    {
      id: "omx-state",
      label: ".omx state",
      kind: "memory",
      description: "Plans, logs, memory, and mode tracking",
      position: { x: 430, y: 534 },
    },
    {
      id: "workflow-escalation",
      label: "workflow escalation",
      kind: "decision",
      description: "Decides when heavier workflows are warranted",
      position: { x: 980, y: 286 },
    },
    {
      id: "team-runtime",
      label: "team runtime",
      kind: "execution",
      description: "Optional tmux/worktree coordination path",
      position: { x: 1510, y: 96 },
    },
    {
      id: "execution-loop",
      label: "execution loop",
      kind: "execution",
      description: "Codex-side execution, planning, and persistent workflows",
      position: { x: 1512, y: 360 },
    },
    {
      id: "verification-return",
      label: "verification / memory return",
      kind: "verification",
      description: "Verification plus `.omx/` memory return",
      position: { x: 2060, y: 360 },
    },
  ],
  edges: [
    { id: "e1", source: "task", target: "codex-host", kind: "main" },
    { id: "e2", source: "prompt-skill-layer", target: "codex-host", kind: "implicit" },
    { id: "e3", source: "codex-host", target: "workflow-escalation", kind: "main" },
    { id: "e4", source: "workflow-escalation", target: "execution-loop", kind: "main" },
    { id: "e5", source: "workflow-escalation", target: "team-runtime", kind: "feedback" },
    { id: "e6", source: "team-runtime", target: "execution-loop", kind: "feedback" },
    { id: "e7", source: "execution-loop", target: "verification-return", kind: "main" },
    { id: "e8", source: "verification-return", target: "omx-state", kind: "feedback" },
    {
      id: "e9",
      source: "omx-state",
      target: "codex-host",
      kind: "feedback",
      controlPoints: [{ x: 330, y: 430 }],
    },
    {
      id: "e10",
      source: "prompt-skill-layer",
      target: "workflow-escalation",
      kind: "implicit",
      controlPoints: [{ x: 720, y: 102 }],
    },
  ],
  steps: [
    {
      id: "s1-start-strong",
      label: { en: "Start stronger", zh: "强化启动" },
      activeNodeIds: ["task", "codex-host", "prompt-skill-layer"],
      activeEdgeIds: ["e1", "e2"],
      note: {
        en: "OMX starts from a stronger Codex session instead of replacing the host outright.",
        zh: "OMX 先从更强的 Codex session 开始，而不是直接替代宿主。",
      },
    },
    {
      id: "s2-load-workflow-help",
      label: { en: "Load workflow help", zh: "加载 workflow help" },
      activeNodeIds: ["prompt-skill-layer", "codex-host", "workflow-escalation"],
      activeEdgeIds: ["e3", "e10"],
      note: {
        en: "Prompts and skills surround the host with reusable analysis and planning surfaces.",
        zh: "prompts 与 skills 会在宿主外层提供可复用的分析与规划工作面。",
      },
    },
    {
      id: "s3-escalate",
      label: { en: "Escalate workflows", zh: "升级 workflows" },
      activeNodeIds: ["workflow-escalation", "execution-loop"],
      activeEdgeIds: ["e4"],
      note: {
        en: "OMX decides when to stay lightweight and when to escalate into deeper workflows.",
        zh: "OMX 会判断是继续保持轻量执行，还是升级到更深的 workflows。",
      },
    },
    {
      id: "s4-team-runtime",
      label: { en: "Optional team runtime", zh: "可选 team runtime" },
      activeNodeIds: ["workflow-escalation", "team-runtime", "execution-loop"],
      activeEdgeIds: ["e5", "e6"],
      note: {
        en: "Team runtime appears only when durable parallel coordination becomes worth the overhead.",
        zh: "只有当 durable parallel coordination 值得额外开销时，team runtime 才会出现。",
      },
    },
    {
      id: "s5-return-state",
      label: { en: "Return through state", zh: "通过状态回流" },
      activeNodeIds: ["execution-loop", "verification-return", "omx-state", "codex-host"],
      activeEdgeIds: ["e7", "e8", "e9"],
      note: {
        en: "Verification results and runtime context return into `.omx/`, so future Codex sessions start with accumulated state.",
        zh: "验证结果与运行时上下文会回流进 `.omx/`，使之后的 Codex session 从累积状态开始。",
      },
    },
  ],
};

export const gsdDraftDiagram: ComparisonDiagram = {
  id: "get-shit-done-draft",
  title: "get-shit-done",
  summary: {
    en: "A boundary-case comparison view showing GSD as a protocol loop that runs across host install surfaces while keeping its real control shape in discuss, plan, execute, verify, and milestone turnover.",
    zh: "一张边界案例比较视图，用来表达 GSD 如何作为一条跨宿主安装面运行的 protocol loop，而它真正的控制形态在于 discuss、plan、execute、verify 与 milestone turnover。",
  },
  emphasis: {
    automationLoop: "high",
    harness: "medium",
    control: "high",
    hostDependency: "medium",
  },
  notes: {
    whyThisLoopMatters: {
      en: "GSD becomes interesting when read as a repeatable protocol for keeping context fresh, not as a static overlay on one host.",
      zh: "GSD 最值得看的地方，是它作为保持 context fresh 的可重复 protocol，而不是单宿主上的静态 overlay。",
    },
    whereTheHarnessLives: {
      en: "The harness lives mostly in planning artifacts, command choreography, and verification loops rather than in a dedicated runtime shell.",
      zh: "这层 harness 更多存在于 planning artifacts、command choreography 与 verification loops 中，而不是一个专门的 runtime shell。",
    },
  },
  readingGuide: {
    keyQuestion: {
      en: "Does the protocol itself become the main control loop, with host surfaces acting mainly as execution carriers?",
      zh: "protocol 本身会不会成为主控制闭环，而宿主工作面更多只是执行载体？",
    },
    howToRead: {
      en: "Follow the main loop from initialization into discuss, plan, execute, verify, and milestone turnover, then compare how the host layer supports the loop without dominating it.",
      zh: "先沿着 initialization → discuss → plan → execute → verify → milestone turnover 这条主循环去看，再观察 host layer 如何支撑这条循环而不是主导它。",
    },
    evidenceBoundary: {
      en: "Commands, artifact names, and phase structure follow GSD public docs. The control topology here is repository interpretation used to compare protocol-heavy cases.",
      zh: "命令、artifact 名称与 phase 结构尽量沿用 GSD 公开文档；这里的控制拓扑则是为了比较 protocol-heavy cases 而做的仓库解释。",
    },
    currentLimit: {
      en: "This comparison view compresses many special modes and workstream tools into one boundary-case loop, so it emphasizes protocol shape over every command surface.",
      zh: "这张比较视图把许多 special modes 和 workstream tools 压缩进一条边界案例循环，因此更强调 protocol shape，而不是逐个 command surface。",
    },
  },
  takeaways: [
    {
      en: "The discuss → plan → execute → verify loop is the load-bearing part of GSD.",
      zh: "discuss → plan → execute → verify 这条循环是 GSD 的 load-bearing part。",
    },
    {
      en: "`.planning/` is not just storage; it is the memory layer that keeps the protocol coherent across phases and milestones.",
      zh: "`.planning/` 不只是存储层，它还是让这条 protocol 在 phases 与 milestones 之间保持连贯的 memory layer。",
    },
    {
      en: "Host surfaces matter for installation and invocation, but the protocol loop itself carries most of the control weight.",
      zh: "host surface 对安装与调用很重要，但真正承担大部分控制权的是 protocol loop 本身。",
    },
  ],
  sources: [
    {
      label: "get-shit-done repository",
      href: "https://github.com/gsd-build/get-shit-done",
      note: {
        en: "Primary source for the workflow protocol, multi-host install surface, and `.planning/` artifact model.",
        zh: "用于确认 workflow protocol、多宿主安装面与 `.planning/` artifact model 的主来源。",
      },
    },
    {
      label: "GSD user guide",
      href: "https://github.com/gsd-build/get-shit-done/blob/main/docs/USER-GUIDE.md",
      note: {
        en: "Official guide for detailed command and workflow behavior beyond the README summary.",
        zh: "官方用户指南，用来补充 README 之外更细的命令和 workflow 行为。",
      },
    },
  ],
  nodes: [
    {
      id: "idea-request",
      label: "idea / request",
      kind: "entry",
      description: "Feature request or project idea entering GSD",
      position: { x: 24, y: 290 },
    },
    {
      id: "planning-state",
      label: ".planning state",
      kind: "memory",
      description: "Project, roadmap, phase files, and verification artifacts",
      position: { x: 410, y: 74 },
    },
    {
      id: "discuss-phase",
      label: "discuss phase",
      kind: "control",
      description: "Clarifies gray areas before deeper planning",
      position: { x: 410, y: 288 },
    },
    {
      id: "plan-phase",
      label: "plan phase",
      kind: "control",
      description: "Researches and generates executable plans",
      position: { x: 890, y: 288 },
    },
    {
      id: "execute-phase",
      label: "execute phase",
      kind: "execution",
      description: "Runs plans in waves with fresh contexts",
      position: { x: 1370, y: 288 },
    },
    {
      id: "verify-phase",
      label: "verify work",
      kind: "verification",
      description: "UAT, debugging, and fix-plan generation",
      position: { x: 1850, y: 288 },
    },
    {
      id: "ship-next",
      label: "ship / next milestone",
      kind: "decision",
      description: "Ships verified work and restarts the cycle",
      position: { x: 2330, y: 288 },
    },
    {
      id: "host-runtime-surface",
      label: "host runtime surface",
      kind: "shell",
      host: "multi-host",
      description: "Claude Code / Codex / Cursor / OpenCode / Gemini and other installs",
      position: { x: 1130, y: 560 },
    },
  ],
  edges: [
    { id: "e1", source: "idea-request", target: "planning-state", kind: "main" },
    { id: "e2", source: "planning-state", target: "discuss-phase", kind: "feedback" },
    { id: "e3", source: "discuss-phase", target: "plan-phase", kind: "main" },
    { id: "e4", source: "plan-phase", target: "execute-phase", kind: "main" },
    { id: "e5", source: "execute-phase", target: "verify-phase", kind: "main" },
    { id: "e6", source: "verify-phase", target: "planning-state", kind: "feedback" },
    { id: "e7", source: "verify-phase", target: "ship-next", kind: "main" },
    {
      id: "e8",
      source: "ship-next",
      target: "discuss-phase",
      kind: "feedback",
      controlPoints: [{ x: 1880, y: 640 }, { x: 620, y: 640 }],
    },
    { id: "e9", source: "host-runtime-surface", target: "discuss-phase", kind: "implicit" },
    { id: "e10", source: "host-runtime-surface", target: "plan-phase", kind: "implicit" },
    { id: "e11", source: "host-runtime-surface", target: "execute-phase", kind: "implicit" },
    { id: "e12", source: "host-runtime-surface", target: "verify-phase", kind: "implicit" },
  ],
  steps: [
    {
      id: "s1-initialize",
      label: { en: "Initialize project", zh: "初始化项目" },
      activeNodeIds: ["idea-request", "planning-state"],
      activeEdgeIds: ["e1"],
      note: {
        en: "GSD turns the initial request into planning artifacts before any phase execution begins.",
        zh: "在任何 phase execution 开始前，GSD 会先把初始请求转成 planning artifacts。",
      },
    },
    {
      id: "s2-discuss",
      label: { en: "Discuss phase", zh: "讨论 phase" },
      activeNodeIds: ["planning-state", "discuss-phase", "host-runtime-surface"],
      activeEdgeIds: ["e2", "e9"],
      note: {
        en: "Discussion captures user intent and ambiguity before deeper planning starts.",
        zh: "讨论阶段会先捕获用户意图与灰区，再进入更深的 planning。",
      },
    },
    {
      id: "s3-plan",
      label: { en: "Plan phase", zh: "规划 phase" },
      activeNodeIds: ["discuss-phase", "plan-phase", "host-runtime-surface"],
      activeEdgeIds: ["e3", "e10"],
      note: {
        en: "Research and planning refine the work into executable plans tied to the phase goals.",
        zh: "research 与 planning 会把工作细化成绑定 phase goals 的可执行 plans。",
      },
    },
    {
      id: "s4-execute-verify",
      label: { en: "Execute + verify", zh: "执行并验证" },
      activeNodeIds: ["execute-phase", "verify-phase", "host-runtime-surface", "planning-state"],
      activeEdgeIds: ["e4", "e5", "e6", "e11", "e12"],
      note: {
        en: "Execution runs in waves, then returns through verification and updated planning artifacts.",
        zh: "执行会按 waves 运行，然后通过 verification 与更新后的 planning artifacts 回流。",
      },
    },
    {
      id: "s5-ship-loop",
      label: { en: "Ship and loop", zh: "交付并回环" },
      activeNodeIds: ["verify-phase", "ship-next", "discuss-phase"],
      activeEdgeIds: ["e7", "e8"],
      note: {
        en: "Verified work ships, then the same protocol restarts for the next phase or milestone.",
        zh: "完成验证的工作会被交付，然后同一套 protocol 会为下一 phase 或 milestone 重启。",
      },
    },
  ],
};

export const draftDiagrams: ComparisonDiagram[] = [
  trellisDraftDiagram,
  omxDraftDiagram,
  gsdDraftDiagram,
];
