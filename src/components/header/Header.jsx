/* eslint-disable react/prop-types */
import styled from "styled-components";
import HeaderContent from "./HeaderContent";

const StyledHeader = styled.header`
  max-width: 1200px;
  margin: auto;
  padding: 5rem 2rem;
  margin-top: 12%;

  position: relative;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;

  @media (width < 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderContent />
    </StyledHeader>
  );
}

export default Header;
