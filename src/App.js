import Layout from "./components/layoutContent/layoutContent";
import Products from "./pages/Products";
import "./App.css";
import { RouterProvider, createBrowserRouter, useLocation, useSearchParams } from "react-router-dom";
import FilterProducts from "./pages/FilterProducts";
import { useEffect } from "react";

export const router = createBrowserRouter([
  { path: "/", element: <Layout />, children: [
      { index: true, element: <Products /> },
      { path: ':homeType', element: <FilterProducts/>}
    ],
  },
]);
function App() {
  // const [searchParams] = useSearchParams();
  // useEffect(()=>{
  //   searchParams.get("homeType")
  // },[searchParams])
  return <RouterProvider router={router} />;
}

export default App;
