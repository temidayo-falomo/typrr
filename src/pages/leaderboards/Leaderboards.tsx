import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import { StyledLeaderboards } from "./Leaderboards.styled";

function Leaderboards() {
  const { users, getAllUsers } = useContext(AppContext);

  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (users) {
      setUsersLoading(false);
    }
  }, [users]);

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
          <th>Accuracy</th>
        </tr>
        {usersLoading ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <React.Fragment>
            {users?.map((user: any, i: number) => {
              return (
                <tr key={user?.id}>
                  <div className="join row center gap-1">
                    <td>#{i + 1}</td>
                    <td
                      className="circle"
                      style={{
                        backgroundImage:
                          user.userAvatar && `url(${user.userAvatar})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></td>
                    <td>{user?.username}</td>
                  </div>
                  <td>{user?.highestWpm} Avg. Wpm</td>
                  <td>{user?.highestAccuracy}% Accuracy</td>
                </tr>
              );
            })}
          </React.Fragment>
        )}
      </table>
    </StyledLeaderboards>
  );
}

export default Leaderboards;
