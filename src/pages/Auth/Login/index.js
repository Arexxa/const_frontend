import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './contexts/LoginContext';
import googleLogo from '../../../media/icon/google-logo.png';
import linkedinLogo from '../../../media/icon/linkedin-logo.png';

function Login() {
    const { user, login } = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading
        setTimeout(async () => {
            const result = await login(email, password);
            setIsLoading(false); // Stop loading
            if (result === 'Success') {
                // No need for immediate navigation, let useEffect handle it
            }
        }, 1000);
    };

    const handleRegister = () => {
        navigate('/register');
    };

    useEffect(() => {
        if (user && user.roleId) {
            navigateBasedOnRole(user); // Redirect user based on role
        }
    }, [user, navigate]);

    const navigateBasedOnRole = (user) => {
        if (user.roleId === 2) {
            navigate('/consultant');
        } else if (user.roleId === 3) {
            navigate('/profile');
        } else if (user.roleId === 1) {
            navigate('/usermanagement');
        } else {
            console.error('Invalid roleId:', user.roleId);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/5 bg-image"></div>
                <div className="flex items-center w-full max-w-xl px-6 mx-auto lg:w-4/5">
                    <div className="flex-1">
                        <p className="text-left text-2xl mt-3 dark:text-gray-300">
                            Login to your account
                        </p>
                        <p className="text-left text-gray-500 text-lg mt-3 dark:text-gray-300">
                            Continue tracking your consultation progress after login into your account
                        </p>
                        <div className="mt-8">
                            <div className="social-signin-buttons">
                                <button className="google-signin-button">
                                    <img src={googleLogo} alt="Google Logo" className="logo" />
                                    Sign in with Google
                                </button>
                                <button className="linkedin-signin-button">
                                    <img src={linkedinLogo} alt="LinkedIn Logo" className="logo" />
                                    Sign in with LinkedIn
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                            <p className="text-gray-500 dark:text-gray-300">or</p>
                            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                        </div>
                        <div className="mt-8">
                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        placeholder="example@example.com"
                                        required=""
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label
                                            htmlFor="password"
                                            className="text-sm text-gray-600 dark:text-gray-200"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required=""
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="flex justify-end mb-2 mt-2">
                                        <a
                                            href="#"
                                            className="text-sm text-link focus:text-blue-400 hover:text-blue-400 hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform rounded-lg bg-primary hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                                        disabled={isLoading} // Disable button while loading
                                    >
                                        {isLoading ? 'Loading...' : 'Continue'} {/* Display loading text */}
                                    </button>
                                </div>
                            </form>
                            <p className="flex mt-2 text-sm text-center">
                                First time login ? Create new account
                                <a
                                    href="/register"
                                    onClick={handleRegister}
                                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                                >
                                    &nbsp;here
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
