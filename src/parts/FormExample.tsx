import { useState } from "react";
import Button from "../components/Button";
import EmailField from "../components/Form/EmailField";
import TextField from "../components/Form/TextField";
import UrlField from "../components/Form/UrlField";
import { IInputFC, InputProps, InputState } from "../components/Form/utils";


interface IFormInputValue {
  value: string;
  state: InputState;
}

const DefaultInputValue: IFormInputValue = {
  value: "",
  state: InputState.Empty
}


interface IStatefulInputHandlerArgs<E> {
  label: string;
  component: IInputFC;
  placeholder?: string;
  onChange?: (value: E) => void;
  validator?: ( (value: E) => boolean ) | RegExp;
}

interface IStatefulInputHandler<E> {
  getValue: () => E;
  isValid: () => boolean;
  getElement: () => JSX.Element;
}

const StatefulInputHandler = (args: IStatefulInputHandlerArgs<string>) => {

  const [ inputValue, setInputValue ] = useState<IFormInputValue>(DefaultInputValue)


  const onChange = (value: string) => {
    setInputValue({ value: value, state: validate(value) })
    if (args.onChange) args.onChange(value)
  }

  const validate = (value: string) => {
    if ( value.length === 0 ) return InputState.Empty
    else {
      if ( args.validator ) {
        if ( typeof args.validator === "function" ) {
          return args.validator(value) ? InputState.Valid : InputState.Invalid
        }
        else {
          return args.validator.test(value) ? InputState.Valid : InputState.Invalid
        }
      }
      else {
        return InputState.Empty
      }
    }
  }

  const isValid = () => {
    return inputValue.state === InputState.Valid
  }

  const getValue = () => {
    return inputValue.value
  }

  const getElement = () => {
    return args.component({
      label: args.label,
      placeholder: args.placeholder,
      value: inputValue.value,
      state: inputValue.state,
      onChange: onChange
    })
  }

  return {
    getValue: getValue,
    isValid: isValid,
    getElement: getElement
  }

}


const FormExample = () => {

  const name : IStatefulInputHandler<string> = StatefulInputHandler({
    label: "Name",
    placeholder: "John Doe",
    component: TextField,
    validator: (value: string) => value.length > 2
  })

  const url: IStatefulInputHandler<string> = StatefulInputHandler({
    label: "URL",
    placeholder: "https://www.example.com",
    component: TextField,
    validator: /^https?:\/\/[\w-]+([\w\-.]+)*(:\d+)?\/.*/
  })

  const email : IStatefulInputHandler<string> = StatefulInputHandler({
    label: "Email",
    placeholder: "someone@example.com",
    component: TextField,
    validator: /^.+@.+\..+$/
  })

  const isFormValid = () => {
    return (
      name.isValid() && 
      url.isValid() &&
      email.isValid()
    )
  }

  const handleOnSubmit = (value?: string) => {
    if ( isFormValid() ) {
      console.dir({
        url: url.getValue(),
        name: name.getValue(),
        email: email.getValue()
      })
    }
    else {
      console.error("Cannot submit form")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-w-fit w-1/2 h-1/2 m-auto p-4 rounded-lg shadow-lg relative">
      { name.getElement() }
      { url.getElement() }
      { email.getElement() }
      <div className="flex flex-row justify-end w-full mt-3">
        <Button 
          disabled={!isFormValid()}
          label="Submit" 
          onClick={handleOnSubmit} 
          />
      </div>
    </div>
  );

};

export default FormExample;