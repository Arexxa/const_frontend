import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Navbar from "../../../components/Navbar";
import Selectbox from '../../../components/Listbox';
import { useRoleId } from '../usermanagement/contexts/UserManagementContext';

const people = [
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        status: 'Active'
      },
    // More people...
  ]

  export default function UserManagement() {
    const [open, setOpen] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedRole, setSelectedRole] = useState(null);
    const { roles, getRoles, error } = useRoleId();

    // Function to handle input change and filter out non-numeric characters
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        setPhoneNumber(numericValue);
    };

    useEffect(() => {
        getRoles();
    }, []);

    return (
        <div className="w-full h-screen flex flex-col justify-start ">
            <Navbar />
            <div className="bg-gray-800 pb-32">
                <header className="py-10 text-left">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white">User Management</h1>
                </div>
                </header>
            </div>

            <main className="relative -mt-32">
                <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="text-left px-6 py-6 pb-6 overflow-hidden rounded-lg bg-white shadow">
                    <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                        <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpen(true)}
                        >
                        Add user
                        </button>
                    </div>
                    </div>
                    <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Title
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Status
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Role
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            {/* <tbody className="divide-y divide-gray-200 bg-white">
                                {people && people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                            <div className="flex items-center">
                                                <div className="h-11 w-11 flex-shrink-0">
                                                    <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="font-medium text-gray-900">{person.name}</div>
                                                    <div className="mt-1 text-gray-500">{person.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody> */}
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {people.map((person) => (
                                <tr key={person.email}>
                                <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="flex items-center">
                                    <div className="h-11 w-11 flex-shrink-0">
                                        <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-medium text-gray-900">{person.name}</div>
                                        <div className="mt-1 text-gray-500">{person.email}</div>
                                    </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                    <div className="text-gray-900">{person.title}</div>
                                    <div className="mt-1 text-gray-500">{person.department}</div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    Active
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.role}</td>
                                <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit<span className="sr-only">, {person.name}</span>
                                    </a>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </main>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <div className="fixed inset-0" />

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                    <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-2xl font-bold text-gray-500">
                                                Add User
                                            </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                type="button"
                                                className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:border-none"
                                                onClick={() => setOpen(false)}
                                                >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            <form className="mb-6">
                                                <div className="mb-6">
                                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                                                </div>

                                                <div className="mb-6">
                                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        autoComplete="off"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="example@example.com"
                                                        required=""
                                                    />
                                                </div>

                                                <div className="mb-6">
                                                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                                    <input
                                                        type="tel"
                                                        id="contact"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        value={phoneNumber}
                                                        onChange={handleInputChange}
                                                        pattern="[0-9]*"
                                                        placeholder="0123456789"
                                                        required=""
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                    <textarea
                                                        id="address"
                                                        rows="3"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Address"
                                                        >
                                                        </textarea>
                                                </div>

                                                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                                    <div>
                                                            <label htmlFor="school" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">School</label>
                                                            <input type="text" id="school" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="School" required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="certificate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Certificate</label>
                                                        <input type="text" id="certificate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Certificate" required />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            autoComplete="new-password"
                                                            placeholder="Enter your password"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                                        <input
                                                            type="password"
                                                            name="confirm-password"
                                                            id="confirm-password"
                                                            autoComplete="new-password"
                                                            placeholder="Enter your confirm password"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div>
                                                    <label htmlFor="roles" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roles</label>
                                                    <Selectbox
                                                        items={roles} // Pass the roles array as items
                                                        selectedItem={selectedRole} // Pass the selected role
                                                        setSelectedItem={setSelectedRole} // Function to set the selected role
                                                        labelKey="role_name" // Specify the key in each role object that contains the label
                                                    />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Save
                                    </button>
                                    </div>
                                </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
  }
