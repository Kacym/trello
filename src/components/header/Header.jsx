import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { logout } from "../../store/auth/auth-reducer";
import Button from "../UI/Button";
import { createPortal } from "react-dom";
import Modal from "../modal/Modal";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useSearchParams();

  const userLogoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const modalStateChangeHandler = () => {
    setShowModal((state) => !state);
  };

  const openLogoutModal = () => {
    setSearch({ modal: "logoutModal" })
    modalStateChangeHandler();
  }

  const closeLogoutModal = () => {
    setSearch({});
    modalStateChangeHandler();
  }

  return (
    <StyledHeader>
      <HeaderContainer>
        {showModal &&
          createPortal(
            <Modal closeModalHandler={closeLogoutModal}>
              <h1>Вы уверены что хотите выйти?</h1>
              <ButtonsContainer>
                <Button
                  width="150px"
                  height="40px"
                  title="Нет"
                  onClick={closeLogoutModal}
                />
                <Button
                  width="150px"
                  height="40px"
                  title="Да"
                  onClick={userLogoutHandler}
                />
              </ButtonsContainer>
            </Modal>,
            document.getElementById("modal")
          )}
        <h1>Trello</h1>
        <Button onClick={openLogoutModal} title="Log out" />
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

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: solid;
`;

export default Header;
