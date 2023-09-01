import React, { useState } from "react";
import { styled } from "styled-components";
import Header from "../../components/header/Header";
import CardFrom from "../../components/card-form/CardForm";
import CardList from "../../components/card-list/CardList";

const TrelloPage = () => {
  return (
    <StyledTrelloPage>
      <Header />
      <h1>Trello</h1>
      <CardFrom />
      <CardList/>
    </StyledTrelloPage>
  );
};

const StyledTrelloPage = styled.div``;

export default TrelloPage;
