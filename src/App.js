import React, { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <Login />
        </Route>
        <Route path="/users">
          <Login />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
