import styled from "styled-components";

export const StyledLogin = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;

  .box {
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    max-width: 300px;
    min-width: 250px;
    /* border: 2px black solid; */
    border-radius: 20px;
    padding: 20px;

    .top {
      h2 {
        font-size: 1.5rem;
      }
    }

    .inputs {
      margin-top: 2rem;
      width: 100%;
      gap: 1rem;

      input {
        width: 100%;
        border: none;
        padding: 5px;
      }
    }

    .btm {
      width: 100%;
      margin-top: 2rem;
      gap: 1rem;

      button {
        padding: 10px;
        border-radius: 5px;

        :hover {
          background-color: transparent;
          border: 2px white solid;
          padding: 8px;
        }
      }
    }
  }
`;
