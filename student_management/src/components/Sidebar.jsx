import React from 'react'
import { NavLink  } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";

const Sidebar = () => {

  const bar =[
    {
        icon: <LuLayoutDashboard className='text-[20px] font-medium'/> ,
        name :"Dashboard",
        link : "/",
    },
    {
        icon: <PiStudentBold className='text-[20px] font-medium'/> ,
        name :"Students",
        link : "/student",
    },
    {
        icon: <MdOutlinePersonAddAlt1 className='text-[20px] font-medium'/> ,
        name :"Add Students",
        link : "/add-student",
    },
  ]

  return (
    <>
      <div className="bg-black w-full h-full px-4 py-4">
        <img src="/public/images/graduation.png" alt="img"  className='w-14'/>
        <ul className='mt-15'>
            {bar.map((item,index)=>(
                <li key={index}>
                    <NavLink  to={item.link} className={({ isActive }) => `text-sm font-medium mb-2 px-4 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ease-in-out ${ isActive ? "bg-[#e9b849] text-white" : "text-black bg-white hover:bg-[#e9b849] hover:text-white"}`}>
                       {item.icon} <span>{item.name}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
