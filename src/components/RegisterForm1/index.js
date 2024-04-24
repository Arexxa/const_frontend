import React from 'react'

function RegisterForm1({
    name,
    email,
    password,
    confirmPassword,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    onSubmit,
    onClick,
}) {
    const handleSubmit = (e) => {
        e?.preventDefault()
        onSubmit(e)
    }

    return (
        <>
            <h1 className="abel text-left text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Create account
            </h1>
            <p className="abel text-base text-left mt-4 text-gray-500 dark:text-gray-400">
                Please provide your full name, a valid email address and strong
                password to create an account.
            </p>
            <form
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1"
                onSubmit={handleSubmit}
            >
                <div>
                    <label
                        htmlFor="name"
                        className="abel text-left block mb-2 text-base text-gray-600 dark:text-gray-200"
                    >
                        Fullname
                    </label>
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
                    <label
                        htmlFor="email"
                        className="abel text-left block mb-2 text-base text-gray-600 dark:text-gray-200"
                    >
                        Email
                    </label>
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
                    <label
                        htmlFor="password"
                        className="abel text-left block mb-2 text-base text-gray-600 dark:text-gray-200"
                    >
                        Password
                    </label>
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
                    <label
                        htmlFor="confirmPassword"
                        className="abel text-left block mb-2 text-base text-gray-600 dark:text-gray-200"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="new-confirm-password"
                        placeholder="Enter your confirmed password"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        required=""
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="abel text-base flex items-center justify-center w-full px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-200 rounded-lg focus:ring-opacity-50"
                >
                    <span>Save</span>
                </button>

                <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2">
                    <div>
                        <p className="text-left text-sm">
                            <a
                                href=""
                                onClick={onClick}
                                className="abel text-sm text-blue-500 focus:outline-none focus:underline hover:underline"
                            >
                                Skip to login page
                            </a>
                        </p>
                    </div>
                    <div>
                        <p className="text-right text-sm">
                            <a
                                href=""
                                onClick={onClick}
                                className="abel text-sm text-blue-500 focus:outline-none focus:underline hover:underline"
                            >
                                Continue
                            </a>
                        </p>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RegisterForm1
