import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="hidden md:flex bg-[#151923] h-[96px] md:px-[48px] md:pr-[100px] lg:px-[165px] items-center md:gap-6 lg:gap-12 w-full">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "font-medium flex gap-3 border-b-2 border-slate-300 mx-0 pb-2 grow-1" : "font-medium flex gap-3 mx-0 pb-2 grow-1"}
      >
        <div>00</div>
        <div>Home</div>
      </NavLink>
      <NavLink
        to="/destination"
        className={({ isActive }) => isActive ? "font-medium flex gap-3 border-b-2 border-slate-300 mx-0 pb-2 grow-1" : "font-medium flex gap-3 mx-0 pb-2 grow-1"}
      >
        <div>01</div>
        <div>Destination</div>
      </NavLink>
      <NavLink
        to="/crew"
        className={({ isActive }) => isActive ? "font-medium flex gap-3 border-b-2 border-slate-300 mx-0 pb-2 grow-1" : "font-medium flex gap-3 mx-0 pb-2 grow-1"}
      >
        <div>02</div>
        <div>Crew</div>
      </NavLink>
      <NavLink
        to="/technology"
        className={({ isActive }) => isActive ? "font-medium flex gap-3 border-b-2 border-slate-300 mx-0 pb-2 grow-1" : "font-medium flex gap-3 mx-0 pb-2 grow-1"}
      >
        <div>03</div>
        <div>Technology</div>
      </NavLink>
    </nav>
  );
};

export default Navigation;
