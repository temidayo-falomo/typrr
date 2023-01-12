import styled from "styled-components";

export const StyledColorsModal = styled.div`
  height: 100vh;
  width: 100%;

  position: fixed;
  bottom: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.8px);
  -webkit-backdrop-filter: blur(2.8px);
  z-index: 99999;
  overflow: auto;

  .modal {
    width: 90%;
    max-width: 500px;
    min-width: 230px;
    height: 80vh;
    border: 2px ${(props: any) => props.theme.textColor} solid;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 0;
    bottom: 0;
    background-color: ${(props: any) => props.theme.backgroundColor};
    margin: auto;
    padding: 20px;
    border-radius: 20px;
    overflow-y: auto;
    transition: 0.5s ease;
  }

  .top {
    display: flex;
    justify-content: flex-end;
    font-size: 3rem;
    margin-bottom: 10px;
    font-family: "Poppins", sans-serif !important;

    .pointer {
      color: red;
    }
  }

  .row {
    border-radius: 10px;
    overflow: hidden;
    font-family: "Poppins", sans-serif !important;

    .search {
      padding: 5px;
      font-size: 2.5rem;
    }

    input {
      height: 100%;
      width: 100%;
      padding: 10px;
      padding-left: 0;
      border: none;
      background-color: transparent;
      font-family: "Poppins", sans-serif;
    }
  }

  .col {
    margin-top: 2rem;

    .option {
      padding: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-family: "Poppins", sans-serif !important;
      font-weight: 400;
      font-size: 0.9rem;
      border-radius: 5px;

      :hover {
        background-color: gainsboro;
      }
    }
  }
`;
