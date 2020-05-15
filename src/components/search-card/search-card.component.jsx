import React from "react";
import "./search-card.styles.scss";
import { useEffect } from "react";

const SearchCard = ({ searchHandler }) => {
  return (
    <div className="search-container">
      <div
        style={{
          backgroundColor: "rgba(47, 16, 69, 1.0)",
          height: "50vh",
          width: "100vw",
        }}
        className="text-center"
      >
        <h1 className="search-name">Procure eventos perto de você!</h1>
        <input
          placeholder="Digite o nome do evento"
          className="searchbox-style"
          type="search"
          onChange={searchHandler}
        />
        <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
