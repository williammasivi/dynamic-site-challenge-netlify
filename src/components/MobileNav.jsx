import { NavLink } from "react-router-dom";

const MobileNav = () => {
    return (
        <nav className="h-screen top-0 left-0 w-[100%] flex flex-col justify-between bg-[#151923] absolute z-0">
            <div>
                <NavLink to="/">00 Home</NavLink>
                <NavLink to="/destination">01 Destination</NavLink>
                <NavLink to="/crew">02 Crew</NavLink>
                <NavLink to="/technology">03 Technology</NavLink>
            </div>
        </nav>
    );
};

export default MobileNav;
