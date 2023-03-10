import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 50%;
  min-width: 250px;
  max-width: 500px;
  margin: 1rem auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  padding: 0 5px;
  margin-bottom: 5rem;

  .pointer {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    font-size: 2rem;
    padding: 10px;
    transition: 0.5 ease;
  }

  .btn-active {
    background-color: ${(props: any) => props.theme.textColor};
    color: ${(props: any) => props.theme.backgroundColor};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    font-weight: 600;
    position: relative;
    transition: 0.5 ease;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: ${(props: any) => props.theme.textColor};
    }

    ::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: ${(props: any) => props.theme.textColor};
    }
  }
`;
