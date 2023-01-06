import React from "react";
import { StyledLeaderboards } from "./Leaderboards.styled";

function Leaderboards() {
  return (
    <StyledLeaderboards>
      <div className="top">
        <div className="row btw center">
          <div>Back</div>
          <h1>High Scores</h1>
          <div></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore
          aperiam, eius rerum inventore autem ipsam corporis dolorem eum nemo
          esse non magnam quia tempora ullam deserunt aliquam illo
          necessitatibus.
        </p>
      </div>
    </StyledLeaderboards>
  );
}

export default Leaderboards;
