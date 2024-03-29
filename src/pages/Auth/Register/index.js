import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegister } from './contexts/RegisterContext'

function Register() {
    const { user, error, register } = useRegister()
    // const [email, setEmail] = useState('')
    // const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        await register(username, password)
    }

    useEffect(() => {
        if (user === 'Success') {
            navigate('/home')
        }
    }, [user, navigate])

    return (
        <div className="w-full h-screen flex flex-col justify-start ">
            <div className="flex flex-col justify-center items-center h-full">
                <form className="p-4" onSubmit={handleRegister}>
                    <div className="flex flex-col justify-center items-center">
                        {/* <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="abcd@gmail.com"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /> */}
                        {/* <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="tester"
                            required=""
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        /> */}
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="tester"
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
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
