import React, { useState } from "react";
import { Container, TextField } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../../components/nav-bar.component";
import firebase from "firebase";
import { useEffect } from "react";
import { initializeFirebase } from "../../App";
import "./login.styles.scss";

function login(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.error(error.message);
    });
}

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (!firebase.apps.length) {
      initializeFirebase();
    }
  });
  return (
    <div
      style={{
        backgroundColor: "rgba(47, 16, 69, 1)",
        height: "100vh",
      }}
      className="text-center"
    >
      <div style={{ widht: 500, paddingTop: "25vh" }}>
        <form
          className="form-container"
          style={{
            width: 250,
            backgroundColor: "rgba(62, 15, 102,0.9)",
            borderRadius: 20,
          }}
          autoComplete="off"
        >
          <h1 className="login-title">APParty</h1>
          <div class="form-group">
            <br />
            <input
              className="input-style"
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <br />
            <input
              className="input-style"
              type="password"
              placeholder="Senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label
              style={{ color: "white", fontFamily: " Righteous,cursive" }}
              class="form-check-label"
              for="exampleCheck1"
            >
              Manter-me logado
            </label>
          </div>
          <Link to="/">
            <button
              type="submit"
              className="button-login"
              onClick={() => {
                console.log("Email: " + email);
                console.log("Senha: " + password);
                login(email, password);
              }}
              style={{ marginTop: 20 }}
            >
              Logar
            </button>
          </Link>
          <Link to="/signup">
            <p className="first-access">Não tenho uma conta</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
