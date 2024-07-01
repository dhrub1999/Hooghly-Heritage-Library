"use client";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Dropdown from "./Dropdown";

const AvatarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (item) => {
    console.log("Hi there");
  };
  const dropdownItems = [
    { label: "Account settings", href: "/settings" },
    { label: "Support", href: "/support" },
    { label: "License", href: "/license" },
    { label: "Sign out", onClick: () => console.log("Signing out...") },
  ];

  return (
    <div>
      <div
        className={`flex items-center transition-all duration-200 ${isOpen ? "space-x-4" : "-space-x-10"}`}
      >
        <aside className="flex flex-col">
          <span
            className={`text-sm-caption-sm font-medium text-neutral-warm-grey-500 transition-all duration-300 ease-in-out md:text-md-caption-sm lg:text-lg-caption-md ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            Hi,
          </span>
          <p
            className={`truncate text-sm-caption-lg font-bold text-neutral-warm-grey-600 transition-all duration-300 ease-in-out md:text-md-caption-lg lg:text-lg-caption-lg ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            Julia Lawrence
          </p>
        </aside>
        <Image
          onClick={() => setIsOpen(!isOpen)}
          src="/user-1.jpg"
          height={100}
          width={100}
          className="relative z-10 h-8 w-8 cursor-pointer rounded-full object-cover ring-1 ring-neutral-warm-grey-300 ring-offset-1 transition-all duration-200 ease-in-out hover:ring-neutral-warm-grey-400 hover:ring-offset-2 lg:h-10 lg:w-10"
        />
      </div>
      <div className="relative z-10">
        <Dropdown
          items={dropdownItems}
          label={"options"}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default AvatarMenu;
