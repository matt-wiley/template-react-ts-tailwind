import TextField from "./TextField";

interface IUrlFieldProps {
  value: string;
  onChange: (value: string) => void;
  formatter?: (value: string) => string;
}

const UrlField = (props: IUrlFieldProps) => {
  return (
    <TextField
      {...props}
      label="URL"
      type="text"
      placeholder="https://www.example.com"
      validation={/https?:\/\/[\w\-.]+(:\d+)?(\/.*)?/}
      />
  );
};

export default UrlField;