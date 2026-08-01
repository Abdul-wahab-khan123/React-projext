import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="w-full absolute top-0 py-5 px-10 z-10">
        <nav className='flex items-center justify-between'>
          <div>
            <h1 className='text-white text-xl font-bold'>LOGO HERE</h1>
          </div>
          <ul className='flex items-center gap-6'>
            <li className='text-white'><Link to="" >Men</Link></li>
            <li className='text-white'><Link to="" >Women</Link></li>
            <li className='text-white'><Link to="" >Kids</Link></li>
            <li className='text-white'><Link to="" >Collection</Link></li>
            <li className='text-white'><Link to="" >Brands</Link></li>
          </ul>
          <div className='flex items-center gap-4'>
            <FaRegCircleUser className='text-white text-md' />
            <IoSearch className='text-white text-md' />
            <FaRegHeart className='text-white text-md' />
            <FiShoppingCart className='text-white text-md' />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
