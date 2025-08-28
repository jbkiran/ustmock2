import { describe, it, expect, vi, beforeEach } from "vitest";
import { productApi } from "./productApi";

describe("productApi", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("return products when fetch is successful", async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({
        limit: 10,
        skip: 0,
        total: 1,
        products: [{ id: 1, title: "Test Product" }],
      }),
    };

    vi.spyOn(global, "fetch").mockResolvedValue(mockResponse as Response);

    const result = await productApi({});
    expect(result.products[0].title).toBe("Test Product");
  });

  it("throw error when response is not ok", async () => {
    const mockResponse = {
      ok: false,
      json: async () => ({}),
    };

    vi.spyOn(global, "fetch").mockResolvedValue(mockResponse as Response);

    await expect(productApi({})).rejects.toThrow("failed to fetch products");
  });
});
