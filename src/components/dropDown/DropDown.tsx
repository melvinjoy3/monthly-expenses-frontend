import { useState } from "react";

interface Props {
  placeHolder: string;
  options: string[];
  title?: string;
}

const Dropdown = ({ placeHolder, options, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeHolder);

  return (
    <div className="relative inline-block text-left">
      {title ? <span className="font-medium">{title}</span> : ""}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between w-full sm:w-48 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          {selected}
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path d="M7 7l3-3 3 3M7 13l3 3 3-3" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-48 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
