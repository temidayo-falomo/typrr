import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helper/Context";
import { StyledLetter } from "./Letter.styled";

function Letter(props: any) {
  const [textColor, setTextColor] = useState<any>("gainsboro");

  useEffect(() => {
    if (props.textData[props.number] === props.lastLetter) {
      setTextColor("green");
      props.setWpm(props.wpm + 1);
    } else if (props.lastLetter !== props.textData[props.number]) {
      setTextColor("red");
    }
  }, [props.number]);

  return (
    <StyledLetter
      textColor={textColor}
      number={props.number}
      index={props.index}
    >
      {props.text}
    </StyledLetter>
  );
}

export default Letter;
