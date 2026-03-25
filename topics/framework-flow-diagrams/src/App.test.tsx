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
  });

  it("switches shared UI copy to Chinese", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /中文/i }));

    expect(
      screen.getByRole("heading", { name: /框架流程图/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/研究专题/i)).toBeInTheDocument();
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
    const notesToggle = screen.getByRole("button", { name: /research notes/i });

    expect(legendToggle).toHaveAttribute("aria-expanded", "false");
    expect(emphasisToggle).toHaveAttribute("aria-expanded", "false");
    expect(notesToggle).toHaveAttribute("aria-expanded", "false");

    expect(screen.queryByText(/^Main path$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Automation loop$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Why this loop matters$/i)).not.toBeInTheDocument();

    await user.click(legendToggle);
    await user.click(emphasisToggle);
    await user.click(notesToggle);

    expect(legendToggle).toHaveAttribute("aria-expanded", "true");
    expect(emphasisToggle).toHaveAttribute("aria-expanded", "true");
    expect(notesToggle).toHaveAttribute("aria-expanded", "true");

    expect(screen.getByText(/^Main path$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Automation loop$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Why this loop matters$/i)).toBeInTheDocument();
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
