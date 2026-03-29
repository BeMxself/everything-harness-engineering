# Harness Taxonomy Redesign

## Summary

This redesign separates three things that the site currently lets drift together:

1. `agent harness` as a system object
2. `harness mechanisms` as the building blocks inside that object and around it
3. `harness engineering` as the human practice of designing, composing, and governing those systems and mechanisms

The immediate goal is not to expand the site into many new pages. The goal is to make the current homepage and core docs stop implying that all of these are the same layer.

## Problem

The current site already distinguishes `agent harness` from `harness engineering` in parts of the copy, but the overall taxonomy still blurs them in three ways:

- the homepage taxonomy treats `技能 / 方法论系统` as a peer category next to `Agent Harnesses`, which makes methods and runtime objects feel more equivalent than they are
- the concept page says `harness engineering` is a practice, but does not give the mechanism layer enough explicit status
- the ecosystem page compares hosts, harnesses, methods, and orchestration together, but the framing can still be read as if they were all the same kind of thing

This produces a stable reader confusion:

- `agent harness` sounds like a product category
- `harness engineering` sounds like either a synonym for that category or a vague umbrella term
- `MCP / prompts / hooks / skills / subagents / memory / approvals / sandbox` float between “features”, “products”, and “methods” without a clear home

## Design Goals

- make it legible that `agent harness` and `harness engineering` are related but not identical
- give the mechanism layer explicit language without forcing a new standalone page this round
- preserve current page structure and reading flow
- keep the comparison page useful for boundary reading rather than turning it into a rigid ontology
- avoid flattening methodology systems into agent harnesses

## Non-Goals

- no new top-level route in this round
- no new standalone `harness-mechanisms` page in this round
- no redesign of topic apps under `topics/`
- no attempt to produce a universal canonical taxonomy for the whole ecosystem

## Core Decision

The site should distinguish **object**, **mechanism**, **practice**, and **adjacent orchestration**.

### 1. Coding Agents

These are host surfaces where an agent directly works inside a real engineering environment.

They answer the first question: where does the agent actually work?

Examples:

- Codex
- Claude Code
- OpenCode
- Goose

### 2. Agent Harnesses

These are system objects layered on top of, or tightly around, a host work surface.

They answer questions like:

- how is the agent controlled across longer tasks
- how are state, rules, recovery, delegation, memory, and verification wrapped around the host

Examples:

- oh-my-openagent
- oh-my-codex
- oh-my-claudecode
- Trellis
- everything-claude-code

### 3. Harness Mechanisms

These are not a top-level product class for this round. They are the composable building blocks that appear inside harnesses and inside harness-engineering practice.

This layer includes:

- prompts and instruction files such as `AGENTS.md` or `CLAUDE.md`
- MCP capabilities such as tools, resources, and prompts
- tools and tool-surface design
- hooks
- skills
- subagents
- memory and progress artifacts
- approvals, sandboxing, and permissions
- verification loops such as browser automation, tests, and review hooks

The site should describe these as **mechanisms**, not as automatic synonyms for `harness`.

### 4. Harness Engineering

This is the engineering practice of designing, combining, constraining, and evolving harnesses and harness mechanisms so agents can do reliable project work.

It should cover questions like:

- how humans steer and agents execute
- how a repository becomes legible to agents
- how review, verification, and recovery are encoded into the development loop
- how mechanisms such as prompts, MCP, hooks, skills, subagents, and sandbox rules are combined into a working operating method

This is the layer where method systems belong most naturally.

### 5. Workflow / Orchestration

This remains an adjacent layer rather than part of the core object/practice distinction.

It covers systems that coordinate multiple agents, models, approvals, and delivery stages across a larger loop.

Examples:

- gstack
- ccg-workflow
- Ralph

## Information Architecture Decision

This round will use a **four-card public taxonomy plus one explicit mechanism sublayer**:

- `Coding Agents`
- `Agent Harnesses`
- `Harness Engineering`
- `Workflow / Orchestration`

`Harness Mechanisms` will appear as a named explanatory sublayer inside the homepage and concept page, not as a standalone top-level page.

This keeps the site lightweight while still making the distinction explicit.

## Page-by-Page Changes

## Homepage

Primary change:

- replace the current `技能 / 方法论系统` taxonomy card with a `Harness Engineering` card

Copy direction:

- `Coding Agents` stays the host layer
- `Agent Harnesses` stays the agent harness layer
- `Harness Engineering` becomes the practice layer that explains how prompts, MCP, hooks, skills, subagents, approvals, memory, and verification are used together
- `Workflow / Orchestration` remains the adjacent coordination layer

Additional homepage framing:

- the fundamentals section should remain mechanism-oriented, but the surrounding copy should make clear that these are not all “the harness itself”; they are the mechanism surface that harnesses and harness engineering operate on

Files:

- `src/data/homepage.ts`

## Concept Entry

Primary change:

- strengthen the current “object vs practice” distinction by naming a third layer: `mechanisms`

Required conceptual structure:

1. `agent harness` is a system object
2. `harness mechanisms` are the building blocks used inside that object and around it
3. `harness engineering` is the engineering practice of arranging and governing those pieces

Copy direction:

- keep the existing evidence-boundary style
- explicitly say that `MCP / tools / hooks / skills / subagents / memory / approvals / sandbox` are not all the same kind of thing, but are best read as mechanisms or control surfaces
- tighten the “it does not equal” comparisons so readers can more quickly distinguish host, harness, method, and orchestration

Files:

- `src/content/docs/concept-entry.md`

## Ecosystem Comparison

Primary change:

- stop letting `Skill / Methodology Systems` read like a parallel object category to `Agent Harnesses` without qualification

Framing change:

- the page should explicitly say that it compares not only object categories, but also adjacent systems that belong more to the `harness engineering` layer
- `Skill / Methodology Systems` can stay as a descriptive grouping for specific projects such as `superpowers` and `get-shit-done`, because that label preserves how they differ from agent harnesses
- however, the page must explain more clearly that these systems belong to the practice/method layer, not the agent-harness layer

Table change:

- keep descriptive project groupings where they help preserve differences
- revise explanatory text so the reader understands that `Coding Agents` and `Agent Harnesses` are object-oriented categories, while `Skill / Methodology Systems` are engineering-practice-oriented categories

Files:

- `src/content/docs/ecosystem-comparison.md`

## Language Rules

Across all touched pages, the site should follow these wording rules:

- do not use `harness engineering` as if it were just a prettier name for `agent harness`
- do not describe every method system as a harness
- do not describe every mechanism as the harness itself
- prefer phrases such as:
  - `agent harness is the object`
  - `harness engineering is the practice`
  - `MCP / hooks / skills / subagents are mechanisms or control surfaces`

## Reader Outcome

After this redesign, a first-time reader should be able to answer these questions in one pass:

- what is the difference between a coding-agent host and an agent harness
- why `harness engineering` is not identical to `agent harness`
- where prompts, MCP, hooks, skills, subagents, memory, and sandboxing belong conceptually
- why a methodology system can matter deeply to harness engineering without being the agent harness itself

## Success Criteria

- the homepage taxonomy no longer implies that methods and agent harnesses are the same kind of category
- the concept page explicitly names the mechanism layer
- the ecosystem page clearly distinguishes object-level categories from practice-level comparison groups
- key sentences across the touched pages align on one shared distinction:
  `agent harness = object`, `mechanisms = components`, `harness engineering = practice`

## Out of Scope for This Round

- adding a dedicated `harness-mechanisms` route
- rewriting the key-articles page
- reclassifying every referenced external project in the repository
- changing the topic visualization app taxonomy
