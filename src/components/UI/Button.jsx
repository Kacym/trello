import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return <StyledButton {...props}>{props.title}</StyledButton>;
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.brRadius};
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  color: ${(props) => props.color};
  border: none;
  font-size: ${(props) => props.fontSize || "20px"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  &:hover {
    background-color: ${(props) => props.hoverBgColor}
  }
`;

export default Button;
