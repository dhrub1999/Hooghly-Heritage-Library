import React from "react";
import { twMerge } from "tailwind-merge";

const LeftArrow = ({ className, name }) => {
  return (
    <svg
      name={name}
      viewBox="0 0 24 24"
      fill="none"
      className={twMerge(
        "h-[0.875rem] w-[0.875rem] transition-all duration-300 ease-linear md:h-4 md:w-4 lg:h-[1.125rem] lg:w-[1.125rem] xl:h-5 xl:w-5",
        className,
      )}
    >
      <g clip-path="url(#clip0_28_1094)">
        <path d="M4.94297 5.606L1.02397 9.52501C0.3876 10.1919 0.0325432 11.0782 0.0325432 12C0.0325432 12.9218 0.3876 13.8081 1.02397 14.475L4.94297 18.394C5.08135 18.5373 5.24686 18.6516 5.42987 18.7302C5.61287 18.8088 5.8097 18.8502 6.00887 18.8519C6.20804 18.8536 6.40556 18.8157 6.58991 18.7402C6.77425 18.6648 6.94173 18.5534 7.08257 18.4126C7.22341 18.2718 7.33479 18.1043 7.41021 17.9199C7.48563 17.7356 7.52358 17.5381 7.52185 17.3389C7.52012 17.1397 7.47874 16.9429 7.40013 16.7599C7.32151 16.5769 7.20724 16.4114 7.06398 16.273L4.28497 13.492L22.535 13.469C22.9328 13.469 23.3143 13.311 23.5956 13.0297C23.8769 12.7484 24.035 12.3668 24.035 11.969C24.035 11.5712 23.8769 11.1897 23.5956 10.9083C23.3143 10.627 22.9328 10.469 22.535 10.469L4.29997 10.492L7.06398 7.72701C7.33721 7.4441 7.4884 7.0652 7.48499 6.6719C7.48157 6.27861 7.32381 5.90239 7.0457 5.62428C6.76759 5.34616 6.39137 5.18841 5.99808 5.18499C5.60478 5.18158 5.22588 5.33277 4.94297 5.606Z" />
      </g>
      <defs>
        <clipPath id="clip0_28_1094">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { LeftArrow };