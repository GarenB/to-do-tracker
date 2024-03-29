import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../reusable/input-field";
import signInApi from "../../../api/account/signin";
import signInValidationSchema from "../../../validation/sign-in";
import { SubmitButtonContainer, SubmitButton } from "./style";

const SignInForm = () => {
  const methods = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    await signInApi(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField name="username" placeholder="Username" defaultValue="" />
        <InputField name="password" placeholder="Password" defaultValue="" />
        <SubmitButtonContainer>
          <SubmitButton type="submit">Log in</SubmitButton>
        </SubmitButtonContainer>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
