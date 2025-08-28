import { useEffect, useState } from "react";
import type { Product } from "../types/productTypes";
import { productApi } from "../services/productApi";
import { handleError } from "../utils/handleError";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);

    productApi({ signal })
      .then((data) => setProducts(data.products))
      .catch((error) => {
        if (error.name !== "AbortError") {
          setError(handleError(error));
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { products, loading, error };
}
