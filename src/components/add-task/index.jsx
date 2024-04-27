import React, { useState, useEffect, useRef } from "react";

import AddTaskForm from "../forms/add-task-form";
import { AddTaskContainer, AddTaskButton } from "./styles";

const AddTask = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const outerDivRef = useRef(null);

  const handleClick = () => {
    setIsFormVisible(true);
  };

  const handleClickOutside = (event) => {
    if (outerDivRef.current && !outerDivRef.current.contains(event.target)) {
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={outerDivRef}>
      <AddTaskButton onClick={handleClick}>Add Task</AddTaskButton>
      <AddTaskContainer isFormVisible={isFormVisible}>
        <AddTaskForm />
      </AddTaskContainer>
    </div>
  );
};

export default AddTask;
