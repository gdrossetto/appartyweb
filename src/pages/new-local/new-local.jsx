import React, { useEffect } from "react";
import "../new-event/new-event.styles.scss";
import NavBar from "../../components/nav-bar.component";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

const NewLocal = () => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [estado, setEstado] = useState("");
  const [user, setUser] = useState();
  const [cidade, setCidade] = useState("");
  const [capacidade, setCapacidade] = useState("");
  var history = useHistory();

  function initializeFirebase() {
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

  function getUser() {
    return JSON.parse(localStorage.getItem("userLoggedIn"));
  }

  function createLocal(nome, endereco, estado, cidade, capacidade) {
    fetch("http://192.168.0.10:8080/createLocal", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        endereco: endereco,
        estado: estado,
        cidade: cidade,
        capacidade: parseInt(capacidade),
      }),
    });
  }

  useEffect(() => {
    if (!firebase.apps.length) {
      initializeFirebase();
    }
    setUser(getUser());
  }, []);

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
        Criar Local
      </h1>
      <div className="form-container">
        <form action="">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Nome do Local
            </label>
            <input
              onChange={(e) => {
                setNome(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Endereço
            </label>
            <input
              onChange={(e) => {
                setEndereco(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Estado
            </label>
            <input
              onChange={(e) => {
                setEstado(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Cidade
            </label>
            <input
              onChange={(e) => {
                setCidade(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Capacidade
            </label>
            <input
              onChange={(e) => {
                setCapacidade(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>
        </form>
        <button
          onClick={() => {
            createLocal(nome, endereco, estado, cidade, capacidade);
            setTimeout(() => {
              history.push("/");
            }, 300);
          }}
          className="create-event-button"
        >
          Criar Local
        </button>
      </div>
    </div>
  );
};
export default NewLocal;
