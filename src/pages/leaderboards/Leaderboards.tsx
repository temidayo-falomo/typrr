import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { StyledLeaderboards } from "./Leaderboards.styled";

function Leaderboards() {
  return (
    <StyledLeaderboards>
      <div className="top">
        <div className="row btw center">
          <Link to="/">
            <MdOutlineKeyboardBackspace
              className="pointer"
              style={{ fontSize: "3rem" }}
            />
          </Link>

          <h1>Leaderboards</h1>
          <div></div>
        </div>
        <p>
          Typrr collects data from users around the world to judge their typing
          speed & rate it on the leaderboards.
        </p>
      </div>

      <table className="leaderboard-rect">
        <tr>
          <th>#User</th>
          <th>Avg. Wpm</th>
          <th>Max Speed</th>
        </tr>

        <tr>
          <div className="join row center gap-1">
            <td>#1</td>
            <td className="circle"></td>
            <td>Temidayo</td>
          </div>
          <td>160 Avg. Wpm</td>
          <td>90% Accuracy</td>
        </tr>

        <tr>
          <div className="join row center gap-1">
            <td>#2</td>
            <td className="circle"></td>
            <td>Temidayo</td>
          </div>
          <td>160 Avg. Wpm</td>
          <td>90% Accuracy</td>
        </tr>

        <tr>
          <div className="join row center gap-1">
            <td>#3</td>
            <td className="circle"></td>
            <td>Temidayo</td>
          </div>
          <td>160 Avg. Wpm</td>
          <td>90% Accuracy</td>
        </tr>

        <tr>
          <div className="join row center gap-1">
            <td>#4</td>
            <td className="circle"></td>
            <td>Temidayo</td>
          </div>
          <td>160 Avg. Wpm</td>
          <td>90% Accuracy</td>
        </tr>

        <tr>
          <div className="join row center gap-1">
            <td>#4</td>
            <td className="circle"></td>
            <td>Temidayo</td>
          </div>
          <td>160 Avg. Wpm</td>
          <td>90% Accuracy</td>
        </tr>

        <tr>
          <div className="join row center gap-1">
            <td>#4</td>
            <td className="circle"></td>
            <td>Temidayo</td>
          </div>
          <td>160 Avg. Wpm</td>
          <td>90% Accuracy</td>
        </tr>
      </table>
    </StyledLeaderboards>
  );
}

export default Leaderboards;
