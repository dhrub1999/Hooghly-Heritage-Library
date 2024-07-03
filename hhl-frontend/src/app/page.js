import Image from "next/image";

import Button from "@/components/common/Button";
import PaddingContainer from "@/components/layout/PaddingContainer";
import OnlineUser from "@/components/ui/OnlineUser";

export default function Home() {
  return (
    <main className="">
      <div className="relative grid min-h-screen place-items-center md:place-items-start md:items-center">
        <div className="absolute h-full w-full bg-[radial-gradient(circle,_rgba(253,251,242,.9)_30%,_rgba(242,230,201,.9)_85%)]" />
        <Image
          src="/heroBG.jpg"
          layout="fill"
          className="object-center-top -z-10 object-cover"
        />
        <PaddingContainer className="relative">
          <div className="flex w-full max-w-[600px] flex-col gap-y-8 text-center md:items-start md:justify-start md:text-left lg:ml-[6rem] lg:max-w-[660px] lg:gap-y-10 xl:ml-[8.25rem] xl:max-w-[760px]">
            <div className="mt-16 flex flex-col gap-y-1 lg:mt-32 xl:mt-16">
              <p className="text-sm-body-md font-normal text-neutral-500 md:text-md-body-md lg:text-lg-body-md xl:text-lg-body-lg">
                Welcome to{" "}
                <span className="font-semibold text-primary-300">
                  Hooghly Heritage Library.
                </span>
              </p>
              <h1 className="font-jost text-jost-sm font-extrabold leading-[130%] text-neutral-warm-grey-600 md:text-jost-md lg:text-jost-lg">
                A Treasure Trove of Knowledge and History.
              </h1>
              <p className="font-semobold text-sm-body-md text-neutral-warm-grey-500 md:text-md-body-md lg:mt-2 lg:text-lg-body-md">
                Join our community and access thousands of Books, Exclusive
                Online Reading and more.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-x-5 lg:gap-x-12 xl:justify-start">
              <Button
                variant={"primary"}
                label={"View resources"}
                leftIcon="false"
                rightIcon="false"
              />
              <Button
                variant={"secondary"}
                label={"Memberships"}
                leftIcon="false"
                rightIcon="false"
              />
            </div>

            <div className="grid place-items-center">
              <OnlineUser />
            </div>
          </div>
        </PaddingContainer>
      </div>
    </main>
  );
}
