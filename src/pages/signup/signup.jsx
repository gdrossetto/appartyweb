import React, { useState } from "react";
import { Container, TextField } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import NavBar from "../../components/nav-bar.component";
import firebase from "firebase";
import { useEffect } from "react";
import { initializeFirebase } from "../../App";

function createBackendUser(
  fullName,
  userName,
  email,
  birthday,
  auth_token,
  photo
) {
  fetch("http://192.168.0.10:8080/createUser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: fullName,
      userName: userName,
      email: email,
      birthday: birthday,
      auth_token: auth_token,
      photo: photo,
    }),
  })
    .then((response) => response.json())
    .then((resJson) => console.log(resJson))
    .catch((e) => console.error(e.message));
}

function signup(fullName, userHandle, email, birthday, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      user.user
        .updateProfile({
          displayName: userHandle,
        })
        .then(() => {
          let user = firebase.auth().currentUser;
          user.getIdToken().then((token) => {
            createBackendUser(
              fullName,
              userHandle,
              email,
              birthday,
              token,
              "foto aqui"
            );
          });
        });
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userHandle, setUserHandle] = useState("");
  const [fullName, setFullName] = useState("");
  const [birthday, setBirthday] = useState();

  let history = useHistory();

  useEffect(() => {
    if (!firebase.apps.length) {
      initializeFirebase();
    }
  });
  return (
    <div className="form-page">
      <NavBar />
      <h1
        style={{
          textAlign: "center",
          color: "orange",
          fontFamily: "Righteous",
          marginTop: 20,
        }}
      >
        Cadastre-se
      </h1>
      <div className="form-container">
        <form action="">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Nome completo
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Nome de usuário
            </label>
            <input
              onChange={(e) => {
                setUserHandle(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Confirme seu Email
            </label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Senha
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              type="password"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Confirme sua senha
            </label>
            <input className="form-control" type="password" />
          </div>
        </form>

        <button
          onClick={() => {
            signup(fullName, userHandle, email, new Date(), password);
            setTimeout(() => {
              history.push("/");
            }, 300);
          }}
          className="create-event-button"
        >
          Criar conta
        </button>
      </div>
    </div>
  );
}
