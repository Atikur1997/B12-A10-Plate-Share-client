import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { motion } from 'framer-motion';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodDetails = () => {
    const { id } = useParams();
    const foodData = useLoaderData();
    const { user } = useContext(AuthContext);

    const {
        category,
        description,
        donatorName,
        expireDate,
        foodImage,
        foodName,
        foodQuantity,
        pickupLocation,
        serves,
    } = foodData;


    const handleRequestFood = async () => {
        if (!user) {
            return toast.error("You must be logged in to request food!");
        }

        try {
            const response = await fetch(`http://localhost:5000/food_requests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    foodId: id,
                    userEmail: user.email,
                    foodName: foodName,
                }),
            });

            if (response.ok) {
                toast.success("Food requested successfully!");
            } else {
                toast.error("Failed to request food. Try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-black text-white flex items-center justify-center py-16 px-4 max-w-[1200px] mx-auto rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="max-w-5xl w-full bg-gray-800/40 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border border-gray-700 flex flex-col md:flex-row"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >

                <div className="md:w-1/2 relative">
                    <img
                        src={foodImage}
                        alt={foodName}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                        <span className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm uppercase tracking-wide">
                            {category}
                        </span>
                    </div>
                </div>


                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-orange-400">
                            {foodName}
                        </h1>
                        <p className="text-gray-300 text-sm mb-4 italic">
                            Donated by <span className="text-white font-semibold">{donatorName}</span>
                        </p>

                        <p className="text-gray-200 leading-relaxed mb-6">
                            {description || "No description available for this food item."}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="bg-gray-700/50 rounded-lg p-3">
                                <p className="text-gray-400">🍽 Serves</p>
                                <p className="font-semibold text-white">{serves}</p>
                            </div>

                            <div className="bg-gray-700/50 rounded-lg p-3">
                                <p className="text-gray-400">📦 Quantity</p>
                                <p className="font-semibold text-white">{foodQuantity}</p>
                            </div>

                            <div className="bg-gray-700/50 rounded-lg p-3">
                                <p className="text-gray-400">📅 Expire Date</p>
                                <p className="font-semibold text-white">{expireDate}</p>
                            </div>

                            <div className="bg-gray-700/50 rounded-lg p-3">
                                <p className="text-gray-400">📍 Pickup Location</p>
                                <p className="font-semibold text-white">{pickupLocation}</p>
                            </div>
                        </div>
                    </div>


                    <div className="mt-8 flex justify-end">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRequestFood}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
                        >
                            Request Food
                        </motion.button>
                    </div>
                </div>
            </motion.div>
            <ToastContainer position="top-center" autoClose={3000} />
        </motion.div>
    );
};

export default FoodDetails;
