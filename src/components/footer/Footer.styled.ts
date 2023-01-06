import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 95%;
  margin: 1rem auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  flex-wrap: wrap;
  padding: 0 5px;
  /* color: #364453; */

  .pointer {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    font-size: 2rem;
    padding: 10px;
    border: 4px #000 solid;
    transition: 0.5 all ease;
  }

  .btn-active {
    background-color: #000;
    color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    font-weight: 600;
  }
`;
