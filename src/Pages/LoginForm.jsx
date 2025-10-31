import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

export default function LoginForm() {

    const {googleLogIn} = use(AuthContext)

    const handleGoogleSignIn = () => {
        googleLogIn()
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
                    Login Now!
                </h1>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Don't have an account?{' '}
                    <Link to='/register'>
                        <a className="text-purple-600 hover:underline font-medium">
                            Register Now
                        </a>
                    </Link>
                </p>

                <form className="space-y-5">

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                            required
                            placeholder="Your Email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                            required
                            placeholder="Your Password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition duration-200 shadow-md"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 flex items-center justify-center">
                    <div className="border-t border-gray-300 grow"></div>
                    <span className="px-4 text-sm text-gray-500 bg-white">OR</span>
                    <div className="border-t border-gray-300 grow"></div>
                </div>

                {/* Google Sign In */}
                <button onClick={handleGoogleSignIn}
                    type="button"
                    className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                    <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Sign In With Google
                </button>
            </div>
        </div>
    );
}