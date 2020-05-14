import React from "react";
import "./search-card.styles.scss";
import { useEffect } from "react";

const SearchCard = ({ name, date, local, foto }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          foto
            ? foto
            : "https://i.pinimg.com/originals/48/4e/8b/484e8b75c17479f727978e48958de565.jpg"
        })`,
      }}
      className="search-container"
    >
      <div
        style={{
          backgroundColor: "rgba(47, 16, 69, 1.0)",
          height: "50vh",
          width: "100vw",
        }}
        className="text-center"
      >
        <h1 className="event-name">Procurando algum evento?</h1>
        <input
          placeholder="Digite o nome do evento"
          className="searchbox-style"
          type="search"
        />
        <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
