import styled from "styled-components";

export const StyledLetter = styled.span`
  :nth-of-type(-n + ${(props: any) => props.number + 1}) {
    color: ${(props: any) =>
      props.index === props.number ? props.textColor : "gainsboro"};
  }

  /* ::after {
    content: "";
    color: red;
    background-color: green;
    height: 50px;
    width: ${(props: any) => (props.index === props.number ? "5px" : "5px")};
    position: absolute;
  } */
`;
