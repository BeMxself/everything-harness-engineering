import type { FrameworkDiagram, LocalizedText } from "./types";

const rawDiagrams: FrameworkDiagram[] = [
  {
    id: "oh-my-opencode",
    title: {
      en: "oh-my-openagent (formerly oh-my-opencode)",
      zh: "oh-my-openagent（原 oh-my-opencode）",
    },
    summary: {
      en: "A runtime-centered loop built on top of the OpenCode host, where plugins, commands, and state stay tightly coupled to execution control.",
      zh: "一个构建在 OpenCode 宿主之上的 runtime-centered 闭环，插件、命令与状态都紧密耦合在执行控制周围。",
    },
    emphasis: {
      automationLoop: "high",
      harness: "high",
      control: "high",
      hostDependency: "high",
    },
    notes: {
      whyThisLoopMatters: {
        en: "The same runtime owns dispatch, retry, and continuation, so the system reads more like a control loop than a staged delivery chain.",
        zh: "同一个 runtime 同时负责分派、重试与续跑，因此这套系统更像控制闭环，而不是分阶段交付链。",
      },
      whereTheHarnessLives: {
        en: "The harness sits around execution: host integration, plugins, MCP, commands, and persisted state all feed runtime decisions.",
        zh: "Harness 包裹在执行过程周围：host 集成、插件、MCP、命令和持久状态都会共同影响 runtime 决策。",
      },
    },
    readingGuide: {
      keyQuestion: {
        en: "If runtime remains the main controller, how much of the harness lives inside the host and how much wraps around it?",
        zh: "当 runtime 仍是主控制中心时，harness 究竟有多少是在宿主内部，多少是在它周围包裹出来的？",
      },
      howToRead: {
        en: "Read left-to-right for the request path, then watch the lower shell layer and right-side failure returns to see why this behaves more like a control loop than a delivery pipeline.",
        zh: "先按从左到右看请求进入路径，再盯住下方 shell 层和右侧失败回流，就能看出它为什么更像控制闭环，而不是交付流水线。",
      },
      evidenceBoundary: {
        en: "The main loop and role names follow current public project terminology. Relative placement and collaboration topology are repository interpretation used to make control shape comparable.",
        zh: "主闭环和角色名称尽量沿用当前公开项目术语；相对位置与协作拓扑则是为了比较控制形态而做的仓库解释。",
      },
      currentLimit: {
        en: "This view compresses plugin lifecycle, command details, and MCP specifics into one shell layer, so it emphasizes control shape over implementation detail.",
        zh: "这张图把 plugin 生命周期、命令细节和 MCP 具体机制压缩进同一层 shell，因此强调的是控制形状，而不是实现细部。",
      },
    },
    takeaways: [
      {
        en: "Runtime control, shell influence, verification, and state updates all remain inside one continuous loop.",
        zh: "Runtime control、shell influence、verification 与状态更新都留在同一个连续闭环里。",
      },
      {
        en: "Failure recovery returns to the same controller instead of splitting into a separate delivery stage.",
        zh: "失败恢复会回到同一个主控制器，而不是分叉进独立的交付阶段。",
      },
      {
        en: "This comparison is most useful for seeing why both host dependency and harness density are high in this design.",
        zh: "这张图最适合帮助读者看清，为什么这种设计同时具有高宿主依赖和高 harness 密度。",
      },
    ],
    sources: [
      {
        label: {
          en: "oh-my-openagent repository",
          zh: "oh-my-openagent 仓库",
        },
        href: "https://github.com/code-yeongyu/oh-my-openagent",
        note: {
          en: "Primary source for current project positioning, terminology, and documented specialist roles.",
          zh: "用于确认项目当前定位、术语和公开描述的 specialist roles。",
        },
      },
      {
        label: {
          en: "OpenCode repository",
          zh: "OpenCode 仓库",
        },
        href: "https://github.com/anomalyco/opencode",
        note: {
          en: "Host environment reference for the coding-agent surface that this harness extends.",
          zh: "用来标定这层 harness 所依附的 coding-agent 宿主工作面。",
        },
      },
    ],
    agentCollaboration: {
      summary: {
        en: "Role names follow the current public repository; the dispatch topology shown here is repository interpretation for comparison.",
        zh: "角色命名尽量沿用当前公开仓库；这里的协作拓扑是为了比较而做的仓库解释。",
      },
      nodes: [
        {
          id: "sisyphus",
          label: "Sisyphus",
          role: { en: "Main orchestrator", zh: "主编排者" },
          x: 50,
          y: 34,
        },
        {
          id: "prometheus",
          label: "Prometheus",
          role: { en: "Strategic planner", zh: "战略规划者" },
          x: 18,
          y: 20,
        },
        {
          id: "metis",
          label: "Metis",
          role: { en: "Plan consultant", zh: "规划顾问" },
          x: 18,
          y: 54,
        },
        {
          id: "oracle",
          label: "Oracle",
          role: { en: "Architecture / debugging", zh: "架构 / 调试支持" },
          x: 50,
          y: 8,
        },
        {
          id: "frontend",
          label: "Frontend UI/UX Engineer",
          role: { en: "Dedicated UI specialist", zh: "专职 UI specialist" },
          x: 82,
          y: 22,
        },
        {
          id: "explore",
          label: "Explore",
          role: { en: "Fast codebase grep", zh: "快速代码库检索" },
          x: 82,
          y: 48,
        },
        {
          id: "librarian",
          label: "Librarian",
          role: { en: "Docs / code search", zh: "文档 / 代码搜索" },
          x: 50,
          y: 66,
        },
        {
          id: "looker",
          label: "Multimodal Looker",
          role: { en: "Visual inspection", zh: "视觉检查" },
          x: 82,
          y: 74,
        },
      ],
      edges: [
        {
          source: "prometheus",
          target: "sisyphus",
          label: { en: "plans", zh: "提供规划" },
        },
        {
          source: "metis",
          target: "sisyphus",
          label: { en: "consults", zh: "提供咨询" },
        },
        {
          source: "oracle",
          target: "sisyphus",
          label: { en: "reviews", zh: "参与评审" },
        },
        {
          source: "sisyphus",
          target: "frontend",
          label: { en: "delegates UI work", zh: "分派 UI 工作" },
        },
        {
          source: "sisyphus",
          target: "explore",
          label: { en: "queries codebase", zh: "检索代码库" },
        },
        {
          source: "sisyphus",
          target: "librarian",
          label: { en: "pulls docs", zh: "拉取文档" },
        },
        {
          source: "sisyphus",
          target: "looker",
          label: { en: "requests visual checks", zh: "发起视觉检查" },
        },
      ],
    },
    nodes: [
      { id: "intent", label: "User Intent / Task", kind: "entry", position: { x: -27, y: 297 } },
      {
        id: "host",
        label: "OpenCode Host",
        kind: "shell",
        host: "opencode",
        description: "Host runtime and plugin entrypoint",
        position: { x: 337, y: 290 },
      },
      {
        id: "runtime",
        label: "Sisyphus (Main Orchestrator)",
        kind: "control",
        description: "Main orchestration, planning, and continuation control",
        position: { x: 986, y: 300 },
      },
      {
        id: "shell",
        label: "Plugins / MCP / Commands / State",
        kind: "shell",
        host: "opencode",
        description: "Engineering shell around execution",
        position: { x: 553, y: 461 },
      },
      {
        id: "tools",
        label: "Specialist Agents / Tools",
        kind: "execution",
        description: "Official specialist agents and tool-facing execution surface",
        position: { x: 1632, y: 303 },
      },
      {
        id: "verify",
        label: "Verification",
        kind: "verification",
        position: { x: 2034, y: 307 },
      },
      {
        id: "memory",
        label: "State / Memory Update",
        kind: "memory",
        position: { x: 2420, y: 307 },
      },
      { id: "decision", label: "Continue?", kind: "decision", position: { x: 2424, y: 520 } },
      { id: "done", label: "Task Complete", kind: "terminal", position: { x: 2851, y: 515 } },
      { id: "failTool", label: "Tool Failure", kind: "failure", position: { x: 1628, y: 97 } },
      {
        id: "failVerify",
        label: "Verification Failed",
        kind: "failure",
        position: { x: 2033, y: 97 },
      },
    ],
    edges: [
      {
        id: "e1",
        source: "intent",
        target: "host",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e2",
        source: "host",
        target: "runtime",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e3",
        source: "runtime",
        target: "tools",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e4",
        source: "shell",
        target: "runtime",
        kind: "implicit",
        label: "shell influence",
        controlPoints: [
          { x: 864, y: 492 },
          { x: 929, y: 398 },
        ],
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e5",
        source: "shell",
        target: "tools",
        kind: "implicit",
        label: "shared shell",
        controlPoints: [
          { x: 1238, y: 493 },
          { x: 1469, y: 388 },
        ],
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      { id: "e6", source: "tools", target: "verify", kind: "main", sourceAnchorId: "right", targetAnchorId: "left" },
      {
        id: "e7",
        source: "verify",
        target: "memory",
        kind: "feedback",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e8",
        source: "memory",
        target: "decision",
        kind: "feedback",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e9",
        source: "decision",
        target: "runtime",
        kind: "feedback",
        label: "continue",
        controlPoints: [
          { x: 1742, y: 562 },
          { x: 1238, y: 560 },
        ],
        sourceAnchorId: "left",
        targetAnchorId: "bottom",
      },
      {
        id: "e10",
        source: "decision",
        target: "done",
        kind: "main",
        label: "complete",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e11",
        source: "tools",
        target: "failTool",
        kind: "failure",
        sourceAnchorId: "top",
        targetAnchorId: "bottom",
      },
      {
        id: "e12",
        source: "failTool",
        target: "runtime",
        kind: "failure",
        label: "reroute",
        controlPoints: [
          { x: 1600, y: 48 },
          { x: 1174, y: 74 },
        ],
        sourceAnchorId: "top",
        targetAnchorId: "top",
      },
      {
        id: "e13",
        source: "verify",
        target: "failVerify",
        kind: "failure",
        sourceAnchorId: "top",
        targetAnchorId: "bottom",
      },
      {
        id: "e14",
        source: "failVerify",
        target: "runtime",
        kind: "failure",
        label: "replan",
        controlPoints: [
          { x: 2002, y: 4 },
          { x: 1188, y: 16 },
        ],
        sourceAnchorId: "top",
        targetAnchorId: "top",
      },
    ],
    steps: [
      {
        id: "s1",
        label: { en: "Enter runtime", zh: "进入主控" },
        activeNodeIds: ["intent", "host", "runtime"],
        activeEdgeIds: ["e1", "e2"],
        annotations: [
          {
            id: "s1-runtime",
            nodeId: "runtime",
            title: { en: "Participants", zh: "参与者" },
            participants: ["Sisyphus"],
            note: { en: "Main orchestration begins here.", zh: "主控编排从这里开始。" },
            dx: 10,
            dy: -120,
          },
        ],
      },
      {
        id: "s2",
        label: { en: "Dispatch execution", zh: "分派执行" },
        activeNodeIds: ["runtime", "shell", "tools"],
        activeEdgeIds: ["e3", "e4", "e5"],
        annotations: [
          {
            id: "s2-agent",
            nodeId: "runtime",
            title: { en: "Participants", zh: "参与者" },
            participants: ["Sisyphus"],
            note: {
              en: "Sisyphus remains the main orchestrator for this pass.",
              zh: "这一轮里，Sisyphus 仍然是唯一主控编排者。",
            },
            dx: 20,
            dy: -132,
          },
          {
            id: "s2-tools",
            nodeId: "tools",
            title: { en: "Specialists", zh: "Specialist Agents" },
            participants: [
              "Oracle",
              "Librarian",
              "Explore",
              "Frontend UI/UX Engineer",
              "Multimodal Looker",
            ],
            note: {
              en: "Official specialist agents engage through the shared execution surface.",
              zh: "官方 specialist agents 通过这块共享执行面参与这一轮工作。",
            },
            dx: 36,
            dy: 84,
          },
        ],
      },
      {
        id: "s3",
        label: { en: "Verify result", zh: "验证结果" },
        activeNodeIds: ["tools", "verify"],
        activeEdgeIds: ["e6"],
        annotations: [
          {
            id: "s3-verify",
            nodeId: "verify",
            title: { en: "Participants", zh: "参与者" },
            participants: ["Sisyphus", "Oracle"],
            note: {
              en: "Verification tightens before memory and loop decisions.",
              zh: "在进入记忆更新和下一步判断前，验证会先收紧这一轮输出。",
            },
            dx: 20,
            dy: -124,
          },
        ],
      },
      {
        id: "s4",
        label: { en: "Update state", zh: "更新状态" },
        activeNodeIds: ["verify", "memory", "decision"],
        activeEdgeIds: ["e7", "e8"],
        annotations: [
          {
            id: "s4-memory",
            nodeId: "memory",
            title: { en: "Participants", zh: "参与者" },
            participants: ["Sisyphus"],
            note: {
              en: "The main orchestrator records notes and state for the next pass.",
              zh: "主控会把这一轮的笔记与状态记录下来，供下一轮继续使用。",
            },
            dx: 20,
            dy: 84,
          },
        ],
      },
      {
        id: "s5",
        label: { en: "Loop or complete", zh: "继续或完成" },
        activeNodeIds: ["decision", "runtime", "done"],
        activeEdgeIds: ["e9", "e10"],
        annotations: [
          {
            id: "s5-decision",
            nodeId: "decision",
            title: { en: "Participants", zh: "参与者" },
            participants: ["Sisyphus"],
            note: {
              en: "Sisyphus decides whether to continue the run or exit.",
              zh: "由 Sisyphus 决定继续下一轮还是退出到完成态。",
            },
            dx: -40,
            dy: 88,
          },
        ],
      },
      {
        id: "s6",
        label: { en: "Failure path", zh: "失败路径" },
        activeNodeIds: ["failTool", "failVerify", "runtime"],
        activeEdgeIds: ["e11", "e12", "e13", "e14"],
        note: { en: "Failures route back into runtime control.", zh: "失败会重新回流进主控闭环。" },
        annotations: [
          {
            id: "s6-recovery",
            nodeId: "failVerify",
            title: { en: "Participants", zh: "参与者" },
            participants: ["Sisyphus", "Oracle"],
            note: {
              en: "Recovery returns to Sisyphus, with Oracle joining as review support.",
              zh: "恢复会重新回到 Sisyphus，Oracle 作为 review support 一起参与。",
            },
            dx: 28,
            dy: -126,
          },
        ],
      },
    ],
  },
  {
    id: "gstack",
    title: "gstack",
    summary: {
      en: "A delivery pipeline with role handoffs, explicit quality gates, and rework loops that make late-stage cost visible.",
      zh: "一条带有角色交接、显式质量门与返工回路的交付流水线，能够更直接暴露后段返工成本。",
    },
    emphasis: {
      automationLoop: "high",
      harness: "medium",
      control: "medium",
      hostDependency: "medium",
    },
    notes: {
      whyThisLoopMatters: {
        en: "The loop is distributed across gates, so the diagram reveals where quality pressure and delivery pressure accumulate.",
        zh: "这个闭环分布在多道 gate 上，所以图里能更直接看出质量压力和交付压力分别堆积在哪里。",
      },
      whereTheHarnessLives: {
        en: "The harness lives in role orchestration, command automation, and browser validation rather than a single runtime core.",
        zh: "这个 harness 主要存在于角色编排、命令自动化与浏览器验证里，而不是单一 runtime 核心中。",
      },
    },
    readingGuide: {
      keyQuestion: {
        en: "When a system reads like a pipeline, where does harness behavior actually live and where does recovery cost accumulate?",
        zh: "当一个系统看起来更像 pipeline 时，harness 行为究竟压在哪一层，恢复成本又会堆积在哪里？",
      },
      howToRead: {
        en: "Follow the main line from planning to review first, then compare the lower failure lanes to see how rework and replan costs diverge.",
        zh: "先沿着主线从 planning 读到 review，再对照下方的失败通道，就能看出返工成本和重排成本是如何分化的。",
      },
      evidenceBoundary: {
        en: "Public role names, gates, and workflow positioning follow the project's outward framing. The relative emphasis on late-stage cost is a repository interpretation for comparison.",
        zh: "公开角色名、gates 和 workflow 定位尽量沿用项目对外表述；对后段成本的强调则是为了比较而做的仓库解释。",
      },
      currentLimit: {
        en: "This view compresses the broader role catalog and command surface into one pipeline, so it favors loop shape over role-by-role operational detail.",
        zh: "这张图把更大的角色目录和命令表面压成一条 pipeline，因此它更强调闭环形状，而不是逐角色操作细节。",
      },
    },
    takeaways: [
      {
        en: "Quality control is distributed across multiple gates rather than concentrated in a single runtime controller.",
        zh: "质量控制分散在多道 gate 上，而不是集中在某个单一 runtime controller 中。",
      },
      {
        en: "Late failure is more expensive because it can push work back into planning, not only into build rework.",
        zh: "后段失败更昂贵，因为它不只是回到 build 返工，还可能把工作重新推回 planning。",
      },
      {
        en: "Harness behavior appears here more as orchestration plus validation infrastructure than as a distinct shell runtime.",
        zh: "在这里，harness 更像编排加验证基础设施，而不是一个独立的壳层 runtime。",
      },
    ],
    sources: [
      {
        label: {
          en: "gstack repository",
          zh: "gstack 仓库",
        },
        href: "https://github.com/garrytan/gstack",
        note: {
          en: "Primary source for the public role system, workflow framing, and delivery-oriented terminology used in this comparison.",
          zh: "用于确认公开角色系统、workflow framing 和面向交付的术语表述。",
        },
      },
    ],
    nodes: [
      { id: "goal", label: "Spec / Goal", kind: "entry", position: { x: 16, y: 298 } },
      {
        id: "orchestrator",
        label: "Workflow / Role Orchestrator",
        kind: "control",
        description: "Coordinates role handoffs and stage progression",
        position: { x: 370, y: 278 },
      },
      {
        id: "shell",
        label: "Role System / Automation / Browser Harness",
        kind: "shell",
        description: "Operational shell around the pipeline",
        position: { x: 1120, y: 40 },
      },
      { id: "planner", label: "Planning Role", kind: "execution", position: { x: 760, y: 300 } },
      { id: "builder", label: "Build Role", kind: "execution", position: { x: 1130, y: 300 } },
      { id: "qa", label: "QA Gate", kind: "verification", position: { x: 1500, y: 300 } },
      {
        id: "browser",
        label: "Browser Validation",
        kind: "verification",
        position: { x: 1870, y: 300 },
      },
      {
        id: "review",
        label: "Deploy / Review Gate",
        kind: "verification",
        position: { x: 2240, y: 300 },
      },
      {
        id: "delivered",
        label: "Delivered / Approved",
        kind: "terminal",
        position: { x: 2643, y: 300 },
      },
      {
        id: "reworkBuild",
        label: "Rework Build",
        kind: "failure",
        position: { x: 1127, y: 575 },
      },
      { id: "replan", label: "Replan", kind: "failure", position: { x: 1128, y: 691 } },
      { id: "failQa", label: "QA Fail", kind: "failure", position: { x: 1503, y: 452 } },
      {
        id: "failBrowser",
        label: "Browser Fail",
        kind: "failure",
        position: { x: 1870, y: 460 },
      },
      {
        id: "failReview",
        label: "Review Fail",
        kind: "failure",
        position: { x: 2242, y: 469 },
      },
    ],
    edges: [
      {
        id: "e1",
        source: "goal",
        target: "orchestrator",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e2",
        source: "orchestrator",
        target: "planner",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e3",
        source: "planner",
        target: "builder",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e4",
        source: "builder",
        target: "qa",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e5",
        source: "qa",
        target: "browser",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e6",
        source: "browser",
        target: "review",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e7",
        source: "review",
        target: "delivered",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e8",
        source: "shell",
        target: "planner",
        kind: "implicit",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e9",
        source: "shell",
        target: "builder",
        kind: "implicit",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e10",
        source: "shell",
        target: "qa",
        kind: "implicit",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e11",
        source: "shell",
        target: "browser",
        kind: "implicit",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e12",
        source: "qa",
        target: "failQa",
        kind: "failure",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e13",
        source: "failQa",
        target: "reworkBuild",
        kind: "failure",
        controlPoints: [{ x: 1582, y: 570 }],
        sourceAnchorId: "bottom",
        targetAnchorId: "right",
      },
      {
        id: "e14",
        source: "reworkBuild",
        target: "builder",
        kind: "failure",
        sourceAnchorId: "top",
        targetAnchorId: "bottom",
      },
      {
        id: "e15",
        source: "browser",
        target: "failBrowser",
        kind: "failure",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e16",
        source: "failBrowser",
        target: "reworkBuild",
        kind: "failure",
        controlPoints: [
          { x: 1941, y: 598 },
          { x: 1665, y: 613 },
        ],
        sourceAnchorId: "bottom",
        targetAnchorId: "right",
      },
      {
        id: "e17",
        source: "review",
        target: "failReview",
        kind: "failure",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e18",
        source: "failReview",
        target: "replan",
        kind: "failure",
        controlPoints: [
          { x: 2309, y: 649 },
          { x: 1946, y: 712 },
        ],
        sourceAnchorId: "bottom",
        targetAnchorId: "right",
      },
      {
        id: "e19",
        source: "replan",
        target: "planner",
        kind: "failure",
        controlPoints: [
          { x: 1021, y: 686 },
          { x: 906, y: 542 },
        ],
        sourceAnchorId: "left",
        targetAnchorId: "bottom",
      },
    ],
    steps: [
      {
        id: "s1",
        label: { en: "Orchestrate work", zh: "编排工作" },
        activeNodeIds: ["goal", "orchestrator", "shell"],
        activeEdgeIds: ["e1"],
      },
      {
        id: "s2",
        label: { en: "Plan and build", zh: "规划与构建" },
        activeNodeIds: ["orchestrator", "planner", "builder"],
        activeEdgeIds: ["e2", "e3"],
      },
      {
        id: "s3",
        label: { en: "Quality gates", zh: "质量门" },
        activeNodeIds: ["builder", "qa", "browser", "review"],
        activeEdgeIds: ["e4", "e5", "e6"],
      },
      {
        id: "s4",
        label: { en: "Deliver", zh: "交付" },
        activeNodeIds: ["review", "delivered"],
        activeEdgeIds: ["e7"],
      },
      {
        id: "s5",
        label: { en: "Rework loop", zh: "返工回路" },
        activeNodeIds: ["failQa", "failBrowser", "reworkBuild", "builder"],
        activeEdgeIds: ["e12", "e13", "e14", "e15", "e16"],
      },
      {
        id: "s6",
        label: { en: "Replan loop", zh: "重排回路" },
        activeNodeIds: ["failReview", "replan", "planner"],
        activeEdgeIds: ["e17", "e18", "e19"],
        note: {
          en: "Late review failure pushes work back into planning.",
          zh: "晚期 review 失败会把工作重新推回 planning 阶段。",
        },
      },
    ],
  },
  {
    id: "everything-claude-code",
    title: "Everything Claude Code",
    summary: {
      en: "A policy-shell agent system where a main agent coordinates subagents, tools, review, and memory-backed iteration.",
      zh: "一个带 policy shell 的 agent system，由主 agent 统一协调 subagents、tools、review 与 memory 驱动的迭代闭环。",
    },
    emphasis: {
      automationLoop: "high",
      harness: "high",
      control: "high",
      hostDependency: "medium",
    },
    notes: {
      whyThisLoopMatters: {
        en: "The main agent stays in charge, but the loop is continuously shaped by policy and recovered through verification and memory.",
        zh: "主 agent 始终保持主控，但整个闭环会持续受到 policy 约束，并通过 verification 与 memory 完成恢复。",
      },
      whereTheHarnessLives: {
        en: "The harness lives in the persistent rules, hooks, commands, and memory layer rather than in a dedicated runtime shell.",
        zh: "这个 harness 主要存在于持久规则、hooks、commands 和 memory 层，而不是一个独立的 runtime shell 中。",
      },
    },
    readingGuide: {
      keyQuestion: {
        en: "What changes when the main agent stays central, but policy, tools, and memory keep shaping every turn?",
        zh: "当主 agent 保持中心位置，但 policy、tools 和 memory 又持续塑造每一轮执行时，系统形态会发生什么变化？",
      },
      howToRead: {
        en: "Read the top-left policy shell together with the lower memory loop; the key comparison point is that governance stays inside the main control loop instead of sitting outside it.",
        zh: "把左上角的 policy shell 和下方的 memory loop 放在一起读；关键比较点在于治理语义没有待在闭环外，而是一直压在主控环里。",
      },
      evidenceBoundary: {
        en: "The main agent, subagents, hooks, commands, and memory terms follow public project language. Their partition into a comparison diagram is repository interpretation rather than official architecture.",
        zh: "main agent、subagents、hooks、commands 和 memory 这些术语尽量沿用项目公开语言；它们在比较图里的分层方式则属于仓库解释，而不是官方架构图。",
      },
      currentLimit: {
        en: "This view compresses many skills, commands, and specialist behaviors into broad execution branches, so it shows control topology better than operational coverage.",
        zh: "这张图把大量 skills、commands 和 specialist 行为压缩进几条大执行分支里，因此更擅长表达控制拓扑，而不是能力覆盖面。",
      },
    },
    takeaways: [
      {
        en: "Control remains centralized in the main agent even while execution fans out across subagents and tools.",
        zh: "即使执行会向 subagents 和 tools 扩散，控制权仍然集中在 main agent 身上。",
      },
      {
        en: "Policy and memory are load-bearing parts of the loop rather than optional context around it.",
        zh: "Policy 和 memory 是这个闭环的 load-bearing part，而不是外围附带的上下文。",
      },
      {
        en: "Compared with gstack, this design behaves less like a pipeline and more like a governed agent system.",
        zh: "和 gstack 相比，这个设计更不像 pipeline，而更像一个带治理层的 agent system。",
      },
    ],
    sources: [
      {
        label: {
          en: "everything-claude-code repository",
          zh: "everything-claude-code 仓库",
        },
        href: "https://github.com/affaan-m/everything-claude-code",
        note: {
          en: "Primary source for project terminology around policy, commands, memory, and specialist execution.",
          zh: "用于确认项目在 policy、commands、memory 和 specialist execution 上的公开术语。",
        },
      },
      {
        label: {
          en: "Claude Code docs",
          zh: "Claude Code 文档",
        },
        href: "https://docs.anthropic.com/en/docs/claude-code/common-workflows",
        note: {
          en: "Host-side reference for the coding-agent surface that this project extends and governs.",
          zh: "用来标定这个项目所扩展和治理的 coding-agent 宿主表面。",
        },
      },
    ],
    nodes: [
      {
        id: "request",
        label: "User Request / Repo Context",
        kind: "entry",
        position: { x: 163, y: 185 },
      },
      {
        id: "policy",
        label: "Rules / Hooks / Commands",
        kind: "shell",
        host: "multi-host",
        description: "Persistent policy shell around execution",
        position: { x: 166, y: 520 },
      },
      {
        id: "main",
        label: "Main Agent",
        kind: "control",
        description: "Primary decision-maker for next steps",
        position: { x: 671, y: 300 },
      },
      {
        id: "subs",
        label: "Subagents / Specialists",
        kind: "execution",
        position: { x: 1260, y: 317 },
      },
      {
        id: "tools",
        label: "Tools / Repo / Research",
        kind: "execution",
        position: { x: 1261, y: 573 },
      },
      {
        id: "verify",
        label: "Verification / Review / Tests",
        kind: "verification",
        position: { x: 1890, y: 320 },
      },
      {
        id: "memory",
        label: "Memory / Notes",
        kind: "memory",
        description: "Carries decisions and learnings forward",
        position: { x: 1890, y: 552 },
      },
      { id: "decision", label: "Next Step?", kind: "decision", position: { x: 2251, y: 562 } },
      { id: "done", label: "Complete", kind: "terminal", position: { x: 2648, y: 558 } },
      {
        id: "failSub",
        label: "Subagent Result Inadequate",
        kind: "failure",
        position: { x: 1259, y: -49 },
      },
      {
        id: "failVerify",
        label: "Verification Failed",
        kind: "failure",
        position: { x: 1890, y: 77 },
      },
    ],
    edges: [
      {
        id: "e1",
        source: "request",
        target: "main",
        kind: "main",
        controlPoints: [
          { x: 501, y: 245 },
          { x: 586, y: 331 },
        ],
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e2",
        source: "policy",
        target: "main",
        kind: "implicit",
        label: "policy influence",
        controlPoints: [
          { x: 527, y: 552 },
          { x: 591, y: 408 },
        ],
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e3",
        source: "policy",
        target: "subs",
        kind: "implicit",
        controlPoints: [
          { x: 637, y: 560 },
          { x: 1083, y: 398 },
        ],
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e4",
        source: "main",
        target: "subs",
        kind: "main",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e5",
        source: "main",
        target: "tools",
        kind: "main",
        controlPoints: [
          { x: 1002, y: 395 },
          { x: 1171, y: 584 },
        ],
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e6",
        source: "subs",
        target: "tools",
        kind: "main",
        label: "delegated execution",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e7",
        source: "tools",
        target: "verify",
        kind: "main",
        controlPoints: [
          { x: 1572, y: 569 },
          { x: 1749, y: 387 },
        ],
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e8",
        source: "verify",
        target: "memory",
        kind: "feedback",
        sourceAnchorId: "bottom",
        targetAnchorId: "top",
      },
      {
        id: "e9",
        source: "memory",
        target: "decision",
        kind: "feedback",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e10",
        source: "decision",
        target: "main",
        kind: "feedback",
        label: "continue",
        controlPoints: [
          { x: 2185, y: 707 },
          { x: 984, y: 691 },
        ],
        sourceAnchorId: "bottom",
        targetAnchorId: "bottom",
      },
      {
        id: "e11",
        source: "decision",
        target: "done",
        kind: "main",
        label: "complete",
        sourceAnchorId: "right",
        targetAnchorId: "left",
      },
      {
        id: "e12",
        source: "verify",
        target: "failVerify",
        kind: "failure",
        sourceAnchorId: "top",
        targetAnchorId: "bottom",
      },
      {
        id: "e13",
        source: "failVerify",
        target: "main",
        kind: "failure",
        label: "replan",
        controlPoints: [
          { x: 1305, y: 116 },
          { x: 915, y: 135 },
        ],
        sourceAnchorId: "left",
        targetAnchorId: "top",
      },
      {
        id: "e14",
        source: "subs",
        target: "failSub",
        kind: "failure",
        sourceAnchorId: "top",
        targetAnchorId: "bottom",
      },
      {
        id: "e15",
        source: "failSub",
        target: "main",
        kind: "failure",
        label: "redispatch",
        controlPoints: [
          { x: 1072, y: -3 },
          { x: 927, y: 25 },
          { x: 819, y: 104 },
        ],
        sourceAnchorId: "left",
        targetAnchorId: "top",
      },
    ],
    steps: [
      {
        id: "s1",
        label: { en: "Interpret request", zh: "解释请求" },
        activeNodeIds: ["request", "policy", "main"],
        activeEdgeIds: ["e1", "e2"],
      },
      {
        id: "s2",
        label: { en: "Dispatch work", zh: "分派工作" },
        activeNodeIds: ["main", "subs", "tools"],
        activeEdgeIds: ["e3", "e4", "e5", "e6"],
      },
      {
        id: "s3",
        label: { en: "Verify outputs", zh: "验证输出" },
        activeNodeIds: ["tools", "verify"],
        activeEdgeIds: ["e7"],
      },
      {
        id: "s4",
        label: { en: "Update memory", zh: "更新记忆" },
        activeNodeIds: ["verify", "memory", "decision"],
        activeEdgeIds: ["e8", "e9"],
      },
      {
        id: "s5",
        label: { en: "Loop or complete", zh: "继续或完成" },
        activeNodeIds: ["decision", "main", "done"],
        activeEdgeIds: ["e10", "e11"],
      },
      {
        id: "s6",
        label: { en: "Recovery paths", zh: "恢复路径" },
        activeNodeIds: ["failVerify", "failSub", "main"],
        activeEdgeIds: ["e12", "e13", "e14", "e15"],
      },
    ],
  },
];

const stepNotesByDiagram: Record<string, Record<string, LocalizedText>> = {
  "oh-my-opencode": {
    s1: {
      en: "The request enters the host and is normalized into runtime control.",
      zh: "请求先进入宿主层，再被整理进主控闭环。",
    },
    s2: {
      en: "Runtime dispatches work through its execution shell and outward tool surface.",
      zh: "主控通过执行壳层与外部 specialist/tool surface 分派工作。",
    },
    s3: {
      en: "Verification completes the visible execution pass.",
      zh: "验证阶段完成这一轮可见执行路径。",
    },
    s4: {
      en: "State and memory updates turn one pass into a controllable loop.",
      zh: "状态与记忆更新把一次执行回合转成可持续控制的闭环。",
    },
    s5: {
      en: "The controller either continues the run or exits to completion.",
      zh: "主控决定继续下一轮，还是退出到完成态。",
    },
    s6: {
      en: "Failures route back into runtime control for replan or reroute.",
      zh: "失败会重新回流到主控闭环，用于重排或改道。",
    },
    panorama: {
      en: "Show the full system shape and all recovery paths at once.",
      zh: "一次性展示完整系统形态与所有恢复路径。",
    },
  },
  gstack: {
    s1: {
      en: "The orchestrator frames the work before any role handoff begins.",
      zh: "在任何角色交接发生之前，orchestrator 先定义这一轮工作的框架。",
    },
    s2: {
      en: "Planning and build roles advance the main delivery chain.",
      zh: "规划与构建角色推动主交付链继续向前。",
    },
    s3: {
      en: "Quality gates accumulate through QA, browser checks, and review.",
      zh: "质量门通过 QA、浏览器检查与 review 逐层叠加。",
    },
    s4: {
      en: "Approval only happens after the full gate sequence clears.",
      zh: "只有完整通过整条 gate 链，才会进入交付完成。",
    },
    s5: {
      en: "Execution failures push work into the rework lane below the main line.",
      zh: "执行失败会把工作压到主线下方的返工带中。",
    },
    s6: {
      en: "Late review failure forces a more expensive replan cycle.",
      zh: "后段 review 失败会触发代价更高的 replan 回路。",
    },
    panorama: {
      en: "Show the full gated pipeline, shell influences, and rework lanes together.",
      zh: "一次性展示完整 gated pipeline、shell 影响与返工带。",
    },
  },
  "everything-claude-code": {
    s1: {
      en: "The main agent interprets request context under the persistent policy shell.",
      zh: "主 agent 在持久 policy shell 约束下解释请求与上下文。",
    },
    s2: {
      en: "Work fans out across subagents and tools while the main agent stays in charge.",
      zh: "工作会分派到 subagents 和 tools，但主 agent 始终保持主控。",
    },
    s3: {
      en: "Outputs consolidate through verification, review, and test feedback.",
      zh: "输出会通过 verification、review 与测试反馈重新收束。",
    },
    s4: {
      en: "Memory captures what happened so the next step is policy-aware.",
      zh: "memory 会记录这一轮发生的事，使下一步仍然带着 policy 语义继续。",
    },
    s5: {
      en: "The controller decides whether to continue the loop or complete.",
      zh: "主控决定是继续下一轮还是结束本次任务。",
    },
    s6: {
      en: "Recovery paths route failed work back to the main agent for reuse or redispatch.",
      zh: "恢复路径会把失败结果送回主 agent，用于重用、重派或重做。",
    },
    panorama: {
      en: "Show the full policy-shell control loop, execution branches, and recovery paths.",
      zh: "一次性展示完整的 policy-shell control loop、执行分支与恢复路径。",
    },
  },
};

function withPanoramaStep(diagram: FrameworkDiagram): FrameworkDiagram {
  const panoramaStep = {
    id: "panorama",
    label: { en: "Panorama", zh: "全景" },
    note: stepNotesByDiagram[diagram.id]?.panorama,
    activeNodeIds: diagram.nodes.map((node) => node.id),
    activeEdgeIds: diagram.edges.map((edge) => edge.id),
    mode: "panorama" as const,
  };

  return {
    ...diagram,
    steps: [
      ...diagram.steps.map((step) => ({
        ...step,
        note: stepNotesByDiagram[diagram.id]?.[step.id] ?? step.note,
      })),
      panoramaStep,
    ],
  };
}

export const diagrams: FrameworkDiagram[] = rawDiagrams.map(withPanoramaStep);

export const diagramsById = new Map(diagrams.map((diagram) => [diagram.id, diagram]));
