import React, { useState } from 'react'
import Card from './Card'
import { useRef } from "react"

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
    desc: "One of my best features is the virtual DOM, which helps improve performance by updating only the parts of the page that change. I also support hooks like useState and useEffect, allowing developers to manage data and handle side effects efficiently.",
    filesize: ".8mb",
    close: false,
    tag: { isOpen: false, tagdetail: "Document Now", tagColor: "bg-emerald-700" },
    },
    {
    desc: "Hey, I am React JS, a powerful JavaScript library used for building modern user interfaces. Developers use me to create fast and interactive web applications.",
    filesize: ".8mb",
    close: true,
    tag: { isOpen: true, tagdetail: "Document Now", tagColor: "bg-emerald-700" },
    },
    {
    desc: "I am widely used in the tech industry and supported by a strong community. Many popular platforms and companies rely on me to build scalable and dynamic applications.",
    filesize: ".8mb",
    close: true,
    tag: { isOpen: true, tagdetail: "Document Now", tagColor: "bg-sky-700" },
    },
  ];

  return (
    <div ref={ref} className='fixed w-full h-screen z-3 flex items-start flex-wrap gap-4'>
      {data.map((item , index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground
