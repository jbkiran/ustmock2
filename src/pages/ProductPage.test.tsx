import { render, screen } from "@testing-library/react";
import { describe, it, vi, beforeEach } from "vitest";
import ProductPage from "./ProductPage";

// Mock dependencies
vi.mock("../components/ProductList", () => ({
  default: ({ productData }: { productData: any[] }) => (
    <div data-testid="product-list">{productData.length} products</div>
  ),
}));

vi.mock("../components/skeletons/ProductSkeleton", () => ({
  default: () => <div data-testid="skeleton">Loading...</div>,
}));

vi.mock("../hooks/useProducts", () => ({
  useProducts: vi.fn(),
}));

import { useProducts } from "../hooks/useProducts";

describe("ProductPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders error state", () => {
    (useProducts as vi.Mock).mockReturnValue({
      loading: false,
      error: true,
      products: [],
    });

    render(<ProductPage />);
    expect(screen.getByText("Some Error Occurred")).toBeInTheDocument();
  });

  it("renders loading skeletons when loading", () => {
    (useProducts as vi.Mock).mockReturnValue({
      loading: true,
      error: false,
      products: [],
    });

    render(<ProductPage />);
    expect(screen.getAllByTestId("skeleton").length).toBe(4);
  });

});
