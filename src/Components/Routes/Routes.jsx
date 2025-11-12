import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Pages/Register/Register";
import AvailableFoods from "../AvailableFoods/AvailableFoods";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFood from "../Pages/ManageFood/ManageFood";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import PrivateRoute from "../Provider/PrivateRoute";
import Loader from "../Loader/Loader";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: async () => {
                    const res = await fetch("http://localhost:5000/home_foods");
                    if (!res.ok)
                        throw new Response("Failed to load home foods", {
                            status: res.status,
                        });
                    return res.json();
                },
                element: <Home />,
                hydrateFallbackElement: <Loader />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Register />,
            },
            {
                path: "/available_foods",
                loader: async () => {
                    const res = await fetch("http://localhost:5000/available_foods");
                    if (!res.ok)
                        throw new Response("Failed to load available foods", {
                            status: res.status,
                        });
                    return res.json();
                },
                element: <AvailableFoods />,
            },
            {
                path: "/food_details/:id",
                loader: async ({ params }) => {
                    const res = await fetch(
                        `http://localhost:5000/available_foods/${params.id}`
                    );
                    if (!res.ok)
                        throw new Response("Food not found", { status: res.status });
                    return res.json();
                },
                element: (
                    <PrivateRoute>
                        <FoodDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/add_food",
                element: (
                    <PrivateRoute>
                        <AddFood />
                    </PrivateRoute>
                ),
            },
            {
                path: "/manage_my_foods",
                element: (
                    <PrivateRoute>
                        <ManageFood />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my_food_requests",
                loader: async () => {

                    const user = JSON.parse(localStorage.getItem("currentUser"));


                    const res = await fetch(`http://localhost:5000/food_requests?email=${user.email}`);

                    return res.json();
                },
                element: (
                    <PrivateRoute>
                        <FoodRequest />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
