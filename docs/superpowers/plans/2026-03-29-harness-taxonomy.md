# Harness Taxonomy Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clarify across the root site that `agent harness` is a system object, `harness mechanisms` are the control/building-block layer, and `harness engineering` is the engineering practice built around them.

**Architecture:** Keep the existing route structure and update the public taxonomy in place. The homepage becomes the reader’s fast mental model, `concept-entry` becomes the canonical boundary page, and `ecosystem-comparison` preserves project differences while explicitly separating object-level categories from practice-level systems.

**Tech Stack:** Astro, Starlight content pages, TypeScript data modules, Markdown docs

---

### Task 1: Update Homepage Taxonomy And Framing

**Files:**
- Modify: `src/data/homepage.ts`
- Modify: `src/components/home/HomeDefinitionSection.astro`
- Modify: `src/components/home/HomeFundamentalsSection.astro`
- Modify: `src/components/home/HomeEcosystemComparisonSection.astro`
- Test: content assertions via `rg`

- [ ] **Step 1: Capture the old taxonomy as a failing content check**

```bash
rg -n "技能 / 方法论系统|方法系统" \
  src/data/homepage.ts \
  src/components/home/HomeDefinitionSection.astro \
  src/components/home/HomeFundamentalsSection.astro \
  src/components/home/HomeEcosystemComparisonSection.astro
```

Expected: matches found, confirming the homepage still uses the older framing that needs replacement.

- [ ] **Step 2: Replace the taxonomy card copy in `src/data/homepage.ts`**

Update the `taxonomy` array so the four public cards read like this:

```ts
export const taxonomy = [
  {
    title: "1. Coding Agents",
    description:
      "这类系统首先提供 agent 直接进入真实工程环境的宿主工作面，回答的问题是 agent 到底在哪里工作。",
    note: "典型问题：如何让 agent 真正进入仓库、执行命令、修改文件并完成单次工程任务？",
    href: ECOSYSTEM_COMPARISON,
  },
  {
    title: "2. Agent Harnesses",
    description:
      "这类系统是围绕宿主工作面的第二层对象：补上控制、恢复、记忆、规则、委派与验证能力，让 agent 能更长时、更可控地工作。",
    note: "典型问题：如何把 coding agent 提升成更可恢复、更可协作、更可治理的工程环境？",
    href: ECOSYSTEM_COMPARISON,
  },
  {
    title: "3. Harness Engineering",
    description:
      "这不是另一个宿主产品类，而是围绕 harness 展开的工程实践：如何组合 prompts、MCP、tools、hooks、skills、subagents、memory、approvals 与 verification 回路来驾驭 agent 做项目开发。",
    note: "典型问题：如何把这些机制组合成稳定的方法，而不是只堆功能？",
    href: CONCEPT_ENTRY,
  },
  {
    title: "4. Workflow / Orchestration",
    description:
      "这类系统更强调多 agent、多模型、人类审批和交付节点的组织方式，处理的是更大的协调闭环。",
    note: "典型问题：如何把多个 agent、人类和外部系统编成一条稳定交付链？",
    href: ECOSYSTEM_COMPARISON,
  },
];
```

- [ ] **Step 3: Reframe the homepage definition and fundamentals copy**

Edit the relevant copy blocks so the homepage explicitly names the mechanism layer:

```astro
<p class="lead">
  <strong>Harness engineering</strong> 讨论的不是“模型会不会”，而是人如何围绕
  <strong>agent harness</strong> 及其机制层，设计出可持续、可控、可验证的开发系统。
</p>
<p>
  这里需要先分三层看：<code>agent harness</code> 是系统对象，
  <code>prompts / MCP / hooks / skills / subagents / memory / approvals</code> 是机制层，
  <code>harness engineering</code> 则是把这些东西组合成实际工作方法的工程实践。
</p>
```

And in the fundamentals section:

```astro
<p>
  下面这些项首先应该被读成 <strong>harness mechanisms</strong>：
  它们不是都等于 harness 本体，而是 harness 和 harness engineering 共同依赖的 load-bearing control surfaces。
</p>
```

- [ ] **Step 4: Update the ecosystem preview wording on the homepage**

Adjust the explanatory copy in `HomeEcosystemComparisonSection.astro` so it stops flattening methods into peer runtime objects:

```astro
<p>
  读这张表时，先问三件事：它首先提供的是宿主、agent harness、工程实践层，还是任务编排层。
</p>
...
<p>比较时先分四层看：</p>
```

- [ ] **Step 5: Verify the new homepage framing**

Run:

```bash
rg -n "Harness Engineering|机制层|工程实践层|harness mechanisms" \
  src/data/homepage.ts \
  src/components/home/HomeDefinitionSection.astro \
  src/components/home/HomeFundamentalsSection.astro \
  src/components/home/HomeEcosystemComparisonSection.astro
```

Expected: the new taxonomy and mechanism-layer phrasing appear in the touched homepage files.

- [ ] **Step 6: Commit the homepage framing change**

```bash
git add \
  src/data/homepage.ts \
  src/components/home/HomeDefinitionSection.astro \
  src/components/home/HomeFundamentalsSection.astro \
  src/components/home/HomeEcosystemComparisonSection.astro
git commit -m "docs: clarify homepage harness taxonomy"
```

### Task 2: Rewrite Concept Entry Around Object, Mechanisms, And Practice

**Files:**
- Modify: `src/content/docs/concept-entry.md`
- Test: content assertions via `rg`

- [ ] **Step 1: Confirm the old concept entry lacks an explicit mechanism layer**

```bash
rg -n "先把对象和实践分开|prompting|context engineering|agent harness|harness engineering" \
  src/content/docs/concept-entry.md
```

Expected: matches show the current object/practice distinction, but no stable top-level section centered on `mechanisms`.

- [ ] **Step 2: Replace the “先把对象和实践分开” section with a three-layer explanation**

Rewrite that section so it reads like this:

```md
## 先把对象、机制和实践分开

这三个词经常被混用，但它们不是一回事：

- `agent harness`
  更偏系统对象，指模型外面那层让 agent 能进入真实工作面、被控制、被恢复、被约束的外壳
- `harness mechanisms`
  更偏构件层，指 prompts、MCP、tools、hooks、skills、subagents、memory、approvals、sandbox、verification 等机制
- `harness engineering`
  更偏工程实践，指人类如何把这些对象和机制组合成稳定的方法，让 agent 能持续做项目开发
```

- [ ] **Step 3: Rewrite the working-definition and boundary sections to preserve the new distinction**

Update the central definition paragraphs so they explicitly use the formula below:

```md
如果只想记住一句话，可以记成：

> `agent harness` 是对象，`harness mechanisms` 是构件层，`harness engineering` 是围绕它们展开的工程实践。
```

Also tighten the surrounding bullets so they say:

```md
- `prompting`、`context engineering`、`MCP`、`tools`、`hooks`、`skills`、`subagents`
  往往属于 harness 的机制层
- 它们很重要，但不自动等于 harness 本体
- `harness engineering` 关心的是这些机制怎样被组合、治理、验证与演化
```

- [ ] **Step 4: Adjust the comparison table so practice-layer systems are named correctly**

In the comparison section, make sure the row about `skills / 方法论系统` reads as a practice-layer relationship rather than a harness synonym. The replacement wording should look like:

```md
| `skills` / 方法论系统 | 给 agent 注入执行纪律、spec、review 和工作方法 | 它更接近 harness engineering 的实践层，不自动构成 agent harness 本体 | 可以进入 harness，也可以独立存在于 harness 之外 |
```

- [ ] **Step 5: Verify the concept page now names all three layers**

Run:

```bash
rg -n "harness mechanisms|对象，机制和实践|agent harness.*对象|harness engineering.*实践" \
  src/content/docs/concept-entry.md
```

Expected: matches confirm the page explicitly names and separates object, mechanisms, and practice.

- [ ] **Step 6: Commit the concept-entry rewrite**

```bash
git add src/content/docs/concept-entry.md
git commit -m "docs: separate agent harness mechanisms and practice"
```

### Task 3: Reframe Ecosystem Comparison Around Object-Level And Practice-Level Categories

**Files:**
- Modify: `src/content/docs/ecosystem-comparison.md`
- Test: content assertions via `rg`

- [ ] **Step 1: Locate the current wording that flattens categories**

```bash
rg -n "Skill / Methodology Systems|四类对象|不是暗示它们自动都属于 harness engineering 的核心定义|更偏执行纪律" \
  src/content/docs/ecosystem-comparison.md
```

Expected: matches confirm where the page currently treats practice-layer systems as one more peer row in the top-level category explanation.

- [ ] **Step 2: Rewrite the opening framing paragraph**

Change the introduction so it explicitly says the page compares both object categories and adjacent practice-layer systems:

```md
这里还要特别说明一点：本页比较的不只是同一种对象。`Coding Agents` 与 `Agent Harnesses` 更接近对象层；`Skill / Methodology Systems` 更接近 `harness engineering` 的实践层；`Workflow / Orchestration` 则是相邻的更大协调层。把它们放在一起，是为了做边界辨认，而不是暗示它们天然属于同一产品类别。
```

- [ ] **Step 3: Rewrite the “四类对象的最小区别” section into a layered distinction**

Replace that section with wording like:

```md
## 四类层次的最小区别

- `Coding Agents`
  更偏宿主对象，首先回答“agent 在哪里工作”
- `Agent Harnesses`
  更偏 agent harness 这一层，回答“如何在宿主之上补控制、恢复、记忆、规则与委派”
- `Skill / Methodology Systems`
  更偏 `harness engineering` 的实践层，回答“如何把 prompts、spec、review、skills、context engineering 等机制组织成稳定方法”
- `Workflow / Orchestration`
  更偏更大范围的协调层，回答“如何把多个 agent、人类审批和交付节点组织进闭环”
```

- [ ] **Step 4: Tighten the explanation around specific projects**

Keep `superpowers` and `get-shit-done` in the descriptive `Skill / Methodology System` grouping, but revise the surrounding paragraphs so they explicitly say these systems matter because they shape harness engineering practice, not because they are automatically `agent harnesses`.

Use copy along these lines:

```md
这类系统最重要的价值，通常不在“它是不是一个 agent harness”，而在“它怎样定义可复制的 agent 工作方法”。它们经常进入 harness engineering 的核心实践层，也可能被某个 harness 吸纳，但不应自动等同于 harness 本体。
```

- [ ] **Step 5: Verify the ecosystem page now distinguishes object and practice layers**

Run:

```bash
rg -n "对象层|实践层|同一产品类别|不是一个 agent harness|不应自动等同于 harness 本体" \
  src/content/docs/ecosystem-comparison.md
```

Expected: matches confirm the page now explicitly distinguishes object-level and practice-level categories.

- [ ] **Step 6: Commit the ecosystem comparison rewrite**

```bash
git add src/content/docs/ecosystem-comparison.md
git commit -m "docs: reframe ecosystem comparison by layer"
```

### Task 4: Verify The Root Site End-To-End

**Files:**
- Modify: none
- Test: root-site verification commands

- [ ] **Step 1: Run content sanity checks across all touched files**

```bash
rg -n "技能 / 方法论系统" \
  src/data/homepage.ts \
  src/components/home/HomeDefinitionSection.astro \
  src/components/home/HomeFundamentalsSection.astro \
  src/components/home/HomeEcosystemComparisonSection.astro \
  src/content/docs/concept-entry.md \
  src/content/docs/ecosystem-comparison.md
```

Expected: either no matches, or only deliberate mentions inside the ecosystem page where the phrase is preserved as a descriptive grouping.

- [ ] **Step 2: Run Astro type/content checks**

```bash
npm run check
```

Expected: command exits successfully with `0 errors`.

- [ ] **Step 3: Run the static build**

```bash
npm run build
```

Expected: build completes successfully and copies topic sites as before.

- [ ] **Step 4: Inspect git diff before finalizing**

```bash
git diff -- \
  src/data/homepage.ts \
  src/components/home/HomeDefinitionSection.astro \
  src/components/home/HomeFundamentalsSection.astro \
  src/components/home/HomeEcosystemComparisonSection.astro \
  src/content/docs/concept-entry.md \
  src/content/docs/ecosystem-comparison.md
```

Expected: diff shows taxonomy clarification only, with no unrelated structural changes.

- [ ] **Step 5: Commit the verified redesign**

```bash
git add \
  src/data/homepage.ts \
  src/components/home/HomeDefinitionSection.astro \
  src/components/home/HomeFundamentalsSection.astro \
  src/components/home/HomeEcosystemComparisonSection.astro \
  src/content/docs/concept-entry.md \
  src/content/docs/ecosystem-comparison.md
git commit -m "docs: clarify harness taxonomy across root site"
```
