import type { Product } from "../types/productTypes";

type ProductRequestProp = {
  signal?: AbortSignal;
};
type ProductResponse = {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
};
export async function productApi({
  signal,
}: ProductRequestProp): Promise<ProductResponse> {
  try {
    const response = await fetch("https://dummyjson.com/products", { signal });
    if (!response.ok) {
      throw new Error("failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
