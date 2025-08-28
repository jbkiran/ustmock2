import { renderHook, waitFor } from "@testing-library/react";
import { useProducts } from "./useProducts";
import { productApi } from "../services/productApi";
import { describe, it, expect, vi, afterEach } from "vitest";

vi.mock("../services/productApi", () => ({
  productApi: vi.fn(),
}));

vi.mock("../utils/handleError", () => ({
  handleError: vi.fn(() => "Mocked Error"),
}));

describe("useProducts hook", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch and set products successfully", async () => {
    (productApi as vi.Mock).mockResolvedValueOnce({
      products: [
        {
          id: 1,
          title: "Test Product",
          description: "Test Desc",
          price: 100,
          availabilityStatus: "In Stock",
          thumbnail: "img.png",
        },
      ],
    });

    const { result } = renderHook(() => useProducts());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.products).toHaveLength(1);
    });
  });

  it("should handle error when productApi rejects", async () => {
    (productApi as vi.Mock).mockRejectedValueOnce(new Error("fetch failed"));

    const { result } = renderHook(() => useProducts());

    await waitFor(() => {
      expect(result.current.error).toBe("Mocked Error");
      expect(result.current.loading).toBe(false);
    });
  });
});
