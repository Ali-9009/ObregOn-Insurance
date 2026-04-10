import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/PrimaryBtn"

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center px-4 py-16">
            <div className="w-105 border border-gray-300 rounded-xl shadow-md p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Login</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Login to access your travelwise account
                </p>

                {/* Email */}
                <div className="mb-5">
                    <label className="block text-xs text-gray-500 mb-1">Email</label>
                    <input
                        type="email"
                        defaultValue="john.doe@gmail.com"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none"
                    />
                </div>

                {/* Password */}
                <div className="mb-4 relative">
                    <label className="block text-xs text-gray-500 mb-1">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        defaultValue="password"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-9 text-gray-400"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="w-4 h-4" />
                        Remember me
                    </label>

                    <Link
                        to="/forgotPassword"
                        className="text-sm text-red-500 cursor-pointer hover:underline"
                    >
                        Forgot Password
                    </Link>
                </div>

                {/* Button */}
                <Button className="w-full" text="Login"/> 

                {/* Signup */}
                <p className="text-sm text-center mt-4 text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-red-500 font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
                
                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-400">Or login with</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Social */}
                <div className="grid grid-cols-3 gap-4">
                    <button className="border border-blue-500 rounded-md py-2 flex items-center justify-center text-blue-600">
                        f
                    </button>
                    <button className="border border-blue-500 rounded-md py-2 flex items-center justify-center text-blue-600">
                        G
                    </button>
                    <button className="border border-blue-500 rounded-md py-2 flex items-center justify-center text-blue-600">
                        
                    </button>
                </div>
            </div>
        </div>
    );
}
