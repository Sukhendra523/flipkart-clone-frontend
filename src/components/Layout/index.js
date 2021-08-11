import React from "react";
import Navbar from "../Navbar";
import MenuNavbar from "../MenuNavbar";

const Layout = (props) => {
  return (
    <>
      <div className="navbar-container bg-white  w-100 fixed-top">
        <Navbar />
        <MenuNavbar />
      </div>
      <main className="">{props.children}</main>
    </>
  );
};

export default Layout;
