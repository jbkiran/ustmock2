import ProductList from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";
import CartIcon from "../components/ui/CartIcon";

const ProductPage = () => {
  const { isFetching, isLoading, data, error } = useProducts({});
  const products = data?.products;
  if (error) return <p>Some Error Occurred</p>;
  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <CartIcon cartItemCount={2} />
      </div>
      <hr className="p-0 m-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        <ProductList
          productData={products}
          loading={isLoading}
          fetching={isFetching}
        />
      </div>
    </main>
  );
};

export default ProductPage;
