import TextField from "./TextField";
import { InputProps } from "./utils";


const EmailField = (props: InputProps) => {

  const defaultedProps = {
    ...props,
    label: props.label || "Email",
    placeholder: props.placeholder || "someone@example.com",
    state: props.state || "empty"
  }

  return (
    <TextField {...defaultedProps} />
  );
};

export default EmailField;