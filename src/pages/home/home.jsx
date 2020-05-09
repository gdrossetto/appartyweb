import React, { useState } from "react";
import "./homepage.styles.scss";
import NavBar from "../../components/nav-bar.component";
import EventCard from "../../components/event-card/event-card.component";
import { useEffect } from "react";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  function getEvents() {
    fetch("https://apparty1.herokuapp.com/eventos")
      .then((res) => res.json())
      .then((resJson) => setEvents(resJson))
      .then(console.log(events));
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="homepage">
      <NavBar />
      <h2 className="homepage-title">Eventos em destaque</h2>
      <div className="homepage-container">
        {events.map((event) => {
          return (
            <EventCard
              key={event.id}
              foto={event.foto}
              name={event.name}
              local={event.local}
              date={event.data}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
