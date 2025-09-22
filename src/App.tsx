import "./App.css";
import ProductDummy from "./pages/ProductDummy";
import ProductPage from "./pages/ProductPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductPage />
      </QueryClientProvider>
      
      {/* <ProductDummy /> */}
    </>
  );
}

export default App;
