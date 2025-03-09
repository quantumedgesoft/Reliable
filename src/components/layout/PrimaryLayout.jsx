import React from "react";
import { Outlet } from "react-router-dom";

const PrimaryLayout = () => {
  return (
    <div>
      Nav
      <Outlet />
      Footer
    </div>
  );
};

export default PrimaryLayout;
