import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from './contexts/LoginContext'
import googleLogo from '../../../media/icon/google-logo.png';
import linkedinLogo from '../../../media/icon/linkedin-logo.png';

function Login() {
    const { user, error, login } = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    const handleRegister = () => {
        navigate('/register');
    };

    useEffect(() => {
        if (user && user.roleId) {
            // Redirect based on user role
            if (user.roleId === 2) {
                navigate('/consultant');
            } else if (user.roleId === 3) {
                navigate('/profile');
            } else if (user.roleId === 1) {
                navigate('/usermanagement');
            }
        }
    }, [user, navigate]);

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/5 bg-image">
                    {/* <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-left text-2xl font-bold text-white sm:text-3xl">
                                Consultant UI
                            </h2>

                            <p className="text-left max-w-xl mt-3 text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. In autem ipsa, nulla
                                laboriosam dolores, repellendus perferendis
                                libero suscipit nam temporibus molestiae
                            </p>
                        </div>
                    </div> */}
                </div>

                <div className="flex items-center w-full max-w-xl px-6 mx-auto lg:w-4/5">
                    <div className="flex-1">
                        <p className="text-left text-2xl mt-3 dark:text-gray-300">
                            Login to your account
                        </p>
                        <p className="text-left text-gray-500 text-lg mt-3 dark:text-gray-300">
                        Continue tracking your consultation progress after login into your account
                        </p>
                        {/* <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img
                                    className="w-auto h-7 sm:h-8"
                                    src="https://merakiui.com/images/logo.svg"
                                    alt="Your Company"
                                />
                            </div>

                            <p className="mt-3 text-gray-500 dark:text-gray-300">
                                Sign in to access your account
                            </p>
                        </div> */}

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
                                <p className="text-gray-500 dark:text-gray-300">
                                    or
                                </p>
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
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
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
                                        {/* <a
                                            href="#"
                                            className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                                        >
                                            Forgot password?
                                        </a> */}
                                    </div>

                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required=""
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
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
                                    >
                                        Continue
                                    </button>
                                </div>
                            </form>

                            <p className="flex mt-2 text-sm text-center">
                                First time login ? Create new account{' '}
                                <a
                                    href="/register"
                                    onClick={handleRegister}
                                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                                >
                                    &nbsp;Sign up
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
