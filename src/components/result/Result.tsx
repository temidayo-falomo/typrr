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
  const { timerCount, user } = useContext(AppContext);
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 4, 5, 6, 7],
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

  const handleAddResultToFirebase = async () => {
    let id: string = localStorage.getItem("typrrUserId")!;
    const userDoc = doc(db, "users", id);

    if (props.wpm > user.highestWpm) {
      await updateDoc(userDoc, {
        highestWpm: props.wpm,
      });
    }

    if (Math.floor((props.wpm / props.number) * 100) > user.highestAccuracy) {
      if (Math.floor((props.wpm / props.number) * 100) < 100) {
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
    handleAddResultToFirebase();
  }, []);

  return (
    <StyledResult>
      <div className="col" style={{ gap: "1rem" }}>
        <div className="col">
          <span>WPM</span>
          <h2>{props.wpm}</h2>
        </div>

        <div className="col">
          <span>ACC</span>
          <h2>{Math.floor((props.wpm / props.number) * 100)}%</h2>
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
            <h4>06/11/22</h4>
          </div>
          <div className="col btm">
            <span>time</span>
            <h4>{timerCount}s</h4>
          </div>
        </div>
      </div>
    </StyledResult>
  );
}

export default Result;
