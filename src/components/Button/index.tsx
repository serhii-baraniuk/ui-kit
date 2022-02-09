import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  background: red;
  color: blue;
  font-size: 26px;
  padding: 20px;
`;

const Button: React.FC<ButtonProps> = ({
  text,
  primary,
  disabled,
  size,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export { Button };
