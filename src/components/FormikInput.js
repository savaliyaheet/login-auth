import React from "react";
import { Field, ErrorMessage } from "formik";

function FormikInput(props) {
  const { name, label, type, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} id={name} {...rest} />
      <ErrorMessage name={name}>
        {(mesageErr) => <div className="error">{mesageErr}</div>}
      </ErrorMessage>
    </div>
  );
}

export default FormikInput;
