import React, { useState } from "react";
import { styled } from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const isLogged = useSelector((state) => state.reducer);

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const getEmailInputValue = (e) => {
    setEmailInputValue(e.target.value);
  }

  const getPasswordInputValue = (e) => {
    setPasswordInputValue(e.target.value);
  }

  return (
    <StyledLoginForm>
      <Input placeholder="Укажите адресс электронной почты" onChange={getEmailInputValue} value={emailInputValue} inputType="email"/>
      <Input placeholder="Введите пароль" onChange={getPasswordInputValue} value={passwordInputValue} inputType="password"/>
      <Button title="Продолжить" />
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.form``;
export default LoginForm;
