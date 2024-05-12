import { useState } from "react";
import OpenIcon from "/assets/shared/icon-hamburger.svg";
import CloseIcon from "/assets/shared/icon-close.svg";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuIcon from "./MenuIcon";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const changeIcon = () => {
    setIsOpen(!isOpen);
  };

  const icon = isOpen ? OpenIcon : CloseIcon;

  return (
    <header className="header fixed flex w-screen h-24 items-center">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <div onClick={changeIcon} className="cursor-pointer">
          <MenuIcon icon={icon} />
          <Navigation />

<<<<<<< HEAD
          {/* <MobileNav />  */}
=======


>>>>>>> e5afba06c27039f67b50c1260f24524a91f062c1
        </div>
      </div>
      {
        isOpen ? null : <MobileNav />
      }
    </header>
  );
};

export default Header;
