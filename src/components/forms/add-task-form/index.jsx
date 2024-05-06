import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../reusable/input-field";
import createTaskApi from "../../../api/task/create";
import createTaskValidationSchema from "../../../validation/task";
import StyledButton from "../../reusable/button";
import { SubmitButtonContainer, Container } from "./style";

const AddTaskForm = () => {
  const methods = useForm({
    resolver: yupResolver(createTaskValidationSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    await createTaskApi(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <InputField name="title" placeholder="Title" defaultValue="" />
          <SubmitButtonContainer>
            <StyledButton title="Save" />
          </SubmitButtonContainer>
        </Container>
      </form>
    </FormProvider>
  );
};

export default AddTaskForm;
