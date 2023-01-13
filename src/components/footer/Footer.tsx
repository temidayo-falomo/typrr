import React, { useContext, useState } from "react";
import { AppContext } from "../../helper/Context";
import { StyledFooter } from "./Footer.styled";

function Footer() {
  const { setTimerCount, theme } = useContext(AppContext);
  const [number, setNumber] = useState<any>(
    Number(localStorage.getItem("typrrTimerIndex")) || 0
  );
  const timeArr = [15, 30, 60];

  return (
    <StyledFooter theme={theme}>
      {timeArr?.map((numb: any, i: any) => {
        return (
          <div
            key={i}
            className={`normal-circle pointer ${i === number && "btn-active"}`}
            onClick={() => {
              setNumber(i);
              setTimerCount(numb);
              localStorage.setItem("typrrTimerCount", numb);
              localStorage.setItem("typrrTimerIndex", i);
            }}
          >
            <div className="row center gap-5">{numb}s</div>
          </div>
        );
      })}
    </StyledFooter>
  );
}

export default Footer;
