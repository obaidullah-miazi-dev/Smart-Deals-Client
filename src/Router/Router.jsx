import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllProducts from "../Pages/AllProducts";
import MyProducts from "../Pages/MyProducts";
import MyBids from "../Pages/MyBids";
import CreateProduct from "../Pages/CreateProduct";
import RegisterForm from "../Pages/RegisterForm";
import LoginForm from "../Pages/LoginForm";
import ProductDetails from "../components/ProductDetails";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allProducts",
        loader: () =>
          fetch("https://smart-deals-db-server.onrender.com/products"),
        Component: AllProducts,
      },
      {
        path: "/myProducts",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
      {
        path: "/createProduct",
        element: (
          <PrivateRoute>
            <CreateProduct></CreateProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: RegisterForm,
      },
      {
        path: "/login",
        Component: LoginForm,
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://smart-deals-db-server.onrender.com/products/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
