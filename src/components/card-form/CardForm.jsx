import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../store/todos/todos-reducer";

const CardForm = () => {
  const [isCardInputVisible, setIsCardInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const { todo } = useSelector((state) => state);

  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const changeStateHandler = (e) => {
    e.stopPropagation();
    setIsCardInputVisible(true);
  };

  const changeStateHandlerToFalse = () => {
    setIsCardInputVisible(false);
  };

  const addNewCard = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newCard = {
        title: inputValue,
        task: [],
        id: Math.floor(Math.random() * 100000),
      };
      console.log(newCard);
      dispatch(addCard(newCard));
      setInputValue("");
      setIsCardInputVisible(false);
    }
  };

  return (
    <StyledCardForm>
      {isCardInputVisible ? (
        <NewCardForm>
          <Input
            value={inputValue}
            onChange={getInputValue}
            onClick={changeStateHandler}
            fontSize="20px"
            width="100%"
            height="30px"
            outline="solid 2px #24b1b1"
            brRadius="4px"
            padding="0px 10px"
          />
          <AddOrClose>
            <Button
              title="Добавить список"
              bgColor="#0B66E4"
              hoverBgColor="#104da3"
              padding="10px"
              color="white"
              fontSize="18px"
              onClick={addNewCard}
              brRadius="4px"
            />
            <CloseButton onClick={changeStateHandlerToFalse}>X</CloseButton>
          </AddOrClose>
        </NewCardForm>
      ) : (
        <Button
          title={
            todo.length > 0
              ? "+ Добавить еще одну колонку"
              : "+ Добавить список"
          }
          color="white"
          bgColor="rgba(128, 128, 128, 0.7);"
          hoverBgColor="rgba(88, 85, 85, 0.7);"
          onClick={changeStateHandler}
          width="310px"
          padding="10px 20px"
          textAlign="start"
          fontSize="18px"
          brRadius="10px"
        />
      )}
    </StyledCardForm>
  );
};

const StyledCardForm = styled.form`
  display: inline-block;
`;

const NewCardForm = styled.div`
  padding: 10px;
  background-color:#F1F2F4;
  border-radius: 12px;
  width: 310px;
`;

const CloseButton = styled.h3`
  cursor: pointer;
  font-size: 30px;
  color: gray;
`;

const AddOrClose = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export default CardForm;
