import React, { useContext } from "react";
import { StyledNavbar } from "./Navbar.styled";
import { FaCrown } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdOutlineColorLens } from "react-icons/md";
import { BsKeyboard } from "react-icons/bs";
import { AppContext } from "../../helper/Context";
import { auth } from "../../firebase/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function Navbar() {
  let navigate = useNavigate();
  const { setDisplayColorsModal } = useContext(AppContext);

  return (
    <StyledNavbar>
      <div className="logo row center gap-1">
        <h3>Typrr</h3>
        <BsKeyboard className="pointer" style={{ fontSize: "2rem" }} />
      </div>
      <div className="links row center gap-1">
        <Tippy content="Leaderboards">
          <Link
            to="/leaderboards"
            style={{ display: "grid", placeContent: "center" }}
          >
            <FaCrown className="pointer" />
          </Link>
        </Tippy>

        <Tippy content="Themes">
          <div>
            <MdOutlineColorLens
              className="pointer"
              onClick={() => setDisplayColorsModal(true)}
            />
          </div>
        </Tippy>

        <Tippy content="Settings">
          <Link to="/settings">
            <AiTwotoneSetting className="pointer" />
          </Link>
        </Tippy>

        <div
          onClick={() => {
            if (!auth) {
              navigate("/login");
            }
          }}
          className="avatar pointer"
          style={{
            backgroundImage: auth.currentUser
              ? `url(${auth.currentUser?.photoURL})`
              : "url(https://i.imgur.com/6VBx3io.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
