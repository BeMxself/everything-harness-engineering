# Host and Harness Flow Diagrams Design

**Date:** 2026-03-25

**Goal:** Build a small standalone research topic that visualizes and compares how `oh-my-openagent`, `gstack`, and `Everything Claude Code` arrange host surfaces, automation loops, engineering shells, control points, and host dependencies.

## Problem

Existing system comparisons are usually list-based. That format is weak at showing:

- where the main automation loop actually closes
- where engineering shell concerns live
- who controls the next step
- how strongly the system depends on a host environment

The topic should turn those differences into step-revealed diagrams that are easy to inspect as research notes.

## Scope

The first version covers exactly three comparison cases:

- `oh-my-openagent (formerly oh-my-opencode)`
- `gstack`
- `Everything Claude Code`

The app should provide:

- one diagram at a time
- step-by-step reveal controls similar to the Ralph demo
- a shared visual language across cases
- per-case summary and emphasis metadata

Out of scope for v1:

- automatic layout
- drag/drop editing
- persistence
- additional comparison cases
- collaborative annotations
- data import/export UI

## Target Shape

This will be a small standalone front-end app, not a full product. The topic should be easy to run locally and easy to extend with more diagrams later.

Recommended stack:

- React
- TypeScript
- Vite
- `@xyflow/react`
- Vitest
- Testing Library

## Data Model

The app should be data-driven. Case-specific meaning belongs in diagram data, not hard-coded component branches.

Core model:

- `FrameworkDiagram`
- `DiagramNode`
- `DiagramEdge`
- `DiagramStep`

The current implementation keeps the `FrameworkDiagram` type name, but topic scope is broader than "frameworks" alone.

Each comparison case defines:

- metadata
- static node and edge graph
- a fixed sequence of reveal steps

## Visual Language

Shared node categories:

- `entry`
- `control`
- `execution`
- `verification`
- `memory`
- `shell`
- `decision`
- `terminal`
- `failure`

Shared edge categories:

- `main`
- `feedback`
- `failure`
- `implicit`

Visual meaning:

- blue: main execution
- green: verification or positive feedback loop
- red: failure or retry
- orange: state or memory
- dashed neutral shell: engineering shell and host capability

Visibility states:

- `active`
- `past`
- `future`
- `ambient`

`ambient` is used for shell and host context that should remain visible but de-emphasized.

## Layout Intent

Each comparison case gets its own layout logic.

### oh-my-opencode

Use a runtime-centered layout:

- control in the center
- shell above
- execution to the right
- feedback loop below
- failure return from the far right back to runtime

### gstack

Use a delivery-pipeline layout:

- left-to-right main flow
- shell above the planning/build area
- all failures drop to the bottom and re-enter via rework or replanning

### Everything Claude Code

Use a policy-shell plus main-agent layout:

- main agent in the center
- policy layer above
- subagents and tools to the right
- memory and next-step loop below

## Interaction Model

Controls:

- `Previous`
- `Next`
- `Reset`

Behavior:

- current step highlights active nodes and edges
- previous elements remain visible but faded
- future elements remain mostly hidden
- shell stays visible at ambient opacity

## Architecture

Suggested structure:

- `src/data/`
  - diagram data and types
- `src/diagram/`
  - shared React Flow mapping and render helpers
- `src/components/`
  - node renderer, edge renderer, playback controls, legend
- `src/app/`
  - page composition

The central page should only coordinate the current comparison case and current step. Styling decisions should live in reusable mappers.

## Testing Strategy

Tests should focus on behavior and mapping:

- diagram data integrity
- step progression logic
- visibility calculation
- playback controls
- case switching

Avoid pixel-perfect visual tests in v1.

## Success Criteria

The topic is successful when:

- all three comparison cases can be viewed with their own layouts
- each diagram can be stepped forward and backward
- shared visual semantics remain consistent across cases
- the app makes the automation loop and shell placement obvious without reading source code
