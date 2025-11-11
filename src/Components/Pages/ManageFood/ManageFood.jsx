import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingFood, setEditingFood] = useState(null);

    const fetchUserFoods = async () => {
        try {
            const res = await fetch('http://localhost:5000/available_foods');
            const data = await res.json();
            const userFoods = data.filter(food => food.donatorEmail === user?.email);
            setFoods(userFoods);
        } catch (err) {
            console.error(err);
            toast.error('Failed to fetch your foods');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.email) {
            fetchUserFoods();
        }
    }, [user]);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this food?')) return;
        try {
            const res = await fetch(`http://localhost:5000/available_foods/${id}`, { method: 'DELETE' });
            if (res.ok) {
                toast.success('Food deleted successfully!');
                setFoods(prev => prev.filter(food => food._id !== id));
            } else {
                toast.error('Failed to delete food');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error deleting food');
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingFood(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/available_foods/${editingFood._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingFood),
            });
            if (res.ok) {
                toast.success('Food updated successfully!');
                setEditingFood(null);
                fetchUserFoods();
            } else {
                toast.error('Failed to update food');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error updating food');
        }
    };

    return (
        <div className="min-h-screen p-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">🍽 Manage My Foods</h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading your foods...</p>
            ) : foods.length === 0 ? (
                <p className="text-center text-gray-500">You haven't added any foods yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-purple-100">
                                <th className="border p-2">#</th>
                                <th className="border p-2">Food Name</th>
                                <th className="border p-2">Category</th>
                                <th className="border p-2">Quantity</th>
                                <th className="border p-2">Expire Date</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foods.map((food, index) => (
                                <tr key={food._id} className="text-center">
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{food.foodName}</td>
                                    <td className="border p-2">{food.category}</td>
                                    <td className="border p-2">{food.foodQuantity}</td>
                                    <td className="border p-2">{food.expireDate}</td>
                                    <td className="border p-2 flex justify-center gap-2">
                                        <button
                                            onClick={() => setEditingFood(food)}
                                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(food._id)}
                                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Update Modal */}
            {editingFood && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="bg-white rounded-xl p-6 w-full max-w-md"
                    >
                        <h3 className="text-xl font-bold mb-4 text-center">Update Food</h3>
                        <form onSubmit={handleUpdate} className="space-y-3">
                            <input
                                type="text"
                                name="foodName"
                                value={editingFood.foodName}
                                onChange={handleEditChange}
                                className="input input-bordered w-full"
                                placeholder="Food Name"
                                required
                            />

                            {/* Category Dropdown */}
                            <select
                                name="category"
                                value={editingFood.category || ''}
                                onChange={handleEditChange}
                                className="input input-bordered w-full"
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="Fruits">Fruits</option>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Beverage">Beverage</option>
                                <option value="Dairy">Dairy</option>
                            </select>

                            <input
                                type="text"
                                name="foodQuantity"
                                value={editingFood.foodQuantity}
                                onChange={handleEditChange}
                                className="input input-bordered w-full"
                                placeholder="Quantity"
                                required
                            />
                            <input
                                type="date"
                                name="expireDate"
                                value={editingFood.expireDate}
                                onChange={handleEditChange}
                                className="input input-bordered w-full"
                                required
                            />
                            <div className="flex justify-end gap-2 mt-3">
                                <button
                                    type="button"
                                    onClick={() => setEditingFood(null)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}

            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default ManageFood;
