import styled from "styled-components";

export const StyledLetter = styled.span`
  position: relative;
  
  word-wrap: break-word;
  :nth-of-type(-n + ${(props: any) => props.number + 1}) {
  }

  :nth-of-type(-n + ${(props: any) => props.number + 1}) {
    ::after {
      content: "";
      color: red;
      background-color: ${(props: any) =>
        props.index === props.number ? "orange" : "transparent"};
      height: 30px;
      width: ${(props: any) => (props.index === props.number ? "3px" : "0")};
      position: absolute;
      bottom: 0;
    }
  }
`;
