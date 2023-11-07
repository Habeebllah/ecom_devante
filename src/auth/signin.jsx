import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Axios } from "../config";
import requests from "../lib/requests";

const SignIn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [formSubmit, setFormSubmit] = useState([]);

  const PostRegister = async (formData) => {
    try {
      const res = await Axios.post(requests.register, formData);
      setFormSubmit(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  // ...

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = () => {
    if (errors.password && touched.password) {
      toast.error(errors.password);
      return; // Prevent form submission if there are errors
    }

    if (errors.confirmPassword && touched.confirmPassword) {
      toast.error(errors.confirmPassword);
      return; // Prevent form submission if there are errors
    }
    if (!isChecked) {
      toast.error("Please agree to the terms & conditions");
      return;
    }
    PostRegister(values); // Pass the form values to PostContact
    toast.success("Form submitted successfully");
    console.log("Form submitted successfully");

    // Log the form values
    console.log("Form Values:", values);

    // Any additional logic after form submission.
  };

  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit,
  });

  const getError = (key) => {
    return touched[key] && errors[key];
  };

  return (
    <>
      <main className="main__content_wrapper">
        <div className="login__section section--padding">
          <div className="container">
            <form
              action=""
              onSubmit={handleSubmit}
              className={`${
                errors.username &&
                errors.email &&
                errors.password &&
                errors.confirmPassword
                  ? "gap-2"
                  : "gap-4"
              }`}
            >
              <div className="account__login register">
                <div className="account__login--header mb-25">
                  <h2 className="account__login--header__title h3 mb-10">
                    Create an Account
                  </h2>
                  <p className="account__login--header__desc">
                    Register here if you are a new customer
                  </p>
                </div>
                <div className="account__login--inner">
                  <input
                    className="account__login--input"
                    placeholder="Username"
                    id="username"
                    type="text"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={getError("username")}
                  />
                  <input
                    className="account__login--input"
                    placeholder="Email Addres"
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={getError("email")}
                  />
                  <input
                    className={` account__login--input ${
                      errors.password && touched.password ? "password" : ""
                    }`}
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  {errors.password && touched.password && (
                    <div className="error">{errors.password}</div>
                  )}
                  <input
                    className={`account__login--input ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "password"
                        : ""
                    }`}
                    placeholder="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="error">{errors.confirmPassword}</div>
                  )}

                  <button
                    className="account__login--btn primary__btn mb-10"
                    type="submit"
                  >
                    Submit & Register
                  </button>

                  <div className="account__login--remember position__relative">
                    <input
                      className="checkout__checkbox--input"
                      id="check2"
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                    <span className="checkout__checkbox--checkmark"></span>
                    <label
                      className="checkout__checkbox--label login__remember--label"
                      for="check2"
                    >
                      I have read and agree to the terms & conditions
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default SignIn;
