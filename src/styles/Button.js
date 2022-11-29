import React from "react";
import styled from "styled-components";

export default function Button({ disabled, size, children, onClick }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1.5rem);
  border-radius: var(--button-radius, 14px);
  background: var(--button-bg-color, #4e19ff);
  color: var(--button-color, #ffffff);

  height: 3rem;
  width: 20rem;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #25009e);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;
