import React from "react";
import FormikInput from "./FormikInput";
import Textarea from "./Textarea";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <FormikInput {...props} />;
    case "textarea":
      return <Textarea {...props} />;
    default:
      return null;
  }
}

export default FormikControl;
