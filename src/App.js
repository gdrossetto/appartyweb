import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/login";
import HomePage from "./pages/home/home";
import NewEvent from "./pages/new-event/new-event";
import firebase from "firebase";
import Signup from "./pages/signup/signup";
import MyEvents from "./pages/my-events/my-events";

export function initializeFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyAfTS_Gehnvxct7oVDSyfO9Ob92SFWwwQM",
    authDomain: "partyplanner-7131d.firebaseapp.com",
    databaseURL: "https://partyplanner-7131d.firebaseio.com",
    projectId: "partyplanner-7131d",
    storageBucket: "partyplanner-7131d.appspot.com",
    messagingSenderId: "736310198115",
    appId: "1:736310198115:web:5b083a51f683218106dd56",
    measurementId: "G-3NBTPPY1Z8",
  };

  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase

function App() {
  useEffect(() => {
    if (!firebase.apps.length) {
      initializeFirebase();
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/newevent" component={NewEvent} />
        <Route exact path="/myevents" component={MyEvents} />
      </Switch>
    </Router>
  );
}

export default App;
