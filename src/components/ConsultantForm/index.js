import React from 'react'

function ConsultantForm({
    name,
    setName,
    username,
    setUsername,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    country,
    setCountry,
    email,
    setEmail,
    contactNo,
    setContactNo,
    onSubmit,
    onChange,
    company,
    setCompany,
    onInputChange,
}) {
    const handleSubmit = (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault()
        }
        onSubmit(e)
    }

    return (
        <>
            <h1 className="abel text-left text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Edit profile
            </h1>
            <p className="abel text-lg text-left mt-4 text-gray-500 dark:text-gray-400">
                Profile detail
            </p>
            <form className="" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="username"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="John Doe"
                            required=""
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-8 md:grid-cols-1">
                    <label
                        htmlFor="address"
                        className="abel text-left block mb-1 text-sm text-gray-600 dark:text-gray-200"
                    >
                        Address
                    </label>
                    <textarea
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="off"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        required=""
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
                    <div>
                        <label
                            htmlFor="city"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            City/Town
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="state"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="country"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                </div>

                <hr className="my-6" />

                <p className="abel text-lg text-left mt-4 text-gray-500 dark:text-gray-400">
                    Contact Information
                </p>

                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="email"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contactNo"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="contactNo"
                            id="contactNo"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                        />
                    </div>
                </div>

                <hr className="my-6" />

                <p className="abel text-lg text-left mt-4 text-gray-500 dark:text-gray-400">
                    Company details
                </p>

                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="company"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company"
                            id="company"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={company.company}
                            onChange={onInputChange}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="jobTitle"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Job Title
                        </label>
                        <input
                            type="text"
                            name="jobTitle"
                            id="jobtitle"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={company.jobTitle}
                            onChange={onInputChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1">
                    <div>
                        <label
                            htmlFor="description"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Description
                        </label>
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={company.description}
                            onChange={onInputChange}

                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    className="abel text-base mt-6 flex items-center justify-center w-full px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-200 rounded-lg focus:ring-opacity-50"
                >
                    <span>Finish</span>
                </button>
            </form>
        </>
    )
}

export default ConsultantForm
