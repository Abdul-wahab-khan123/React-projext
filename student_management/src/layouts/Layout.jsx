import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(true)

  return (

    <div className="flex h-dvh overflow-hidden">
      <div className={`transition-all duration-600 ${isOpen ? "w-64" : "w-23"}`}>
        <Sidebar isOpen={isOpen}/>
      </div>
      <div className="flex-1 transition-all duration-600">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="container w-[95%] mx-auto py-5">
          {children}
        </div>
      </div>
    </div>

  );
};

export default Layout;