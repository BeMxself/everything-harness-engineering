import { describe, expect, it } from "vitest";
import { resolveText } from "../i18n";
import { draftCases, gsdDraftCase, omxDraftCase, trellisDraftCase } from "./draftCases";

describe("draft case data", () => {
  it("lists Trellis and oh-my-codex as formal draft cases", () => {
    expect(draftCases.map((draft) => draft.id)).toEqual([
      "trellis",
      "oh-my-codex",
      "get-shit-done",
    ]);
  });

  it("contains a Trellis draft skeleton for the next formal expansion step", () => {
    expect(trellisDraftCase.id).toBe("trellis");
    expect(trellisDraftCase.state).toBe("draft");
    expect(resolveText(trellisDraftCase.title, "en")).toMatch(/trellis/i);
  });

  it("captures the platform-over-core structure in nodes and steps", () => {
    expect(trellisDraftCase.nodes.map((node) => node.id)).toEqual([
      "task",
      "workflow-core",
      "spec-memory",
      "platform-wiring",
      "host-surface",
      "execution-loop",
      "review-memory-return",
      "update-migration",
    ]);

    expect(trellisDraftCase.steps.map((step) => step.id)).toEqual([
      "s1-intake",
      "s2-inject",
      "s3-dispatch",
      "s4-review-return",
      "s5-platform-sync",
    ]);
  });

  it("keeps open questions attached to the draft skeleton", () => {
    expect(trellisDraftCase.openQuestions).toHaveLength(3);
    expect(resolveText(trellisDraftCase.openQuestions[0]!, "en")).toMatch(/adapter/i);
  });

  it("records evidence notes tied to official Trellis materials", () => {
    expect(trellisDraftCase.evidenceNotes).toHaveLength(3);
    expect(resolveText(trellisDraftCase.evidenceNotes[0]!, "en")).toMatch(/\.trellis/i);
    expect(trellisDraftCase.sources.length).toBeGreaterThanOrEqual(2);
  });

  it("contains an oh-my-codex draft focused on Codex substrate plus OMX workflow contracts", () => {
    expect(omxDraftCase.id).toBe("oh-my-codex");
    expect(resolveText(omxDraftCase.title, "en")).toMatch(/omx/i);
    expect(resolveText(omxDraftCase.summary, "en")).toMatch(/Codex substrate/i);
    expect(omxDraftCase.nodes.map((node) => node.id)).toEqual([
      "task",
      "codex-host",
      "prompt-skill-layer",
      "omx-state",
      "workflow-escalation",
      "team-runtime",
      "execution-loop",
      "verification-return",
    ]);
    expect(resolveText(omxDraftCase.openQuestions[0]!, "en")).toMatch(/\$team/i);
  });

  it("contains a get-shit-done draft focused on the protocol loop rather than host wiring", () => {
    expect(gsdDraftCase.id).toBe("get-shit-done");
    expect(resolveText(gsdDraftCase.title, "en")).toMatch(/workflow protocol/i);
    expect(gsdDraftCase.nodes.map((node) => node.id)).toEqual([
      "idea-request",
      "planning-state",
      "discuss-phase",
      "plan-phase",
      "execute-phase",
      "verify-phase",
      "ship-next",
      "host-runtime-surface",
    ]);
    expect(resolveText(gsdDraftCase.openQuestions[0]!, "en")).toMatch(/host layer/i);
  });
});
