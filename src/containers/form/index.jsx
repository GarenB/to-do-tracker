import {
  Container,
  FormWrapper,
  FormContainerStyle,
  InnerContainer,
  Title,
} from "./style";

const FormContainer = ({ title, form }) => {
  return (
    <Container>
      <FormWrapper>
        <FormContainerStyle>
          <Title>{title}</Title>
          <InnerContainer>{form}</InnerContainer>
        </FormContainerStyle>
      </FormWrapper>
    </Container>
  );
};

export default FormContainer;
