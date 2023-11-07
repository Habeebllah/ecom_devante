import * as yup from "yup";

export const signupSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
});

export const contactSchema = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Z][a-zA-Z]*$/, "First Name must start with a capital letter")
    .required("First Name is required"),
  lastname: yup
    .string()
    .matches(/^[A-Z][a-zA-Z]*$/, "Last Name must start with a capital letter")
    .required("Last Name is required"),
  number: yup
    .string()
    .matches(/^\d{1,11}$/, "Phone Number must be up to 11 digits")
    .required("Phone Number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});
