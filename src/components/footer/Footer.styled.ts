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
    height: 110px;
    width: 110px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    font-size: 2rem;
    padding: 10px;
    border: 5px #364453 solid;
    transition: 0.5 all ease;
  }

  .btn-active {
    background-color: #364453;
    color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
