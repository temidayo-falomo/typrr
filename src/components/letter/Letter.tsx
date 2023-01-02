import React, { useEffect, useState } from "react";
import { StyledLetter } from "./Letter.styled";

function Letter(props: any) {
  const [textColor, setTextColor] = useState<any>("gainsboro");
  const [idk, setIdk] = useState<any>(Array.from(props.textData[props.index]));

  useEffect(() => {
    if (props.lastLetter === idk[0]) {
      setTextColor("green");
      props.setWpm(props.wpm + 1);
      setIdk([...idk, "green"]);
      // console.log(props.lastLetter, props.textData[props.index]);
    } else {
      setTextColor("red");
      // console.log("Wrong");
    }
  }, [props.lastLetter, props.index, props.textData]);

  return (
    <StyledLetter
      textColor={textColor}
      number={props.number}
      index={props.index}
      textData={props.textData}
      lastLetter={props.lastLetter}
      idk={idk}
    >
      {props.text}
    </StyledLetter>
  );
}

export default Letter;
