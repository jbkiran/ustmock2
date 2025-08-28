import { useFavourite } from "../hooks/useFavourite";
import type { Product } from "../types/productTypes";
import ProductCard from "./ProductCard";

type ProductListProps = {
  productData: Product[];
};
const ProductList = ({ productData }: ProductListProps) => {
  const { isFavourite, toggleFavourite } = useFavourite();
  if (productData.length === 0) {
    return <p>No Record Found</p>;
  }
  return productData.map((product) => <ProductCard key={product.id} product={product} isFavourite={isFavourite} toggleFavourite={toggleFavourite}/>);
};

export default ProductList;
