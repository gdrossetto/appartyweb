import React, { useEffect } from "react";
import "./new-event.styles.scss";
import NavBar from "../../components/nav-bar.component";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

const NewEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [categorias, setCategorias] = useState([]);
  const [categoriaId, setCategoriaId] = useState();
  const [user, setUser] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [details, setDetails] = useState();
  const [photo, setPhoto] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
  var history = useHistory();
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

  function createEvent(
    title,
    subtitle,
    details,
    date,
    photo,
    location,
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
        location: location,
        price: price,
        categoryId: categoryId,
        creatorId: creatorId,
      }),
    });
  }

  useEffect(() => {
    setUser(getUser());
    getCategories();
  }, [categorias.length]);

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
                setCategoriaId(e.target.value);
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
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              className="form-control"
              type="text"
            />
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
        </form>
        <button
          onClick={() => {
            createEvent(
              title,
              subtitle,
              details,
              startDate,
              null,
              location,
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
