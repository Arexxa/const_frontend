import React from "react";
import Navbar from "../../components/Navbar";

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
                    <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                      <div class="relative h-96 overflow-hidden rounded border border-dashed border-gray-400 opacity-75">
                        <svg class="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
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
                    <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                      <div class="relative h-96 overflow-hidden rounded border border-dashed border-gray-400 opacity-75">
                        <svg class="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
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
