import "@testing-library/jest-dom";

import { act, fireEvent, queryByTestId, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { keyboard } from "@testing-library/user-event/dist/cjs/setup/directApi.js";
import { afterEach, describe, expect, it, test, vi } from "vitest";

import Modal from "./Modal";

describe("Modal", () => {
  it("should be displayed on the screen", () => {
    render(<Modal onClose={() => {}}>Modal content</Modal>);

    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  test("should be closed on X click", async () => {
    const onClose = vi.fn();
    render(<Modal onClose={onClose}>Modal content</Modal>);
    const closeButton = screen.getByTestId("modal-close");

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should be closed on escape click", async () => {
    const onClose = vi.fn();
    render(<Modal onClose={onClose}>Modal content</Modal>);

    fireEvent.keyDown(document.body, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
