import { NavLink } from "react-router-dom";

const HeaderNavigation = () => {
  return (
    <nav className="z-0">
      <NavLink to="/">00 Home</NavLink>
      <NavLink to="/destination">01 Destination</NavLink>
      <NavLink to="/crew">02 Crew</NavLink>
      <NavLink to="/technology">03 Technology</NavLink>
    </nav>
  );
};

export default HeaderNavigation;
