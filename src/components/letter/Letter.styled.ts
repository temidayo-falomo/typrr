import styled from "styled-components";

export const StyledLetter = styled.span`
  :nth-of-type(-n + ${(props: any) => props.number + 1}) {
  }

  :nth-of-type(-n + ${(props: any) => props.number + 1}) {
    ::after {
      content: "";
      color: red;
      background-color: ${(props: any) =>
        props.index === props.number ? "orange" : "transparent"};
      height: 50px;
      width: ${(props: any) => (props.index === props.number ? "5px" : "0")};
      position: absolute;
    }
  }
`;
