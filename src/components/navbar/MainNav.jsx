/* eslint-disable react/prop-types */
import styled from "styled-components";

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledNavLink = styled.li`
  & {
    position: relative;
    padding-bottom: 0.75rem;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-indigo-100);
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 70%;
  }

  @media (width < 900px) {
    display: none;
  }
`;

function MainNav({ refs }) {
  const { homeRef, storeRef, pricingRef, aboutRef } = refs;

  function handleClickHome() {
    homeRef.current?.scrollIntoView({ behaviour: "smooth" });
  }

  function handleClickStore() {
    storeRef.current?.scrollIntoView({ behaviour: "smooth" });
  }

  function handleClickPricing() {
    pricingRef.current?.scrollIntoView({ behaviour: "smooth" });
  }

  function handleClickAbout() {
    aboutRef.current?.scrollIntoView({ behaviour: "smooth" });
  }

  return (
    <NavList>
      <StyledNavLink onClick={handleClickHome}>Home</StyledNavLink>
      <StyledNavLink onClick={handleClickStore}>Store</StyledNavLink>
      <StyledNavLink onClick={handleClickPricing}>Pricing</StyledNavLink>
      <StyledNavLink onClick={handleClickAbout}>About</StyledNavLink>
    </NavList>
  );
}

export default MainNav;
