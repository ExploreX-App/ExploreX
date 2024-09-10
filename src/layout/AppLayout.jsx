import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Outlet />
      <button></button>
    </div>
  );
};

export default AppLayout;
