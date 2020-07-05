import React, { useEffect } from "react";
import "./new-event.styles.scss";
import NavBar from "../../components/nav-bar.component";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

const NewEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [categorias, setCategorias] = useState([]);
  const [locais, setLocais] = useState([]);
  const [categoriaId, setCategoriaId] = useState(1);
  const [localId, setLocalId] = useState(1);
  const [user, setUser] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [details, setDetails] = useState();
  const [photo, setPhoto] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
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

  function handleUploadSuccess(filename) {
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => setPhoto(url));
  }

  function getUser() {
    return JSON.parse(localStorage.getItem("userLoggedIn"));
  }

  function getCategories() {
    fetch("http://192.168.0.10:8080/getCategories")
      .then((res) => res.json())
      .then((resJson) => {
        setCategorias(resJson);
      })
      .catch((e) => console.error(e.message));
  }

  function getLocais() {
    fetch("http://192.168.0.10:8080/getLocais")
      .then((res) => res.json())
      .then((resJson) => {
        setLocais(resJson);
      })
      .catch((e) => console.error(e.message));
  }

  function createEvent(
    title,
    subtitle,
    details,
    date,
    photo,
    locationId,
    price,
    categoryId,
    creatorId
  ) {
    fetch("http://192.168.0.10:8080/createEvent", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: title,
        subtitle: subtitle,
        details: details,
        date: date,
        createdAt: new Date(),
        photo: photo,
        locationId: locationId,
        price: price,
        categoryId: categoryId,
        creatorId: creatorId,
      }),
    });
  }

  useEffect(() => {
    if (!firebase.apps.length) {
      initializeFirebase();
    }
    setUser(getUser());
    getCategories();
  }, [categorias.length]);

  useEffect(() => {
    getLocais();
  }, [locais.length]);

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
        Criar Evento
      </h1>
      <div className="form-container">
        <form action="">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Nome do Evento
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Categoria
            </label>
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setCategoriaId(parseInt(e.target.value));
              }}
              class="form-control"
            >
              {categorias.length
                ? categorias.map((categoria) => {
                    return (
                      <option value={categoria.id}>{categoria.name}</option>
                    );
                  })
                : null}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="">
              Resumo
            </label>
            <input
              onChange={(e) => {
                setSubtitle(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Data
            </label>
            <br />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat={"dd/MM/yyyy"}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Local
            </label>
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setLocalId(parseInt(e.target.value));
              }}
              class="form-control"
            >
              {locais.length
                ? locais.map((local) => {
                    return <option value={local.id}>{local.nome}</option>;
                  })
                : null}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Descrição
            </label>
            <textarea
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Foto
            </label>
            <br />
            <label
              style={{
                backgroundColor: "orange",
                color: "black",
                fontFamily: "Righteous",
                padding: 10,
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Selecione uma foto
              <FileUploader
                hidden
                accept="image/*"
                name="foto"
                randomizeFilename
                storageRef={
                  firebase.apps.length ? firebase.storage().ref("images") : null
                }
                onUploadSuccess={handleUploadSuccess}
              />
            </label>
          </div>
        </form>
        <button
          onClick={() => {
            createEvent(
              title,
              subtitle,
              details,
              startDate,
              photo,
              localId,
              20.0,
              categoriaId,
              user.id
            );

            setTimeout(() => {
              history.push("/");
            }, 300);
          }}
          className="create-event-button"
        >
          Criar Evento
        </button>
      </div>
    </div>
  );
};
export default NewEvent;
