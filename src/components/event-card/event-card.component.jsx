import React from "react";
import "./event-card.styles.scss";

const EventCard = ({ name, date, local, foto }) => {
  return (
    <div className="event-card">
      <img className="event-photo" src={foto} alt="foto do evento" />
      <h3 className="event-name">{name}</h3>
      <p className="event-name">{date}</p>
      <p className="event-name">{local}</p>
      <button className="event-button">Ver Detalhes</button>
    </div>
  );
};

export default EventCard;
