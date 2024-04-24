import { Container } from "./styles";

const Task = () => {
  return (
    <Container>
      <input type="radio" id="option1" name="options" value="option1" />
      <label htmlFor="option1">Option 1</label>
      <br />
    </Container>
  );
};

export default Task;
