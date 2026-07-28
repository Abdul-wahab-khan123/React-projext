import { useState } from "react";
import { PiUsersFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BsPersonFillX } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Stats = (props) => {

    const localStudents = JSON.parse(localStorage.getItem("students")) || [];

    const totalStudents = localStudents.length;

    const activeStudents = localStudents.filter(
        (student) => student.status === "Active"
    ).length;

    const inactiveStudents = localStudents.filter(
        (student) => student.status === "Inactive"
    ).length;

       const stat = [
        {
            icon: <PiUsersFill />,
            title: "Students",
            total: totalStudents,
            hideicon: <PiUsersThreeFill className='text-5xl text-gray-300' />,
            bgcolor: "bg-[#e9b849]",
            color: "text-[#e9b849]",
        },
        {
            icon: <IoCheckmarkCircleSharp />,
            title: "Active",
            total: activeStudents,
            hideicon: <FaArrowTrendUp className='text-5xl text-gray-300' />,
            bgcolor: "bg-green-600",
            color: "text-green-600",
        },
        {
            icon: <BsPersonFillX />,
            title: "Inactive",
            total: inactiveStudents,
            hideicon: <IoPerson className='text-5xl text-gray-300' />,
            bgcolor: "bg-red-600",
            color: "text-red-600",
        }
    ]

    return (
        <div className="relative">
            <div>
                <h2 className='text-2xl text-black font-bold mb-5'>
                    Student Management System
                </h2>
                <div className="flex justify-between items-center gap-5">
                    {stat.map((item, index) => (
                        <div key={index} className="bg-white flex justify-between items-end gap-10 px-5 py-5 rounded-xl shadow-lg border border-gray-200 w-full">
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
            </div>
        </div>
    )
}

export default Stats
