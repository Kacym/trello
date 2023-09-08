import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
    setSearch({ modal: "logoutModal" });
    modalStateChangeHandler();
  };

  const closeLogoutModal = () => {
    setSearch({});
    modalStateChangeHandler();
  };

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
                  bgColor="red"
                  hoverBgColor="#ac0000"
                  brRadius="9px"
                  color="white"
                  onClick={closeLogoutModal}
                />
                <Button
                  width="150px"
                  height="40px"
                  title="Да"
                  bgColor="green"
                  hoverBgColor="#00a529"
                  brRadius="9px"
                  color="white"
                  onClick={userLogoutHandler}
                />
              </ButtonsContainer>
            </Modal>,
            document.getElementById("modal")
          )}
        <h1 style={{color: "white"}}>Trello</h1>
        <Button
          width="150px"
          onClick={openLogoutModal}
          title="Log out"
          bgColor="rgba(155, 151, 151, 0.7)"
          hoverBgColor="rgba(179, 175, 175, 0.7)"
          brRadius="9px"
          color="white"
        />
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #4a4c4b;
  margin: 0;
`;

const HeaderContainer = styled.div`
  width: 80%;
  justify-content: space-between;
  padding: 20px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export default Header;
