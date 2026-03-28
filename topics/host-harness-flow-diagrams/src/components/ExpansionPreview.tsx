import {
  expansionCandidateFamilies,
  expansionCandidates,
} from "../data/expansionCandidates";
import { resolveText, useI18n } from "../i18n";

const tierOrder = ["core", "boundary", "family-reference", "control-group"] as const;

const copyByLanguage = {
  en: {
    eyebrow: "Scope Preview",
    title: "Next-wave candidates",
    summary:
      "These are the candidate cases currently queued for expansion work. They are grouped by how directly they fit the topic's host / harness / control / recovery comparison frame.",
    familyLabel: "Author family",
    familyRepresentative: "Recommended representative",
    labels: {
      positioning: "Official positioning",
      structureValue: "Structure value",
      diagramFocus: "Diagram focus",
      compareAgainst: "Compare against",
    },
    tiers: {
      core: "Core additions",
      boundary: "Boundary cases",
      "family-reference": "Family references",
      "control-group": "Control-group options",
    },
    tierHints: {
      core: "Best next candidates for adding real diagrams soon.",
      boundary: "Worth keeping in scope, but they may stretch the comparison frame.",
      "family-reference":
        "Useful as family context before deciding whether they deserve standalone diagrams.",
      "control-group": "Optional reference cases for separating host-native loops from added harness layers.",
    },
    hostPatterns: {
      "single-host-extension": "Single-host extension",
      "cross-host-overlay": "Cross-host overlay",
      "independent-host": "Independent host",
    },
  },
  zh: {
    eyebrow: "范围预览",
    title: "下一轮候选",
    summary:
      "这里先展示当前已经进入 scope 的候选案例，并按它们和现有比较问题的贴合程度分层，方便后续决定先画谁、谁先只保留为边界对象。",
    familyLabel: "同作者 family",
    familyRepresentative: "推荐代表",
    labels: {
      positioning: "官方定位",
      structureValue: "结构价值",
      diagramFocus: "图中应突出什么",
      compareAgainst: "优先对照",
    },
    tiers: {
      core: "第一层核心新增",
      boundary: "第二层边界案例",
      "family-reference": "family 参考",
      "control-group": "控制组备选",
    },
    tierHints: {
      core: "最适合优先补成正式 diagram 的对象。",
      boundary: "值得保留在 scope 里，但可能会把比较框架拉向边界。",
      "family-reference": "先作为 family 上下文保留，后面再决定是否拆成独立图。",
      "control-group": "用于区分宿主原生闭环与附加 harness 的可选参照。",
    },
    hostPatterns: {
      "single-host-extension": "单宿主扩展",
      "cross-host-overlay": "跨宿主 overlay",
      "independent-host": "独立宿主",
    },
  },
} as const;

export function ExpansionPreview() {
  const { lang } = useI18n();
  const copy = copyByLanguage[lang];

  return (
    <section className="expansion-preview" aria-label={copy.title}>
      <div className="expansion-preview__header">
        <p className="hero__eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <p>{copy.summary}</p>
      </div>

      <div className="expansion-preview__family-grid">
        {expansionCandidateFamilies.map((family) => (
          <article key={family.id} className="expansion-family-card">
            <div className="expansion-family-card__header">
              <p className="hero__eyebrow">{copy.familyLabel}</p>
              <h3>{resolveText(family.title, lang)}</h3>
            </div>
            <p className="expansion-family-card__note">{resolveText(family.note, lang)}</p>
            <div className="expansion-family-card__members">
              {family.members.map((member) => (
                <span key={`${family.id}-${member}`} className="expansion-preview__chip">
                  {member}
                </span>
              ))}
            </div>
            <p className="expansion-family-card__representative">
              <span>{copy.familyRepresentative}</span>
              <strong>{family.recommendedRepresentativeId}</strong>
            </p>
          </article>
        ))}
      </div>

      <div className="expansion-preview__groups">
        {tierOrder.map((tier) => {
          const candidates = expansionCandidates.filter((candidate) => candidate.tier === tier);

          if (candidates.length === 0) {
            return null;
          }

          return (
            <section key={tier} className="expansion-preview__group">
              <div className="expansion-preview__group-header">
                <h3>{copy.tiers[tier]}</h3>
                <p>{copy.tierHints[tier]}</p>
              </div>

              <div className="expansion-preview__grid">
                {candidates.map((candidate) => (
                  <article key={candidate.id} className="expansion-card">
                    <div className="expansion-card__header">
                      <h4>{resolveText(candidate.title, lang)}</h4>
                      <div className="expansion-card__chips">
                        <span className="expansion-preview__chip expansion-preview__chip--tier">
                          {copy.tiers[candidate.tier]}
                        </span>
                        <span className="expansion-preview__chip">
                          {copy.hostPatterns[candidate.hostPattern]}
                        </span>
                        {candidate.familyId ? (
                          <span className="expansion-preview__chip">{candidate.familyId}</span>
                        ) : null}
                      </div>
                    </div>

                    <div className="note-block">
                      <h4>{copy.labels.positioning}</h4>
                      <p>{resolveText(candidate.officialPositioning, lang)}</p>
                    </div>

                    <div className="note-block">
                      <h4>{copy.labels.structureValue}</h4>
                      <p>{resolveText(candidate.structureValue, lang)}</p>
                    </div>

                    <div className="note-block">
                      <h4>{copy.labels.diagramFocus}</h4>
                      <p>{resolveText(candidate.diagramFocus, lang)}</p>
                    </div>

                    <div className="expansion-card__compare">
                      <span>{copy.labels.compareAgainst}</span>
                      <div className="expansion-card__compare-chips">
                        {candidate.compareAgainst.map((target) => (
                          <code key={`${candidate.id}-${target}`}>{target}</code>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
