import React from "react";
import { styled } from "styled-components";
import Header from "../../components/header/Header";
import CardFrom from "../../components/card-form/CardForm";
import CardList from "../../components/card-list/CardList";
import background from "../../image/background.jpg"

const TrelloPage = () => {
  return (
      <StyledTrelloPage>
        <Header />
        <CardListAndForm>
          <CardList />
          <CardFrom />
        </CardListAndForm>
      </StyledTrelloPage>
  );
};

const StyledTrelloPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardListAndForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 30px;
`;

export default TrelloPage;
