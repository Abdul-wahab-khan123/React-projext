import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const InnerBanner = ({ title, homepage, innerpage }) => {

    return (
        <div className="w-full relative overflow-hidden bg-[url(../innerbanner.jfif)] bg-cover bg-repeat bg-center px-15 pt-60 pb-40">
            <div className="absolute inset-0 bg-black/60"></div>
            <h1 className='Recoleta text-8xl font-extrabold text-white mb-10 text-center relative w-1/2 m-auto'>
                {title}
            </h1>
            <ul className='flex items-center justify-center gap-2 text-white relative'>
                <li><Link to="/" className='text-base'>{homepage}</Link></li>
                <li className='text-2xl'><RiArrowRightSLine /></li>
                <li className='text-base'>{innerpage}</li>
            </ul>
        </div>
    );
};

export default InnerBanner
