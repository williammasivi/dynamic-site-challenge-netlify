import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuIcon from "./MenuIcon";
import MobileNav from "./MobileNav";
import constants from '../constants/index';

const Header = () => {
  const { IconHambuger, IconClose } = constants;
  const [isOpen, setIsOpen] = useState(true);

  const changeIcon = () => {
    setIsOpen(!isOpen);
  }

  const icon = isOpen ? IconHambuger : IconClose;

  return (
    <header className="header fixed flex w-screen h-24 items-center">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <div onClick={changeIcon} className="cursor-pointer">

          <MenuIcon
            icon={icon}
          />
          <Navigation />



        </div>
      </div>
      {
        isOpen ? null : <MobileNav />
      }
    </header>
  );
};

export default Header;
