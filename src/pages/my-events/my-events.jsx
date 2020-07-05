import React, { useState } from "react";
import NavBar from "../../components/nav-bar.component";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./my-events.styles.scss";
import MyEventsCard from "../../components/myevents-card.component/myevents-card.component";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [presencas, setPresencas] = useState([]);
  const [user, setUser] = useState({});
  function getUser() {
    return JSON.parse(localStorage.getItem("userLoggedIn"));
  }

  function getEvents(userId) {
    fetch(
      "http://192.168.0.10:8080/buscaEventoPorIdCriador?creator_id=" + userId
    )
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setEvents(resJson);
      })
      .then(console.log(events));
  }

  function getPresencas(userId) {
    fetch("http://192.168.0.10:8080/getPresencas?userId=" + userId)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setPresencas(resJson);
      })
      .then(console.log(events));
  }

  useEffect(() => {
    setUser(getUser());
  }, [user.id]);

  useEffect(() => {
    if (user.id != null) {
      getEvents(user.id);
      getPresencas(user.id);
    }
  }, [user.id]);

  return (
    <div className="myevents-page">
      <NavBar user={user.nome} />
      <h3 className="favorite-events">Eventos criados por mim</h3>
      <div className="myevents-container">
        {events.map((event) => {
          return (
            <MyEventsCard
              name={event.title}
              date={event.date}
              location={event.location}
              photo={event.photo}
            />
          );
        })}
      </div>
      <h3 className="favorite-events">Vou nesses eventos</h3>
    </div>
  );
};

export default MyEvents;
