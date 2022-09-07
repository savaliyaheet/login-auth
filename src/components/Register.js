import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookLoginAuth from "./FacebookLoginAuth";
import GoogleLoginAuth from "./GoogleLoginAuth";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "./FormikInput";
import FormikControl from "./FormikControl";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password Not matched")
      .required("Required"),
  });

  const onSubmit = (values) =>
    console.log("Submitted register details", values);

  const handleSubmitForm = () => {
    alert(`${username} ${password}`);
  };

  console.log("Register rendered");

  return (
    <div className="login">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormikControl
            control="input"
            type="email"
            name="email"
            label="Email"
          />
          <FormikControl
            control="input"
            type="password"
            name="password"
            label="Password"
          />
          <FormikControl
            control="input"
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />
          <button type="submit" className="btn">
            Register
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

export default Register;
