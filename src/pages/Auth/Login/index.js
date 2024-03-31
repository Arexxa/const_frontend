import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from './contexts/LoginContext'

function Login() {
    const { login } = useLogin()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        login(email, password)
        navigate('/Home')
    }

    const handleRegister = () => {
        navigate('/register')
    }

    return (
    <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-left text-2xl font-bold text-white sm:text-3xl">Consultant UI</h2>

                        <p className="text-left max-w-xl mt-3 text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                            autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                            molestiae
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                        <div className="flex justify-center mx-auto">
                            <img
                              className="w-auto h-7 sm:h-8"
                              src="https://merakiui.com/images/logo.svg"
                              alt="Your Company"
                            />
                        </div>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                    </div>

                    <div className="mt-8">
                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="text-left block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
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
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
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
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                </button>
                            </div>

                        </form>

                        <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="" onClick={handleRegister} className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
