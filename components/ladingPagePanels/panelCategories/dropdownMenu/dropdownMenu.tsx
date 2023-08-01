import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = ({ title, items, backgroundColor, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" style={{ transform: 'scale(0.4)', zIndex:3 }} data-te-dropdown-ref>
      <button
        className={`flex items-center whitespace-nowrap bg-${backgroundColor} px-15 py-2.5 text-3xl font-medium leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-${backgroundColor}-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-${backgroundColor}-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-${backgroundColor}-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none`}
        type="button"
        id="dropdownMenuButton"
        data-te-dropdown-toggle-ref
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        {title}
        <span className="ml-2 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <ul
        className={`absolute z-10 float-left m-0 ${
          isOpen ? 'block' : 'hidden'
        } min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700`}
        aria-labelledby="dropdownMenuButton"
        data-te-dropdown-menu-ref
      >
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className={`block w-full whitespace-nowrap bg-transparent px-4 py-2 text-3xl font-normal text-${textColor} hover:bg-${backgroundColor}-100 active:text-${textColor}-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-${textColor}-400 dark:text-${textColor}-200 dark:hover:bg-neutral-600`}
              href={item.link}
              data-te-dropdown-item-ref
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
