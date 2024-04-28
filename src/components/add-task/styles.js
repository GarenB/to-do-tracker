import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
`;

export const AddTaskContainer = styled.div`
  display: ${(props) => (props.isFormVisible ? "block" : "none")};
`;

export const AddTaskButton = styled.div`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;
`;
