import { useState } from 'react'
import Navbar from "../../components/Navbar";
import { Switch } from '@headlessui/react'
// import { MagnifyingGlassIcon } from '@heroicons/react/solid'
import {
  // Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  // SquaresPlusIcon,
  UserCircleIcon,
  // XMarkIcon,
} from '@heroicons/react/outline'

const SquaresPlusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-400 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
};

const user = {
  name: 'Debbie Lewis',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}

const subNavigation = [
  { name: 'Profile', href: '/profile', icon: UserCircleIcon, current: true },
  { name: 'Account', href: '#', icon: CogIcon, current: false },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [availableToHire, setAvailableToHire] = useState(true)
  const [privateAccount, setPrivateAccount] = useState(false)
  const [allowCommenting, setAllowCommenting] = useState(true)
  const [allowMentions, setAllowMentions] = useState(true)

  return (
    <div className="w-full h-screen flex flex-col justify-start ">
      <Navbar />
      <div className="bg-gray-800 pb-32">
        <header className="py-10 text-left">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
          </div>
        </header>
      </div>

      <main className="relative -mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0">
              <aside className="py-6 lg:col-span-3">
                <nav className="space-y-1">
                  {subNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700'
                          : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center border-l-4 px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-teal-500 group-hover:text-teal-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </aside>

              <form className="text-left divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                {/* Profile section */}
                <div className="px-4 py-6 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-lg font-medium leading-6 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful what you share.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="flex-grow space-y-6">
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                          Username
                        </label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                            workcation.com/
                          </span>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                            defaultValue={user.handle}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                          About
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                            defaultValue={''}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Brief description for your profile. URLs are hyperlinked.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex-grow lg:ml-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0">
                      <p className="text-sm font-medium leading-6 text-gray-900" aria-hidden="true">
                        Photo
                      </p>
                      <div className="mt-2 lg:hidden">
                        <div className="flex items-center">
                          <div
                            className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                            aria-hidden="true"
                          >
                            <img className="h-full w-full rounded-full" src={user.imageUrl} alt="" />
                          </div>
                          <div className="relative ml-5">
                            <input
                              id="mobile-user-photo"
                              name="user-photo"
                              type="file"
                              className="peer absolute h-full w-full rounded-md opacity-0"
                            />
                            <label
                              htmlFor="mobile-user-photo"
                              className="pointer-events-none block rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500"
                            >
                              <span>Change</span>
                              <span className="sr-only"> user photo</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="relative hidden overflow-hidden rounded-full lg:block">
                        <img className="relative h-40 w-40 rounded-full" src={user.imageUrl} alt="" />
                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-12">
                      <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                        URL
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                {/* Privacy section */}
                <div className="divide-y divide-gray-200 pt-6">
                  <div className="px-4 sm:px-6">
                    <div>
                      <h2 className="text-lg font-medium leading-6 text-gray-900">Privacy</h2>
                      <p className="mt-1 text-sm text-gray-500">
                        Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                      </p>
                    </div>
                    <ul className="mt-2 divide-y divide-gray-200">
                      <Switch.Group as="li" className="flex items-center justify-between py-4">
                        <div className="flex flex-col">
                          <Switch.Label as="p" className="text-sm font-medium leading-6 text-gray-900" passive>
                            Available to hire
                          </Switch.Label>
                          <Switch.Description className="text-sm text-gray-500">
                            Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={availableToHire}
                          onChange={setAvailableToHire}
                          className={classNames(
                            availableToHire ? 'bg-teal-500' : 'bg-gray-200',
                            'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              availableToHire ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group as="li" className="flex items-center justify-between py-4">
                        <div className="flex flex-col">
                          <Switch.Label as="p" className="text-sm font-medium leading-6 text-gray-900" passive>
                            Make account private
                          </Switch.Label>
                          <Switch.Description className="text-sm text-gray-500">
                            Pharetra morbi dui mi mattis tellus sollicitudin cursus pharetra.
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={privateAccount}
                          onChange={setPrivateAccount}
                          className={classNames(
                            privateAccount ? 'bg-teal-500' : 'bg-gray-200',
                            'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              privateAccount ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group as="li" className="flex items-center justify-between py-4">
                        <div className="flex flex-col">
                          <Switch.Label as="p" className="text-sm font-medium leading-6 text-gray-900" passive>
                            Allow commenting
                          </Switch.Label>
                          <Switch.Description className="text-sm text-gray-500">
                            Integer amet, nunc hendrerit adipiscing nam. Elementum ame
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={allowCommenting}
                          onChange={setAllowCommenting}
                          className={classNames(
                            allowCommenting ? 'bg-teal-500' : 'bg-gray-200',
                            'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              allowCommenting ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group as="li" className="flex items-center justify-between py-4">
                        <div className="flex flex-col">
                          <Switch.Label as="p" className="text-sm font-medium leading-6 text-gray-900" passive>
                            Allow mentions
                          </Switch.Label>
                          <Switch.Description className="text-sm text-gray-500">
                            Adipiscing est venenatis enim molestie commodo eu gravid
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={allowMentions}
                          onChange={setAllowMentions}
                          className={classNames(
                            allowMentions ? 'bg-teal-500' : 'bg-gray-200',
                            'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              allowMentions ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-end gap-x-3 px-4 py-4 sm:px-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
