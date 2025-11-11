import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import AvailableFoods from "../AvailableFoods/AvailableFoods";
import Register from "../Pages/Register/Register";
import Loader from "../Loader/Loader";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:5000/home_foods'),
                Component: Home,
                hydrateFallbackElement: <Loader></Loader>


            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: '/signup',
                Component: Register,

            },

            {
                path: '/avaiable_foods',
                loader: () => fetch('http://localhost:5000/available_foods'),
                Component: AvailableFoods,
            }
        ]
    }
]);