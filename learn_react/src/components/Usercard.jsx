import { useState } from 'react'
import Card from './Card'

function Usercard() {

  const data = [
      {
          id: 1,
          name: "Emma Watson",
          bio: "Creative UI/UX designer who loves clean and modern interfaces.",
          user: "520",
          check: "96",
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
      },
      {
          id: 2,
          name: "John Anderson",
          bio: "Frontend developer passionate about React and JavaScript.",
          user: "275",
          check: "73",
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
      },
      {
         id: 3,
          name: "Sophia Brown",
          bio: "Digital marketer helping brands grow with social media.",
          user: "430",
          check: "88",
          img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
      },
      {
          id: 4,
          name: "Michael Johnson",
          bio: "Full Stack Developer with experience in React and Node.js.",
          user: "690",
          check: "120",
          img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
      },
  ];

  return (
    <>
        <section className='card-sec'>
            <div className="container">
                <div className="row">
                    {data.map((item)=>(
                       <Card  key={item.id} item={item}/>
                    ))};
                </div>
            </div>
        </section>
    </>
  )
}

export default Usercard
