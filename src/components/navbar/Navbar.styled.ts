import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 95%;
  margin: 1rem auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    h3 {
      font-size: 2rem;
    }
  }

  .links {
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 5px #364453 solid;
    }
  }
`;