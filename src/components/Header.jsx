import Logo from "/assets/shared/logo.svg";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  return (
    <header className="fixed">
      <img src={Logo} alt="" />
      <HeaderNavigation />
    </header>
  );
};

export default Header;
