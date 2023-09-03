import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";

const InnerTaskForm = () => {
  const [isTaskInputVisible, setIsTaskInputVisible] = useState(false);
  const [taskInputValue, setTaskInputValue] = useState("");

  const getTaskInputValue = (e) => {
    setTaskInputValue(e.target.value);
  };

  const changeTaskInputToVisibleHandlerHandler = () => {
    setIsTaskInputVisible(true);
  };

  const changeTaskInputToInvisibleHandler = () => {
    setIsTaskInputVisible(false);
  };

  return (
    <>
      {isTaskInputVisible ? (
        <>
          <textarea
            value={taskInputValue}
            placeholder="Ввести заголовок для этой карточки"
            onClick={changeTaskInputToVisibleHandlerHandler}
            onChange={getTaskInputValue}
          />
          <AddTaskOrCancelContainer>
            <Button width="120px" height="40px" title="Добавить карточку" />
            <h3 style={{cursor: "pointer"}} onClick={changeTaskInputToInvisibleHandler}>X</h3>
          </AddTaskOrCancelContainer>
        </>
      ) : (
        <Button
          title="+ Добавить карточку"
          onClick={changeTaskInputToVisibleHandlerHandler}
        />
      )}
    </>
  );
};

const AddTaskOrCancelContainer = styled.div`
  display: flex;
  align-items: center;
  border: solid;
  justify-content: center;
`;

export default InnerTaskForm;
