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
  font-size: var(--button-font-size, 2rem);
  font-weight: bold;
  border-radius: var(--button-radius, 25px);
  background: var(--button-bg-color, #4e19ff);
  color: var(--button-color, #ffffff);

  height: 4.5rem;
  width: 33rem;
  margin-left: 6rem;
  margin-right: 6rem;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #25009e);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    color: #777777;
    background: var(--button-bg-color, #fafafa);
  }
`;