import React from "react";

const OldNavBar = () => {
  return (
    <nav
      style={{
        background:
          "linear-gradient(270deg, rgba(47,16,69,1) 0%, rgba(95,35,138,1) 50%, rgba(47,16,69,1) 100%)",
        height: "8vh",
      }}
      className="navbar navbar-expand-lg navbar-light "
    >
      <a
        style={{
          color: "orange",
          alignSelf: "center",
          fontFamily: "Righteous",
        }}
        className="navbar-brand "
        href="/"
      >
        APParty
      </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a
            style={{ color: "orange" }}
            class="nav-item nav-link active"
            href="#"
          >
            Home <span class="sr-only">(current)</span>
          </a>
          <a style={{ color: "orange" }} class="nav-item nav-link" href="#">
            Features
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavBar = () => {
  return (
    <nav
      style={{
        background:
          "linear-gradient(270deg, rgba(47,16,69,1) 0%, rgba(95,35,138,1) 50%, rgba(47,16,69,1) 100%)",
      }}
      class="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <a
        style={{
          color: "orange",
          alignSelf: "center",
          fontFamily: "Righteous",
        }}
        class="navbar-brand"
        href="#"
      >
        APParty
      </a>
      <button
        style={{
          color: "orange",
        }}
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a style={{ fontFamily: "Righteous" }} class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a
              style={{ fontFamily: "Righteous" }}
              class="nav-link"
              href="/newevent"
            >
              Criar evento
            </a>
          </li>
          <li class="nav-item active">
            <a
              style={{ fontFamily: "Righteous" }}
              class="nav-link"
              href="/newevent"
            >
              Meus eventos
            </a>
          </li>
          <li class="nav-item active dropdown">
            <a
              style={{ fontFamily: "Righteous" }}
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Gabriel
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Nome do evento"
            aria-label="Search"
          />
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};
export default NavBar;
