import Task from "../../components/task";
import AddTask from "../../components/add-task";
import { OuterContainer, InnerContainer } from "./styles";

const TasksContainer = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <>
          Your Tasks
          <Task />
          <Task />
          <AddTask />
        </>
      </InnerContainer>
    </OuterContainer>
  );
};

export default TasksContainer;
