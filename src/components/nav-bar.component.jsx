import React from "react";

const NavBar = () => {
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
        style={{
          color: "orange",
          alignSelf: "center",
          fontFamily: "Righteous",
        }}
        class="navbar-brand "
        href="#"
      >
        APParty
      </a>
    </nav>
  );
};
export default NavBar;
