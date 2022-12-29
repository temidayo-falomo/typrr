import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 95%;
  margin: 1rem auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5px;
  gap: 1rem;
  color: #364453;

  .pointer {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    font-size: 2rem;
    padding: 10px;
    border: 5px #364453 solid;
    transition: 0.5 all ease;

    :hover {
      /* background-color: black;
      color: #fff;
      transition: 0.5 all ease; */
    }
  }

  .btn-active {
    background-color: #364453;
    color: #fff;
  }
`;
