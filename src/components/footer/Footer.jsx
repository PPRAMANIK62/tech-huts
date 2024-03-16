/* eslint-disable react/prop-types */
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";
import styled from "styled-components";
import { BlurSpan } from "../../styles/GlobalStyles";
import Button from "../common/Button";
import Logo from "../common/Logo";

const StyledFooter = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 5rem 2rem;

  position: relative;
  display: grid;
  grid-template-columns: 500px repeat(3, 1fr);
  gap: 2rem;

  @media (width < 900px) {
    grid-template-columns: 1fr 200px;
  }

  @media (width < 600px) {
    grid-template-columns: 1fr 150px;
  }
`;

const StyledColumn = styled.div``;
const StyledSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const P = styled.p`
  color: var(--color-grey-600);
  margin-bottom: 2rem;
`;

const H4 = styled.h4`
  color: var(--color-grey-900);
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

function Footer({ refs }) {
  return (
    <StyledFooter ref={refs}>
      <BlurSpan></BlurSpan>
      <BlurSpan></BlurSpan>

      <StyledColumn>
        <Logo />
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
        <StyledSocials>
          <Button size="circular" type="transparent" hover="blue">
            <RiYoutubeLine />
          </Button>
          <Button size="circular" type="transparent" hover="blue">
            <RiInstagramLine />
          </Button>
          <Button size="circular" type="transparent" hover="blue">
            <RiTwitterLine />
          </Button>
          <a
            rel="noreferrer"
            target="_blank"
            href="http://linkedin.com/company/techhuts"
            style={{ textDecoration: "none" }}
          >
            <Button size="circular" type="transparent" hover="blue">
              <RiLinkedinLine />
            </Button>
          </a>
        </StyledSocials>
      </StyledColumn>

      <StyledColumn>
        <H4>Company</H4>
        <Button size="small" type="transparent" hover="blueText">
          Business
        </Button>
        <Button size="small" type="transparent" hover="blueText">
          Partnerships
        </Button>
        <Button size="small" type="transparent" hover="blueText">
          Network
        </Button>
      </StyledColumn>

      <StyledColumn>
        <H4>Abount Us</H4>
        <Button size="small" type="transparent" hover="blueText">
          Blogs
        </Button>
        <Button size="small" type="transparent" hover="blueText">
          Channels
        </Button>
        <Button size="small" type="transparent" hover="blueText">
          Sponsors
        </Button>
      </StyledColumn>

      <StyledColumn>
        <H4>Contact Us</H4>
        <Button size="small" type="transparent" hover="blueText">
          Call
        </Button>
        <Button size="small" type="transparent" hover="blueText">
          Email
        </Button>
        <Button size="small" type="transparent" hover="blueText">
          Address
        </Button>
      </StyledColumn>
    </StyledFooter>
  );
}

export default Footer;
