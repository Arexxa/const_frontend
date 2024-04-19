import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegister } from './contexts/RegisterContext'

function Register() {
    const { user, error, register } = useRegister()
    // const [email, setEmail] = useState('')
    // const [fullname, setFullname] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        await register(name, email, password)
    }

    const handleSkip = () => {
        navigate('/')
    }

    useEffect(() => {
        if (user === 'Success') {
            navigate('/home')
        }
    }, [user, navigate])

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:flex flex-col items-center justify-center lg:w-2/5 bg-neutral-50">

                <ol className="overflow-hidden space-y-8">
                    <li className="relative flex-1 after:empty-content after:w-0.5 after:h-full after:bg-gray-200 after:inline-block after:absolute after:-bottom-11 after:left-1/2">
                        <div className="flex items-center justify-center gap-8 w-full max-w-sm">
                            <div className="flex items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border custom-primary w-full">
                                <div className="rounded-lg bg-primary flex items-center justify-center">
                                    <span className="text-white p-3">
                                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3 12.8333C16.0161 12.8333 16.7028 13.1231 17.2092 13.6388C17.7155 14.1545 18 14.854 18 15.5833V16.2388C18 19.5177 14.211 22 9 22C3.789 22 0 19.6469 0 16.2388V15.5833C0 14.854 0.284464 14.1545 0.790812 13.6388C1.29716 13.1231 1.98392 12.8333 2.7 12.8333H15.3ZM9 0C9.70914 -1.07627e-08 10.4113 0.142262 11.0665 0.418663C11.7216 0.695063 12.3169 1.10019 12.8184 1.61091C13.3198 2.12163 13.7176 2.72795 13.9889 3.39524C14.2603 4.06253 14.4 4.77773 14.4 5.5C14.4 6.22227 14.2603 6.93747 13.9889 7.60476C13.7176 8.27205 13.3198 8.87837 12.8184 9.38909C12.3169 9.89981 11.7216 10.3049 11.0665 10.5813C10.4113 10.8577 9.70914 11 9 11C7.56783 11 6.19432 10.4205 5.18162 9.38909C4.16893 8.35764 3.6 6.95869 3.6 5.5C3.6 4.04131 4.16893 2.64236 5.18162 1.61091C6.19432 0.579463 7.56783 2.17362e-08 9 0Z" fill="white"/>
                                    </svg>
                                    </span>
                                </div>
                                <div className="flex items-start rounded-md justify-center flex-col">
                                    <h6 className="text-base font-semibold text-black mb-0.5">1. Create your account</h6>
                                    <p className="text-xs font-normal text-gray-500"> Add your basic information.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="relative flex-1 after:empty-content after:w-0.5 after:h-full after:bg-gray-200 after:inline-block after:absolute after:-bottom-11 after:left-1/2">
                        <div className="flex items-center justify-center gap-8 w-full max-w-sm">
                            <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 stepper-secondary w-full">
                                <div className="rounded-lg bg-gray-400 flex items-center justify-center">
                                    <span className="text-gray-600 p-3">
                                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.9167 0.777344H2.08333C0.93316 0.777344 0 1.7105 0 2.86068V18.1385C0 19.2886 0.93316 20.2218 2.08333 20.2218H22.9167C24.0668 20.2218 25 19.2886 25 18.1385V2.86068C25 1.7105 24.0668 0.777344 22.9167 0.777344ZM7.63889 4.94401C9.17101 4.94401 10.4167 6.18967 10.4167 7.72179C10.4167 9.25391 9.17101 10.4996 7.63889 10.4996C6.10677 10.4996 4.86111 9.25391 4.86111 7.72179C4.86111 6.18967 6.10677 4.94401 7.63889 4.94401ZM12.5 15.2218C12.5 15.6819 12.066 16.0551 11.5278 16.0551H3.75C3.21181 16.0551 2.77778 15.6819 2.77778 15.2218V14.3885C2.77778 13.0082 4.0842 11.8885 5.69444 11.8885H5.91146C6.44531 12.1098 7.02691 12.2357 7.63889 12.2357C8.25087 12.2357 8.83681 12.1098 9.36632 11.8885H9.58333C11.1936 11.8885 12.5 13.0082 12.5 14.3885V15.2218ZM22.2222 12.9301C22.2222 13.1211 22.066 13.2773 21.875 13.2773H15.625C15.434 13.2773 15.2778 13.1211 15.2778 12.9301V12.2357C15.2778 12.0447 15.434 11.8885 15.625 11.8885H21.875C22.066 11.8885 22.2222 12.0447 22.2222 12.2357V12.9301ZM22.2222 10.1523C22.2222 10.3433 22.066 10.4996 21.875 10.4996H15.625C15.434 10.4996 15.2778 10.3433 15.2778 10.1523V9.4579C15.2778 9.26693 15.434 9.11068 15.625 9.11068H21.875C22.066 9.11068 22.2222 9.26693 22.2222 9.4579V10.1523ZM22.2222 7.37457C22.2222 7.56554 22.066 7.72179 21.875 7.72179H15.625C15.434 7.72179 15.2778 7.56554 15.2778 7.37457V6.68012C15.2778 6.48915 15.434 6.3329 15.625 6.3329H21.875C22.066 6.3329 22.2222 6.48915 22.2222 6.68012V7.37457Z" fill="white"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className=" flex items-start rounded-md justify-center flex-col">
                                    <h6 className="text-base font-semibold text-black mb-0.5">2. Edit your profile</h6>
                                    <p className="text-xs text-left font-normal text-gray-500"> Add your soft and hard skills & previous working experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="relative flex-1 ">
                        <div className="flex items-center justify-center gap-8 w-full max-w-sm">
                            <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 stepper-secondary w-full">
                                <div className="rounded-lg bg-gray-400 flex items-center justify-center">
                                    <span className="text-gray-600 p-3">
                                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.2077 5H15.3327V4.16667C15.3327 3.25 14.4702 2.5 13.416 2.5H9.58268C8.52852 2.5 7.66602 3.25 7.66602 4.16667V5H4.79102C3.16185 5 1.91602 6.08333 1.91602 7.5V15C1.91602 16.4167 3.16185 17.5 4.79102 17.5H18.2077C19.8368 17.5 21.0827 16.4167 21.0827 15V7.5C21.0827 6.08333 19.8368 5 18.2077 5ZM9.58268 4.16667H13.416V5H9.58268V4.16667ZM19.166 15C19.166 15.5 18.7827 15.8333 18.2077 15.8333H4.79102C4.21602 15.8333 3.83268 15.5 3.83268 15V10.3333L8.33685 11.6667H14.3743C14.4702 11.6667 14.566 11.6667 14.6618 11.5833L19.166 10.25V15Z" fill="white"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className=" flex items-start rounded-md justify-center flex-col ">
                                    <h6 className="text-base font-semibold text-black mb-0.5">
                                        3. Portfolio</h6>
                                    <p className="text-xs font-normal text-gray-500">Add portfolio link to stand out more !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>

                </div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-1/3">
                    <div className="w-full">
                        <h1 className="text-left text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            Create account
                        </h1>

                        <p className="text-left mt-4 text-gray-500 dark:text-gray-400">
                            Please provide your full name, a valid email address and strong password to create an account.
                        </p>

                        <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1" onSubmit={handleRegister}>
                            <div>
                                <label htmlFor="name" className="text-left block mb-2 text-sm text-gray-600 dark:text-gray-200">Fullname</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="off"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="John Doe"
                                    required=""
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-left block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="example@example.com"
                                    required=""
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="text-left block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="new-password"
                                    placeholder="Enter your password"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    required=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="text-left block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="new-password"
                                    placeholder="Enter your password"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    required=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center w-full px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-200 rounded-lg focus:ring-opacity-50">
                                <span>Save</span>
                            </button>
                        </form>

                        <div className='grid grid-cols-1 gap-6 mt-5 md:grid-cols-2'>
                                <div>
                                    <p className="text-left text-sm">
                                        <a
                                            href=""
                                            onClick={handleSkip}
                                            className="text-blue-500 focus:outline-none focus:underline hover:underline"
                                        >
                                            Skip to login page
                                        </a>
                                    </p>
                                    
                                </div>
                                <div>
                                    <p className="text-right text-sm">
                                        <a
                                            href=""
                                            onClick={handleSkip}
                                            className="text-blue-500 focus:outline-none focus:underline hover:underline"
                                        >
                                            Continue
                                        </a>
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
