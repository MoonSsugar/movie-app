import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RatingCircle from "./RatingCircle";
import "@testing-library/jest-dom";

describe("RatingCircle", () => {
  it("render percentage correctly", () => {
    render(<RatingCircle size={50} percentage={75} />);

    const textElement = screen.getByText(/75/);
    const percentSymbol = screen.getByText("%");

    expect(textElement).toBeInTheDocument();
    expect(percentSymbol).toBeInTheDocument();
  });

  it("applies green color for high percentage", () => {
    render(<RatingCircle size={50} percentage={75} />);

    const circle = screen.getByTestId("progress-circle");

    expect(circle).toHaveClass('stroke-green-500');
  });

  it("renders NR when percentage is 0", () => {
    render(<RatingCircle size={50} percentage={0} />);
    
    expect(screen.getByText("NR")).toBeInTheDocument();
    expect(screen.queryByText("0%")).not.toBeInTheDocument();
  });
});
