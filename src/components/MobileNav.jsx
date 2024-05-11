import { NavLink } from "react-router-dom";

const MobileNav = () => {
    return (
        <nav className="h-screen top-0 right-0 w-[70%] flex flex-col justify-between bg-red-500 absolute z-0">
            <NavLink to="/">00 Home</NavLink>
            <NavLink to="/destination">01 Destination</NavLink>
            <NavLink to="/crew">02 Crew</NavLink>
            <NavLink to="/technology">03 Technology</NavLink>
        </nav>
    );
};

export default MobileNav;
