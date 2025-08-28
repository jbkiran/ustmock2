import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skeleton from "./Skeleton";
import { describe, it, expect } from "vitest";

describe("Skeleton Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Skeleton className="h-4 w-20" />);
    const skeleton = container.querySelector(".animate-pulse");
    expect(skeleton).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    const { container } = render(
      <Skeleton className="h-10 w-10 custom-class" />
    );
    const skeleton = container.querySelector(".animate-pulse") as HTMLElement;
    expect(skeleton).toHaveClass("h-10", "w-10", "custom-class");
  });

  it("always has base classes", () => {
    const { container } = render(<Skeleton className="h-6 w-6" />);
    const skeleton = container.querySelector(".animate-pulse") as HTMLElement;
    expect(skeleton).toHaveClass(
      "animate-pulse",
      "rounded-md",
      "bg-gray-300",
      "dark:bg-gray-700"
    );
  });

  it("handles empty className (no 'undefined')", () => {
    const { container } = render(<Skeleton className="" />);
    const skeleton = container.querySelector(".animate-pulse") as HTMLElement;
    expect(skeleton).toBeInTheDocument();
    const classAttr = skeleton.getAttribute("class") || "";
    expect(classAttr).not.toContain("undefined");
  });
});
