import { NavLink } from "react-router-dom";

const HeaderNavigation = () => {
  return (
    <nav>
      <nav>
        <NavLink to="/">00 Home</NavLink>
        <NavLink to="/destination">01 Destination</NavLink>
        <NavLink to="/crew">02 Crew</NavLink>
        <NavLink to="/technology">03 Technology</NavLink>
      </nav>
    </nav>
  );
};

export default HeaderNavigation;
