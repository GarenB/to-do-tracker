import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../reusable/input-field";
import signUpApi from "../../../api/account/signup";

const SignUpForm = () => {
  const methods = useForm();
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
        {/* <InputField
          name="confirm-password"
          placeholder="Confirm Password"
          defaultValue=""
        /> */}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
