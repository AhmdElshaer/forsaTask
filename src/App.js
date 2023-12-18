import Layout from "./components/layoutContent/layoutContent";
import Products from "./pages/Products";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <Layout />, children: [
      { index: true, element: <Products /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
