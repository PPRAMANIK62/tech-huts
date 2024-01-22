import styled from "styled-components";

const StyledCopyright = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 1rem;
  color: var(--color-grey-900);
  font-size: 0.8rem;
  text-align: center;
`;


function Copyright() {
  return <StyledCopyright>Copyright &copy; 2024 Tech-Hurtz. All Rights Reserved</StyledCopyright>;
}

export default Copyright;
