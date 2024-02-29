/* eslint-disable react/prop-types */
import styled from "styled-components";
import { H2Header, StyledContainer } from "../../styles/GlobalStyles";
import PricingCard from "./PricingCard";

const SubHeader = styled.p`
  max-width: 800px;
  margin: auto;
  text-align: center;
  color: var(--color-grey-800);
`;

const StyledPricing = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (width < 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Pricing({ refs }) {
  return (
    <StyledContainer ref={refs}>
      <H2Header>PROJECT PRICING</H2Header>
      <SubHeader>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo nibh,
        scelerisque nec augue auctor, tincidunt tempus massa. Curabitur maximus
        lectus ante.
      </SubHeader>
      <StyledPricing>
        <PricingCard header="Portfolio Website" />
        <PricingCard header="Ecommerce Website" />
        <PricingCard header="Blog Post Website" />
        <PricingCard header="Poster Design and Video Editing" />
      </StyledPricing>
    </StyledContainer>
  );
}

export default Pricing;
