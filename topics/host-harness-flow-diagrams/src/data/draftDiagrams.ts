import type { ComparisonDiagram } from "./types";

export const trellisDraftDiagram: ComparisonDiagram = {
  id: "trellis-draft",
  title: "Trellis Draft",
  summary: {
    en: "A platform-over-core draft showing how Trellis keeps one `.trellis/` workflow core while generating host-specific wiring into Claude Code, Codex, OpenCode, Cursor, and related tools.",
    zh: "一张 platform-over-core 的 draft 草图，用来表达 Trellis 如何保留统一的 `.trellis/` workflow core，再向 Claude Code、Codex、OpenCode、Cursor 等宿主生成 wiring。",
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
      en: "This draft compresses many platform-specific differences into one shared wiring layer, so it shows structure better than per-platform operational detail.",
      zh: "这张 draft 把大量平台差异压缩进一个 shared wiring layer，因此更擅长表达结构，不是逐平台操作细节图。",
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
