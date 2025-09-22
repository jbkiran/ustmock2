import type {
  ProductRequestProp,
  ProductResponse,
} from "../types/productTypes";

export async function productApi({
  signal,
  query = "",
  limit = 10,
  page = 0,
}: ProductRequestProp): Promise<ProductResponse> {
  try {
    const skip = (page - 1) * limit;
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`,
      { signal }
    );
    if (!response.ok) {
      throw new Error("failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
