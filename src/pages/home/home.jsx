import React, { useState } from "react";
import "./homepage.styles.scss";
import NavBar from "../../components/nav-bar.component";
import EventCard from "../../components/event-card/event-card.component";
import { useEffect } from "react";
import firebase from "firebase";
import { initializeFirebase } from "../../App";
import { useHistory } from "react-router-dom";
import SearchCard from "../../components/search-card/search-card.component";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState();
  let history = useHistory();

  function getEvents() {
    fetch("https://apparty1.herokuapp.com/eventos")
      .then((res) => res.json())
      .then((resJson) => setEvents(resJson))
      .then(console.log(events));
  }

  useEffect(() => {
    if (!firebase.apps.length) {
      initializeFirebase();
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        setUser(user.displayName);
      } else {
        history.push("/login");
      }
    });
    getEvents();
  }, [user]);

  return (
    <div className="homepage">
      <NavBar user={user} />

      <div className="homepage-container">
        <SearchCard />
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
