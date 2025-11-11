import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <NavLink to='/' className='mr-10 cursor-pointer merriweather'>Home</NavLink>
            <NavLink to='/available_foods' className='mr-10 cursor-pointer merriweather'>Available Foods</NavLink>
        </>
    );

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="navbar bg-base-100 shadow-sm rounded-3xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">FoodShare</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                                        alt="User Profile"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </label>

                            {/* Dropdown Menu */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-3 shadow space-y-1"
                            >
                                <li className="text-center font-semibold text-gray-700">
                                    {user.displayName || "Anonymous"}
                                </li>
                                <li className="text-xs text-center mb-2 text-gray-500">
                                    {user.email}
                                </li>
                                <div className="divider my-1"></div>

                                {/* Private Links */}
                                <li>
                                    <NavLink to="/add_food" className="hover:bg-gray-100 rounded-lg">
                                        🍽 Add Food
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manage_my_foods" className="hover:bg-gray-100 rounded-lg">
                                        📦 Manage My Foods
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my_food_requests" className="hover:bg-gray-100 rounded-lg">
                                        📋 My Food Requests
                                    </NavLink>
                                </li>

                                <div className="divider my-1"></div>

                                {/* Logout */}
                                <li>
                                    <button
                                        onClick={logOut}
                                        className="btn btn-error btn-sm text-white w-full mt-1"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <NavLink to="/login">
                            <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] merriweather">
                                Log In
                            </button>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
