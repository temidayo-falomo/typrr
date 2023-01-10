import React, { useEffect, useState } from "react";
import { StyledLetter } from "./Letter.styled";

function Letter(props: any) {
  const [textColor, setTextColor] = useState<any>("gainsboro");
  const [errorum, setErrorum] = useState<any>(0);

  useEffect(() => {
    if (props.textData[props.number] === props.lastLetter) {
      if (!props.isBackspace) {
        props.setWpm(props.wpm + 1);
      }
    } else if (props.lastLetter !== props.textData[props.number]) {
      setTextColor("red");
      props.setWpm(props.wpm - 0.5);
      setErrorum(props.number);
    }

    const handleColors = () => {
      let elms: any = document.getElementsByClassName("letter");

      for (var i = -1; i < props.number; i++) {
        if (props.textData[props.number] === props.lastLetter) {
          if (!props.isBackspace) {
            elms[props.number].style.color = "green";
          }
        } else if (props.lastLetter !== props.textData[props.number]) {
          elms[props.number].style.color = "red";
        }

        if (props.isBackspace) {
          elms[props.number + 1].style.color = "black";
        }
      }
    };

    handleColors();
  }, [props.number]);

  return (
    <StyledLetter
      textColor={textColor}
      number={props.number}
      index={props.index}
      className="letter"
    >
      {props.text}
    </StyledLetter>
  );
}

export default Letter;
