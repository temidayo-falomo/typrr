import React, { useContext, useEffect, useState } from "react";
import { StyledColorsModal } from "./ColorsModal.styled";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { AppContext } from "../../helper/Context";
import { palette } from "./Palette";
import { AiOutlineCheck } from "react-icons/ai";

function ColorsModal() {
  const { setDisplayColorsModal, setDisplayInput, setTheme, theme } =
    useContext(AppContext);

  const [searchVal, setSearchVal] = useState<string>("");
  const [number, setNumber] = useState<any>(
    Number(localStorage.getItem("typrrColor")) || 0
  );

  useEffect(() => {
    setDisplayInput(false);
  }, []);

  return (
    <StyledColorsModal theme={theme}>
      <div className="modal">
        <div className="top">
          <MdOutlineCancel
            className="pointer"
            onClick={() => {
              setDisplayInput(true);
              setDisplayColorsModal(false);
            }}
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
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
          />
        </div>

        <div className="col gap-1">
          {palette
            ?.filter((data: any) => {
              if (searchVal === "") {
                return data;
              } else if (
                data.colorName.toLowerCase().includes(searchVal.toLowerCase())
              ) {
                return data;
              }
            })
            .map((color: any, i: any) => {
              return (
                <div
                  className={`option ${i === number && "option-active"}`}
                  key={i}
                  onMouseOver={() => {
                    setTheme(color);
                    setNumber(i);
                    localStorage.setItem("typrrColor", i);
                    localStorage.setItem(
                      "typrrColorScheme",
                      JSON.stringify(color)
                    );
                  }}
                  onClick={() => {
                    setNumber(i);
                    setDisplayInput(true);
                    setDisplayColorsModal(false);
                    localStorage.setItem("typrrColor", i);
                    localStorage.setItem(
                      "typrrColorScheme",
                      JSON.stringify(color)
                    );
                  }}
                >
                  {color.colorName}
                  {i === number && <AiOutlineCheck />}
                </div>
              );
            })}
        </div>
      </div>
    </StyledColorsModal>
  );
}

export default ColorsModal;
