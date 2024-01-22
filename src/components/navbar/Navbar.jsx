/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "../common/Button";
import Logo from "../common/Logo";
import MainNav from "./MainNav";

const StyledNavbar = styled.nav`
  max-width: 1200px;
  margin: auto;
  /* position: fixed; */
  background-color: var(--color-grey-0);
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

function NavBar({ refs }) {
  return (
    <StyledNavbar>
      <Logo />
      <MainNav refs={refs} />

      <Button type="normal">Hire Me</Button>
    </StyledNavbar>
  );
}

export default NavBar;
