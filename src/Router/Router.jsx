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

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/allProducts',
                loader: ()=> fetch('http://localhost:3000/products'),
                Component: AllProducts
            },
            {
                path: '/myProducts',
                Component: MyProducts
            },
            {
                path: '/myBids',
                Component: MyBids
            },
            {
                path: '/createProduct',
                Component: CreateProduct
            },
            {
                path: '/register',
                Component: RegisterForm
            },
            {
                path: '/login',
                Component: LoginForm
            },
            {
                path: '/productDetails/:id',
                loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
                Component: ProductDetails
            }
        ]
    }
])