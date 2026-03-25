import { createContext, useContext, type ReactNode } from "react";
import type { LocalizedText } from "./data/types";

export type Language = "en" | "zh";

type Messages = {
  heroEyebrow: string;
  heroTitle: string;
  heroSummary: string;
  supplementalView: string;
  agentCollaborationTitle: string;
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
    heroTitle: "Framework Flow Diagrams",
    heroSummary:
      "A small visual notebook for comparing automation loops, harness layers, control centers, and host dependencies across agent frameworks.",
    supplementalView: "Supplemental View",
    agentCollaborationTitle: "Agent Collaboration",
    legendTitle: "Legend",
    legendHint: "4 visual semantics",
    legendMain: "Main path",
    legendFeedback: "Feedback loop",
    legendFailure: "Failure path",
    legendShell: "Shell / host influence",
    emphasisTitle: "Emphasis",
    emphasisHint: "4 comparison dimensions",
    automationLoop: "Automation loop",
    harness: "Harness",
    control: "Control",
    hostDependency: "Host dependency",
    researchNotesTitle: "Research Notes",
    researchNotesHint: "2 interpretation notes",
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
    heroTitle: "框架流程图",
    heroSummary: "一个用于比较不同 agent framework 的自动化闭环、harness 壳层、控制中心与宿主依赖的小型可视化研究笔记。",
    supplementalView: "补充视图",
    agentCollaborationTitle: "Agent 协作关系",
    legendTitle: "图例",
    legendHint: "4 类视觉语义",
    legendMain: "主路径",
    legendFeedback: "反馈回路",
    legendFailure: "失败路径",
    legendShell: "壳层 / 宿主影响",
    emphasisTitle: "侧重点",
    emphasisHint: "4 个比较维度",
    automationLoop: "自动化闭环",
    harness: "Harness 壳层",
    control: "控制中心",
    hostDependency: "宿主依赖",
    researchNotesTitle: "研究注记",
    researchNotesHint: "2 条解读说明",
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
