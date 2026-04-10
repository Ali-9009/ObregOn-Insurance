import Button from "../../components/PrimaryBtn"

export default function ForgotPassword() {

    return (
        <div className="flex items-center justify-center px-4 py-16">
            <div className="w-105 border border-gray-300 rounded-xl shadow-md p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Forgot your password?</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Don’t worry, happens to all of us. Enter your email below to recover your password
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

                {/* Button */}
                <Button to="/verifyCode" className="w-full text-center" text="Submit"/>
            </div>
        </div>
    );
}
