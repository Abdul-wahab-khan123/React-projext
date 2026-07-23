import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (

    <div className="flex h-dvh">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Navbar />
        <div className="container w-[95%] mx-auto py-5">
          {children}
        </div>
      </div>
    </div>

  );
};

export default Layout;