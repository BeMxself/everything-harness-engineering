import type {
  ExpansionCandidate,
  ExpansionCandidateFamily,
} from "./types";

export const expansionCandidateFamilies: ExpansionCandidateFamily[] = [
  {
    id: "omx-orchestration",
    title: {
      en: "OMX orchestration family",
      zh: "OMX 编排家族",
    },
    members: ["oh-my-codex", "oh-my-claudecode"],
    recommendedRepresentativeId: "oh-my-codex",
    note: {
      en: "Treat these as one orchestration family first, then decide later whether host-specific differences deserve separate diagrams.",
      zh: "先把它们当成同一个 orchestration family，再在后续判断宿主差异是否值得拆成独立图。",
    },
  },
];

export const expansionCandidates: ExpansionCandidate[] = [
  {
    id: "trellis",
    title: "Trellis",
    tier: "core",
    readiness: "ready",
    hostPattern: "cross-host-overlay",
    officialPositioning: {
      en: "A multi-platform AI coding framework and agent harness that keeps one workflow layer above Claude Code, Cursor, OpenCode, Codex, and other hosts.",
      zh: "一个跨多平台的 AI coding framework / agent harness，把同一层 workflow 保持在 Claude Code、Cursor、OpenCode、Codex 等宿主之上。",
    },
    structureValue: {
      en: "Best candidate for showing a platform-level control plane with host-specific adapters underneath.",
      zh: "最适合补出现有图中还缺的“平台级控制面 + 宿主接线层”结构。",
    },
    diagramFocus: {
      en: "Show how the platform-level workflow layer sits above each host integration surface.",
      zh: "重点表现平台级 workflow layer 如何压在各宿主 integration surface 之上。",
    },
    compareAgainst: ["everything-claude-code", "oh-my-opencode"],
    sources: [
      {
        label: "Trellis repository",
        href: "https://github.com/mindfold-ai/Trellis",
        note: {
          en: "Primary source for Trellis positioning, workflow shape, and supported hosts.",
          zh: "用于确认 Trellis 定位、workflow 形态与支持宿主的主来源。",
        },
      },
    ],
  },
  {
    id: "oh-my-codex",
    title: "oh-my-codex",
    tier: "core",
    readiness: "ready",
    hostPattern: "single-host-extension",
    familyId: "omx-orchestration",
    officialPositioning: {
      en: "A workflow layer on top of OpenAI Codex CLI that keeps Codex as the execution engine while adding prompts, skills, durable state, and team runtime helpers.",
      zh: "一个构建在 OpenAI Codex CLI 之上的 workflow layer，保留 Codex 作为 execution engine，并额外提供 prompts、skills、durable state 和 team runtime helpers。",
    },
    structureValue: {
      en: "Best representative for the OMX family because it adds a new host surface instead of another Claude-side comparison.",
      zh: "它是 OMX family 更好的代表，因为它补的是新的宿主工作面，而不是再增加一个 Claude 侧对照。",
    },
    diagramFocus: {
      en: "Show how the Codex host remains the execution engine while OMX adds orchestration and runtime help around it.",
      zh: "重点表现 Codex host 仍然是 execution engine，而 OMX 如何在外围叠加 orchestration 与 runtime help。",
    },
    compareAgainst: ["oh-my-opencode", "everything-claude-code"],
    sources: [
      {
        label: "oh-my-codex repository",
        href: "https://github.com/Yeachan-Heo/oh-my-codex",
        note: {
          en: "Primary source for the Codex-specific workflow layer and team runtime positioning.",
          zh: "用于确认 Codex 专属 workflow layer 与 team runtime 定位的主来源。",
        },
      },
    ],
  },
  {
    id: "get-shit-done",
    title: "get-shit-done",
    tier: "boundary",
    readiness: "needs-boundary-decision",
    hostPattern: "cross-host-overlay",
    officialPositioning: {
      en: "A meta-prompting, context engineering, and spec-driven development system that works across Claude Code, OpenCode, Gemini CLI, Codex, Cursor, and other hosts.",
      zh: "一个跨 Claude Code、OpenCode、Gemini CLI、Codex、Cursor 等宿主的 meta-prompting、context engineering 与 spec-driven development system。",
    },
    structureValue: {
      en: "Good boundary case because it stretches the topic toward workflow protocol systems without fully leaving the host/harness comparison space.",
      zh: "它是很好的边界案例，因为它会把专题拉向 workflow protocol system，但又没有完全离开 host/harness 比较空间。",
    },
    diagramFocus: {
      en: "Show whether the workflow protocol creates a reusable control loop above the host, or remains a reusable method template.",
      zh: "重点判断这套 workflow protocol 究竟是在宿主之上形成了可复用控制闭环，还是仍然更像方法模板。",
    },
    compareAgainst: ["gstack", "everything-claude-code"],
    sources: [
      {
        label: "get-shit-done repository",
        href: "https://github.com/gsd-build/get-shit-done",
        note: {
          en: "Primary source for the workflow protocol, clarification loop, and multi-host positioning.",
          zh: "用于确认 workflow protocol、clarification loop 与多宿主定位的主来源。",
        },
      },
    ],
  },
  {
    id: "oh-my-claudecode",
    title: "oh-my-claudecode",
    tier: "family-reference",
    readiness: "reference-only",
    hostPattern: "single-host-extension",
    familyId: "omx-orchestration",
    officialPositioning: {
      en: "A teams-first multi-agent orchestration layer for Claude Code built around a staged team pipeline.",
      zh: "一个构建在 Claude Code 之上的 teams-first multi-agent orchestration layer，围绕 staged team pipeline 展开。",
    },
    structureValue: {
      en: "Important as the Claude-side family reference, but less urgent than oh-my-codex because the current baseline already includes a Claude-centered case.",
      zh: "它作为 Claude 侧的 family reference 很重要，但优先级低于 oh-my-codex，因为当前基线里已经有 Claude-centered case。",
    },
    diagramFocus: {
      en: "If it becomes a standalone case later, emphasize the teams-first staged pipeline and how it leans on the Claude Code host.",
      zh: "如果以后单独成图，重点应放在 teams-first staged pipeline，以及它如何依赖 Claude Code host。",
    },
    compareAgainst: ["everything-claude-code", "oh-my-codex"],
    sources: [
      {
        label: "oh-my-claudecode repository",
        href: "https://github.com/Yeachan-Heo/oh-my-claudecode",
        note: {
          en: "Primary source for the Claude-side OMX orchestration shape and canonical team pipeline.",
          zh: "用于确认 Claude 侧 OMX orchestration 形态与 canonical team pipeline 的主来源。",
        },
      },
    ],
  },
  {
    id: "goose",
    title: "Goose",
    tier: "control-group",
    readiness: "ready",
    hostPattern: "independent-host",
    officialPositioning: {
      en: "A local, extensible, open source AI agent for engineering tasks that acts as its own host rather than as an overlay on another coding agent.",
      zh: "一个面向工程任务的本地、可扩展、开源 AI agent，更像自己的宿主，而不是附加在其他 coding agent 之上的 overlay。",
    },
    structureValue: {
      en: "Useful control group for separating host-native control loops from added harness layers.",
      zh: "它很适合作为控制组，用来区分宿主原生闭环和后加 harness layer。",
    },
    diagramFocus: {
      en: "Show the host-native control loop and make the boundary between host and add-on harness explicit.",
      zh: "重点表现宿主原生闭环，并把 host 与 add-on harness 的边界画清楚。",
    },
    compareAgainst: ["oh-my-opencode", "trellis"],
    sources: [
      {
        label: "Goose repository",
        href: "https://github.com/block/goose",
        note: {
          en: "Primary source for Goose positioning as an independent engineering agent host.",
          zh: "用于确认 Goose 作为独立工程 agent 宿主定位的主来源。",
        },
      },
    ],
  },
];
