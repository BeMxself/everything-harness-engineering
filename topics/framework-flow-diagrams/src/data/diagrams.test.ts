import { describe, expect, it } from "vitest";
import { diagrams } from "./diagrams";
import { resolveText } from "../i18n";

describe("diagram data", () => {
  it("contains the three framework topics", () => {
    expect(diagrams.map((diagram) => diagram.id)).toEqual([
      "oh-my-opencode",
      "gstack",
      "everything-claude-code",
    ]);
  });

  it("keeps every referenced node and edge resolvable from steps", () => {
    for (const diagram of diagrams) {
      const nodeIds = new Set(diagram.nodes.map((node) => node.id));
      const edgeIds = new Set(diagram.edges.map((edge) => edge.id));

      for (const step of diagram.steps) {
        for (const nodeId of step.activeNodeIds) {
          expect(nodeIds.has(nodeId)).toBe(true);
        }

        for (const edgeId of step.activeEdgeIds) {
          expect(edgeIds.has(edgeId)).toBe(true);
        }
      }
    }
  });

  it("gives oh-my-opencode enough spacing to read the layered control loop", () => {
    const opencode = diagrams.find((diagram) => diagram.id === "oh-my-opencode");

    expect(opencode).toBeDefined();
    expect(opencode?.nodes.some((node) => node.id === "agent")).toBe(false);
    expect(
      opencode?.nodes.some(
        (node) =>
          node.id === "runtime" && /sisyphus/i.test(resolveText(node.label, "en")),
      ),
    ).toBe(true);

    const positions = new Map(
      opencode?.nodes.map((node) => [node.id, node.position]),
    );

    const intent = positions.get("intent");
    const host = positions.get("host");
    const runtime = positions.get("runtime");
    const tools = positions.get("tools");
    const shell = positions.get("shell");
    const verify = positions.get("verify");
    const memory = positions.get("memory");
    const decision = positions.get("decision");
    const done = positions.get("done");
    const failTool = positions.get("failTool");
    const failVerify = positions.get("failVerify");

    expect(intent).toBeDefined();
    expect(host).toBeDefined();
    expect(runtime).toBeDefined();
    expect(tools).toBeDefined();
    expect(shell).toBeDefined();
    expect(verify).toBeDefined();
    expect(memory).toBeDefined();
    expect(decision).toBeDefined();
    expect(done).toBeDefined();
    expect(failTool).toBeDefined();
    expect(failVerify).toBeDefined();

    expect((host?.x ?? 0) - (intent?.x ?? 0)).toBeGreaterThanOrEqual(280);
    expect((runtime?.x ?? 0) - (host?.x ?? 0)).toBeGreaterThanOrEqual(280);
    expect((tools?.x ?? 0) - (runtime?.x ?? 0)).toBeGreaterThanOrEqual(320);
    expect((verify?.x ?? 0) - (tools?.x ?? 0)).toBeGreaterThanOrEqual(320);
    expect((memory?.x ?? 0) - (verify?.x ?? 0)).toBeGreaterThanOrEqual(320);
    expect((done?.x ?? 0) - (decision?.x ?? 0)).toBeGreaterThanOrEqual(360);

    expect((shell?.y ?? 0) - (runtime?.y ?? 0)).toBeGreaterThanOrEqual(200);
    expect((decision?.y ?? 0) - (memory?.y ?? 0)).toBeGreaterThanOrEqual(180);
    expect(failTool?.y ?? 0).toBeLessThan((tools?.y ?? 0) - 150);
    expect(failVerify?.y ?? 0).toBeLessThan((verify?.y ?? 0) - 150);
  });

  it("uses edge control points for the most crowded oh-my-opencode feedback loops", () => {
    const opencode = diagrams.find((diagram) => diagram.id === "oh-my-opencode");

    expect(opencode).toBeDefined();

    const controlEdges = new Map(
      opencode?.edges
        .filter((edge) => edge.controlPoints?.length)
        .map((edge) => [edge.id, edge.controlPoints]),
    );

    expect(controlEdges.get("e5")).toBeDefined();
    expect(controlEdges.get("e9")).toBeDefined();
    expect(controlEdges.get("e12")).toBeDefined();
    expect(controlEdges.get("e14")).toBeDefined();
  });

  it("lays out gstack as a long gated delivery pipeline with externalized rework lanes", () => {
    const gstack = diagrams.find((diagram) => diagram.id === "gstack");

    expect(gstack).toBeDefined();

    const positions = new Map(
      gstack?.nodes.map((node) => [node.id, node.position]),
    );

    const goal = positions.get("goal");
    const orchestrator = positions.get("orchestrator");
    const planner = positions.get("planner");
    const builder = positions.get("builder");
    const qa = positions.get("qa");
    const browser = positions.get("browser");
    const review = positions.get("review");
    const delivered = positions.get("delivered");
    const shell = positions.get("shell");
    const reworkBuild = positions.get("reworkBuild");
    const replan = positions.get("replan");
    const failQa = positions.get("failQa");
    const failBrowser = positions.get("failBrowser");
    const failReview = positions.get("failReview");

    expect(goal).toBeDefined();
    expect(orchestrator).toBeDefined();
    expect(planner).toBeDefined();
    expect(builder).toBeDefined();
    expect(qa).toBeDefined();
    expect(browser).toBeDefined();
    expect(review).toBeDefined();
    expect(delivered).toBeDefined();
    expect(shell).toBeDefined();
    expect(reworkBuild).toBeDefined();
    expect(replan).toBeDefined();
    expect(failQa).toBeDefined();
    expect(failBrowser).toBeDefined();
    expect(failReview).toBeDefined();

    expect((orchestrator?.x ?? 0) - (goal?.x ?? 0)).toBeGreaterThanOrEqual(300);
    expect((planner?.x ?? 0) - (orchestrator?.x ?? 0)).toBeGreaterThanOrEqual(350);
    expect((builder?.x ?? 0) - (planner?.x ?? 0)).toBeGreaterThanOrEqual(320);
    expect((qa?.x ?? 0) - (builder?.x ?? 0)).toBeGreaterThanOrEqual(320);
    expect((browser?.x ?? 0) - (qa?.x ?? 0)).toBeGreaterThanOrEqual(320);
    expect((review?.x ?? 0) - (browser?.x ?? 0)).toBeGreaterThanOrEqual(320);
    expect((delivered?.x ?? 0) - (review?.x ?? 0)).toBeGreaterThanOrEqual(320);

    expect(shell?.y ?? 0).toBeLessThan((planner?.y ?? 0) - 180);
    expect((reworkBuild?.y ?? 0) - (qa?.y ?? 0)).toBeGreaterThanOrEqual(220);
    expect((replan?.y ?? 0) - (review?.y ?? 0)).toBeGreaterThanOrEqual(220);
    expect(failQa?.y ?? 0).toBeGreaterThan((qa?.y ?? 0) + 100);
    expect(failBrowser?.y ?? 0).toBeGreaterThan((browser?.y ?? 0) + 120);
    expect(failReview?.y ?? 0).toBeGreaterThan((review?.y ?? 0) + 120);
    expect((reworkBuild?.y ?? 0) - (failQa?.y ?? 0)).toBeGreaterThanOrEqual(100);
    expect((replan?.y ?? 0) - (failReview?.y ?? 0)).toBeGreaterThanOrEqual(180);
  });

  it("lays out everything claude code as a central control loop with policy above and recovery outside", () => {
    const ecc = diagrams.find((diagram) => diagram.id === "everything-claude-code");

    expect(ecc).toBeDefined();

    const positions = new Map(
      ecc?.nodes.map((node) => [node.id, node.position]),
    );

    const request = positions.get("request");
    const policy = positions.get("policy");
    const main = positions.get("main");
    const subs = positions.get("subs");
    const tools = positions.get("tools");
    const verify = positions.get("verify");
    const memory = positions.get("memory");
    const decision = positions.get("decision");
    const done = positions.get("done");
    const failSub = positions.get("failSub");
    const failVerify = positions.get("failVerify");

    expect(request).toBeDefined();
    expect(policy).toBeDefined();
    expect(main).toBeDefined();
    expect(subs).toBeDefined();
    expect(tools).toBeDefined();
    expect(verify).toBeDefined();
    expect(memory).toBeDefined();
    expect(decision).toBeDefined();
    expect(done).toBeDefined();
    expect(failSub).toBeDefined();
    expect(failVerify).toBeDefined();

    expect((main?.x ?? 0) - (request?.x ?? 0)).toBeGreaterThanOrEqual(450);
    expect((main?.y ?? 0) - (request?.y ?? 0)).toBeGreaterThanOrEqual(80);
    expect((main?.y ?? 0) - (policy?.y ?? 0)).toBeLessThanOrEqual(-180);
    expect((subs?.x ?? 0) - (main?.x ?? 0)).toBeGreaterThanOrEqual(500);
    expect((tools?.x ?? 0) - (main?.x ?? 0)).toBeGreaterThanOrEqual(500);
    expect((tools?.y ?? 0) - (subs?.y ?? 0)).toBeGreaterThanOrEqual(220);
    expect((verify?.x ?? 0) - (tools?.x ?? 0)).toBeGreaterThanOrEqual(500);
    expect((memory?.x ?? 0) - (verify?.x ?? 0)).toBeGreaterThanOrEqual(-10);
    expect((decision?.x ?? 0) - (memory?.x ?? 0)).toBeGreaterThanOrEqual(300);
    expect((done?.x ?? 0) - (decision?.x ?? 0)).toBeGreaterThanOrEqual(300);
    expect((failSub?.y ?? 0)).toBeLessThan((subs?.y ?? 0) - 300);
    expect((failVerify?.y ?? 0)).toBeLessThan((verify?.y ?? 0) - 200);
  });
});
