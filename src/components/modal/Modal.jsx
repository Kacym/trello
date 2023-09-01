import React from "react";
import { styled } from "styled-components";
const Modal = ({ children, closeModalHandler }) => {
  return (
    <>
      <StyledBackdrop onClick={closeModalHandler}></StyledBackdrop>
      <StyledModal>
        {children}
      </StyledModal>
    </>
  );
};

const StyledModal = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: white;
  left: 33%;
  padding: 20px;
`;

const StyledBackdrop = styled.div`
  position: fixed;
  background-color: black;
  opacity: 80%;
  z-index: 100;
  width: 100%;
  height: 100vh;

  top: 0;
  left: 0;
`;


export default Modal;
