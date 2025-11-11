import React, { use, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./Register.css"; // animations
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { user, createUser, setUser } = use(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoUrl = form.photo.value;

        if (password !== confirm) {
            toast("Passwords do not match", {
                type: "error",
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
            return
        }
        // handle sign-up logic here
        createUser(email, password)
            .then(() => {
                toast("User created successfully", {
                    type: "success",
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
                setUser({ name, email })
            })
            .catch((error) => {
                toast(error.message, {
                    type: "error",
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
            })

    };

    const handleGoogleSignUp = () => {
        // handle Google sign-up logic here
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800">
            <div className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 animate-slideInFromLeft">
                <h2 className="text-center text-4xl font-extrabold text-white animate-appear">
                    Create Account
                </h2>
                <p className="text-center text-gray-200 animate-appearDelay">
                    Join us and start sharing!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="relative">
                        <input

                            name="name"
                            type="text"
                            placeholder="Your name"
                            required
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-400"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm my-2.5"
                        >
                            Full Name
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input

                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-400"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm my-2.5"
                        >
                            Email
                        </label>
                    </div>

                    {/* Photo URL */}
                    <div className="relative">
                        <input

                            name="photo"
                            type="url"
                            placeholder="Photo URL"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-400"
                        />
                        <label
                            htmlFor="photo"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm my-2.5"
                        >
                            Photo URL
                        </label>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input

                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-400"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm my-2.5"
                        >
                            Password
                        </label>
                        <div
                            className="absolute right-0 top-2 cursor-pointer text-gray-300 hover:text-white"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <input

                            name="confirm"
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm Password"
                            required
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-400"
                        />
                        <label
                            htmlFor="confirm"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm"
                        >
                            Confirm Password
                        </label>
                        <div
                            className="absolute right-0 top-2 cursor-pointer text-gray-300 hover:text-white"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            {showConfirm ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                    >
                        Sign Up
                    </button>

                    {/* Google Sign Up */}
                    <button
                        type="button"
                        onClick={handleGoogleSignUp}
                        className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white rounded-md shadow-lg text-gray-700 font-semibold hover:bg-gray-100 transition duration-200"
                    >
                        <FcGoogle size={22} />
                        Sign Up with Google
                    </button>
                </form>

                <div className="text-center text-gray-300">
                    Already have an account?{" "}
                    <NavLink to="/login" href="#" className="text-purple-300 hover:underline">
                        Sign in
                    </NavLink>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
