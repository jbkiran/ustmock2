import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ProductList from "./ProductList";
import type { Product } from "../types/productTypes";

vi.mock("../hooks/useFavourite", () => ({
  useFavourite: () => ({
    isFavourite: vi.fn(() => false),
    toggleFavourite: vi.fn(),
  }),
}));

vi.mock("./ProductCard", () => ({
  default: ({ product }: { product: Product }) => (
    <div data-testid="product-card">{product.title}</div>
  ),
}));

describe("ProductList component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockProducts: Product[] = [
    {
      id: 1,
      title: "iPhone 15",
      description: "Latest Apple iPhone",
      price: 120000,
      availabilityStatus: "In Stock",
      thumbnail: "https://example.com/iphone15.jpg",
    },
    {
      id: 2,
      title: "Samsung Galaxy S24",
      description: "Flagship Samsung phone",
      price: 95000,
      availabilityStatus: "Low Stock",
      thumbnail: "https://example.com/s24.jpg",
    },
  ];

  it("renders 'No Record Found' when productData is empty", () => {
    render(<ProductList productData={[]} />);
    expect(screen.getByText("No Record Found")).toBeInTheDocument();
  });

  it("renders ProductCard items when productData is provided", () => {
    render(<ProductList productData={mockProducts} />);

    expect(screen.queryByText("No Record Found")).not.toBeInTheDocument();

    const cards = screen.getAllByTestId("product-card");
    expect(cards).toHaveLength(2);

    expect(screen.getByText("iPhone 15")).toBeInTheDocument();
    expect(screen.getByText("Samsung Galaxy S24")).toBeInTheDocument();
  });
});
