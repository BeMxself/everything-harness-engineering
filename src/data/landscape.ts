export const landscapeIntro =
  "当前生态不是一条直线，而是多个方向同时演化。下面的分组不是照搬论坛说法，而是结合各项目官方 repo / 官方文档里的自我描述，再按它们当前的 primary orientation 做的研究性归类。";

export const landscapeRows = [
  ["Codex", "https://github.com/openai/codex", "Lightweight coding agent that runs in your terminal", "Native Coding Shell", "终端中的 coding agent"],
  ["OpenCode", "https://opencode.ai/", "The open source coding agent", "Native Coding Shell", "开放式 coding shell / runtime"],
  ["Goose", "https://github.com/block/goose", "Open source, extensible AI agent", "Native Coding Shell", "通用 agent，包含 coding 场景"],
  ["oh-my-openagent", "https://github.com/code-yeongyu/oh-my-openagent", "the best agent harness; previously oh-my-opencode", "Harness Overlay", "构建在 OpenCode 之上的 harness 层"],
  ["oh-my-codex", "https://github.com/Yeachan-Heo/oh-my-codex", "Your codex is not alone. Add hooks, agent teams, HUDs...", "Harness Overlay", "构建在 Codex 之上的控制层"],
  ["oh-my-claudecode", "https://github.com/Yeachan-Heo/oh-my-claudecode", "Teams-first multi-agent orchestration for Claude Code", "Harness Overlay", "构建在 Claude Code 之上的编排层"],
  ["Trellis", "https://github.com/mindfold-ai/Trellis", "The best agent harness; multi-platform AI coding framework", "Harness Overlay", "跨 Claude Code / Cursor / OpenCode / Codex 等宿主的 harness 层"],
  ["everything-claude-code", "https://github.com/affaan-m/everything-claude-code", "The agent harness performance optimization system", "Harness Overlay", "跨 Claude Code / Codex / OpenCode 的增强层"],
  ["superpowers", "https://github.com/obra/superpowers", "An agentic skills framework & software development methodology", "Skill / Methodology System", "skills + workflow discipline"],
  ["get-shit-done", "https://github.com/gsd-build/get-shit-done", "Meta-prompting, context engineering and spec-driven development system", "Skill / Methodology System", "spec-driven workflow layer"],
  ["gstack", "https://github.com/garrytan/gstack", "15 opinionated tools that serve as CEO, Designer, Eng Manager...", "Workflow / Orchestration Suite", "面向交付的角色化工作流"],
  ["ccg-workflow", "https://github.com/fengshao1227/ccg-workflow", "Claude + Codex + Gemini multi-model collaboration", "Workflow / Orchestration Suite", "多模型协作工作流"],
  ["gdim-workflow-skill", "https://github.com/BeMxself/gdim-workflow-skill", "No concise GitHub tagline; repository centers on a named workflow skill", "Workflow / Orchestration Suite", "基于 GDIM 的 workflow skill 包"],
  ["Ralph", "https://github.com/Yeachan-Heo/oh-my-codex", "OMX docs describe $ralph as persistent sequential execution", "Workflow / Orchestration Suite", "OMX 内的持久执行工作流"],
] as const;

export const landscapeColumns = [
  {
    title: "Native Coding Shells",
    items: [
      ["Claude Code", "https://docs.anthropic.com/en/docs/claude-code/common-workflows"],
      ["Codex", "https://github.com/openai/codex"],
      ["OpenCode", "https://opencode.ai/"],
      ["Goose", "https://github.com/block/goose"],
      ["Aider", "https://aider.chat/"],
    ],
    note: "官方自述大多把自己定位为 coding agent 或 coding shell。它们是很多后续 harness overlay 的宿主层。",
  },
  {
    title: "Harness Overlays",
    items: [
      ["oh-my-openagent", "https://github.com/code-yeongyu/oh-my-openagent"],
      ["oh-my-codex", "https://github.com/Yeachan-Heo/oh-my-codex"],
      ["oh-my-claudecode", "https://github.com/Yeachan-Heo/oh-my-claudecode"],
      ["Trellis", "https://github.com/mindfold-ai/Trellis"],
      ["everything-claude-code", "https://github.com/affaan-m/everything-claude-code"],
    ],
    note: "这些系统直接构建在宿主 shell 之上，显式加入 hooks、agent teams、HUD、memory、guardrails、rules 和恢复机制，是当前“harness”味道最浓的一层。",
  },
  {
    title: "Skill / Methodology Systems",
    items: [
      ["superpowers", "https://github.com/obra/superpowers"],
      ["get-shit-done", "https://github.com/gsd-build/get-shit-done"],
    ],
    note: "这些项目常把自己描述成 skills framework、meta-prompting system、spec-driven development system 或 multi-model collaboration workflow。它们未必都自称 harness，但经常构成 harness 的方法层或部件层。",
  },
  {
    title: "Workflow / Orchestration Suites",
    items: [
      ["gstack", "https://github.com/garrytan/gstack"],
      ["ccg-workflow", "https://github.com/fengshao1227/ccg-workflow"],
      ["gdim-workflow-skill", "https://github.com/BeMxself/gdim-workflow-skill"],
      ["Ralph (OMX workflow)", "https://github.com/Yeachan-Heo/oh-my-codex"],
    ],
    note: "这里列的是可以直接落到真实任务编排上的 workflow layer，而不是底层图框架。它们更接近“怎么把任务持续跑下去”的工程表面。",
  },
  {
    title: "Related Frameworks / Infra",
    items: [
      ["OpenHands", "https://openhands.dev/"],
      ["LangGraph", "https://github.com/langchain-ai/langgraph"],
      ["Microsoft Agent Framework", "https://github.com/microsoft/agent-framework"],
      ["CrewAI", "https://www.crewai.com/"],
      ["GitHub Agentic Workflows", "https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/"],
    ],
    note: "这些项目仍然值得跟踪，但它们更偏 agent platform、graph orchestration、framework 或基础设施层，不应和可直接实践的 workflow 套件混为一谈。",
  },
];

export const landscapeNote =
  "这个表不是“胜负榜”，也不是稳定不变的最终定性。很多项目正在快速演化，名字、宿主支持和自我定位都可能继续漂移；首页当前做的是一个可追溯、可比较的观察切面。";
