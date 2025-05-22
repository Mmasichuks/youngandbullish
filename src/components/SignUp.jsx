import React from 'react';
import { useForm } from "react-hook-form";
import ybLogo from '../assets/IMG-20250314-WA0338 (1).jpg';
import "../style/dialog.css";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            //   await axios.post('', data);
            console.log("Form Submitted:", data);
            reset();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Side with background image and logo */}
            <div
                className="yb-bg-image relative bg-blue-950 flex flex-col justify-center items-center rounded-s-3xl min-h-[500px] p-8"
            >
                <img
                    src={ybLogo}
                    alt="Young & Bullish Logo"
                    className="relative z-10 max-w-[70%] mx-auto"
                />
            </div>

            {/* Right Side (Form) */}
            <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-stone-800 mb-6 text-center">Create Account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="y&b form">
                    {/* Username */}
                    <div className="mb-4">
                        <label className="block text-stone-700 text-sm font-bold mb-1 text-left">Username</label>
                        <input
                            type="text"
                            {...register("username", { required: "Username is required" })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.username && (
                            <span className="text-red-500 text-xs">{errors.username.message}</span>
                        )}
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-stone-700 text-sm font-bold mb-1 text-left">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-xs">{errors.email.message}</span>
                        )}
                    </div>
                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-stone-700 text-sm font-bold mb-1 text-left">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-xs">{errors.password.message}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline mx-auto block"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;