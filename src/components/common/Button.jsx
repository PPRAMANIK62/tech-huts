/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0.8rem 0.8rem;
  `,
  medium: css`
    padding: 1rem 1.2rem;
    font-size: 1.2rem;
  `,
  circular: css`
    font-size: 1.25rem;
    border-radius: 100%;
    border: 1px solid var(--color-grey-700);
    padding: 0.5rem;
  `,
};

const types = {
  transparent: css`
    background-color: transparent;
  `,
  normal: css`
    background-color: var(--color-blue-700);
    &:hover {
      background-color: var(--color-indigo-100);
    }
  `,
};

const hovers = {
  blue: css`
    &:hover {
      background-color: var(--color-blue-700);
      border-color: var(--color-blue-700);
    }
  `,
  blueText: css`
    &:hover {
      color: var(--color-blue-400);
    }
  `,
  grey: css`
    &:hover {
      background-color: var(--color-grey-500);
      border-color: var(--color-grey-500);
      color: var(--color-grey-100);
    }
  `,
};

const borders = {
  white: css`
    border: 2px solid var(--color-grey-900);
  `,
};

var StyledButton = styled.button`
  color: var(--color-grey-800);
  border-radius: 5px;
  /* cursor: pointer; */
  transition: all 0.3s ease;
  display: block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}
  ${(props) => (props.disabled ? hovers["grey"] : hovers[props.hover])}
  ${(props) => borders[props.border]}
`;

StyledButton.defaultProps = {
  size: "medium",
};

function Button({ children, size, type, border, hover, disabled }) {
  return (
    <StyledButton
      size={size}
      type={type}
      border={border}
      hover={hover}
      disabled={disabled}
    >
      {disabled ? "Unavailable" : children}
    </StyledButton>
  );
}

export default Button;
