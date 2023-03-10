import React, { useContext, useEffect, useState } from "react";
import { FaMedal } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../helper/Context";
import OfflineAlert from "../../offline/OfflineAlert";
import SignedOutAlert from "../../offline/SignedOutAlert";
import { StyledLeaderboards } from "./Leaderboards.styled";

function Leaderboards() {
  const { users, getAllUsers, theme, userErrMsg, getUserErr } =
    useContext(AppContext);

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
    <StyledLeaderboards theme={theme}>
      {userErrMsg?.message === "Network Error" && <OfflineAlert />}
      {getUserErr && <SignedOutAlert />}
      <Navbar />
      <div className="top">
        <div className="row btw center">
          {/* <Link to="/">
            <MdOutlineKeyboardBackspace
              className="pointer"
              style={{ fontSize: "3rem" }}
            />
          </Link> */}

          <h1>Leaderboards</h1>
          {/* <div></div> */}
        </div>
        <p>
          Typrr collects data from users around the world to judge their typing
          speed & rate it on the leaderboards. Note that this only collects data
          for the 15 seconds test.
        </p>
      </div>

      <table className="leaderboard-rect">
        <tr>
          <th>#User</th>
          <th>Max Wpm</th>
          <th>Acc%</th>
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
            {users
              ?.sort((a: any, b: any) => b.highestWpm - a.highestWpm)
              .map((user: any, i: number) => {
                return (
                  <tr key={user?.id}>
                    <div className="join row center gap-1">
                      <td>{i + 1 === 1 ? <FaMedal /> : `#${i + 1}`}</td>

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
                    <td>{user?.highestWpm} Wpm</td>
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
