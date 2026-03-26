# Everything Harness Engineering

This repository is a multi-topic research workspace for:

- harness engineering
- harness-like agent shells
- automation workflow suites that solve adjacent engineering problems

Its purpose is to continuously study the space, compare different implementation routes, analyze the underlying mechanisms, and turn that work into durable research topics.

## Public Homepage

The public-facing overview is published through GitHub Pages using an Astro root site.

- Homepage entry: [`src/pages/index.astro`](./src/pages/index.astro)
- Homepage data: [`src/data/homepage.ts`](./src/data/homepage.ts)
- Homepage styles: [`src/styles/global.css`](./src/styles/global.css)
- Pages workflow: [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml)

The homepage is the repository's guide and outline:

- what harness engineering is
- how it differs from adjacent categories
- which articles matter
- what the current ecosystem looks like
- which research topics exist in this repository

## Repository Structure

- Root
  Public overview, repository guide, and topic entrypoint
- `topics/`
  Deeper, topic-specific research implementations and experiments

## Current Topics

- `topics/framework-flow-diagrams`
  A runnable research app for comparing framework automation loops, harness layers, control points, and host dependencies.

## Working Model

- Root stays lightweight and navigational.
- Deeper work goes into independent topics.
- The repository should keep expanding by topic, not by piling implementation detail into the root.

## Build

Install dependencies and build the root site:

```bash
npm install
npm run build
```

This builds the Astro root site into `dist/` and then copies any separately-built topic sites found at `topics/*/site/` into the final Pages artifact.

## License

This repository is licensed under the MIT License. See [`LICENSE`](./LICENSE) for details.
