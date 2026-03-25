import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { diagrams } from "../data/diagrams";
import { FrameworkDiagram } from "./FrameworkDiagram";

describe("FrameworkDiagram", () => {
  it("renders labeled step navigation and supports panorama", async () => {
    const user = userEvent.setup();

    render(<FrameworkDiagram diagram={diagrams[0]} />);

    expect(screen.getByText(/step 1 of/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /1 enter runtime/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /7 panorama/i })).toBeInTheDocument();
    expect(screen.queryByText(/show the full system shape/i)).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /7 panorama/i }));

    expect(screen.getByText(/step 7 of/i)).toBeInTheDocument();
    expect(screen.getByText(/show the full system shape/i)).toBeInTheDocument();
    expect(screen.getByTestId("rf__node-failVerify")).toHaveStyle({ opacity: "1" });
  });

  it("switches directly between labeled steps", async () => {
    const user = userEvent.setup();

    render(<FrameworkDiagram diagram={diagrams[0]} />);

    await user.click(screen.getByRole("button", { name: /3 verify result/i }));

    expect(screen.getByText(/step 3 of/i)).toBeInTheDocument();
    expect(screen.getByText(/verification completes the visible execution pass/i)).toBeInTheDocument();
  });

  it("renders step participant annotations for oh-my-opencode", async () => {
    const user = userEvent.setup();

    render(<FrameworkDiagram diagram={diagrams[0]} />);

    await user.click(screen.getByRole("button", { name: /2 dispatch execution/i }));

    expect(screen.getByText(/participants/i)).toBeInTheDocument();
    expect(screen.getAllByText(/sisyphus/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/oracle/i).length).toBeGreaterThan(0);
    expect(screen.queryByText(/primary agent/i)).not.toBeInTheDocument();
  });

  it("exposes a layout edit mode with a live position snapshot", async () => {
    const user = userEvent.setup();

    render(<FrameworkDiagram diagram={diagrams[0]} />);

    const toggle = screen.getByRole("button", { name: /layout edit/i });

    expect(toggle).toHaveAttribute("aria-pressed", "false");
    expect(
      screen.queryByText(/drag nodes and edge control points to arrange the full diagram/i),
    ).not.toBeInTheDocument();

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getAllByText(/drag nodes and edge control points to arrange the full diagram/i),
    ).toHaveLength(2);
    expect(screen.getAllByText(/drag empty canvas to pan/i)).toHaveLength(2);
    expect(screen.getByText(/intent: x=-27, y=297/i)).toBeInTheDocument();
    expect(screen.getByText(/shell: x=775, y=523/i)).toBeInTheDocument();
    expect(screen.getByText(/e9\[1\]: x=1742, y=562/i)).toBeInTheDocument();
    expect(screen.getByText(/e9: source anchor=left, target anchor=bottom/i)).toBeInTheDocument();
  });

  it("copies the current layout snapshot to the clipboard", async () => {
    const user = userEvent.setup();
    const writeTextSpy = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue(undefined);

    render(<FrameworkDiagram diagram={diagrams[0]} />);

    await user.click(screen.getByRole("button", { name: /layout edit/i }));
    await user.click(screen.getByRole("button", { name: /copy layout snapshot/i }));

    expect(writeTextSpy).toHaveBeenCalledTimes(1);
    expect(writeTextSpy.mock.calls[0]?.[0]).toContain("intent: x=-27, y=297");
    expect(writeTextSpy.mock.calls[0]?.[0]).toContain(
      "e9: source anchor=left, target anchor=bottom",
    );
  });
});
