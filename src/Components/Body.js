import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="grid grid-flow-col space-x-24 ">
      {isMenuOpen && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
