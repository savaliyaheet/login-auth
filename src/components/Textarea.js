import React from "react";
import { ErrorMessage, Field } from "formik";

function Textarea(props) {
  const { name, label, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage name={name}>
        {(mesageErr) => <div className="error">{mesageErr}</div>}
      </ErrorMessage>
    </div>
  );
}

export default Textarea;
