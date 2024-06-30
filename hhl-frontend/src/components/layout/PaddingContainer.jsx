import React from "react";
import { twMerge } from "tailwind-merge";

const PaddingContainer = ({ children, className, props }) => {
  return (
    <div
      className={twMerge("px-6 md:px-12 lg:px-16 xl:px-20", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default PaddingContainer;
