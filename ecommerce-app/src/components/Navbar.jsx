import React from 'react'
import { NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Shop', path: '/Shop' },
    { name: 'Collection', path: '/' },
    { name: 'Brands', path: '/' },
    { name: 'Contact', path: '/Contact' }
  ];

  return (
    <>
      <div className="w-full absolute top-0 py-5 px-10 z-10">
        <nav className='flex items-center justify-between'>
          <div>
            <h1 className='text-white text-2xl font-bold Recoleta'>LOGO HERE</h1>
          </div>
          <ul className='flex items-center gap-8'>
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className="group relative inline-flex h-7 overflow-hidden">
                  <span className="relative flex flex-col transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-7">
                    <span className="h-7 leading-7 text-lg text-white">
                      {link.name}
                    </span>
                    <span className="h-7 leading-7 text-lg text-white">
                      {link.name}
                    </span>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-4'>
            <FaRegCircleUser className='text-white text-2xl' />
            <IoSearch className='text-white text-2xl' />
            <FaRegHeart className='text-white text-2xl' />
            <FiShoppingCart className='text-white text-2xl' />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
