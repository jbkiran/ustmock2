import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { productRoutes } from "./productRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    children: [...productRoutes],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
