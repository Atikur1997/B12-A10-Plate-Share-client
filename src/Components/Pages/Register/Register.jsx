import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoUrl = form.photo.value.trim();

        if (password !== confirm) {
            toast.error("Passwords do not match");
            return;
        }

        createUser(email, password)
            .then(() => {

                updateUser({
                    displayName: name,
                    photoURL: photoUrl || null,
                })
                    .then(() => {
                        toast.success("User registered successfully!");
                        form.reset();
                    })
                    .catch((error) => toast.error(error.message));
            })
            .catch((error) => toast.error(error.message));
        navigate('/')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg text-white"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-orange-400">
                    Create an Account
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-300 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>

                <div className="mb-4 relative">
                    <label className="block text-gray-300 mb-1">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-9 cursor-pointer text-gray-400"
                    >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                </div>

                <div className="mb-4 relative">
                    <label className="block text-gray-300 mb-1">Confirm Password</label>
                    <input
                        type={showConfirm ? "text" : "password"}
                        name="confirm"
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <span
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-9 cursor-pointer text-gray-400"
                    >
                        {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-300 mb-1">Photo URL (optional)</label>
                    <input
                        type="text"
                        name="photo"
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-purple-500 hover:bg-purple-700 rounded-lg font-semibold transition duration-200"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Register;
