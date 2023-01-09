import styled from "styled-components";

export const StyledHome = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  .height {
    height: 0 !important;
    display: none !important;
  }

  @media (max-width: 800px) {
    height: 100vh;
    justify-content: flex-start;
  }
`;
