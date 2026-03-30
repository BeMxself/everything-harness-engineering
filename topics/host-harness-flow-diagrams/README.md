# Everything Harness Engineering

Small research project for comparing how coding-agent systems, harness stacks, and adjacent workflow systems express:

- automation loops
- harness layers
- control points
- host dependencies

This topic is not an official architecture catalog. It is a runnable research artifact that turns repository interpretations into inspectable diagrams.

The current topic visualizes three initial comparison cases as step-revealed diagrams:

- `oh-my-openagent (formerly oh-my-opencode)`
- `gstack`
- `Everything Claude Code`

## Research Method

This topic inherits the repository-wide reading method used in the root docs:

- start from public source material and official project language
- identify which mechanisms are load-bearing in each system
- compress those findings into a stable comparison frame

For this topic, the main comparison frame is:

- where the automation loop closes
- where the harness layer sits
- who acts as the control center
- how host dependency and recovery paths are exposed

In the root site, this corresponds most strongly to:

- `automation loops`
- `state / context`
- `host / protocol`
- `governance / control`

## Evidence Boundary

When working on this topic, keep three layers separate:

- source-confirmable material
  Public repository text, official docs, and official blog posts that can be directly checked.
- project framing
  How each system publicly describes itself.
- repository interpretation
  The diagram shape and cross-system comparison used by this topic.

The diagrams are in the third category. They are meant to be explainable and evidence-backed, but they are not official architecture diagrams published by the projects themselves.

## Stack

- React
- TypeScript
- Vite
- `@xyflow/react`
- Vitest
- Testing Library

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test -- --run
npm run build
```

## Project Notes

- Diagram meaning lives in `src/data/diagrams.ts`
- Shared visual mapping lives in `src/diagram/`
- Shared React Flow components live in `src/components/`
- Research spec and plan live in `docs/`
- Keep source notes and interpretation boundaries explicit when expanding cases
