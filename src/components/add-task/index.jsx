import React, { useState } from "react";

import AddTaskForm from "../forms/add-task-form";
import { AddTaskContainer, AddTaskButton } from "./styles";

const AddTask = () => {
  const [isFormVisible, setIFormVisible] = useState(false);

  const handleClick = () => {
    setIFormVisible(true);
  };

  return (
    <div>
      <AddTaskButton onClick={handleClick}>Add Task</AddTaskButton>
      <AddTaskContainer isFormVisible={isFormVisible}>
        <AddTaskForm />
      </AddTaskContainer>
    </div>
  );
};

export default AddTask;
