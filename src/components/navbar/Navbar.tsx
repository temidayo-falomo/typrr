import React from "react";
import { StyledNavbar } from "./Navbar.styled";
import { FaCrown } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import {MdOutlineColorLens} from 'react-icons/md'

function Navbar() {
  return (
    <StyledNavbar>
      <div className="logo">
        <h3>Typrr</h3>
      </div>
      <div className="links row center gap-1">
        <FaCrown className="pointer"/>
        <AiTwotoneSetting className="pointer"/>
        <MdOutlineColorLens className="pointer" />
        <div
          className="avatar"
          style={{
            backgroundImage: `url(https://avatars.githubusercontent.com/u/90485560?v=4)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
