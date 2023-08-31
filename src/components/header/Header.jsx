import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { logout } from "../../store/auth/auth-reducer";
import { navigate } from "../login-form/LoginForm"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = useSelector((state) => state.reducer);

  const userLogoutHandler = () => {
    dispatch(logout());
    navigate("/")
  };

  console.log(isLogged)

  return (
    <StyledHeader>
      <HeaderContainer>
        <h1>Trello</h1>
         <button onClick={userLogoutHandler}>Log out</button>
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: blue;
`;

const HeaderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export default Header;
