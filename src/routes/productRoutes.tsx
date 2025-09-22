import ProductDetailPage from "../pages/ProductDetailPage";
import ProductPage from "../pages/ProductPage";

export const productRoutes = [
  {
    index: true,
    Element: <ProductPage />,
  },
  {
    path: "",
    Element: <ProductDetailPage />,
  },
];
