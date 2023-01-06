import styled from "styled-components";

export const StyledTextField = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  .wc {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    .timer-div {
      
    }

    span {
      color: #000;
      font-size: 3rem;
    }
  }

  .text-p {
    font-size: 3rem;
    line-height: 4.5rem;
    display: inline-table;
    zoom: 1;
    width: 800px;

    max-width: 800px;
    min-width: 350px;
    text-align: left;
    text-justify: inter-word;
    align-items: center;
  }

  .input {
    width: 90%;
    margin: 0 auto;
  }

  input {
    background-color: transparent;
    width: 100%;
    height: 0;
    color: white;
    border: none;
  }

  .row {
    width: 200px;
    margin: 4rem auto;
  }

  .centrr {
    margin: 1rem auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 200px;
  }

  .icons {
    font-size: 2.5rem;
    gap: 2rem;

    .pointer:hover {
      color: gray;
    }
  }

  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #000;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }

  .lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }

  .lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }

  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;
