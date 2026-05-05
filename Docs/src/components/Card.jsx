import React from 'react'
import { LuNotebookPen } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion"


const Card = ({data ,reference}) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} className="w-75 h-82 bg-white rounded-3xl pt-6 relative overflow-hidden flex flex-col flex-shrink-0 justify-between">
        <div className="px-6">
            <LuNotebookPen  className="text-2xl text-emerald-700"/>
            <p className='text-sm font-normal mt-5 text-black'>
                {data.desc}
            </p>
        </div>
        <div>
            <div className="flex items-center justify-between gap-2 px-6 pb-5">
                <h6 className='text-sm font-bold text-black'>{data.filesize}</h6>
                <span className='flex items-center justify-center bg-black text-white h-10 w-10 rounded-full cursor-pointer'>
                    {data.close ? <FaXmark className="text-lg"/> : <FiDownload className="text-lg"/>}
                </span>
            </div>
            {data.tag.isOpen &&
                (<div className="w-full">
                    <h4 className={`text-sm font-medium ${data.tag.tagColor} text-white py-4 w-full text-center cursor-pointer`}>
                        {data.tag.tagdetail}
                    </h4>
                </div>)
            }
        </div>
      </motion.div>
    </>
  )
}

export default Card