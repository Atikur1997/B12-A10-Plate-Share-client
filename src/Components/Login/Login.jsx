import React from 'react';
import './Login.css'; // for animations

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800">
      <div
        className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 animate-slideInFromLeft"
      >
        <h2 className="text-center text-4xl font-extrabold text-white animate-appear">
          Welcome
        </h2>
        <p className="text-center text-gray-200 animate-appearDelay">
          Sign in to your account
        </p>

        <form className="space-y-6">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-400"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm"
            >
              Email address
            </label>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-400"
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm"
            >
              Password
            </label>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-purple-200 hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-gray-300">
          Don't have an account?{" "}
          <a href="#" className="text-purple-300 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
