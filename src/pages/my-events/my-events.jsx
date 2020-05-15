import React, { useState } from "react";
import NavBar from "../../components/nav-bar.component";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./my-events.styles.scss";
import MyEventsCard from "../../components/myevents-card.component/myevents-card.component";

const MyEvents = () => {
  const [events, setEvents] = useState([]);

  function getEvents() {
    fetch("https://apparty1.herokuapp.com/eventos")
      .then((res) => res.json())
      .then((resJson) => setEvents(resJson))
      .then(console.log(events));
  }

  useEffect(() => {
    getEvents();
  }, [events.length]);

  return (
    <div className="myevents-page">
      <NavBar />
      <h3 className="favorite-events">Eventos favoritos</h3>
      <div className="myevents-container">
        {events.map((event) => {
          return (
            <MyEventsCard
              name={event.name}
              date={event.data}
              location={event.local}
              photo={event.foto}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyEvents;
