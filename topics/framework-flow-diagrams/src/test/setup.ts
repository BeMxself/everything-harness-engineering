import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, vi } from "vitest";

class ResizeObserverMock {
  observe() {}

  unobserve() {}

  disconnect() {}
}

globalThis.ResizeObserver = ResizeObserverMock as typeof ResizeObserver;

export const clipboardWriteTextMock = vi.fn();

Object.defineProperty(globalThis.navigator, "clipboard", {
  configurable: true,
  value: {
    writeText: clipboardWriteTextMock,
  },
});

beforeEach(() => {
  clipboardWriteTextMock.mockReset();
});

afterEach(() => {
  cleanup();
});
