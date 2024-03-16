/* eslint-disable react/prop-types */
import { CgWebsite } from "react-icons/cg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styled from "styled-components";
import { StyledCard } from "../../styles/GlobalStyles";
import Button from "../common/Button";

const Icon = styled.span`
  display: inline-block;
  background-color: var(--color-blue-700);
  padding: 2px 9px;
  margin-bottom: 1rem;
  font-size: 1.75rem;
  color: var(--color-grey-900);
  border-radius: 5px;
`;

const H4 = styled.h4`
  margin-bottom: 0.5rem;
  color: var(--color-grey-900);
  font-size: 1.2rem;
  font-weight: 600;
`;

const P = styled.p`
  color: var(--color-grey-800);
  margin-bottom: 1rem;
`;

function Card({ icon, header, description, href }) {
  return (
    <StyledCard>
      <Icon>
        <CgWebsite />
      </Icon>
      <H4>{header}</H4>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        gravida nisl sodales ante imperdiet porta.
      </P>
      <a href={href}>
        <Button size="small" type="transparent" hover="blue">
          Learn More{" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Button>
      </a>
    </StyledCard>
  );
}

export default Card;
