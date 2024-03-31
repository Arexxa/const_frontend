import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'

const ComboBox = ({ options }) => {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState('Select an option');

  const handleSelectionChange = (selectedItems) => {
    setSelected(selectedItems)
  }

  const filteredOptions =
    query === '' || query === 'Select an option'
      ? options
      : options.filter((option) =>
          option.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="relative w-full" style={{ zIndex: 20 || 10 }}>
      <Combobox value={selected} onChange={handleSelectionChange} multiple>
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-2.5 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0" // Adjusted padding and height
            displayValue={(selected) => {
              return selected.map((item) => item.name).join(', ')
            }}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Select an option" // Set placeholder attribute
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
          <Combobox.Options className="text-left absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {filteredOptions.length === 0 && query !== '' && query !== 'Select an option' ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredOptions.map((option) => (
                <Combobox.Option
                  key={option.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-teal-600 text-white' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-1.5 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        >
                          <div className="h-5 w-5" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          </div>
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export default ComboBox;
