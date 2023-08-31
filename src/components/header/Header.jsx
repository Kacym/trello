import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { logout } from "../../store/auth/auth-reducer";

const Header = () => {
  const dispatch = useDispatch();

  const { isLogged } = useSelector((state) => state.reducer);

  const userLogoutHandler = () => {
    dispatch(logout());
    console.log(isLogged);
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <h1>Trello</h1>
        <Link to="/" onClick={userLogoutHandler}>
          Log out
        </Link>
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
