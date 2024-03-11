import styled from "styled-components";
import image from "../data/images/doraemon.jpeg";

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 30%;
  background-color: rgba(255, 255, 255, 0.7);
  transition: 1s ease;
  opacity: 0;
  pointer-events: none; /* Ensures the overlay doesn't interfere with mouse events */
  z-index: 2;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const Image = styled.img`
  display: block;
  width: 200%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  z-index: 1;
`;

const Text = styled.p`
  color: var(--color-grey-0);
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 0.8rem;
`;

const Description = styled.div`
  margin: 0.5rem 1rem;
`;

function MemberImage() {
  return (
    <>
      <Container>
        {/* <Image src={image} alt="Avatar" /> */}
        {/* <Overlay /> */}
        <Overlay>
          <Description>
            <Text>SRIJAN BISWAS</Text>
            <Text>H.R.(SALES)</Text>
          </Description>
        </Overlay>
      </Container>
    </>
  );
}

export default MemberImage;
