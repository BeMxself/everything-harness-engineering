# Everything Harness Engineering

Small research project for comparing how agent frameworks express:

- automation loops
- harness layers
- control points
- host dependencies

The first topic visualizes three frameworks as step-revealed diagrams:

- `oh-my-opencode`
- `gstack`
- `Everything Claude Code`

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
