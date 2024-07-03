"use client";
import React, { useState } from "react";
import Icon from "../ui/icons";

const Dropdown = ({ label, items, onSelect }) => {
  const [open, setIsOpen] = useState(false);

  const toggleDropdownMenu = () => setIsOpen(!open);

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full items-center justify-between px-4 py-2 font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={toggleDropdownMenu}
        >
          {label}
          <span className="ml-2">
            <Icon
              name="rightarrow"
              className={`fill-neutral-warm-grey-300 transition-all duration-200 ease-linear ${open ? "rotate-90" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
