import type { AgentCollaborationGraph } from "../data/types";
import { resolveText, useI18n } from "../i18n";

type AgentCollaborationPanelProps = {
  graph: AgentCollaborationGraph;
};

export function AgentCollaborationPanel({ graph }: AgentCollaborationPanelProps) {
  const { lang } = useI18n();
  const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));

  return (
    <div className="agent-collaboration">
      <p className="agent-collaboration__summary">{resolveText(graph.summary, lang)}</p>
      <div className="agent-collaboration__canvas">
        <svg
          className="agent-collaboration__edges"
          viewBox="0 0 100 82"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {graph.edges.map((edge) => {
            const source = nodeById.get(edge.source);
            const target = nodeById.get(edge.target);

            if (!source || !target) {
              return null;
            }

            return (
              <g key={`${edge.source}-${edge.target}-${edge.label}`}>
                <line
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  className="agent-collaboration__line"
                />
              </g>
            );
          })}
        </svg>

        {graph.edges.map((edge) => {
          const source = nodeById.get(edge.source);
          const target = nodeById.get(edge.target);

          if (!source || !target) {
            return null;
          }

          const labelX = (source.x + target.x) / 2;
          const labelY = (source.y + target.y) / 2;

          return (
            <div
              key={`label-${edge.source}-${edge.target}-${resolveText(edge.label, lang)}`}
              className="agent-collaboration__edge-label"
              style={{
                left: `${labelX}%`,
                top: `${labelY}%`,
              }}
            >
              {resolveText(edge.label, lang)}
            </div>
          );
        })}

        {graph.nodes.map((node) => (
          <article
            key={node.id}
            className="agent-collaboration__node"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
          >
            <h3>{resolveText(node.label, lang)}</h3>
            <p>{resolveText(node.role, lang)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
