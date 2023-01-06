import React, { useContext } from "react";
import { StyledColorsModal } from "./ColorsModal.styled";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { AppContext } from "../../helper/Context";

function ColorsModal() {
  const { setDisplayColorsModal } = useContext(AppContext);

  return (
    <StyledColorsModal>
      <div className="modal">
        <div className="top">
          <MdOutlineCancel
            className="pointer"
            onClick={() => setDisplayColorsModal(false)}
          />
        </div>
        <div className="row">
          <div
            className="div"
            style={{ display: "grid", placeContent: "center" }}
          >
            <BiSearchAlt2 className="search" />
          </div>
          <input
            type="search"
            placeholder="Search for a color"
            autoFocus={true}
            onBlur={({ target }) => target.focus()}
          />
        </div>

        <div className="col gap-1">
          <div className="option">Blue</div>
          <div className="option">Red</div>
          <div className="option">Yellow</div>
          <div className="option">Green</div>
        </div>
      </div>
    </StyledColorsModal>
  );
}

export default ColorsModal;
