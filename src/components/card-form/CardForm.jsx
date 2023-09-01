import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../store/todos/todos-reducer";

const CardForm = () => {
  const [state, setState] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const changeStateHandler = (e) => {
    e.stopPropagation();
    setState(true);
  };

  const changeStateHandlerToFalse = () => {
    setState(false);
  }

  const addNewCard = (e) => {
    e.preventDefault();
    if(inputValue) {
        const newCard = {
            title: inputValue,
            task: [],
            id: Math.floor(Math.random() * 100000),
        }
        dispatch(addCard(newCard))
        setState(false)
    }
  }

  return (
    <StyledCardForm>
      {state ? (
        <>
          <Input value={inputValue} onChange={getInputValue} onClick={changeStateHandler} />
          <AddOrClose>
            <Button title="Добавить" onClick={addNewCard}/>
            <p style={{cursor: "pointer"}} onClick={changeStateHandlerToFalse}>X</p>
          </AddOrClose>
        </>
      ) : (
        <Button title="+ Добавить список" onClick={changeStateHandler} />
      )}
    </StyledCardForm>
  );
};

const StyledCardForm = styled.form`
  display: inline-block;
  border: solid;
`;

const AddOrClose = styled.div`
  display: flex;
`;

export default CardForm;
