import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../reusable/input-field";

const LoginForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField name="username" placeholder="Username" defaultValue="" />
        <InputField name="password" placeholder="Password" defaultValue="" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
