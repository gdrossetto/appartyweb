import React from "react";
import NavBar from "../../components/nav-bar.component";
import "./event.styles.scss";
import { useEffect } from "react";
import { useState } from "react";
const EventPage = ({ match }) => {
  const [eventId, setEventId] = useState();
  const [evento, setEvento] = useState({});
  const [user, setUser] = useState({});

  function getUser() {
    return JSON.parse(localStorage.getItem("userLoggedIn"));
  }

  function marcaPresenca(userId, eventId) {
    fetch("http://192.168.0.10:8080/marcaPresenca", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        eventId: eventId,
        userId: userId,
      }),
    });
  }

  async function getEventInfo(idEvento) {
    let response = await fetch(
      "http://192.168.0.10:8080/buscaEventoPorId?id=" + idEvento
    );
    let responseJson = await response.json();
    console.log(responseJson);
    setEvento(responseJson[0]);
  }

  useEffect(() => {
    if (match != null) getEventInfo(match.params.id);
  }, [match]);

  useEffect(() => {
    setUser(getUser());
    console.log(user);
  }, [user.id]);

  return (
    <div className="event-page">
      <NavBar />
      <h1 className="event-name-orange">{evento.title}</h1>
      <h3 className="event-subtitle">{evento.subtitle}</h3>

      <h1 className="event-section-title">Informações</h1>
      <h3 className="event-info-title">Data: {evento.event_date}</h3>
      <h3 className="event-info-title">Local: {evento.local_nome}</h3>
      <h3 className="event-info-title">Valor da entrada: R${evento.price}</h3>
      <h3 className="event-info-title"></h3>

      <h1 className="event-section-title">Descrição do evento</h1>
      <h3 className="event-info-title">{evento.details}</h3>
      <button
        onClick={() => {
          marcaPresenca(user.id, match.params.id);
        }}
        className="button-presenca"
      >
        Marcar presença
      </button>
    </div>
  );
};
export default EventPage;
