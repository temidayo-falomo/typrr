import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helper/Context";
import { StyledResult } from "./Result.styled";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Result(props: any) {
  const { timerCount, user, displayFooter, setDisplayFooter } =
    useContext(AppContext);
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        data: [
          "15",
          "20",
          "25",
          "20",
          "10",
          "20",
          "15",
          "12",
          Math.floor(props.wpm / 5 / (timerCount / 60)),
        ],
        backgroundColor: "royalblue",
        borderColor: "royalblue",
        pointBorderColor: "green",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  let finalWpm = Math.floor(props.wpm / 5 / (timerCount / 60));
  let finalAccuracy = Math.floor((props.wpm / props.number) * 100);

  const handleAddResultToFirebase = async () => {
    let id: string = localStorage.getItem("typrrUserId")!;
    const userDoc = doc(db, "users", id);

    if (finalWpm > user.highestWpm) {
      await updateDoc(userDoc, {
        highestWpm: finalWpm,
      });
    }

    if (finalAccuracy > user?.highestAccuracy) {
      //second if check to know if
      // figures are greater than 100(which is the accepted limit)
      if (finalAccuracy < 100) {
        await updateDoc(userDoc, {
          highestAccuracy: Math.floor((props.wpm / props.number) * 100),
        });
      } else {
        await updateDoc(userDoc, {
          highestAccuracy: 100,
        });
      }
    }
  };

  useEffect(() => {
    if (timerCount === 15) {
      handleAddResultToFirebase();
    }

    setDisplayFooter(false);
  }, []);

  return (
    <StyledResult>
      <div className="col" style={{ gap: "1rem" }}>
        <div className="col">
          <span>WPM</span>
          <h2>{finalWpm >= 0 ? finalWpm : 0}</h2>
        </div>

        <div className="col">
          <span>ACC</span>
          <h2>{finalAccuracy >= 0 ? finalAccuracy : 0}%</h2>
        </div>
      </div>

      <div className="main-col-gr">
        <div className="graph">
          <div className="chart-container">
            <Line data={data} options={options}></Line>
          </div>
        </div>

        <div className="btm-hld">
          <div className="col btm">
            <span>other</span>
            <h4>afk detected</h4>
          </div>
          <div className="col btm">
            <span>raw</span>
            <h4>{props.number + 1}</h4>
          </div>
          <div className="col btm">
            <span>characters</span>
            <h4>
              0{props.number + 1}/{props.number + 1 - props.wpm}/{props.wpm / 5}
            </h4>
          </div>
          <div className="col btm">
            <span>time</span>
            <h4>{localStorage.getItem("typrrTimerCount")}s</h4>
          </div>
        </div>
      </div>
    </StyledResult>
  );
}

export default Result;
