import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutRoute;
