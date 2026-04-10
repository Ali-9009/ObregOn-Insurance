import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/PrimaryBtn"

export default function SetNew() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center px-4 py-16">
            <div className="w-105 border border-gray-300 rounded-xl shadow-md p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Set a password</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Your previous password has been reseted. Please set a new password for your account.
                </p>

                {/* Password */}
                <div className="mb-4 relative">
                    <label className="block text-xs text-gray-500 mb-1">Create Password</label>
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

                {/* Password */}
                <div className="mb-4 relative">
                    <label className="block text-xs text-gray-500 mb-1">Confirm Password</label>
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

                <Button text="Set password" className="w-full text-center" to="/" />
            </div>
        </div>
    );
}
