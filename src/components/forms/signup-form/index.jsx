import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../reusable/input-field";
import signUpApi from "../../../api/account/signup";
import signUpValidationSchema from "../../../validation/sign-up";
import { SubmitButtonContainer, SubmitButton } from "./style";

const SignUpForm = () => {
  const methods = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    await signUpApi(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField name="firstName" placeholder="First Name" defaultValue="" />
        <InputField name="lastName" placeholder="Last Name" defaultValue="" />
        <InputField name="email" placeholder="Email" defaultValue="" />
        <InputField name="username" placeholder="Username" defaultValue="" />
        <InputField name="password" placeholder="Password" defaultValue="" />
        <InputField
          name="confirmPassword"
          placeholder="Confirm Password"
          defaultValue=""
        />
        <SubmitButtonContainer>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </SubmitButtonContainer>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
