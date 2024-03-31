import React from "react";
import Navbar from "../../components/Navbar";
import ComboBox from "../../components/Combobox";

const options = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' }
];

function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-start ">
      <Navbar />
      <div className="bg-gray-800 pb-32">
        <header className="py-10 text-left">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
          </div>
        </header>
        {/* Search input and ComboBox */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-4 lg:gap-8">
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 pr-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <ComboBox options={options} />
            </div>
          </div>
        </div>
      </div>

      <main className="-mt-24 pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page title</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <x-placeholder>
                    <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                      <div className="relative h-96 overflow-hidden rounded border border-dashed border-gray-400 opacity-75">
                        <svg className="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
                          <defs>
                            <pattern id="pattern-bb904d76-8ce0-4b79-8986-92c472e1c066" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                              <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                            </pattern>
                          </defs>
                          <rect stroke="none" fill="url(#pattern-bb904d76-8ce0-4b79-8986-92c472e1c066)" width="100%" height="100%"></rect>
                        </svg>
                      </div>
                    </div>
                  </x-placeholder>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <x-placeholder>
                    <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                      <div className="relative h-96 overflow-hidden rounded border border-dashed border-gray-400 opacity-75">
                        <svg className="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
                          <defs>
                            <pattern id="pattern-bb904d76-8ce0-4b79-8986-92c472e1c066" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                              <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                            </pattern>
                          </defs>
                          <rect stroke="none" fill="url(#pattern-bb904d76-8ce0-4b79-8986-92c472e1c066)" width="100%" height="100%"></rect>
                        </svg>
                      </div>
                    </div>
                  </x-placeholder>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
            <span className="block sm:inline">&copy; 2024 Your Company, Inc.</span>{' '}
            <span className="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
