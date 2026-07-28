import React from 'react'
import { NavLink  } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";

const Sidebar = ({isOpen}) => {

  const bar =[
    {
        icon: <LuLayoutDashboard className='text-xl font-medium shrink-0'/> ,
        name :"Dashboard",
        link : "/",
    },
    {
        icon: <PiStudentBold className='text-xl font-medium shrink-0'/> ,
        name :"Students",
        link : "/student",
    },
    {
        icon: <MdOutlinePersonAddAlt1 className='text-xl font-medium shrink-0'/> ,
        name :"Add Students",
        link : "/add-student",
    },
  ]

  return (
    <>
      <div className="bg-black w-full h-full px-4 py-4 transition-all duration-600 ease-in-out overflow-hidden">
        <img src="/public/images/graduation.png" alt="img"  className='w-14'/>
        <ul className='mt-15'>
            {bar.map((item,index)=>(
                <li key={index} className='whitespace-nowrap overflow-hidden'>
                    <NavLink  to={item.link} className={({ isActive }) => `text-sm font-medium mb-2 px-4 py-3 rounded-xl flex items-center gap-2 transition-all duration-400 ease-in-out ${ isActive ? "bg-[#e9b849] text-white" : "text-black bg-white hover:bg-[#e9b849] hover:text-white"}`}>
                       {item.icon} 
                        <span className={`transition-opacity duration-300 ${ isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
                            {item.name}
                        </span>
                    </NavLink>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
