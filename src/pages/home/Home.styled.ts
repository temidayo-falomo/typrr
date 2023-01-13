import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .height {
    height: 0 !important;
    display: none !important;
  }

  @media (max-width: 800px) {
    height: auto;
    justify-content: flex-start;
  }
`;
