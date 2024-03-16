import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";
import Logo from "../components/common/Logo";
import { BlurSpan, H2Header, StyledContainer } from "../styles/GlobalStyles";
import ExecutiveImage from "./ExecutiveImage.jsx";
import MemberImage from "./MemberImage";

// Image imports
import { Helmet } from "react-helmet";
import aisha from "../data/images/members/aisha.jpg";
import kaustav from "../data/images/members/kaustav.png";
import kuntal from "../data/images/members/kuntal.jpg";
import purbayan from "../data/images/members/purbayan.jpg";
import sanyam from "../data/images/members/sanyam.jpg";
import siddharth from "../data/images/members/siddharth.jpg";
import soumyadeep from "../data/images/members/soumyadeep.jpg";
import srijan from "../data/images/members/srijan.jpg";
import swapnanil from "../data/images/members/swapnanil.jpg";

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
  max-height: 90px;
  margin: auto;
  background-color: var(--color-grey-0);
  padding: 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledExecutive = styled.div`
  margin: 0rem 10rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10rem;

  @media (width < 500px) {
    margin-top: 1.5rem;
    gap: 1rem;
  }
`;

const Div = styled.div`
  margin-top: 100px;
`;

const StyledMembers = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2rem;
  margin: 0.5rem;
  height: auto;
  width: 100%;

  @media (width < 500px) {
    margin-top: 2rem;
    gap: 0.75rem;
  }
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

  @media (width < 500px) {
    padding: 1.5rem 1rem;
  }
`;

const StyledCard = styled.div`
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

  @media (width < 500px) {
    padding: 1rem 0.7rem;
  }
`;

function Team() {
  const executive = useRef(null);
  const management = useRef(null);
  const tech = useRef(null);
  const design = useRef(null);
  const sales = useRef(null);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  function scrollToRef(ref) {
    const top = ref?.current?.offsetTop;
    if (top !== undefined) {
      window.scrollTo({
        top: top - 100,
        behavior: "smooth",
      });
    }
  }

  const TITLE = "Our Team";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <>
        <StyledNavbar>
          <Link to="/">
            <Logo />
          </Link>

          <BlurSpan></BlurSpan>
          <BlurSpan></BlurSpan>

          <NavList>
            <StyledNavLink onClick={() => scrollToRef(executive)}>
              Executive
            </StyledNavLink>
            <StyledNavLink onClick={() => scrollToRef(management)}>
              Management
            </StyledNavLink>
            <StyledNavLink onClick={() => scrollToRef(tech)}>
              Tech
            </StyledNavLink>
            <StyledNavLink ref={design} onClick={() => scrollToRef(design)}>
              Design
            </StyledNavLink>
            <StyledNavLink ref={sales} onClick={() => scrollToRef(sales)}>
              Sales
            </StyledNavLink>
          </NavList>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://forms.gle/YFtbEd8Fa7emChsp7"
            style={{ textDecoration: "none" }}
          >
            <Button type="normal" size="small">
              Join Us
            </Button>
          </a>
        </StyledNavbar>
      </>

      <Div>
        <StyledContainer ref={executive}>
          <H2Header>EXECUTIVE</H2Header>
          <StyledExecutive>
            <StyledCardExe>
              <ExecutiveImage
                image={kaustav}
                name={"KAUSTAV MAZUMDAR"}
                role={"Founder"}
              />
            </StyledCardExe>
            <StyledCardExe>
              <ExecutiveImage
                image={aisha}
                name={"AISHA HALDER"}
                role={"Co-Founder"}
              />
            </StyledCardExe>
          </StyledExecutive>
        </StyledContainer>

        <StyledContainer ref={management}>
          <H2Header>MANAGEMENT</H2Header>
          <StyledMembers>
            <StyledCard>
              <MemberImage
                image={srijan}
                name={"SRIJAN BISWAS"}
                role={"HR (Sales)"}
              />
            </StyledCard>
            <StyledCard>
              <MemberImage
                image={swapnanil}
                name={"SWAPNANIL MANNA"}
                role={"HR (Tech)"}
              />
            </StyledCard>
          </StyledMembers>
        </StyledContainer>

        <StyledContainer ref={tech}>
          <H2Header>TECH</H2Header>
          <StyledMembers>
            <StyledCard>
              <MemberImage
                image={siddharth}
                name={"SIDDHARTH BISWAS"}
                role={"Backend Developer"}
              />
            </StyledCard>
            <StyledCard>
              <MemberImage
                image={kuntal}
                name={"KUNTAL GAIN"}
                role={"Mobile Developer"}
              />
            </StyledCard>
            <StyledCard>
              <MemberImage
                image={purbayan}
                name={"PURBAYAN PRAMANIK"}
                role={"Full Stack Developer"}
              />
            </StyledCard>
            <StyledCard>
              <MemberImage
                image={sanyam}
                name={"SANYAM GUPTA"}
                role={"Data Analyst"}
              />
            </StyledCard>
          </StyledMembers>
        </StyledContainer>

        <StyledContainer ref={design}>
          <H2Header>DESIGN</H2Header>
          <StyledMembers>
            <StyledCard>
              <MemberImage
                image={soumyadeep}
                name={"SOUMYADEEP SAMADDAR"}
                role={"UI/UX Designer"}
              />
            </StyledCard>
          </StyledMembers>
        </StyledContainer>

        <StyledContainer ref={sales}>
          <H2Header>SALES</H2Header>
          <StyledMembers></StyledMembers>
        </StyledContainer>
      </Div>
    </>
  );
}

export default Team;
