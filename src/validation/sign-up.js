import * as yup from "yup";

const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().required("FN is required"),
  lastName: yup.string().required("LN is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  userName: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default signUpValidationSchema;
