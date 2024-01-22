/* eslint-disable react/prop-types */
import { RiCheckboxCircleLine } from "react-icons/ri";
import Button from "../common/Button";
import styled from "styled-components";

const StyledCardPricing = styled.div`
  padding: 3rem 2rem;
  background-color: var(--color-grey-100);
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-grey-200);
    border-color: var(--color-grey-800);
  }
`;
const Content = styled.div`
  flex: 1;
  margin-bottom: 2rem;
`;

const H4 = styled.h4`
  margin-bottom: 1rem;
  color: var(--color-grey-900);
  font-size: 1.2rem;
  font-weight: 500;
`;

const H3 = styled.h3`
  color: var(--color-grey-900);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 2px dashed var(--color-grey-900);
`;

const P = styled.p`
  color: var(--color-grey-900);
  margin-bottom: 0.75rem;
`;

const Span = styled.span`
  color: var(--color-grey-500);
  font-size: 1.2rem;
  margin-right: 0.4rem;
`;

function PricingCard({ header }) {
  return (
    <StyledCardPricing>
      <Content>
        <H4>{header}</H4>
        <H3>Price</H3>
        <P>
          <Span>
            <RiCheckboxCircleLine />
          </Span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </P>
        <P>
          <Span>
            <RiCheckboxCircleLine />
          </Span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </P>
        <P>
          <Span>
            <RiCheckboxCircleLine />
          </Span>
          Time
        </P>
      </Content>
      <Button type="transparent" border="white" hover="blue">
        Order Now
      </Button>
    </StyledCardPricing>
  );
}

export default PricingCard;
