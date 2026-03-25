# Framework Flow Diagrams Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a small React Flow research app that compares `oh-my-opencode`, `gstack`, and `Everything Claude Code` using step-revealed diagrams.

**Architecture:** Use a data-driven React + TypeScript app. Keep framework meaning in diagram data, use shared node and edge renderers for visual semantics, and derive visibility from the active step instead of mutating graph structure.

**Tech Stack:** Vite, React, TypeScript, `@xyflow/react`, Vitest, Testing Library

---

### Task 1: Scaffold The App

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles.css`
- Create: `src/vite-env.d.ts`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Write the failing smoke test setup**

Create test targets that assume the app renders a title and controls.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run`
Expected: FAIL because app files and tests are not implemented.

- [ ] **Step 3: Create the minimal Vite + React + Vitest scaffold**

Add the base app shell and test configuration.

- [ ] **Step 4: Run tests to verify the scaffold is wired**

Run: `npm test -- --run`
Expected: test runner starts and scaffold tests can execute.

### Task 2: Define Shared Diagram Types And Data

**Files:**
- Create: `src/data/types.ts`
- Create: `src/data/diagrams.ts`
- Test: `src/data/diagrams.test.ts`

- [ ] **Step 1: Write failing tests for diagram integrity**

Cover required ids, step references, and framework count.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run src/data/diagrams.test.ts`
Expected: FAIL because the data module does not exist yet.

- [ ] **Step 3: Implement the shared types and three framework diagrams**

Add the data model and first-pass graph data.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --run src/data/diagrams.test.ts`
Expected: PASS

### Task 3: Implement Visual Mapping Helpers

**Files:**
- Create: `src/diagram/theme.ts`
- Create: `src/diagram/visibility.ts`
- Create: `src/diagram/mapNodes.ts`
- Create: `src/diagram/mapEdges.ts`
- Test: `src/diagram/visibility.test.ts`

- [ ] **Step 1: Write failing tests for visibility resolution**

Cover `active`, `past`, `future`, and `ambient` behavior.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run src/diagram/visibility.test.ts`
Expected: FAIL because visibility helpers do not exist.

- [ ] **Step 3: Implement theme and mapping helpers**

Add the visual rules that convert diagram data plus active step into render props.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --run src/diagram/visibility.test.ts`
Expected: PASS

### Task 4: Build Shared React Flow Components

**Files:**
- Create: `src/components/FrameworkNode.tsx`
- Create: `src/components/FrameworkEdge.tsx`
- Create: `src/components/PlaybackControls.tsx`
- Create: `src/components/Legend.tsx`
- Create: `src/components/FrameworkDiagram.tsx`
- Test: `src/components/FrameworkDiagram.test.tsx`

- [ ] **Step 1: Write failing interaction tests**

Cover initial step rendering, next/previous/reset, and framework title presence.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run src/components/FrameworkDiagram.test.tsx`
Expected: FAIL because components do not exist yet.

- [ ] **Step 3: Implement the shared node, edge, legend, and playback components**

Map one framework into React Flow and expose playback controls.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --run src/components/FrameworkDiagram.test.tsx`
Expected: PASS

### Task 5: Compose The Research Topic Page

**Files:**
- Modify: `src/App.tsx`
- Create: `src/components/FrameworkSwitcher.tsx`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Write failing app-level tests**

Cover switching between framework diagrams and showing summary/emphasis text.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run src/App.test.tsx`
Expected: FAIL because the composed page is incomplete.

- [ ] **Step 3: Implement the page composition**

Wire framework selection, summary display, notes area, and diagram playback together.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --run src/App.test.tsx`
Expected: PASS

### Task 6: Verify Build And Clean Up

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add a project README**

Document purpose, stack, and local commands.

- [ ] **Step 2: Run the full test suite**

Run: `npm test -- --run`
Expected: PASS

- [ ] **Step 3: Run a production build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add framework flow diagram topic"
```
