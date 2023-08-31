import React from "react";
import { styled } from "styled-components";
import LoginForm from "../../components/login-form/LoginForm";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <h1>Trello</h1>
      <LoginForm />
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.div``;
export default LoginPage;
