import React, { useContext } from "react";
import { StyledNavbar } from "./Navbar.styled";
import { FaCrown } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdOutlineColorLens } from "react-icons/md";
import { BsKeyboard, BsQuestionLg } from "react-icons/bs";
import { AppContext } from "../../helper/Context";
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function Navbar() {
  let navigate = useNavigate();
  const { setDisplayColorsModal, getUserErr, user, theme } =
    useContext(AppContext);

  return (
    <StyledNavbar theme={theme} getUserErr={getUserErr}>
      <Link to="/" className="logo row center gap-1">
        <h3>Typrr</h3>
        <BsKeyboard className="pointer" style={{ fontSize: "2rem" }} />
      </Link>
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
          <div>
            <AiTwotoneSetting className="pointer" />
          </div>
        </Tippy>

        <div
          onClick={() => {
            if (getUserErr) {
              navigate("/login");
            }
          }}
          className="avatar pointer"
          style={{
            backgroundImage: user?.userAvatar && `url(${user?.userAvatar})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "grid",
            placeContent: "center",
            backgroundColor: user?.userAvatar ? "#364453" : "transparent",
          }}
        >
          {!user?.userAvatar && <BsQuestionLg />}
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
