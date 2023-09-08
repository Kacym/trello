import React, { useState } from "react";
import { styled } from "styled-components";
import InnerTaskForm from "../inner-card-form/InnerTaskForm";
import TaskItem from "../task-item/TaskItem";
import Modal from "../modal/Modal";

const CardItem = ({ card, removeCardHandler }) => {
  const [cardSettings, setCardSetting] = useState(false);

  const cardSettingShowAndCloseHandler = () => {
    setCardSetting((state) => !state);
  };

  return (
    <>
      <StyledCardItem>
        <CardInfo>
          <h3>{card.title}</h3>
          <CardSettings onClick={cardSettingShowAndCloseHandler}>
            ...
          </CardSettings>
        </CardInfo>

        <InnerTodoList>
          {card.task.map((task) => {
            return <TaskItem key={task.id} task={task} />;
          })}
        </InnerTodoList>
        <InnerTaskForm todo={card} />
      </StyledCardItem>
      {cardSettings && (
        <Modal closeModalHandler={cardSettingShowAndCloseHandler}>
          <CardTitleSetting>Действия со списком {card.title}</CardTitleSetting>
          <CloseModalHandler onClick={cardSettingShowAndCloseHandler}>
            X
          </CloseModalHandler>
          <RemoveCard onClick={() => removeCardHandler(card.id)}>Архивировать список</RemoveCard>
        </Modal>
      )}
    </>
  );
};

const RemoveCard = styled.p`
  color: #44556F;
  font-size: 28px;
  text-align: start;
  cursor: pointer;
  &:hover {
    color: #18212e;
  }
`

const CardTitleSetting = styled.h3`
  font-size: 25px;
  text-align: center;
  margin-bottom: 2rem;
  color: #44556F;
`;

const CloseModalHandler = styled.p`
  position: absolute;
  cursor: pointer;
  font-size: 28px;
  top: 12%;
  left: 90%;
  color: #44556F;
`;

const StyledCardItem = styled.div`
  width: 272px;
  background-color: #f1f2f4;
  border-radius: 9px;
  padding: 10px 20px;
  margin-right: 2rem;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardSettings = styled.h3`
  text-align: start;
  cursor: pointer;
  padding: 1px 10px 10px 10px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  &:hover {
    background-color: gray;
  }
`;

const InnerTodoList = styled.ul`
  padding: 0;
  list-style: none;
`;

export default CardItem;
