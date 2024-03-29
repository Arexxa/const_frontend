import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from './contexts/LoginContext'

function Login() {
    const { login } = useLogin()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        login(username, password)
        navigate('/Home')
    }

    const handleRegister = () => {
        navigate('/register')
    }

    return (
        <div className="w-full h-screen flex flex-col justify-start ">
            <div className="flex flex-col justify-center items-center h-full">
                <form className="p-4" onSubmit={handleLogin}>
                    <div className="flex flex-col justify-center items-center">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="abcd"
                            required=""
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Sign in
                    </button>
                </form>
                <div>
                    <div onClick={handleRegister}>Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default Login
