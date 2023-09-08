import React, { useState } from "react";
import { styled } from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/auth-reducer";
import { useNavigate } from "react-router-dom";

const defaultUser = {
  email: "admin@gmail.com",
  password: "admin123",
};

const LoginForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const getEmailInputValue = (e) => {
    setEmailInputValue(e.target.value);
  };

  const getPasswordInputValue = (e) => {
    setPasswordInputValue(e.target.value);
  };

  const loginUserHandler = (e) => {
    e.preventDefault();
    if (
      emailInputValue === defaultUser.email &&
      passwordInputValue === defaultUser.password
    ) {
      dispatch(login());
      navigate("/Trello");
    }
  };

  return (
    <StyledLoginForm>
      <MainText>Вход в trello</MainText>
      <FormsInputsAndButton>
        <Input
          width="75%"
          height="30px"
          outline="gray 2px solid"
          focusOutline="solid 2px #24b1b1"
          placeholder="Укажите адресс электронной почты"
          onChange={getEmailInputValue}
          value={emailInputValue}
          inputType="email"
          padding="10px"
          brRadius="5px"
        />
        <Input
          width="75%"
          height="30px"
          outline="gray 2px solid"
          focusOutline="solid 2px #24b1b1"
          placeholder="Введите пароль"
          onChange={getPasswordInputValue}
          value={passwordInputValue}
          inputType="password"
          padding="10px"
          brRadius="5px"
        />
        <Button
          width="77%"
          height="40px"
          color="white"
          brRadius="4px"
          bgColor="#5AAC44"
          hoverBgColor="#6bc053"
          onClick={loginUserHandler}
          title="Продолжить"
        />
      </FormsInputsAndButton>
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.div`
  width: 30%;
  margin: 0 auto;
  box-shadow: 1px 1px 3px 2px;
  border-radius: 4px;
  padding: 30px 0px;
`;

const FormsInputsAndButton = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const MainText = styled.h2`
  color: white;
  margin-bottom: 2rem;
`;
export default LoginForm;
