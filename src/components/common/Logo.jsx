import styled from "styled-components";
import LogoImg from "../../data/images/logo1.png";

const StyledLogo = styled.div`
  text-align: center;
  max-width: 80px;
  /* margin-bottom: 2rem; */
`;

const Img = styled.img`
  width: 100%;
  display: flex;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={LogoImg} alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
