import SignUpForm from "../../components/forms/signup-form";
import FormContainer from "../../containers/form";

import { Container } from "./style";

const SignUpPage = () => {
  return (
    <Container>
      <FormContainer title="Sign up form" form={<SignUpForm />} />;
    </Container>
  );
};

export default SignUpPage;
