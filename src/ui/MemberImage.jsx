/* eslint-disable react/prop-types */
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  background-color: rgba(255, 255, 255, 0.7);
  transition: 1s ease;
  opacity: 0;
  pointer-events: none; /* Ensures the overlay doesn't interfere with mouse events */
  z-index: 2;

  @media (width < 500px) {
    width: 500%;
  }
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;

  &:hover ${Overlay} {
    opacity: 1;
  }

  @media (width < 500px) {
    width: 20%;
  }
`;

const Image = styled.img`
  display: block;
  width: 190px;
  height: 250px;
  transition: 0.5s ease;
  backface-visibility: hidden;
  z-index: 1;

  @media (width < 500px) {
    width: 120px;
    height: 170px;
  }
`;

const Text = styled.p`
  color: var(--color-grey-0);
  font-weight: 600;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
`;

const P = styled.p`
  color: var(--color-grey-0);
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.65rem;
`;

const Description = styled.div`
  margin: 0.5rem 1rem;

  @media (width < 500px) {
    margin: 0.5rem;
  }
`;

function MemberImage({ image, name, role }) {
  return (
    <>
      <Container>
        <Image src={image} alt="Avatar" />
        <Overlay />
        <Overlay>
          <Description>
            <Text>{name}</Text>
            <P>{role}</P>
          </Description>
        </Overlay>
      </Container>
    </>
  );
}

export default MemberImage;
