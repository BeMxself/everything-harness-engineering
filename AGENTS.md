# Everything Harness Engineering Agent Guide

## Repository Purpose

This repository exists to study, practice, and continuously update knowledge about:

- harness engineering
- harness-like agent shells
- automation workflow suites that solve adjacent problems

The primary goals are:

- track the latest progress in the space
- compare different implementation routes
- analyze the underlying mechanisms
- turn that analysis into durable research topics
- present the results publicly through GitHub Pages

This is a research repository, not a single product repository.

## Presentation Model

- The repository root is the public entrypoint.
- The GitHub Pages homepage should act as an overview, guide, and outline.
- Root-level content should explain the field, classify systems, link to primary sources, and point to research topics.
- Concrete implementations, runnable experiments, and deeper studies should live under `topics/`.
- Do not move topic-level implementation files into the repository root.

## AI Working Principles

When working in this repository, follow these principles:

- Understand the research goal before making structural or content changes.
- Prefer primary sources: official docs, official repositories, official blog posts, original papers.
- Distinguish clearly between fact, inference, and interpretation.
- When comparing frameworks, preserve their differences instead of forcing visual or conceptual symmetry.
- Do not let one framework become the repository's implicit main subject unless the task explicitly requires it.
- When naming agent roles, workflows, or mechanisms, use current official terminology if available.
- If the official source does not define a concept explicitly, label the repository's description as an engineering interpretation rather than as a canonical fact.

## Astro Root Site Guidance

The repository root is now an Astro site. When working on the root site:

- Treat Astro official docs as the primary framework source of truth.
- Prefer the Astro Docs MCP server when available for up-to-date framework guidance; use `https://docs.astro.build/llms.txt` or `https://docs.astro.build/llms-full.txt` only as fallback context.
- Prefer existing Astro patterns already present in `src/` instead of generating new ad-hoc structures.
- When adding official Astro integrations, prefer `astro add` over manually editing `package.json` and config files.
- Verify that framework APIs and patterns are current before changing Astro code, especially routing, content, integrations, and deployment behavior.
- Run `npm run check` and `npm run build` after Astro root-site changes before considering the work complete.
- Keep root-site work inside the Astro app boundary (`src/`, `astro.config.mjs`, root build files). Do not pull topic-level implementation code into the root site.
- The Astro root site is a guide and index layer. Topic applications under `topics/` remain independently built artifacts; the root site should link to them, not absorb them.

## Topic Rules

- New deep-dive work should go into `topics/`.
- Each topic should be as independent and self-explanatory as practical.
- Keep topic internals layered when possible:
  - docs and plans
  - data
  - visualization / mapping logic
  - shared components
- Root should remain lightweight and navigational, even as the repository grows.

## Update Rules

- The homepage should evolve as the field evolves.
- Important articles and ecosystem sections should be updated when materially new primary sources appear.
- Topic pages and apps should reflect deeper analysis than the homepage, not duplicate it.
- When adding new claims about the state of the field, include enough source grounding that a future reader can trace the reasoning.
- When updating diagrams or taxonomies, favor explicit criteria over ad-hoc labels.

## Do

- Build comparative explanations.
- Add topic-driven research structure.
- Surface mechanism-level differences.
- Use GitHub Pages as the public-facing overview.
- Keep the repository oriented toward ongoing study and iteration.

## Do Not

- Treat the repository as a single app.
- Collapse topic implementations into the root.
- Present speculative mappings as if they were official architecture.
- Let visual alignment override conceptual accuracy.
- Turn the homepage into a generic marketing page for one framework.
