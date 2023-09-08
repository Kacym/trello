import React from "react";
import { styled } from "styled-components";
import LoginForm from "../../components/login-form/LoginForm";
import LoginBackground from "../../image/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <LoginForm />
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${LoginBackground});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10rem;
`;
export default LoginPage;
