import React, { useRef } from 'react'

function RegisterForm3({
    portfolio,
    setPortfolio,
    website,
    setWebsite,
    coverLetter,
    setCoverLetter,
    resume,
    setResume,
    onChange,
    onClick,
    onSubmit,
}) {
    const coverLetterInputRef = useRef(null)
    const resumeInputRef = useRef(null)

    const handleSubmit = (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault()
        }
        onSubmit(e)
    }

    const handleDeleteResume = () => {
        onClick('resume') // Call the onClick function with the appropriate type ('resume')
        resumeInputRef.current.value = ''
    }

    const handleDeleteCoverLetter = () => {
        onClick('coverLetter') // Call the onClick function with the appropriate type ('coverLetter')
        coverLetterInputRef.current.value = ''
    }

    return (
        <>
            <h1 className="abel text-left text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Portfolio & Resume
            </h1>
            <p className="abel text-lg text-left mt-4 text-gray-500 dark:text-gray-400">
                Links
            </p>
            <form className="" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="portfolio"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Portfolio
                        </label>
                        <input
                            type="text"
                            name="portfolio"
                            id="portfolio"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={portfolio}
                            onChange={(e) => setPortfolio(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Website
                        </label>
                        <input
                            type="text"
                            name="website"
                            id="website"
                            autoComplete="off"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            required=""
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>
                </div>

                <hr className="my-6" />

                <p className="abel text-left mt-4 text-gray-500 dark:text-gray-400">
                    Cover letter & resume
                </p>
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div className="">
                        <label
                            htmlFor="coverLetter"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Cover letter
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <svg
                                    width="41"
                                    height="39"
                                    viewBox="0 0 41 39"
                                    className="mx-auto h-12 w-12 text-gray-300"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.0625 10.3594V0H7.04688C5.98184 0 5.125 0.815039 5.125 1.82812V37.1719C5.125 38.185 5.98184 39 7.04688 39H33.9531C35.0182 39 35.875 38.185 35.875 37.1719V12.1875H24.9844C23.9273 12.1875 23.0625 11.3648 23.0625 10.3594ZM28.282 26.8133H23.0625V32.907C23.0625 33.5804 22.4891 34.1258 21.7812 34.1258H19.2188C18.5109 34.1258 17.9375 33.5804 17.9375 32.907V26.8133H12.718C11.5745 26.8133 11.0035 25.4963 11.8155 24.7292L19.5367 17.4396C20.0692 16.9361 20.9292 16.9361 21.4617 17.4396L29.1829 24.7292C29.9957 25.4963 29.4255 26.8133 28.282 26.8133ZM35.3145 7.99805L27.4748 0.533203C27.1145 0.19043 26.626 0 26.1135 0H25.625V9.75H35.875V9.28535C35.875 8.80547 35.6748 8.34082 35.3145 7.99805Z"
                                        fill="#838383"
                                    />
                                </svg>

                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="coverLetter"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span className="abel text-sm">
                                            Upload a file
                                        </span>
                                        <input
                                            id="coverLetter"
                                            name="coverLetter"
                                            type="file"
                                            className="sr-only"
                                            required=""
                                            ref={coverLetterInputRef}
                                            onChange={(e) =>
                                                onChange(e, 'coverLetter')
                                            }
                                        />
                                    </label>
                                    <p className="pl-1 abel text-sm">
                                        or drag and drop
                                    </p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">
                                    500 MB max fize size
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <label
                            htmlFor="resume"
                            className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                            Resume
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <svg
                                    width="41"
                                    height="39"
                                    viewBox="0 0 41 39"
                                    className="mx-auto h-12 w-12 text-gray-300"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.0625 10.3594V0H7.04688C5.98184 0 5.125 0.815039 5.125 1.82812V37.1719C5.125 38.185 5.98184 39 7.04688 39H33.9531C35.0182 39 35.875 38.185 35.875 37.1719V12.1875H24.9844C23.9273 12.1875 23.0625 11.3648 23.0625 10.3594ZM28.282 26.8133H23.0625V32.907C23.0625 33.5804 22.4891 34.1258 21.7812 34.1258H19.2188C18.5109 34.1258 17.9375 33.5804 17.9375 32.907V26.8133H12.718C11.5745 26.8133 11.0035 25.4963 11.8155 24.7292L19.5367 17.4396C20.0692 16.9361 20.9292 16.9361 21.4617 17.4396L29.1829 24.7292C29.9957 25.4963 29.4255 26.8133 28.282 26.8133ZM35.3145 7.99805L27.4748 0.533203C27.1145 0.19043 26.626 0 26.1135 0H25.625V9.75H35.875V9.28535C35.875 8.80547 35.6748 8.34082 35.3145 7.99805Z"
                                        fill="#838383"
                                    />
                                </svg>
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="resume"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span className="abel text-sm">
                                            Upload a file
                                        </span>
                                        <input
                                            id="resume"
                                            name="resume"
                                            type="file"
                                            className="sr-only"
                                            required=""
                                            ref={resumeInputRef}
                                            onChange={(e) =>
                                                onChange(e, 'resume')
                                            }
                                        />
                                    </label>
                                    <p className="pl-1 abel text-sm">
                                        or drag and drop
                                    </p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">
                                    500 MB max file size
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    {coverLetter && typeof coverLetter === 'object' && (
                        <div>
                            <label
                                htmlFor="coverLetter"
                                className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                            >
                                Uploaded cover letter
                            </label>
                            <div className="flex justify-between border-2 rounded border-gray-200 p-2">
                                <p className="abel text-sm text-black text-left">
                                    {coverLetter.name}
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-[#C1C0C0] hover:text-gray-400 mt-1 cursor-pointer"
                                    onClick={handleDeleteCoverLetter}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                    {resume && typeof resume === 'object' && (
                        <div>
                            <label
                                htmlFor="coverLetter"
                                className="abel text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                            >
                                Uploaded resume
                            </label>
                            <div className="flex justify-between border-2 rounded border-gray-200 p-2">
                                <p className="abel text-sm text-black text-left">
                                    {resume.name}
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-[#C1C0C0] hover:text-gray-400 mt-1 cursor-pointer"
                                    onClick={handleDeleteResume}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1">
                    <button
                        type="submit"
                        className="abel text-base mt-6 flex items-center justify-center w-full px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-200 rounded-lg focus:ring-opacity-50"
                    >
                        <span>Update Profile</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default RegisterForm3
