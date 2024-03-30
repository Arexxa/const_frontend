import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function ComboBox({ width, options, zIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleComboBox = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${width && `w-${width}`}`} style={{ zIndex: zIndex || 10 }}>
      <div>
        <button
          type="button"
          onClick={toggleComboBox}
          className={`inline-flex justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${isOpen ? "rounded-t-md" : "rounded-md"}`}
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span>{selectedOption || "Select an option"}</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className={`origin-top-right absolute right-0 mt-2 ${width && `w-${width}`}`} style={{ zIndex: zIndex || 10 }}>
          <div className={`w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${width && `w-${width}`}`}> {/* Added width class */}
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="listbox-label">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  role="menuitem"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default ComboBox;
