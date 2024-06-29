import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";
import Icon from "../ui/icons";

const buttonVariants = cva(
  "group relative flex h-10 min-w-[160px] cursor-pointer items-center justify-center gap-x-1 rounded-[0.25rem] border bg-blue-600 px-3 font-dmSans text-sm-body-sm font-semibold text-white md:h-12 md:gap-x-[0.375rem] md:rounded-md md:px-[0.875rem] md:text-md-body-sm lg:h-14 lg:gap-x-2 lg:rounded-lg lg:px-4 lg:text-lg-body-sm xl:text-lg-body-md user-select-none transition-colors duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-300 text-neutral-cream-500 group-hover:bg-primary-400 group-hover:text-neutral-cream-400 border-primary-300 group-hover:border-primary-400 group-focus:border-primary-400 group-focus:text-primary-400 group-focus:bg-neutral-off-white-300 group-focus:border-primary-400",
        secondary:
          "bg-neutral-off-white-300 border-neutral-warm-grey-500 group-hover:border-neutral-warm-grey-400 text-neutral-warm-grey-500 group-hover:bg-neutral-off-white-400 group-hover:text-neutral-warm-grey-400 border-neutral-off-white-300 group-hover:border-neutral-off-white-400 group-focus:border-neutral-cream-500 group-focus:text-neutral-cream-500 group-focus:bg-neutral-warm-grey-500 ",
        success:
          "bg-neutral-off-white-300 text-success-400 border-success-400 group-hover:border-success-500 group-hover:text-success-300 group-hover:bg-success-500 group-focus:border-success-500 group-focus:text-success-500 group-focus:bg-neutral-off-white-300",
        danger:
          "bg-neutral-off-white-300 text-error-400 border-error-400 group-hover:border-error-500 group-hover:text-neutral-off-white-300 group-hover:bg-error-500 group-focus:border-error-500 group-focus:text-error-500 group-focus:bg-neutral-off-white-300",
      },
      fullWidth: {
        true: "w-full",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
      },
    },
  },
);

const iconVariants = cva("", {
  variants: {
    variant: {
      primary:
        "fill-neutral-cream-500 group-hover:fill-neutral-cream-400 group-focus:fill-primary-400",
      secondary:
        "fill-neutral-warm-grey-500 group-hover:fill-neutral-warm-grey-400 group-focus:fill-neutral-cream-500",
      success:
        "fill-success-400 group-hover:fill-success-300 group-focus:fill-success-500",
      danger:
        "fill-error-400 group-hover:fill-neutral-off-white-300 group-focus:fill-error-500",
    },
    isLoading: {
      true: "animate-spin",
    },
  },
});

const Button = ({
  btnHref = "/",
  variant,
  fullWidth,
  label,
  leftIcon = "leftarrow",
  rightIcon = "rightarrow",
  onClick,
  isLoading,
  disabled,
  className,
  type = "button",
  props,
}) => {
  return (
    <Link href={btnHref} className="group block outline-none">
      <button
        className={buttonVariants({ variant, fullWidth, disabled, className })}
        onClick={onClick}
        type={type}
        {...props}
      >
        {leftIcon && (
          <Icon
            name={leftIcon}
            className={iconVariants({ variant, isLoading })}
          />
        )}
        <div className="px-1 md:px-[0.375rem] lg:px-2">{label}</div>
        {rightIcon && (
          <Icon
            name={rightIcon}
            className={iconVariants({ variant, isLoading })}
          />
        )}
      </button>
    </Link>
  );
};

export default Button;
