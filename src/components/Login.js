import React from "react";
import { Link } from "react-router-dom";
import FacebookLoginAuth from "./FacebookLoginAuth";
import GoogleLoginAuth from "./GoogleLoginAuth";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => console.log("Submitted form", values);

  return (
    <div className="login">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormikControl
            control="input"
            name="email"
            label="Email ID"
            type="text"
          />
          <FormikControl
            control="input"
            name="password"
            label="Password"
            type="password"
          />
          <button type="submit" className="btn">
            Login
          </button>
        </Form>
      </Formik>
      <h4>-- or Login using --</h4>
      <div>
        <FacebookLoginAuth />
        <GoogleLoginAuth />
      </div>
      <Link to="/">Main Page</Link>
    </div>
  );
}

export default Login;
