import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import AvailableFoods from "../AvailableFoods/AvailableFoods";
import Register from "../Pages/Register/Register";
import Loader from "../Loader/Loader";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFood from "../Pages/ManageFood/ManageFood";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";


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
                path: '/available_foods',
                loader: () => fetch('http://localhost:5000/available_foods'),
                Component: AvailableFoods,
            },
            {
                path: '/food_details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/available_foods/${params.id}`),
                element: <PrivateRoute>
                    <FoodDetails></FoodDetails>
                </PrivateRoute>,
            },
            {
                path: '/add_food',
                element: <PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>,
            },
            {
                path: '/manage_my_foods',
                element: <PrivateRoute>
                    <ManageFood></ManageFood>
                </PrivateRoute>
            },
            {
                path: '/my_food_requests',
                element: <PrivateRoute>
                    <FoodRequest></FoodRequest>
                </PrivateRoute>
            }

        ]
    }
]);