# CLAUDE.md

This file provides guidance to Claude Code and Claude-compatible agent tools when working in this repository.

## Follow AGENTS First

- Follow all instructions in [`AGENTS.md`](./AGENTS.md).
- Treat this file as a Claude-oriented companion, not a competing ruleset.

## Repository Intent

- This is a research repository about harness engineering and adjacent agent workflow systems.
- The repository root is a public GitHub Pages overview, not a product app.
- Deep-dive implementations belong under `topics/`.

## Astro Root Site

The repository root is an Astro site.

- Prefer Astro official documentation as the framework source of truth.
- Prefer the Astro Docs MCP server when available for current framework guidance.
- Use Astro `llms.txt` / `llms-full.txt` only as fallback context, not as the first choice when MCP or current docs are available.
- When adding official Astro integrations, prefer `astro add`.
- Reuse the existing root-site structure in `src/` rather than introducing parallel patterns.
- Keep topic applications independent. The root Astro site should link to topic outputs, not absorb their implementation code.

## Verification

For root-site Astro changes, run:

```bash
npm run check
npm run build
```

Do not claim Astro changes are complete unless those commands succeed or you explicitly report why they could not be run.
