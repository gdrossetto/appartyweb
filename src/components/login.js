import React, { useState } from "react";
import { Container, TextField } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      style={{
        background:
          "linear-gradient(270deg, rgba(47,16,69,1) 0%, rgba(95,35,138,1) 50%, rgba(47,16,69,1) 100%)",
        height: "8vh",
      }}
      class="navbar navbar-expand-lg navbar-light "
    >
      <a
        style={{ color: "orange", alignSelf: "center" }}
        class="navbar-brand "
        href="#"
      >
        APParty
      </a>
    </nav>
  );
}

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div
      style={{
        background: "linear-gradient(to right,#320a45,#411a5e)",
        height: "100vh",
      }}
      className="text-center"
    >
      <NavBar />
      <div style={{ widht: 500, marginTop: "20vh" }}>
        <form autoComplete="off">
          <div class="form-group">
            <br />
            <TextField
              input
              id="outlined-basic"
              label="E-Mail"
              variant="outlined"
              onChange={(texto) => {
                setEmail(texto.target.value);
              }}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "orange" } }}
            />
          </div>
          <div class="form-group">
            <br />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type="password"
              onChange={(texto) => {
                setPassword(texto.target.value);
              }}
              InputProps={{ style: { color: "white", borderColor: "orange" } }}
              InputLabelProps={{
                style: { color: "orange" },
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
              style={{ color: "orange" }}
              class="form-check-label"
              for="exampleCheck1"
            >
              Manter-me logado
            </label>
          </div>
          <button
            type="submit"
            class="btn btn-warning"
            onClick={() => {
              console.log("Email: " + email);
              console.log("Senha: " + password);
            }}
            style={{ marginTop: 20 }}
          >
            Logar
          </button>
        </form>
      </div>
    </div>
  );
}
