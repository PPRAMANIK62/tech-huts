import styled from "styled-components";

const BlurSpan = styled.span`
  position: absolute;
  box-shadow: 0 0 1000px 50px var(--color-blue-400);
  z-index: 100;
`;

const StyledContainer = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 5rem 2rem;
`;

const H2Header = styled.h2`
  margin-bottom: 1rem;
  color: var(--color-grey-900);
  text-align: center;
  font-size: 2.25rem;
  font-weight: 600;
`;

const StyledCard = styled.div`
  background-color: var(--color-grey-100);
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-grey-200);
    border-color: var(--color-grey-800);
  }
`;

export { BlurSpan, StyledContainer, H2Header, StyledCard };
