import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/validation";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Axios } from "../config";
import requests from "../lib/requests";
const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const [formSubmit, setFormSubmit] = useState([]);

  const PostContact = async (formData) => {
    try {
      const res = await Axios.post(requests.login, formData);
      setFormSubmit(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    if (errors.email || errors.password) {
      toast.error("Please fill out all fields correctly");
      return;
    }

    if (!rememberMe) {
      toast.error("Please remember me");
      return;
    }

    // Assuming the form submission was successful

    PostContact(values); // Pass the form values to PostContact
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
    validationSchema: loginSchema,
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
              action="#"
              onSubmit={handleSubmit}
              className={`${
                errors.email && errors.password ? "gap-2" : "gap-4"
              }`}
            >
              <div className="login__section--inner">
                <div className="account__login">
                  <div className="account__login--header mb-25">
                    <h2 className="account__login--header__title h3 mb-10">
                      Login
                    </h2>
                    <p className="account__login--header__desc">
                      Login if you area a returning customer.
                    </p>
                  </div>
                  <div className="account__login--inner">
                    <input
                      className="account__login--input"
                      placeholder="Email Address"
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
                    <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                      <div className="account__login--remember position__relative">
                        <input
                          className="checkout__checkbox--input"
                          id="check1"
                          type="checkbox"
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                        <span className="checkout__checkbox--checkmark"></span>
                        <label
                          className="checkout__checkbox--label login__remember--label"
                          for="check1"
                        >
                          Remember me
                        </label>
                      </div>
                      <button className="account__login--forgot" type="submit">
                        Forgot Your Password?
                      </button>
                    </div>
                    <button
                      className="account__login--btn primary__btn"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="account__login--divide">
                      <span className="account__login--divide__text">OR</span>
                    </div>
                    <div className="account__social d-flex justify-content-center mb-15">
                      <a
                        className="account__social--link facebook"
                        target="_blank"
                        href="https://www.facebook.com"
                      >
                        Facebook
                      </a>
                      <a
                        className="account__social--link google"
                        target="_blank"
                        href="https://www.google.com"
                      >
                        Google
                      </a>
                      <a
                        className="account__social--link twitter"
                        target="_blank"
                        href="https://twitter.com"
                      >
                        Twitter
                      </a>
                    </div>
                    <p className="account__login--signup__text">
                      Don,t Have an Account?{" "}
                      <Link to="/signup">
                        <button type="submit">Sign up now</button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- End login section  --> */}
      </main>
      <ToastContainer />
    </>
  );
};

export default Login;
