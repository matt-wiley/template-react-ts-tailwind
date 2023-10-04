import TextField from "./TextField";
import { InputProps } from "./utils";

const UrlField = (props: InputProps) => {

  const defaultedProps = {
    ...props,
    label: props.label || "URL",
    placeholder: props.placeholder || "https://www.example.com",
    state: props.state || "empty"
  }

  return (
    <TextField {...defaultedProps} />
  );
};

export default UrlField;