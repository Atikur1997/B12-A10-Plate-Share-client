import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import AvailableFoods from "../AvailableFoods/AvailableFoods";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/login",
                Component: Login,
            }, {
                path: '/avaiable_foods',
                Component: AvailableFoods
            }
        ]
    }
]);