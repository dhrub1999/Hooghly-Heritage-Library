import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";
import Icon from "../ui/icons";

const buttonVariants = cva(
  "group relative flex h-10 min-w-[160px] cursor-pointer items-center justify-center gap-x-1 overflow-hidden rounded-[0.25rem] border-none bg-blue-600 px-3 font-dmSans text-sm-body-sm font-semibold text-white md:h-12 md:gap-x-[0.375rem] md:rounded-md md:px-[0.875rem] md:text-md-body-sm lg:h-14 lg:gap-x-2 lg:rounded-lg lg:px-4 lg:text-lg-body-sm xl:text-lg-body-md",
);

const Button = ({
  btnHref = "/",
  variant,
  fullWidth,
  label,
  leftIcon = "leftarrow",
  rightIcon = "rightarrow",
  onClick,
  isLoading,
  className,
  type,
}) => {
  return (
    <Link href={btnHref} className="block">
      <button className="" onClick={onClick} type={type}>
        {leftIcon && (
          <Icon
            name={leftIcon}
            className="fill-neutral-200 group-hover:fill-neutral-50"
          />
        )}
        <div className="px-1 md:px-[0.375rem] lg:px-2">{label}</div>
        {rightIcon && (
          <Icon
            name={rightIcon}
            className="fill-neutral-200 group-hover:fill-neutral-50"
          />
        )}
      </button>
    </Link>
  );
};

export default Button;
