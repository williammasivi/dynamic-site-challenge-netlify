import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutRoute = () => {
  return (
    <main role="main" className="text-white">
      <Header />
      <Outlet />
    </main>
  );
};

export default LayoutRoute;
