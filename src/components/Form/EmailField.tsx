import TextField from "./TextField";

interface IEmailFieldProps {
  value: string;
  onChange: (value: string) => void;
  formatter?: (value: string) => string;
}

const EmailField = (props: IEmailFieldProps) => {
  return (
    <TextField
      {...props}
      label="Email"
      type="email"
      placeholder="user@example.com"
      validation={/^.+@.+\..+$/} 
      />
  );
};

export default EmailField;