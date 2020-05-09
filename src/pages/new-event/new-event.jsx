import React from "react";
import "./new-event.styles.scss";
import NavBar from "../../components/nav-bar.component";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewEvent = () => {
  const [startDate, setStartDate] = useState(new Date());

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
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Local
            </label>
            <input className="form-control" type="text" />
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
              Capacidade
            </label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Descrição
            </label>
            <textarea className="form-control" type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewEvent;
