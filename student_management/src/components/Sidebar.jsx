import React from 'react'
import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import Dashboard from '../pages/Dashboard';

const Sidebar = () => {

  const bar =[
    {
        icon: <LuLayoutDashboard className='text-black text-[20px] font-medium'/> ,
        name :"Dashboard",
        link : "/",
    },
    {
        icon: <PiStudentBold className='text-black text-[20px] font-medium'/> ,
        name :"Students",
        link : "/student",
    },
    {
        icon: <MdOutlinePersonAddAlt1 className='text-black text-[20px] font-medium'/> ,
        name :"Add Students",
        link : "/",
    },
    {
        icon: <MdMenuBook className='text-black text-[20px] font-medium'/> ,
        name :"Courses",
        link : "/",
    },
    {
        icon: <IoSettingsOutline className='text-black text-[20px] font-medium'/> ,
        name :"Settings",
        link : "/",
    }
  ]

  return (
    <>
      <div className="bg-black w-full h-dvh px-4 py-4">
        <img src="/public/images/graduation.png" alt="img"  className='w-14'/>
        <ul className='mt-15'>
            {bar.map((item,index)=>(
                <li key={index} className='mb-2 px-4 py-3 bg-white rounded-[10px] flex items-center gap-2'>
                    {item.icon}
                    <Link to={item.link} className='text-black text-sm font-medium'>{item.name}</Link>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
