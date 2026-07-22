import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="relative py-3 bg-white shadow">
        <div className="container w-[95%] mx-auto">
            <nav className="flex justify-between items-center">
                <div>
                    <button className=''>
                        <RiMenu2Line  className='text-black text-3xl'/>
                    </button>
                </div>
                <div className="flex justify-between items-center gap-6">
                    <div className="relative">
                        <IoIosNotificationsOutline className='text-black text-2xl'/>
                        <span className='flex justify-center items-center bg-red-600 text-white text-[10px] w-4 h-4 rounded-full absolute -top-1 left-3'>5</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1280px-Circle-icons-profile.svg.png" alt="img"  className='w-10 h-10'/>
                        <select className='text-sm font-medium text-black'>
                            <option className='text-black'>Admin</option>
                            <option className='text-black'>Log out</option>
                        </select>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
