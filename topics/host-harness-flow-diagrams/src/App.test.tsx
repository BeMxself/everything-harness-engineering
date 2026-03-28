import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the research topic title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /宿主与 Harness 结构图/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /这个专题怎么用/i }),
    ).toBeInTheDocument();
  });

  it("switches shared UI copy to English", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /English/i }));

    expect(
      screen.getByRole("heading", { name: /Host and Harness Maps/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Research Topic/i)).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /how to use this topic/i })).toBeInTheDocument();
    expect(
      screen.getByText(/A runtime-centered loop built on top of the OpenCode host/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Agent Collaboration/i }),
    ).toBeInTheDocument();
  });

  it("keeps supporting context rows collapsed until the user expands each row", async () => {
    const user = userEvent.setup();

    render(<App />);

    const framingToggle = screen.getByRole("button", { name: /怎么读这张图/i });
    const evidenceToggle = screen.getByRole("button", { name: /结论与证据/i });

    expect(framingToggle).toHaveAttribute("aria-expanded", "false");
    expect(evidenceToggle).toHaveAttribute("aria-expanded", "false");

    expect(screen.queryByText(/^主路径$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^比较画像$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^核心比较问题$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/高宿主依赖和高 harness 密度/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^解读说明$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/oh-my-openagent 仓库/i)).not.toBeInTheDocument();

    await user.click(framingToggle);
    await user.click(evidenceToggle);

    expect(framingToggle).toHaveAttribute("aria-expanded", "true");
    expect(evidenceToggle).toHaveAttribute("aria-expanded", "true");

    expect(screen.getByText(/^主路径$/i)).toBeInTheDocument();
    expect(screen.getByText(/^比较画像$/i)).toBeInTheDocument();
    expect(screen.getByText(/^核心比较问题$/i)).toBeInTheDocument();
    expect(screen.getByText(/高宿主依赖和高 harness 密度/i)).toBeInTheDocument();
    expect(screen.getByText(/^解读说明$/i)).toBeInTheDocument();
    expect(screen.getByText(/oh-my-openagent 仓库/i)).toBeInTheDocument();
  });

  it("shows a dedicated agent collaboration section for oh-my-opencode", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /Agent 协作关系/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/sisyphus/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/frontend ui\/ux engineer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/prometheus/i).length).toBeGreaterThan(0);
  });

  it("shows a read-only preview of next-wave comparison candidates", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /下一轮候选/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^Trellis$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^oh-my-codex$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^get-shit-done$/i })).toBeInTheDocument();
    expect(screen.getByText(/OMX 编排家族/i)).toBeInTheDocument();
    expect(screen.getByText(/推荐代表/i)).toBeInTheDocument();
    expect(screen.getAllByText(/oh-my-claudecode/i).length).toBeGreaterThan(0);
  });
});
