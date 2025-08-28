import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductSkeleton from "./ProductSkeleton";
import "@testing-library/jest-dom";

vi.mock("../ui/Skeleton", () => {
  return {
    default: ({ className }: { className?: string }) => (
      <div data-testid="skeleton" className={className} />
    ),
  };
});

describe("ProductSkeleton", () => {
  it("renders all skeleton placeholders", () => {
    render(<ProductSkeleton />);

    const skeletons = screen.getAllByTestId("skeleton");
    expect(skeletons).toHaveLength(6);
    expect(skeletons[0]).toHaveClass("w-full h-48 object-cover");
    expect(skeletons[1]).toHaveClass("h-4 w-full");
    expect(skeletons[5]).toHaveClass("mt-3 h-10 w-full rounded-xl");
  });
});
