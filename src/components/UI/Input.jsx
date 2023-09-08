import React from "react";
import { styled } from "styled-components";

const Input = (props) => {
  return (
    <StyledInput
      {...props}
      placeholder={props.placeholder}
      type={props.inputType}
    />
  );
};

const StyledInput = styled.input`
  display: ${(props) => props.dispay};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  outline: ${(props) => props.outline};
  border-radius: ${(props) => props.brRadius};
  font-size: ${(props) => props.fontSize};
  border: none;
  padding: ${(props) => props.padding};
  &:focus {
    outline: ${(props) => props.focusOutline};
    border: none;
  }
`;

export default Input;
