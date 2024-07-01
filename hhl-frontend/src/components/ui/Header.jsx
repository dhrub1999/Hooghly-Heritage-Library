import React from "react";
import Link from "next/link";

import Logo from "../common/Logo";
import PaddingContainer from "../layout/PaddingContainer";
import AvatarMenu from "../common/AvatarMenu";

const Header = () => {
  return (
    <header className="py-4">
      <PaddingContainer className="flex items-center justify-between">
        <Link href="/" className="block">
          <Logo className="cursor-pointer" />
        </Link>
        <div>
          <AvatarMenu />
        </div>
      </PaddingContainer>
    </header>
  );
};

export default Header;
