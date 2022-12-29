import React, { useEffect, useState } from "react";
import { StyledLetter } from "./Letter.styled";

function Letter(props: any) {
  const [textColor, setTextColor] = useState<any>("gainsboro");

  //   useEffect(() => {
  //     window.addEventListener("keypress", (e) => {
  //       props.setNumber(props.number + 1);
  //       console.log(e.key);

  //   setLetterClicked(e.key);

  //   if (e.key === props.letterClicked) {
  //     setTextColor("red");
  //   }
  //     });
  //   }, []);

  useEffect(() => {
    if (props.lastLetter === props.textData[props.index]) {
      setTextColor("green");
    } else {
      setTextColor("red");
    }
  }, [props.lastLetter, props.index, props.textData]);

  return (
    <StyledLetter
      id="my-element"
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
