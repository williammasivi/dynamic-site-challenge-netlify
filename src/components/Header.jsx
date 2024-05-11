import { useState } from "react";
import OpenIcon from '/assets/shared/icon-hamburger.svg';
import CloseIcon from '/assets/shared/icon-close.svg';
import Logo from "./Logo";
import HeaderNavigation from "./HeaderNavigation";
import MenuIcon from "./MenuIcon";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const changeIcon = () => {
    setIsOpen(!isOpen);
  }

  const icon = isOpen ? OpenIcon : CloseIcon;

  return (
    <header className="fixed w-full flex items-center justify-between pt-6 px-6">
      <Logo />
      <div onClick={changeIcon} className="cursor-pointer">
        <MenuIcon
          icon={icon}
        />
      </div>
      {
        <MobileNav /> && open
      }
      {/* <HeaderNavigation /> */}
    </header>
  );
};

export default Header;
