import { createBrowserRouter } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Category from "../pages/CategoryPage";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ProfilePage from "../pages/ProfilePage";


const routerName = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <ErrorPage /> },
    { path: '/cart', element: <CartPage />, errorElement: <ErrorPage /> },
    { path: '/category', element: <Category />, errorElement: <ErrorPage /> },
    { path: '/profile', element: <ProfilePage />, errorElement: <ErrorPage /> }
])

export default routerName
