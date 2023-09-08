import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../card-item/CardItem";
import { styled } from "styled-components";
import { removeCard } from "../../store/todos/todos-reducer";

const CardList = () => {
  
  const removeCardHandler = (id) => {
    dispatch(removeCard(id));
  };
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  console.log("todo", todo);

  return (
    <StyledCardList>
      {todo.map((card) => {
        return (
          <>
            <CardItem
              removeCardHandler={removeCardHandler}
              key={card.id}
              card={card}
            />
          </>
        );
      })}
    </StyledCardList>
  );
};

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export default CardList;
