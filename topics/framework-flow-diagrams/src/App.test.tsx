import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the research topic title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /framework flow diagrams/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /how to use this topic/i }),
    ).toBeInTheDocument();
  });

  it("switches shared UI copy to Chinese", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /中文/i }));

    expect(
      screen.getByRole("heading", { name: /框架流程图/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/研究专题/i)).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /这个专题怎么用/i })).toBeInTheDocument();
    expect(
      screen.getByText(/以 Runtime 为中心的自动化闭环发生在 OpenCode 内部/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Agent 协作关系/i }),
    ).toBeInTheDocument();
  });

  it("keeps supporting context collapsed until the user expands it", async () => {
    const user = userEvent.setup();

    render(<App />);

    const legendToggle = screen.getByRole("button", { name: /legend/i });
    const emphasisToggle = screen.getByRole("button", { name: /emphasis/i });
    const readingGuideToggle = screen.getByRole("button", { name: /reading guide/i });
    const takeawaysToggle = screen.getByRole("button", { name: /current takeaways/i });
    const notesToggle = screen.getByRole("button", { name: /research notes/i });
    const sourcesToggle = screen.getByRole("button", { name: /sources/i });

    expect(legendToggle).toHaveAttribute("aria-expanded", "false");
    expect(emphasisToggle).toHaveAttribute("aria-expanded", "false");
    expect(readingGuideToggle).toHaveAttribute("aria-expanded", "false");
    expect(takeawaysToggle).toHaveAttribute("aria-expanded", "false");
    expect(notesToggle).toHaveAttribute("aria-expanded", "false");
    expect(sourcesToggle).toHaveAttribute("aria-expanded", "false");

    expect(screen.queryByText(/^Main path$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Automation loop$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Key comparison question$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/host dependency and harness density/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Why this loop matters$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/oh-my-openagent repository/i)).not.toBeInTheDocument();

    await user.click(legendToggle);
    await user.click(emphasisToggle);
    await user.click(readingGuideToggle);
    await user.click(takeawaysToggle);
    await user.click(notesToggle);
    await user.click(sourcesToggle);

    expect(legendToggle).toHaveAttribute("aria-expanded", "true");
    expect(emphasisToggle).toHaveAttribute("aria-expanded", "true");
    expect(readingGuideToggle).toHaveAttribute("aria-expanded", "true");
    expect(takeawaysToggle).toHaveAttribute("aria-expanded", "true");
    expect(notesToggle).toHaveAttribute("aria-expanded", "true");
    expect(sourcesToggle).toHaveAttribute("aria-expanded", "true");

    expect(screen.getByText(/^Main path$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Automation loop$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Key comparison question$/i)).toBeInTheDocument();
    expect(screen.getByText(/host dependency and harness density/i)).toBeInTheDocument();
    expect(screen.getByText(/^Why this loop matters$/i)).toBeInTheDocument();
    expect(screen.getByText(/oh-my-openagent repository/i)).toBeInTheDocument();
  });

  it("shows a dedicated agent collaboration section for oh-my-opencode", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /agent collaboration/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/sisyphus/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/frontend ui\/ux engineer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/prometheus/i).length).toBeGreaterThan(0);
  });
});
