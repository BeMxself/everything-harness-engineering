export const communityIntro =
  "这里单列社区讨论，不与上面的官方文章时间线混合。下面的结论主要来自 LINUX DO 讨论串在 2026-03-21 到 2026-03-26 之间的 49 楼持续更新。它们不是这个概念的官方定义，但很有价值，因为里面出现了真实成本、真实失败模式和真实工具取舍。";

export const communityThreads = [
  {
    title: "想开一个 harness engineering 实践的长期帖子，大家一起分享实践经验",
    url: "https://linux.do/t/topic/1791588",
    source: "主讨论串",
    summary: "这是当前首页所吸收的核心社区材料。下面这组帖子，都是它正文里直接点名或挂链引用过的相关材料。",
  },
  {
    title: "新年来分享我的 oh-my-opencode 配置和学习心得",
    url: "https://linux.do/t/topic/1624433",
    source: "相关帖子",
    summary: "OMO 社区实践入口之一，很多关于 OMO 的配置和使用路径都可以从这里往回追。",
  },
  {
    title: "OpenAI 提出 “Harness Engineering”：完全使用 Agent 进行编程的实践",
    url: "https://linux.do/t/topic/1677645/9",
    source: "相关帖子",
    summary: "站内对 OpenAI 文章的转述与讨论，适合观察社区如何在早期阶段消化这个概念。",
  },
  {
    title: "最近 harness，自主进化很火，大家有什么经验和用法吗？",
    url: "https://linux.do/t/topic/1789013/5",
    source: "相关帖子",
    summary: "偏经验交流，能补足社区用户对 harness、自主进化和使用姿势的第一手体感。",
  },
  {
    title: "经过 8 个月 Claude Code 高强度实战，我们决定开源内部的最佳实践",
    url: "https://linux.do/t/topic/1539636",
    source: "相关帖子",
    summary: "适合和 harness engineering 视角交叉阅读，区分哪些是提示技巧，哪些已经变成系统化工程壳层。",
  },
  {
    title: "都在聊 AI-Native Engineering，分享几个 AI coding workflow",
    url: "https://linux.do/t/topic/1778922",
    source: "相关帖子",
    summary: "这是横向资料库，能帮助把单个 harness 套件放回更大的 workflow 和 AI-native engineering 生态中观察。",
  },
  {
    title: "Codex 增强版：对标 Claude Code 新增 Agent Teams、Hooks、anthropic api Agent 、WebUI",
    url: "https://linux.do/t/topic/1664790",
    source: "相关帖子",
    summary: "体现了社区很早就在用“增强层”和“编排层”的思路扩展 coding shell，这条路径与 harness overlay 很相近。",
  },
  {
    title: "Vibecoding 进阶教程总集篇——从能用到可控",
    url: "https://linux.do/t/topic/1776917",
    source: "相关帖子",
    summary: "虽然不一定直接使用 harness 一词，但它讨论的“可控性”与 harness engineering 关注的目标高度重叠。",
  },
];

export const communityInsightsIntro =
  "把这些相关帖子放回同一上下文后，这条讨论串最有价值的部分，不是“又列了几个项目名”，而是下面这些来自真实长时实践的工程观察。";

export const communityInsights = [
  {
    title: "控制面往往比代码面更重",
    summary:
      "讨论串里最有价值的实测信号之一，是 24 小时运行里“实际代码改动”远小于“设计、协调、进度记录、交接”等控制面产出。这说明 harness engineering 的瓶颈常常不在补几行代码，而在如何组织长期执行。",
  },
  {
    title: "长任务的关键是 clean handoff",
    summary:
      "多位参与者都在强调上下文清洁、交接文档、计划文件与新会话续跑。会话跑久后如果只退化成普通问答，整体效率会迅速下降，说明“可恢复性”是长时 harness 的核心能力之一。",
  },
  {
    title: "single controller + document API",
    summary:
      "讨论中反复出现一个共识：决策层不应淹没在代码细节里。更有效的做法是保留一个干净的调度层，通过结构化文档、摘要、报告和图表把信息压缩后再交给高阶决策模型。",
  },
  {
    title: "模型供应现实会反过来塑造 harness",
    summary:
      "讨论串后期的模型配置已经从早期参考 OMO 社区配置，逐步转向以 `gpt-5.4` 和 `gpt-5.3-codex` 为主。这提醒我们：很多 harness 实践不是静态 doctrine，而是在供应稳定性、可用性和成本约束下不断漂移。",
  },
];
