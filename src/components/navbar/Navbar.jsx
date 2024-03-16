/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import Logo from "../common/Logo";
import MainNav from "./MainNav";

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  max-width: 1200px;
  max-height: 90px;
  margin: auto;
  background-color: var(--color-grey-0);
  padding: 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

function NavBar({ refs }) {
  const { homeRef } = refs;

  return (
    <StyledNavbar ref={homeRef}>
      <Link to="/">
        <Logo />
      </Link>
      <MainNav refs={refs} />

      <Link to="/team" className="team">
        <Button type="normal" size="small">
          Meet Our Team
        </Button>
      </Link>
    </StyledNavbar>
  );
}

export default NavBar;
