import React, { useContext, useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import { StyledLeaderboards } from "./Leaderboards.styled";

function Leaderboards() {
  const { users, getAllUsers } = useContext(AppContext);

  useEffect(() => {
    getAllUsers();
  }, []);

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

        {users?.map((user: any) => {
          return (
            <tr>
              <div className="join row center gap-1">
                <td>#4</td>
                <td className="circle"></td>
                <td>Temidayo</td>
              </div>
              <td>160 Avg. Wpm</td>
              <td>90% Accuracy</td>
            </tr>
          );
        })}
      </table>
    </StyledLeaderboards>
  );
}

export default Leaderboards;
