import SignInForm from "../../components/forms/singin-form";
import FormContainer from "../../containers/form";

import { Container } from "./style";

const SignInPage = () => {
  return (
    <Container>
      <FormContainer title="Login form" form={<SignInForm />} />;
    </Container>
  );
};

export default SignInPage;
