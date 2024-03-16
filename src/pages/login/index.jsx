import LoginForm from "../../components/forms/login-form";

import { Container, FormWrapper, FormContainer } from "./style";

const LoginPage = () => {
  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          <LoginForm />
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
