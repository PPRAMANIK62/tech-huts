/* eslint-disable react/prop-types */
import styled from "styled-components";
import { H2Header, StyledContainer } from "../../styles/GlobalStyles";

import Card from "./Card";

const StyledFeatures = styled.div`
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

function Services({ refs }) {  
  return (
    <StyledContainer ref={refs}>
      <H2Header>OUR FEATURES</H2Header>
      <StyledFeatures>
        <Card header="Portfolio Website" />
        <Card header="E-Commerce Website" />
        <Card header="Blog Post Website" />
        <Card header="Dashboard" />
        <Card header="Excel Invoice" />
        <Card header="Poster Design" />
        <Card header="Video Editing" />
      </StyledFeatures>
    </StyledContainer>
  );
}

export default Services;
