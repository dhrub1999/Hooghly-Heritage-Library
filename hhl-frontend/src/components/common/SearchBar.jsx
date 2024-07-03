"use client";
import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi"; // Importing the search and cancel icons
import { twMerge } from "tailwind-merge";

const SearchBar = ({ recentSearches = [] }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleRecentSearchClick = (search) => {
    setQuery(search);
  };

  const handleCancel = () => {
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-lg">
      <div className="flex items-center overflow-hidden rounded-lg border border-neutral-warm-grey-300 bg-neutral-off-white-400 focus-within:ring-2 focus-within:ring-primary-400">
        <input
          type="text"
          className="w-full py-2 pl-4 pr-10 text-lg-body-sm text-neutral-warm-grey-600 placeholder-neutral-warm-grey-400 focus:outline-none"
          placeholder="Search..."
          value={query}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {query && (
          <FiX
            className="absolute right-10 cursor-pointer text-neutral-warm-grey-400"
            onClick={handleCancel}
          />
        )}
        <FiSearch className="absolute right-3 text-neutral-warm-grey-400" />
      </div>

      {isFocused && recentSearches.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {recentSearches.map((search, index) => (
              <div
                key={index}
                className="block cursor-pointer px-4 py-2 text-sm text-neutral-warm-grey-600 hover:bg-neutral-cream-300"
                onMouseDown={() => handleRecentSearchClick(search)} // Using onMouseDown to prevent blur
              >
                {search}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
