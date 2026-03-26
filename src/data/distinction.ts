export const distinctionIntro =
  "下面不是任何单一社区或单一项目官方给出的统一 taxonomy，而是为了便于研究而做的一级分组。许多项目横跨多个象限，这里只标它们当前最主要的工作重心。";

export const distinctionCards = [
  {
    title: "1. Native Coding Shells",
    description:
      "直接给 coding agent 一个真实工作面：终端、repo、工具调用、权限、验证与执行闭环都围绕宿主 shell 展开。",
    note: "典型问题：如何让单个 coding agent 在真实仓库里持续完成工程任务？",
  },
  {
    title: "2. Harness Overlays",
    description:
      "构建在某个宿主 shell 之上的“第二层系统”：额外加入 hooks、agent teams、memory、HUD、规则层、恢复与约束机制。",
    note: "典型问题：如何把原生 shell 提升成更可控、更长时、更协作的工程环境？",
  },
  {
    title: "3. Skill / Methodology Systems",
    description:
      "更强调 skills、meta-prompting、spec-driven development、review discipline 和执行方法论，本身未必自称 harness。",
    note: "典型问题：如何让 agent 不只是“会写”，而是按一套工程方法持续推进？",
  },
  {
    title: "4. Orchestration / Delivery Systems",
    description:
      "更强调多 agent 编排、交付流程、图结构或全链路开发平台，不一定围绕某个宿主 shell，但解决的是相邻的大闭环问题。",
    note: "典型问题：如何把多个模型、工具、人类审批与交付节点编成一个稳定系统？",
  },
];
