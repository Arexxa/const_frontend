import React, { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';

function Testcombo({ universities, selectedUniversity }) {
    const [query, setQuery] = useState('');
    const [currentValue, setCurrentValue] = useState('');

    const filteredUniversities = universities.filter(uni =>
        uni.name.toLowerCase().includes(query.toLowerCase())
    );

    const displayValue = (uni) => {
        return uni.name || '';
    };

    useEffect(() => {
        // Update inputValue when selectedUniversity changes
        if (selectedUniversity) {
            setCurrentValue(selectedUniversity.name || '');
        }
    }, [selectedUniversity]);

    const handleSelectUniversity = (newUniversity) => {
        if (newUniversity) {
            setCurrentValue(newUniversity.name); // Update the current value with the selected university name
        }
    };

    return (
        <div className="fixed top-16 w-72">
            <Combobox value={selectedUniversity} onChange={handleSelectUniversity}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            value={currentValue}
                            onChange={(event) => {
                                setQuery(event.target.value);
                                setCurrentValue(event.target.value); // Update current value as user types
                            }}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <div className="h-5 w-5 text-gray-400" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>
                            </div>
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {filteredUniversities.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredUniversities.map((uni, index) => (
                                    <Combobox.Option
                                        key={index}
                                        className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'}`}
                                        value={uni}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                                >
                                                    {displayValue(uni)}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}

export default Testcombo;
