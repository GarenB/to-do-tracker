import SignUpForm from "../../components/forms/signup-form";

import {
  Container,
  FormWrapper,
  FormContainer,
  InnerContainer,
  Title,
} from "./style";

const SignUpPage = () => {
  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          <Title>Sign up form</Title>
          <InnerContainer>
            <SignUpForm />
          </InnerContainer>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default SignUpPage;
