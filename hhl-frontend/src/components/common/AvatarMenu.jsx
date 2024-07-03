"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { TiBookmark } from "react-icons/ti";

import Dropdown from "./Dropdown";
import Button from "./Button";

const AvatarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-end space-y-4">
      <div
        className={`flex items-center transition-all duration-200 ${isOpen ? "space-x-4 md:space-x-6 lg:space-x-8" : "-space-x-10"}`}
      >
        <aside className="flex flex-col">
          <span
            className={`text-sm-caption-sm font-medium text-neutral-warm-grey-500 transition-all duration-300 ease-in-out md:text-md-caption-sm lg:text-lg-caption-md ${isOpen ? "visible" : "hidden"}`}
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
      {isOpen && (
        <div className="absolute right-0 top-10 z-20 flex min-w-48 max-w-60 flex-col rounded-md border border-neutral-off-white-500 bg-neutral-off-white-300/95 shadow-xl backdrop-blur-sm md:top-11 lg:top-12 lg:rounded-lg">
          <div className="group inline-flex items-center space-x-2 px-4 py-4 transition-colors duration-200 ease-linear hover:bg-neutral-off-white-400 md:space-x-3 md:px-3 lg:space-x-4 lg:px-4">
            <MdOutlineSupervisorAccount className="text-sm-body-sm text-neutral-warm-grey-500 group-hover:text-neutral-warm-grey-600 md:text-md-body-sm" />
            <Link
              href="#"
              className="text-sm-body-sm font-semibold text-neutral-warm-grey-500 group-hover:text-neutral-warm-grey-600 md:text-md-body-sm"
            >
              Account Center
            </Link>
          </div>
          <div className="group inline-flex items-center space-x-2 px-4 py-4 transition-colors duration-200 ease-linear hover:bg-neutral-off-white-400 md:space-x-3 md:px-3 md:text-md-body-sm lg:space-x-4 lg:px-4">
            <BiPurchaseTagAlt className="text-sm-body-sm text-neutral-warm-grey-500 group-hover:text-neutral-warm-grey-600 md:text-md-body-sm" />
            <Link
              href="#"
              className="text-sm-body-sm font-semibold text-neutral-warm-grey-500 group-hover:text-neutral-warm-grey-600 md:text-md-body-sm"
            >
              Subscriptions
            </Link>
          </div>
          <div className="group inline-flex items-center space-x-2 px-4 py-4 transition-colors duration-200 ease-linear hover:bg-neutral-off-white-400 md:space-x-3 md:px-3 md:text-md-body-sm lg:space-x-4 lg:px-4">
            <TiBookmark className="text-sm-body-sm text-neutral-warm-grey-500 group-hover:text-neutral-warm-grey-600 md:text-md-body-sm" />
            <Link
              href="#"
              className="text-sm-body-sm font-semibold text-neutral-warm-grey-500 group-hover:text-neutral-warm-grey-600 md:text-md-body-sm"
            >
              Reading history
            </Link>
          </div>
          <div className="mt-2 px-2 pb-2 md:mt-4 lg:mt-6">
            <Button
              variant="danger"
              leftIcon="false"
              rightIcon="false"
              label="Logout"
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
