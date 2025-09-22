import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { productApi } from "../services/productApi";
import type { ProductResponse } from "../types/productTypes";

export function useProducts({ query = "", limit = 12, page = 1 }) {
  return useQuery<ProductResponse>({
    queryKey: ["products", query, limit, page],
    queryFn: ({ signal }) => productApi({ signal, query, limit, page }),
    staleTime: 1000 * 60 * 5,
    retry: 2,
    placeholderData: keepPreviousData,
  });
}
