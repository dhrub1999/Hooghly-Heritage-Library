import React from "react";
import { twMerge } from "tailwind-merge";

const RightArrow = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={twMerge(
        "h-[0.875rem] w-[0.875rem] transition-all duration-300 ease-linear md:h-4 md:w-4 lg:h-[1.125rem] lg:w-[1.125rem] xl:h-5 xl:w-5",
        className,
      )}
    >
      <g clip-path="url(#clip0_28_1223)">
        <path d="M19.1219 18.394L23.0409 14.475C23.6772 13.8082 24.0323 12.9218 24.0323 12C24.0323 11.0782 23.6772 10.1919 23.0409 9.52501L19.1219 5.60601C18.8406 5.32461 18.4591 5.16648 18.0612 5.16638C17.6634 5.16629 17.2818 5.32425 17.0004 5.60551C16.719 5.88677 16.5608 6.2683 16.5607 6.66616C16.5606 7.06401 16.7186 7.44562 16.9999 7.72701L19.7799 10.508L1.52986 10.531C1.13204 10.531 0.750506 10.689 0.469201 10.9704C0.187897 11.2517 0.0298615 11.6332 0.0298615 12.031C0.0298615 12.4288 0.187897 12.8104 0.469201 13.0917C0.750506 13.373 1.13204 13.531 1.52986 13.531L19.7609 13.508L16.9999 16.273C16.7266 16.5559 16.5754 16.9348 16.5789 17.3281C16.5823 17.7214 16.74 18.0976 17.0181 18.3757C17.2962 18.6539 17.6725 18.8116 18.0658 18.815C18.4591 18.8184 18.838 18.6673 19.1209 18.394H19.1219Z" />
      </g>
      <defs>
        <clipPath id="clip0_28_1223">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { RightArrow };