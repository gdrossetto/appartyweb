import React, { useState } from "react";
import NavBar from "../../components/nav-bar.component";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./myevents-card.styles.scss";

const MyEventsCard = ({ name, date, location, photo }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${photo})`,
        }}
        className="myevents-card"
      >
        <div className="myevents-content">
          <h2 className="myevents-text">{name}</h2>
          <h3 className="myevents-text">{date}</h3>
          <h3 className="myevents-text">{location}</h3>
        </div>
      </div>
    </div>
  );
};
export default MyEventsCard;
