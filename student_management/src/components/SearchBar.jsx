import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="relative">
        <input type="search" name="search" placeholder="Search Student..." className="text-xs text-black py-3 pl-9 pr-4 border border-gray-300 rounded-full outline-none w-90"/>
        <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
    </div>
  )
}

export default SearchBar
