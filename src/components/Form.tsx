import { PropsWithChildren } from "react";
import Button from "./Button";
import { JsxElement } from "typescript";

export interface IFormValues {
  [key: string]: any;
}

interface IFormProps extends PropsWithChildren {
  onSubmit: () => void;
}

const Form = (props: IFormProps) => {
  const { children } = props;

  const handleOnSubmit = () => {
    // if ( !validate() ) return
    if ( props.onSubmit ) props.onSubmit()
  }

  return (
    <div className="w-full min-h-fit flex flex-col justify-start">
      {children}
      <Button
        label="Submit"
        type="primary"
        // disabled={validate()}
        onClick={handleOnSubmit}
        />
    </div>
  );
};

export default Form;