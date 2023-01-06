import styled from "styled-components";

export const StyledColorsModal = styled.div`
  width: 600px;
  max-width: 600px;
  min-width: 300px;
  height: 80vh;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 0;
  bottom: 0;
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  overflow-y: auto;

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

      :hover {
        background-color: #f5f5f5;
      }
    }
  }
`;
