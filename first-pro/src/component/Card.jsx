import React from "react";
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt="img" />
        <button className="save-btn">Save <Bookmark  size={18}/></button>
      </div>
      <div className="content">
        <h4>{props.companyName} <span>{props.daysAgo}</span></h4>
        <h2>{props.jobPost}</h2>
        <ul>
          <li>{props.time}</li>
          <li>{props.position}</li>
        </ul>
      </div>
      <div className="bottom">
        <h4>{props.salary} <span>Pak,Eng</span></h4>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
