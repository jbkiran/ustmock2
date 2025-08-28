import ProductList from "../components/ProductList";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useProducts } from "../hooks/useProducts";

const ProductPage = () => {
  const { loading, error, products } = useProducts();
  if (error) return <p>Some Error Occurred</p>;
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <hr className="p-0 m-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        ) : (
          <ProductList productData={products} />
        )}
      </div>
    </main>
  );
};

export default ProductPage;
