import React from "react";
import "./event-card.styles.scss";
import { useEffect } from "react";

const EventCard = ({ name, date, local, foto }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          foto
            ? foto
            : "https://i.pinimg.com/originals/48/4e/8b/484e8b75c17479f727978e48958de565.jpg"
        })`,
      }}
      className="event-container"
    >
      <div className="event-content">
        <h1 className="event-name">{name}</h1>
        <h2 className="event-name">{date}</h2>
        <h3 className="event-name">{local}</h3>
      </div>
    </div>
  );
};

export default EventCard;
