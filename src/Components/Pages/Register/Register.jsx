import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { user, createUser, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoUrl = form.photo.value;

        if (password !== confirm) {
            toast.error("Passwords do not match");
            return;
        }

        createUser(email, password)
            .then(() => {
                toast.success("User created successfully");
                setUser({ name, email, photoURL: photoUrl });
            })
            .catch((error) => toast.error(error.message));
    };

    return (
        <div className="...">
            <form onSubmit={handleSubmit}>
                {/* inputs */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Register;
