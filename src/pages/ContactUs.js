import React from "react";
import "./contactus.css";
import { Form, Formik } from "formik";
import FormikControl from "../components/FormikControl";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  contact: "",
  query: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  contact: Yup.string().required("Required"),
  query: Yup.string().required("Required"),
});

const onSubmit = (values) => {
  console.log("Submitted ContactUs", values);
};

function ContactUs() {
  return (
    <div className="contactus">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormikControl
            control="input"
            name="name"
            id="name"
            type="text"
            label="Name"
          />
          <FormikControl
            control="input"
            name="email"
            id="email"
            type="email"
            label="Email"
          />
          <FormikControl
            control="input"
            name="contact"
            id="contact"
            label="Contact"
            type="text"
          />
          <FormikControl
            control="textarea"
            name="query"
            id="query"
            label="Query"
          />
          <button type="submit" className="contactus__btn">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactUs;
