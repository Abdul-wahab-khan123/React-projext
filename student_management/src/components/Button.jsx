import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from "react-icons/ai";

const Button = () => {
  return (
    <div>
      <Link to="" className='text-white text-[12px] font-medium bg-blue-700 py-2 px-4 rounded-full
      flex items-center gap-2'><AiOutlineUserAdd  className='text-xl'/> Add Students</Link>
    </div>
  )
}

export default Button
