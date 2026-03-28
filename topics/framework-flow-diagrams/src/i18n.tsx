import { createContext, useContext, type ReactNode } from "react";
import type { LocalizedText } from "./data/types";

export type Language = "en" | "zh";

type Messages = {
  heroEyebrow: string;
  heroTitle: string;
  heroSummary: string;
  topicGuideTitle: string;
  topicGuideQuestion: string;
  topicGuideQuestionBody: string;
  topicGuideMethod: string;
  topicGuideMethodBody: string;
  topicGuideBoundary: string;
  topicGuideBoundaryBody: string;
  supplementalView: string;
  agentCollaborationTitle: string;
  framingRowTitle: string;
  framingRowHint: string;
  evidenceRowTitle: string;
  evidenceRowHint: string;
  legendTitle: string;
  legendHint: string;
  legendMain: string;
  legendFeedback: string;
  legendFailure: string;
  legendShell: string;
  emphasisTitle: string;
  emphasisHint: string;
  automationLoop: string;
  harness: string;
  control: string;
  hostDependency: string;
  readingGuideTitle: string;
  readingGuideHint: string;
  keyQuestion: string;
  howToReadDiagram: string;
  evidenceBoundary: string;
  currentLimit: string;
  takeawaysTitle: string;
  takeawaysHint: string;
  sourcesTitle: string;
  sourcesHint: string;
  researchNotesTitle: string;
  researchNotesHint: string;
  whyThisLoopMatters: string;
  whereTheHarnessLives: string;
  stepLabel: string;
  stepOf: string;
  layoutEditTitle: string;
  layoutEditOn: string;
  layoutEditOff: string;
  layoutEditOffBody: string;
  layoutEditBody: string;
  layoutEditNote: string;
  copyLayoutSnapshot: string;
  diagramContextPanels: string;
};

const messagesByLanguage: Record<Language, Messages> = {
  en: {
    heroEyebrow: "Research Topic",
    heroTitle: "Host and Harness Maps",
    heroSummary:
      "A comparative notebook for how coding-agent systems arrange host surfaces, harness layers, control centers, and recovery paths.",
    topicGuideTitle: "How to use this topic",
    topicGuideQuestion: "What is being compared?",
    topicGuideQuestionBody:
      "These diagrams compare where the primary loop closes, where the harness layer exerts control, and how recovery work flows back into the system.",
    topicGuideMethod: "How the diagrams are built",
    topicGuideMethodBody:
      "Each view keeps public project terminology where possible and uses repository interpretation only where needed to make loop shape and control placement comparable.",
    topicGuideBoundary: "Boundary",
    topicGuideBoundaryBody:
      "These are comparison diagrams, not official architecture charts. Use them to inspect emphasis, then follow the source links for original project framing.",
    supplementalView: "Supplemental View",
    agentCollaborationTitle: "Agent Collaboration",
    framingRowTitle: "Read the Diagram",
    framingRowHint: "legend + profile + reading guide",
    evidenceRowTitle: "Findings and Evidence",
    evidenceRowHint: "working findings + interpretation + sources",
    legendTitle: "Legend",
    legendHint: "4 visual semantics",
    legendMain: "Main path",
    legendFeedback: "Feedback loop",
    legendFailure: "Failure path",
    legendShell: "Shell / host influence",
    emphasisTitle: "Comparison Profile",
    emphasisHint: "4 relative weights",
    automationLoop: "Automation loop",
    harness: "Harness",
    control: "Control",
    hostDependency: "Host dependency",
    readingGuideTitle: "Reading Guide",
    readingGuideHint: "question + boundary",
    keyQuestion: "Key comparison question",
    howToReadDiagram: "How to read this diagram",
    evidenceBoundary: "Evidence boundary",
    currentLimit: "Current limit",
    takeawaysTitle: "Working Findings",
    takeawaysHint: "current comparison claims",
    sourcesTitle: "Sources",
    sourcesHint: "public materials",
    researchNotesTitle: "Interpretation Notes",
    researchNotesHint: "2 explanatory notes",
    whyThisLoopMatters: "Why this loop matters",
    whereTheHarnessLives: "Where the harness lives",
    stepLabel: "Step",
    stepOf: "of",
    layoutEditTitle: "Layout Edit",
    layoutEditOn: "Layout Edit On",
    layoutEditOff: "Layout Edit Off",
    layoutEditOffBody: "Turn this on when you want to reposition nodes without changing the default topic data yet.",
    layoutEditBody:
      "Drag nodes and edge control points to arrange the full diagram. Drag empty canvas to pan. Use S or T on an edge label, then click a node anchor to change where that edge connects.",
    layoutEditNote:
      "Drag nodes and edge control points to arrange the full diagram. Drag empty canvas to pan. Use S or T on an edge label, then click a node anchor. The snapshot below updates as you move them.",
    copyLayoutSnapshot: "Copy Layout Snapshot",
    diagramContextPanels: "Diagram context panels",
  },
  zh: {
    heroEyebrow: "研究专题",
    heroTitle: "宿主与 Harness 结构图",
    heroSummary: "一个用于比较不同 coding-agent 系统如何放置自动化闭环、harness 壳层、控制中心与宿主依赖的研究笔记。",
    topicGuideTitle: "这个专题怎么用",
    topicGuideQuestion: "比较的到底是什么",
    topicGuideQuestionBody:
      "这些图主要比较三件事：主闭环在哪里闭合、harness 压在哪一层，以及恢复工作如何回流进系统。",
    topicGuideMethod: "这些图是怎么做的",
    topicGuideMethodBody:
      "每张图尽量保留项目公开术语，只在必要处加入仓库解释，用来让 loop 形状、控制点和宿主依赖可以横向比较。",
    topicGuideBoundary: "边界",
    topicGuideBoundaryBody:
      "这些图是比较研究材料，不是项目官方架构图。先用它看侧重点，再顺着来源链接回到项目自己的表述。",
    supplementalView: "补充视图",
    agentCollaborationTitle: "Agent 协作关系",
    framingRowTitle: "怎么读这张图",
    framingRowHint: "图例 + 比较画像 + 阅读说明",
    evidenceRowTitle: "结论与证据",
    evidenceRowHint: "当前判断 + 解读说明 + 来源",
    legendTitle: "图例",
    legendHint: "4 类视觉语义",
    legendMain: "主路径",
    legendFeedback: "反馈回路",
    legendFailure: "失败路径",
    legendShell: "壳层 / 宿主影响",
    emphasisTitle: "比较画像",
    emphasisHint: "4 个相对权重",
    automationLoop: "自动化闭环",
    harness: "Harness 壳层",
    control: "控制中心",
    hostDependency: "宿主依赖",
    readingGuideTitle: "阅读说明",
    readingGuideHint: "问题 + 边界",
    keyQuestion: "核心比较问题",
    howToReadDiagram: "如何阅读这张图",
    evidenceBoundary: "证据边界",
    currentLimit: "当前局限",
    takeawaysTitle: "当前判断",
    takeawaysHint: "当前阶段最稳的比较结论",
    sourcesTitle: "来源",
    sourcesHint: "公开材料",
    researchNotesTitle: "解读说明",
    researchNotesHint: "2 条解释性注记",
    whyThisLoopMatters: "这个闭环为何重要",
    whereTheHarnessLives: "Harness 位于哪里",
    stepLabel: "步骤",
    stepOf: "/",
    layoutEditTitle: "布局编辑",
    layoutEditOn: "布局编辑已开启",
    layoutEditOff: "布局编辑已关闭",
    layoutEditOffBody: "需要调整节点、连线或锚点布局时，再开启这个模式。",
    layoutEditBody:
      "拖动节点和连线控制点来调整整张图。拖动画布空白处可平移。点击边标签旁的 S 或 T，再点击节点锚点即可切换连线挂载位置。",
    layoutEditNote:
      "拖动节点和连线控制点来调整整张图。拖动画布空白处可平移。点击边标签旁的 S 或 T，再点击节点锚点即可切换连线挂载位置。下方快照会实时更新。",
    copyLayoutSnapshot: "复制布局快照",
    diagramContextPanels: "图表上下文面板",
  },
};

type I18nValue = {
  lang: Language;
  messages: Messages;
};

const I18nContext = createContext<I18nValue>({
  lang: "en",
  messages: messagesByLanguage.en,
});

type I18nProviderProps = {
  children: ReactNode;
  lang: Language;
};

export function I18nProvider({ children, lang }: I18nProviderProps) {
  return (
    <I18nContext.Provider value={{ lang, messages: messagesByLanguage[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export function resolveText(text: LocalizedText, lang: Language) {
  if (typeof text === "string") {
    return text;
  }

  return text[lang];
}
