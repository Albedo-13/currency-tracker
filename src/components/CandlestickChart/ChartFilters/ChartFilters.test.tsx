import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ChartFilters } from "./ChartFilters";

describe("ChartFilters", () => {
  it('should initialize the "from" and "to" state with 0', () => {
    render(<ChartFilters onFilterClick={vi.fn()} />);

    expect(screen.getByLabelText("from:")).toHaveValue("");
    expect(screen.getByLabelText("to:")).toHaveValue("");
  });

  it('should call onFilterClick with the correct "from" and "to" values when the filter button is clicked', () => {
    const onFilterClickMock = vi.fn();
    render(<ChartFilters onFilterClick={onFilterClickMock} />);

    const fromInput = screen.getByLabelText("from:");
    const toInput = screen.getByLabelText("to:");
    const filterButton = screen.getByRole("button", { name: "Filter" });

    fireEvent.change(fromInput, { target: { value: "2024-04-01" } });
    fireEvent.change(toInput, { target: { value: "2024-04-05" } });
    fireEvent.click(filterButton);

    expect(onFilterClickMock).toHaveBeenCalledWith(Date.parse("2024-04-01"), Date.parse("2024-04-05"));
  });

  it('should update the "from" state when the "from" date input changes', () => {
    render(<ChartFilters onFilterClick={vi.fn()} />);
    const fromInput = screen.getByLabelText("from:");

    fireEvent.change(fromInput, { target: { value: "2024-04-01" } });

    expect(fromInput).toHaveValue("2024-04-01");
  });

  it('should update the "to" state when the "to" date input changes', () => {
    render(<ChartFilters onFilterClick={vi.fn()} />);
    const toInput = screen.getByLabelText("to:");

    fireEvent.change(toInput, { target: { value: "2024-04-05" } });

    expect(toInput).toHaveValue("2024-04-05");
  });

  it("should call onFilterClick when the filter button is clicked", () => {
    const onFilterClickMock = vi.fn();
    render(<ChartFilters onFilterClick={onFilterClickMock} />);
    const filterButton = screen.getByRole("button", { name: "Filter" });

    fireEvent.click(filterButton);

    expect(onFilterClickMock).toHaveBeenCalled();
  });

  // Add more tests for other component interactions and state changes
});
