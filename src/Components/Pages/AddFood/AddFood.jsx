import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [foodData, setFoodData] = useState({
        foodName: '',
        foodImage: '',
        foodQuantity: '',
        pickupLocation: '',
        expireDate: '',
        notes: '',
        category: '',
        serves: '' // <-- Added serves field
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFoodData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const newFood = {
            ...foodData,
            donatorName: user?.displayName || 'Anonymous',
            donatorEmail: user?.email,
            donatorImage: user?.photoURL,
            food_status: 'Available'
        };

        try {
            const res = await fetch('http://localhost:5000/available_foods', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newFood)
            });
            if (res.ok) {
                toast.success('✅ Food added successfully!');
                setFoodData({
                    foodName: '',
                    foodImage: '',
                    foodQuantity: '',
                    pickupLocation: '',
                    expireDate: '',
                    notes: '',
                    category: '',
                    serves: '' // <-- reset serves
                });
            } else {
                toast.error('❌ Failed to add food');
            }
        } catch (err) {
            toast.error('🚫 Error submitting data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 max-w-[1200px] mx-auto rounded-3xl">

            <motion.div
                className="absolute w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-white/50"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-6">
                    🍽 Add Food
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Food Name */}
                    <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block mb-1 text-gray-700 font-semibold">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            value={foodData.foodName}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                        />
                    </motion.div>

                    {/* Category */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-semibold">Category</label>
                        <select
                            name="category"
                            value={foodData.category}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                        >
                            <option value="">Select a category</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Beverage">Beverage</option>
                            <option value="Dairy">Dairy</option>
                        </select>
                    </div>

                    {/* Serves */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-semibold">Serves</label>
                        <input
                            type="text"
                            name="serves"
                            value={foodData.serves}
                            onChange={handleChange}
                            placeholder="e.g., Serves 2 people"
                            required
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-semibold">Food Image URL</label>
                        <input
                            type="url"
                            name="foodImage"
                            value={foodData.foodImage}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                        />
                        {foodData.foodImage && (
                            <motion.img
                                src={foodData.foodImage}
                                alt="Preview"
                                className="mt-3 rounded-xl shadow-md w-full h-48 object-cover border border-gray-200"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            />
                        )}
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-semibold">Food Quantity</label>
                        <input
                            type="text"
                            name="foodQuantity"
                            placeholder="e.g., 3 boxes / 2 kg"
                            value={foodData.foodQuantity}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Pickup Location */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-semibold">Pickup Location</label>
                        <input
                            type="text"
                            name="pickupLocation"
                            value={foodData.pickupLocation}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                        />
                    </div>

                    {/* Expire Date */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-semibold">Expire Date</label>
                        <input
                            type="date"
                            name="expireDate"
                            value={foodData.expireDate}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                        />
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-semibold">Additional Notes</label>
                        <textarea
                            name="notes"
                            value={foodData.notes}
                            onChange={handleChange}
                            placeholder="Any extra details..."
                            className="textarea textarea-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        ></textarea>
                    </div>

                    {/* Donator Info */}
                    <div className="flex items-center gap-3 mt-6 bg-gradient-to-r from-blue-50 to-pink-50 p-3 rounded-xl border border-gray-200">
                        <img
                            src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
                            alt="User"
                            className="w-12 h-12 rounded-full object-cover border border-pink-200"
                        />
                        <div>
                            <h4 className="font-semibold text-gray-700">{user?.displayName || 'Anonymous'}</h4>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                        className="w-full py-3 mt-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        {loading ? 'Submitting...' : '✨ Add Food'}
                    </motion.button>
                </form>
            </motion.div>
            <ToastContainer />
        </div>
    );
};

export default AddFood;
