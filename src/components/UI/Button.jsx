import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <StyledButton
      width={props.width}
      height={props.height}
      bgColor={props.bgColor}
      brRadius={props.brRadius}
      color={props.color}
      display={props.dispay}
    >
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled.button` 
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: ${(props) => props.brRadius};
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    display: ${(props) => props.dispay || "block"};
`;

export default Button;
