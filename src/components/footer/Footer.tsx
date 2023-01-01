import React, { useContext, useEffect, useRef, useState } from "react";
import { BsAlarm } from "react-icons/bs";
import { AppContext } from "../../helper/Context";
import { StyledFooter } from "./Footer.styled";

function Footer() {
  const { setTimerCount, timerCount } = useContext(AppContext);
  const [number, setNumber] = useState(0);
  const timeArr = [15, 30, 60, 120];

  // useEffect(() => {
  //   setTimerCount(timeArr[number]);
  // }, [number]);

  return (
    <StyledFooter>
      {timeArr.map((numb: number, i: any) => {
        return (
          <div
            key={i}
            className={`normal-circle pointer ${i === number && "btn-active"}`}
            onClick={() => {
              setNumber(i);
              setTimerCount(numb);
            }}
          >
            <div className="row center gap-5">
              {numb}
              {/* <BsAlarm /> */}
            </div>
          </div>
        );
      })}
    </StyledFooter>
  );
}

export default Footer;
