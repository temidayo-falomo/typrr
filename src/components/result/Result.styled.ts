import styled from "styled-components";

export const StyledResult = styled.div`
  width: 800px;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  /* border: 2px black solid; */
  display: flex;
  border-radius: 10px;
  gap: 1rem;

  .chart-container {
    max-width: 800px;
    max-height: 400px;
  }

  h2 {
    font-size: 4rem;
    color: green;
  }

  span {
    color: gray;
  }

  .main-col-gr {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0;
  }

  .graph {
    width: 100%;
    margin-bottom: 1rem;
  }

  .btm-hld {
    justify-content: space-between;
    display: flex;
    width: 100%;

    .btm {
      align-items: center;
      justify-content: center;
      text-align: center;

      h4 {
        color: green;
        font-size: 1.2rem;
      }
    }
  }
`;
