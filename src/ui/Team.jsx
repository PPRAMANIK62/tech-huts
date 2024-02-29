import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";
import Logo from "../components/common/Logo";
import { BlurSpan, H2Header, StyledContainer } from "../styles/GlobalStyles";
import MemberImage from "./MemberImage";

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
    cursor: pointer;

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

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  max-width: 1200px;
  /* max-height: 15%; */
  /* max-height: 160px; */
  margin: auto;
  background-color: var(--color-grey-0);
  padding: 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledExecutive = styled.div`
  margin: 0rem 2rem;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;

  @media (width < 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Div = styled.div`
  margin-top: 100px;
`;

const StyledCardExe = styled.div`
  padding: 3rem 2rem;
  background-color: var(--color-grey-100);
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-grey-200);
    border-color: var(--color-grey-800);
  }
`;

const StyledMembers = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (width < 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width < 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// const photoDivMembers = styled.div``;

function Team() {
  return (
    <>
      <>
        <StyledNavbar>
          <Link to="/">
            <Logo />
          </Link>

          <BlurSpan></BlurSpan>
          <BlurSpan></BlurSpan>

          <NavList>
            <StyledNavLink>Executive</StyledNavLink>
            <StyledNavLink>Management</StyledNavLink>
            <StyledNavLink>Tech</StyledNavLink>
            <StyledNavLink>Design</StyledNavLink>
            <StyledNavLink>Sales</StyledNavLink>
          </NavList>

          <Link to="/team" className="team">
            <Button type="normal">Join Us</Button>
          </Link>
        </StyledNavbar>
      </>

      <Div>
        <StyledContainer>
          <H2Header>EXECUTIVE</H2Header>
          <StyledExecutive>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
          </StyledExecutive>
        </StyledContainer>

        <StyledContainer>
          <H2Header>MANAGEMENT</H2Header>
          <StyledMembers>
            <StyledCardExe>
              <MemberImage />
            </StyledCardExe>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
          </StyledMembers>
        </StyledContainer>

        <StyledContainer>
          <H2Header>TECH</H2Header>
          <StyledMembers>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
          </StyledMembers>
        </StyledContainer>

        <StyledContainer>
          <H2Header>DESIGN</H2Header>
          <StyledMembers>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
          </StyledMembers>
        </StyledContainer>

        <StyledContainer>
          <H2Header>SALES</H2Header>
          <StyledMembers>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
            <StyledCardExe></StyledCardExe>
          </StyledMembers>
        </StyledContainer>
      </Div>
    </>
  );
}

export default Team;
