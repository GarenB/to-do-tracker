import SignUpForm from "../../components/forms/signup-form";

import { Container, FormWrapper, FormContainer, InnerContainer } from "./style";

const SignUpPage = () => {
  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          Sign up form
          <InnerContainer>
            <SignUpForm />
          </InnerContainer>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default SignUpPage;
