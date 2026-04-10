import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/PrimaryBtn";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="flex items-center justify-center px-4 py-16">
            <div className="w-105 border border-gray-300 rounded-xl shadow-md p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Sign up</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Let’s get you all set up so you can access your personal account.
                </p>

                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="text-xs text-gray-500">First Name</label>
                        <input
                            type="text"
                            placeholder="john"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500">Last Name</label>
                        <input
                            type="text"
                            placeholder="doe"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="text-xs text-gray-500">Email</label>
                        <input
                            type="email"
                            placeholder="john.doe@gmail.com"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500">Phone Number</label>
                        <input
                            type="text"
                            placeholder="+123456789"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="mb-4 relative">
                    <label className="text-xs text-gray-500">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="***************"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-10 text-gray-400"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                {/* Confirm Password */}
                <div className="mb-4 relative">
                    <label className="text-xs text-gray-500">Confirm Password</label>
                    <input
                        type={showConfirm ? "text" : "password"}
                        placeholder="***************"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-10 text-gray-400"
                    >
                        {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                {/* Terms */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <input type="checkbox" />
                    <span>
                        I agree to all the <span className="text-red-500">Terms</span> and{" "}
                        <span className="text-red-500">Privacy Policies</span>
                    </span>
                </div>

                {/* Button */}
                <Button className="w-full" text="Create account"/>

                {/* Login */}
                <p className="text-sm text-center mt-4 text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-red-500 font-medium hover:underline">
                        Login
                    </Link>
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-400">Or Sign up with</span>
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
