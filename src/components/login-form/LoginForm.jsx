import React, { useState } from "react";
import { styled } from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/auth-reducer";

const defaultUser = { 
    email: "admin@gmail.com", 
    password: "admin123" 
};
const LoginForm = () => {
  const isLogged = useSelector((state) => state.reducer);

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
    e.preventDefault()
    if (passwordInputValue === defaultUser.password && emailInputValue === defaultUser.email) {
        dispatch(login())
    }
  };

  return (
    <StyledLoginForm>
      <Input
        placeholder="Укажите адресс электронной почты"
        onChange={getEmailInputValue}
        value={emailInputValue}
        inputType="email"
      />
      <br/>
      <Input
        placeholder="Введите пароль"
        onChange={getPasswordInputValue}
        value={passwordInputValue}
        inputType="password"
      />
      <br/>
      <Button onClick={loginUserHandler} title="Продолжить" />
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.form`
    width: 50%;
    margin: 0 auto;
    border: solid;
    
`;
export default LoginForm;
