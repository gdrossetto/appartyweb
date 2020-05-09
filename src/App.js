import React, { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/login";
import HomePage from "./pages/home/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
