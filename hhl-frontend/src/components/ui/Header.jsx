"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../common/Logo";
import PaddingContainer from "../layout/PaddingContainer";
import AvatarMenu from "../common/AvatarMenu";
import SearchBar from "../common/SearchBar";

const Header = () => {
  const pathname = usePathname();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="fixed z-20 w-full bg-neutral-off-white-300/5 py-2 shadow-md backdrop-blur-sm md:py-3 lg:py-4">
      <PaddingContainer className="relative flex items-center justify-between">
        <div className="flex items-center space-x-16">
          <Link href="/" className="block">
            <Logo className="cursor-pointer" />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex space-x-12 text-md-body-sm font-semibold text-neutral-warm-grey-500">
              <li
                className={`transition-colors duration-200 ease-linear focus-within:underline-offset-4 hover:text-neutral-warm-grey-600 focus:underline ${
                  pathname === "/"
                    ? "text-primary-400 underline underline-offset-4"
                    : ""
                }`}
              >
                <Link href="/">Home</Link>
              </li>

              <li
                className={`transition-colors duration-200 ease-linear focus-within:underline-offset-2 hover:text-neutral-warm-grey-600 focus:underline ${
                  pathname === "/about-us"
                    ? "text-primary-400 underline underline-offset-4"
                    : ""
                }`}
              >
                <Link href="/about-us">About Us</Link>
              </li>

              <li
                className={`transition-colors duration-200 ease-linear focus-within:underline-offset-2 hover:text-neutral-warm-grey-600 focus:underline ${
                  pathname === "/catalog"
                    ? "text-primary-400 underline underline-offset-4"
                    : ""
                }`}
              >
                <Link href="/catalog">Catalog</Link>
              </li>

              <li
                className={`transition-colors duration-200 ease-linear focus-within:underline-offset-2 hover:text-neutral-warm-grey-600 focus:underline ${
                  pathname === "/membership"
                    ? "text-primary-400 underline underline-offset-4"
                    : ""
                }`}
              >
                <Link href="/membership">Membership</Link>
              </li>

              <li
                className={`transition-colors duration-200 ease-linear focus-within:underline-offset-2 hover:text-neutral-warm-grey-600 focus:underline ${
                  pathname === "/online-reading"
                    ? "text-primary-400 underline underline-offset-4"
                    : ""
                }`}
              >
                <Link href="/online-reading">Online Reading</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <AvatarMenu />
          <div>
            {isSearchVisible ? (
              <button
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-neutral-warm-grey-500 hover:text-neutral-600 focus:bg-neutral-warm-grey-500 focus:text-neutral-off-white-300 active:bg-primary-400 active:text-neutral-off-white-400 lg:h-10 lg:w-10"
                onClick={toggleSearchBar}
              >
                <FiX />
              </button>
            ) : (
              <div
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-neutral-warm-grey-500 hover:text-neutral-600 focus:bg-neutral-warm-grey-500 focus:text-neutral-off-white-300 active:bg-primary-400 active:text-neutral-off-white-400 lg:h-10 lg:w-10"
                onClick={toggleSearchBar}
              >
                <FiSearch className="h-2/3 w-2/3" />
              </div>
            )}
            <AnimatePresence>
              {isSearchVisible && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-14 flex w-full justify-center md:top-16 lg:top-20"
                >
                  <SearchBar recentSearches={["hello", "harry potter"]} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </PaddingContainer>
    </header>
  );
};

export default Header;
