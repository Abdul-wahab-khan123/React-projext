import React from 'react'
import { PiUsersFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BsPersonFillX } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import SearchBar from './SearchBar';
import Button from './Button';
import StudentTable from './StudentTable';
import { students } from "../data/students";

const Stats = (props) => {

    const stat = [
        {
            icon: <PiUsersFill />,
            title: "Students",
            total: 10,
            hideicon: <PiUsersThreeFill className='text-5xl text-gray-300' />,
            bgcolor: "bg-[#e9b849]",
            color: "text-[#e9b849]",
        },
        {
            icon: <IoCheckmarkCircleSharp />,
            title: "Active",
            total: 8,
            hideicon: <FaArrowTrendUp className='text-5xl text-gray-300' />,
            bgcolor: "bg-green-600",
            color: "text-green-600",
        },
        {
            icon: <BsPersonFillX />,
            title: "Inactive",
            total: 2,
            hideicon: <IoPerson className='text-5xl text-gray-300' />,
            bgcolor: "bg-red-600",
            color: "text-red-600",
        }
    ]

    return (
        <div className="relative">
            <div className="container w-[95%] mx-auto">
                <h2 className='text-2xl text-black font-bold mb-5'>
                    Student Management System
                </h2>
                <div className="flex justify-between items-center gap-5">
                    {stat.map((item, index) => (
                        <div key={index} className="
                        bg-white flex justify-between items-end gap-10 px-5 py-5 rounded-xl shadow-lg border border-gray-200 w-full">
                            <div className="flex justify-between items-center gap-3">
                                <div className={`flex justify-between items-center ${item.bgcolor} text-white text-2xl px-3 py-3 rounded-md`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className='text-sm font-medium'>{item.title}</p>
                                    <h3 className={`${item.color} text-2xl font-bold`}>{item.total}</h3>
                                </div>
                            </div>
                            <div>
                                {item.hideicon}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white px-5 py-5 rounded-xl shadow-lg border border-gray-200 w-full mt-4">
                    <div className="flex items-center justify-between mb-5">
                        <SearchBar />
                        <Button />
                    </div>
                    <StudentTable students={students.slice(0,3)} />
                </div>
            </div>
        </div>
    )
}

export default Stats
