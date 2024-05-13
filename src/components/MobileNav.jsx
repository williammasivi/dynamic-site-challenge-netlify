import { NavLink } from "react-router-dom";

const MobileNav = () => {
    return (
        <nav className="bg-[#151923] md:hidden top-28 fixed w-[70%] right-0 h-screen pl-8 text-2xl pt-8 z-50">
            <div className="flex flex-col gap-9 pr-8">
                <NavLink to="/">00 Home</NavLink>
                <NavLink to="/destination">01 Destination</NavLink>
                <NavLink to="/crew">02 Crew</NavLink>
                <NavLink to="/technology">03 Technology</NavLink>
            </div>
        </nav>
    );
};

export default MobileNav;
