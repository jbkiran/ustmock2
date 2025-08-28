import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "./ProductCard";
import type { Product } from "../types/productTypes";

describe("ProductCard", () => {
  const mockProduct: Product = {
    id: 1,
    title: "Test Product",
    description: "This is a test product",
    price: 100,
    availabilityStatus: "In Stock",
    thumbnail: "https://via.placeholder.com/150",
  };

  const mockIsFavourite = vi.fn();
  const mockToggleFavourite = vi.fn();

  it("renders product details correctly", () => {
    mockIsFavourite.mockReturnValue(false);

    render(
      <ProductCard
        product={mockProduct}
        isFavourite={mockIsFavourite}
        toggleFavourite={mockToggleFavourite}
      />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("This is a test product")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("In Stock")).toBeInTheDocument();
  });

  it("calls toggleFavourite when favourite button is clicked", () => {
    mockIsFavourite.mockReturnValue(true);

    render(
      <ProductCard
        product={mockProduct}
        isFavourite={mockIsFavourite}
        toggleFavourite={mockToggleFavourite}
      />
    );

    const favButton = screen.getByRole("button");
    fireEvent.click(favButton);

    expect(mockToggleFavourite).toHaveBeenCalledWith(1);
  });
});
