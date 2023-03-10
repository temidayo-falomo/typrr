import styled from "styled-components";

export const StyledLeaderboards = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

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
      text-align: center;
      width: 100%;
    }

    p {
      width: 90%;
      max-width: 800px;
      margin: auto;
      text-align: center;
      font-size: 1.5rem;
      line-height: 3rem;
    }
  }

  .leaderboard-rect {
    width: 70%;
    min-width: 250px;
    margin: 2rem auto;
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
      border-color: ${(props: any) => props.theme.textColor} transparent
        transparent transparent;
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
      background-color: ${(props: any) => props.theme.textColor};
      color: ${(props: any) => props.theme.backgroundColor};
      justify-content: space-around !important;
      transition: 0.5s ease;
    }

    tr th {
      font-size: 2.5rem;
    }

    tr {
      display: flex;
      justify-content: space-around;
      padding: 15px 20px;
      min-height: 80px;
      min-width: 280px;
      align-items: center;
      width: 85%;
      margin: auto;
      border-radius: 10px;
      /* box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px; */
      font-size: 1.3rem;
      overflow-x: auto;
      overflow-y: hidden;
      gap: 2rem;
      overflow: hidden;
      font-weight: 600;
      border: 1px ${(props: any) => props.theme.textColor} solid;

      td {
        display: inline;
        text-align: center;
      }

      .join {
        /* margin-left: -5%; */
        .circle {
          min-width: 50px;
          min-height: 50px;
          border-radius: 50%;
          border: 1px ${(props: any) => props.theme.textColor} solid;
          background-color: #000;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .top {
      width: 100%;

      p {
        width: 95%;
      }
    }
    .leaderboard-rect {
      width: 98%;
    }
  }

  @media (max-width: 440px) {
    .circle {
      min-width: 20px !important;
      min-height: 20px !important;
    }
    .top {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }
    .leaderboard-rect {
      width: 98%;

      tr th {
        font-size: 1.2rem;
      }

      tr {
        font-size: 1rem;
      }
    }
  }
`;
