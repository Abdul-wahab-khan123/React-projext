import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";


const Card = ({item}) => {
    const [follow, setFollow] = useState(false);

    return (
        <div className='card_wrp'>
            <img src={item.img} alt={item.name} />
            <div className="txt">
                <h2>{item.name}</h2>
                <p>{item.bio}</p>
                <div className="box">
                    <ul>
                        <li><FaRegUser />{item.user}</li>
                        <li><MdOutlineLibraryAddCheck />{item.check}</li>
                    </ul>
                    <button onClick={() => setFollow(!follow)}>{follow ? "Followimg" : "Follow"} <FaPlus /></button>
                </div>
            </div>
        </div>
    )
}

export default Card
