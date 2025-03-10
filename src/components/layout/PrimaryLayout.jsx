import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const PrimaryLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      Footer
    </>
  );
};

export default PrimaryLayout;
