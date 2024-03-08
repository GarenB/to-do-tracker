// YourFormComponent.js

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "./input-field";

const YourFormComponent = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField name="firstName" placeholder="First Name" defaultValue="" />
        <InputField name="lastName" placeholder="Last Name" defaultValue="" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default YourFormComponent;
