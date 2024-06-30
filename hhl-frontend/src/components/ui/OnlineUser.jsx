import Image from "next/image";
import React from "react";

const OnlineUser = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
      <div className="relative flex -space-x-3">
        <div className="absolute bottom-0 right-0 z-10 h-2 w-2 rounded-full bg-success-400 md:h-3 md:w-3"></div>
        <div className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
          <Image
            src={"/user-1.jpg"}
            layout="fill"
            className="rounded-full border border-neutral-cream-400 object-cover object-top"
          />
        </div>
        <div className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
          <Image
            src={"/user-2.jpg"}
            layout="fill"
            className="rounded-full border border-neutral-cream-400 object-cover object-top"
          />
        </div>
        <div className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
          <Image
            src={"/user-3.jpg"}
            layout="fill"
            className="rounded-full border border-neutral-cream-400 object-cover object-top"
          />
        </div>
      </div>
      <p className="text-sm-body-sm font-medium text-neutral-warm-grey-500 md:text-md-body-sm lg:text-lg-body-sm">
        132+ online readers.
      </p>
    </div>
  );
};

export default OnlineUser;
