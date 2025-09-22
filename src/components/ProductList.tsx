import { useFavourite } from "../hooks/useFavourite";
import type { Product } from "../types/productTypes";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./skeletons/ProductSkeleton";

type ProductListProps = {
  productData: Product[] | undefined;
  loading: boolean;
  fetching: boolean;
};
const ProductList = ({ productData, loading, fetching }: ProductListProps) => {
  const { isFavourite, toggleFavourite } = useFavourite();

  if (loading || fetching) {
    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </>
    );
  }
  if (!loading && productData?.length === 0) {
    return <p>No Record Found</p>;
  }
  return productData?.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      isFavourite={isFavourite}
      toggleFavourite={toggleFavourite}
    />
  ));
};

export default ProductList;
