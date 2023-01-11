import styled from "styled-components";

export const StyledLeaderboards = styled.div`
  height: 100vh;
  overflow: hidden;
  padding-top: 2%;

  .top {
    width: 80%;
    margin: 2rem auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .pointer {
      padding: 5px;
      border: 2px black solid;
      border-radius: 5px;
    }

    h1 {
      font-size: 4rem;
    }

    p {
      width: 80%;
      max-width: 700px;
      margin: auto;
      text-align: center;
      font-size: 1.5rem;
      line-height: 3rem;
    }
  }

  .leaderboard-rect {
    width: 70%;
    margin: 2rem auto;
    overflow-y: auto;
    padding: 30px;
    border-collapse: collapse;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5rem;
    /* height: 70vh; */

    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
      margin: auto;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #000;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #000 transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    tr:nth-of-type(1) {
      background-color: #000;
      color: #fff;
      justify-content: space-around !important;
    }

    tr th {
      font-size: 2.5rem;
    }

    tr {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      min-height: 80px;
      align-items: center;
      width: 80%;
      margin: auto;
      border-radius: 10px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      font-size: 1.5rem;
      overflow-x: auto;
      overflow-y: hidden;
      gap: 2rem;

      td {
        display: inline;
        text-align: center;
      }

      .join {
        margin-left: -5%;
        .circle {
          min-width: 50px;
          min-height: 50px;
          border-radius: 50%;
          border: 2px #000 solid;
          background-color: #000;
        }
      }
    }
  }
`;
