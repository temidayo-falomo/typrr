import React, { useEffect, useState } from "react";
import { StyledLetter } from "./Letter.styled";

function Letter(props: any) {
  const [textColor, setTextColor] = useState<any>("gainsboro");

  useEffect(() => {
    if (props.lastLetter === props.textData[props.index]) {
      setTextColor("green");
      props.setWpm(props.wpm + 1);
      console.log("Right");
    } else if (props.lastLetter !== props.textData[props.index]) {
      setTextColor("red");
    }
  }, [props.lastLetter, props.index, props.textData]);


  return (
    <StyledLetter
      textColor={textColor}
      number={props.number}
      index={props.index}
      textData={props.textData}
    >
      {props.text}
    </StyledLetter>
  );
}

export default Letter;
