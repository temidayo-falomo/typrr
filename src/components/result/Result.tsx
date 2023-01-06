import React, { useEffect, useState } from "react";
import { StyledResult } from "./Result.styled";

function Result(props: any) {
  // const [finAns, setFinAns] = useState(1);

  return (
    <StyledResult>
      <h2>{props.wpm} WPM</h2>
    </StyledResult>
  );
}

export default Result;
