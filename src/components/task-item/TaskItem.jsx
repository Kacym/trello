import React from "react";
import { styled } from "styled-components";

const TaskItem = ({task}) => {
 
  return (
    <StyledTaskItem>
      <p style={{fontSize: "18px", textAlign: "start"}}>{task.title}</p>
    </StyledTaskItem>
  );
};

const StyledTaskItem = styled.li`
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px 5px 0px;
  box-shadow: 1px 1px 2px 1px;
`;

export default TaskItem;
