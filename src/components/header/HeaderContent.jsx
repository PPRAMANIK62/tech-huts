import Button from "../common/Button";
import HeaderImg from "../../data/images/header.png";
import styled from "styled-components";
import { BlurSpan } from "../../styles/GlobalStyles";

const H4 = styled.h4`
  margin-bottom: 1rem;
  color: var(--color-grey-900);
  font-size: 1rem;
  font-weight: 600;
`;

const H1 = styled.h1`
  color: var(--color-grey-900);
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
`;

const H1Span = styled.span`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--color-grey-900);
`;

const Img = styled.img`
  max-width: 600px;
  margin: auto;
  display: block;
  align-items: center;
  position: relative;
`;

const ImageDiv = styled.div`
  position: relative;

  &::before {
    content: "o";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 38rem;
    font-weight: 600;
    line-height: 20rem;
    color: var(--color-indigo-700);
    opacity: 0.2;
    z-index: -100;
  }

  @media (width < 900px){
    grid-area: 1/1/2/2;
  }

  @media (width < 600px){
    &::before{
      display: none;
    }
  }
`;

const P = styled.p`
  margin-bottom: 2rem;
  color: var(--color-grey-900);
`;

function HeaderContent() {
  return (
    <>
      <div>
        <BlurSpan></BlurSpan>
        <BlurSpan></BlurSpan>
        <H4>ARE YOU LOOKING FOR AN UPGRADE?</H4>
        <H1>
          Hi, We&apos;re <H1Span>TECH-HUTS</H1Span>
        </H1>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo
          nibh, scelerisque nec augue auctor, tincidunt tempus massa. Curabitur
          maximus lectus ante. Nam at dignissim sapien. Vivamus eleifend magna
          risus, sed commodo risus aliquam ut. Curabitur maximus augue odio, id
          elementum nibh fringilla nec. Proin fermentum rhoncus dapibus.
          Suspendisse ut.
        </P>

        <Button type="normal">Get Started</Button>
      </div>
      <ImageDiv>
        <Img src={HeaderImg} alt="header-img" />
      </ImageDiv>
    </>
  );
}

export default HeaderContent;
