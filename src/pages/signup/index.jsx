import SignUpForm from "../../components/forms/signup-form";

import { Container, FormWrapper, FormContainer } from "./style";

const SignUpPage = () => {
  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          <SignUpForm />
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default SignUpPage;
