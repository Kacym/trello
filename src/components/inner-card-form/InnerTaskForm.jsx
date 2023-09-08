import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { addInnerTask } from "../../store/todos/todos-reducer";

const InnerTaskForm = ({ todo }) => {
  const dispatch = useDispatch();
  const [isTaskInputVisible, setIsTaskInputVisible] = useState(false);
  const [taskInputValue, setTaskInputValue] = useState("");
  console.log(todo.id, "todo");
  const getTaskInputValue = (e) => {
    setTaskInputValue(e.target.value);
  };

  const changeTaskInputToVisibleHandlerHandler = () => {
    setIsTaskInputVisible(true);
  };

  const changeTaskInputToInvisibleHandler = () => {
    setIsTaskInputVisible(false);
  };

  const AddNewTodoHandler = () => {
    if (isTaskInputVisible) {
      const newTodo = {
        title: taskInputValue,
        id: Math.floor(Math.random() * 100000),
      };
      dispatch(addInnerTask({ newTodo, id: todo.id }));
      setTaskInputValue("");
      changeTaskInputToInvisibleHandler();

    }
  };

  return (
    <>
      {isTaskInputVisible ? (
        <>
          <StyledTextArea
            value={taskInputValue}
            placeholder="Ввести заголовок для этой карточки"
            onClick={changeTaskInputToVisibleHandlerHandler}
            onChange={getTaskInputValue}
          />
          <AddTaskOrCancelContainer>
            <Button
              brRadius="5px"
              height="40px"
              hoverBgColor="#104da3"
              bgColor="#0B66E4"
              padding="10px"
              color="white"
              fontSize="18px"
              title="Добавить список"
              onClick={AddNewTodoHandler}
            />
            <h3
              style={{ cursor: "pointer", color: "gray", fontSize: "30px" }}
              onClick={changeTaskInputToInvisibleHandler}
            >
              X
            </h3>
          </AddTaskOrCancelContainer>
          </>
      ) : (
        <Some>
          <Button
          width="250px"
          textAlign="start"
          title="+ Добавить карточку"
          color="gray"
          onClick={changeTaskInputToVisibleHandlerHandler}
        />
        </Some>
        
      )}
    </>
  );
};

const Some = styled.div`
  margin-top: 20px;
`
const AddTaskOrCancelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  padding-bottom: 2rem;
  border-radius: 5px;
  margin-top: 20px;
`

export default InnerTaskForm;
