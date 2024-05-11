import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex bg-[#151923] h-[96px] px-[165px] items-center gap-12">
      <NavLink to="/" className="font-medium flex gap-3">
        <div>00</div>
        <div>Home</div>
      </NavLink>
      <NavLink to="/destination" className="font-medium flex gap-3">
        <div>01</div>
        <div>Destination</div>
      </NavLink>
      <NavLink to="/crew" className="font-medium flex gap-3">
        <div>02</div>
        <div>Crew</div>
      </NavLink>
      <NavLink to="/technology" className="font-medium flex gap-3">
        <div>03</div>
        <div>Technology</div>
      </NavLink>
    </nav>
  );
};

export default Navigation;
