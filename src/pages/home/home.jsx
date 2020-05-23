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
  const [user, setUser] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  let history = useHistory();

  function getEvents() {
    fetch("http://192.168.0.10:8080/getEvents")
      .then((res) => res.json())
      .then((resJson) => setEvents(resJson))
      .then(console.log(events));
  }

  function getUser() {
    return JSON.parse(localStorage.getItem("userLoggedIn"));
  }

  useEffect(() => {
    setUser(getUser());
    console.log(user);

    getEvents();
  }, [events.length]);

  return (
    <div className="homepage">
      <NavBar user={user.user_handle} />

      <div className="homepage-container">
        <SearchCard searchHandler={(e) => setSearchQuery(e.target.value)} />
        {events.map((event) => {
          return (
            <EventCard
              key={event.id}
              foto={event.photo}
              name={event.title}
              local={event.location}
              date={event.date}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
