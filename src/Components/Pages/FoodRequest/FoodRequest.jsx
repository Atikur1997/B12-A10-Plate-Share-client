import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodRequest = () => {
    const loaderData = useLoaderData();
    const [requestedFoods, setRequestedFoods] = useState(loaderData);


    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to remove this food request?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`http://localhost:5000/food_requests/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (res.ok && data.deletedCount > 0) {

                setRequestedFoods((prev) => prev.filter((food) => food._id !== id));
                toast.success("Food request deleted successfully!");
            } else {
                toast.error(data.error || "Failed to delete food request");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong while deleting!");
        }
    };

    if (!requestedFoods || requestedFoods.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-300 text-xl font-semibold">
                You have no requested foods yet.
                <ToastContainer />
            </div>
        );
    }

    return (
        <motion.div
            className="min-h-screen bg-gray-900 text-white py-16 px-4 max-w-[1200px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-orange-400 text-center">
                My Food Requests
            </h1>

            <AnimatePresence>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {requestedFoods.map((food) => (
                        <motion.div
                            key={food._id}
                            className="relative bg-gray-800/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 shadow-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >

                            <button
                                onClick={() => handleDelete(food._id)}
                                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-7 h-7 flex items-center justify-center z-10"
                            >
                                ✕
                            </button>


                            <div className="relative h-48">
                                <img
                                    src={food.foodImage || "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"}
                                    alt={food.foodName}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <span className="absolute bottom-2 left-2 bg-orange-600 px-2 py-1 rounded text-sm uppercase tracking-wide">
                                    {food.category || "Food"}
                                </span>
                            </div>


                            <div className="p-4 flex flex-col justify-between h-56">
                                <div>
                                    <h2 className="text-xl font-bold mb-2 text-white">{food.foodName}</h2>
                                    <p className="text-gray-300 text-sm mb-2">
                                        Donated by <span className="font-semibold">{food.donatorName}</span>
                                    </p>
                                    <p className="text-gray-400 text-sm mb-4 truncate">
                                        {food.description || "No description available."}
                                    </p>
                                </div>

                                <div className="flex justify-between text-sm text-gray-300">
                                    <div>
                                        Quantity: <span className="text-white font-semibold">{food.foodQuantity}</span>
                                    </div>
                                    <div>
                                        Serves: <span className="text-white font-semibold">{food.serves || "-"}</span>
                                    </div>
                                </div>

                                <div className="text-gray-400 text-sm mt-2">
                                    Pickup: <span className="text-white font-semibold">{food.pickupLocation}</span>
                                </div>

                                <div className="text-gray-400 text-sm mt-1">
                                    Status: <span className="text-white font-semibold">{food.status || "Pending"}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>

            <ToastContainer position="bottom-right" autoClose={1500} />
        </motion.div>
    );
};

export default FoodRequest;
