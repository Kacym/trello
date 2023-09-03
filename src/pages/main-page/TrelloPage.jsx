import React from "react";
import { styled } from "styled-components";
import Header from "../../components/header/Header";
import CardFrom from "../../components/card-form/CardForm";
import CardList from "../../components/card-list/CardList";

const TrelloPage = () => {
  return (
    <StyledTrelloPage>
      <Header />
      <h1>Trello</h1>
      <CardListAndForm>
        <CardList />
        <CardFrom />
      </CardListAndForm>
    </StyledTrelloPage>
  );
};

const StyledTrelloPage = styled.div`
  border: solid;
`;

const CardListAndForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 30px;
`;

export default TrelloPage;
