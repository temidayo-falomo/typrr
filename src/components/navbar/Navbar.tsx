import React from "react";
import { StyledNavbar } from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <div className="logo">
        <h3>Typrr</h3>
      </div>
      <div className="links">
        <div className="avatar"></div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
