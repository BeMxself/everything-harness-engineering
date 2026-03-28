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
