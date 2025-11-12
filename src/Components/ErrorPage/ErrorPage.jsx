import React from "react";
import { useNavigate } from "react-router";
import appError from "../../assets/App-Error.png";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4 text-white">
            <img
                src={appError}
                alt="Error"
                className="w-80 md:w-96 mb-6 animate-pulse"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
                Oops! Something went wrong.
            </h1>
            <p className="text-gray-300 mb-8 text-center max-w-md">
                The page you are looking for might be broken, removed, or temporarily
                unavailable. Please try again later or go back to the home page.
            </p>
            <button
                onClick={() => navigate("/")}
                className="bg-red-500 hover:bg-red-600 transition duration-300 px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorPage;
