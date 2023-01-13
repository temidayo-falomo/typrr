import styled from "styled-components";

export const StyledOfflineAlert = styled.div`
  padding: 1rem 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) => props.theme.textColor};
  color: ${(props: any) => props.theme.backgroundColor};
  position: absolute;
  top: 0;
  z-index: 99;

  span {
    text-align: center;
    font-weight: 600;
  }
`;
