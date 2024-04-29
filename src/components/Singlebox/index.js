import { Fragment, useState, useEffect } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { useProfile } from '../../pages/Profile/contexts/ProfileContexts'

const SingleBox = ({ defaultValue }) => {
  const { getUniversity, universities } = useProfile();
  const [selected, setSelected] = useState(defaultValue || ''); // Initialize with defaultValue or an empty string
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch universities when component mounts
    getUniversity();
  }, []);

  useEffect(() => {
    // Update options when universities state changes
    if (universities) {
      setOptions(universities.map(university => ({ name: university.name })));
    }
  }, [universities]);

  const handleSelectionChange = (selectedItem) => {
    setSelected(selectedItem);
  }

  const handleUniversitySearch = async (value) => {
    try {
      await getUniversity(value);
    } catch (error) {
      console.error('Error fetching universities:', error);
    }
  };

  const filteredOptions =
    query === '' ? options : options.filter((option) =>
      option.name.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="relative w-full" style={{ zIndex: 20 || 10 }}>
      <Combobox value={selected} onChange={handleSelectionChange}>
        <div className="relative w-full cursor-default overflow-hidden bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            value={selected ? selected.name : ''}
            onChange={(event) => {
              setQuery(event.target.value);
              handleUniversitySearch(event.target.value);
            }}
            placeholder="Select an option"
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
            {filteredOptions && filteredOptions.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredOptions.map((option, index) => (
                <Combobox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-orange-500 text-white' : 'text-gray-900'
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

export default SingleBox;
