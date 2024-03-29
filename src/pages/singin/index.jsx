import SignInForm from "../../components/forms/singin-form";

import {
  Container,
  FormWrapper,
  FormContainer,
  InnerContainer,
  Title,
} from "./style";

const SignInPage = () => {
  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          <Title>Login form</Title>
          <InnerContainer>
            <SignInForm />
          </InnerContainer>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default SignInPage;
