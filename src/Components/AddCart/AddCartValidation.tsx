import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  CartName: yup
    .string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
