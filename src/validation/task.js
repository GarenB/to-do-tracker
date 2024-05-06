import * as yup from "yup";

const createTaskValidationSchema = yup.object().shape({
  title: yup.string().required("Task title is required"),
});

export default createTaskValidationSchema;
