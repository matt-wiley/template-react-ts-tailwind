import { useState } from "react";
import TextField from "../components/Form/TextField";
import UrlField from "../components/Form/UrlField";
import EmailField from "../components/Form/EmailField";
import Button from "../components/Button";
import { InputState } from "../components/Form/utils";


interface IDevProps {}


interface IFormInputValue {
  value: string;
  state: InputState;
}

const DefaultInputValue: IFormInputValue = {
  value: "",
  state: InputState.Empty
}

const Dev = (props: IDevProps) => {

  // Form State
  const [ name, setName ] = useState<IFormInputValue>(DefaultInputValue)
  const [ email, setEmail ] = useState<IFormInputValue>(DefaultInputValue)
  const [ url, setUrl ] = useState<IFormInputValue>(DefaultInputValue)

  const checkNameState = (value: string) => {
    if ( value.length === 0 ) return InputState.Empty
    else if ( value.length < 3 ) return InputState.Invalid
    else return InputState.Valid
  }

  const checkEmailState = (value: string) => {
    if ( value.length === 0 ) return InputState.Empty
    else if ( value.length < 3 ) return InputState.Invalid
    else return InputState.Valid
    // TODO: Fix this state check
  }

  const checkUrlState = (value: string) => {
    if ( value.length === 0 ) return InputState.Empty
    else {
      const regex = /^https?:\/\/[\w-]+([\w\-.]+)*(:\d+)?\/.*/
      return (regex.test(value))  ? InputState.Valid : InputState.Invalid
    }
  }

  const isFormValid = () => {
    return (
      checkNameState(name.value) === InputState.Valid && 
      checkEmailState(email.value) === InputState.Valid &&
      checkUrlState(url.value) === InputState.Valid
    )
  }

  const onNameChange = (value: string) => {
    setName({ value: value, state: checkNameState(value) })
  }

  const onEmailChange = (value: string) => {
    setEmail({ value: value, state: checkEmailState(value) })
  }

  const onUrlChange = (value: string) => {
    setUrl({ value: value, state: checkUrlState(value) })
  }

  const handleOnSubmit = (value?: string) => {
    if ( isFormValid() ) {
      console.dir({
        url: url,
        name: name,
        email: email
      })
    }
    else {
      console.error("Cannot submit form")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-w-fit w-1/2 h-1/2 m-auto p-4 rounded-lg shadow-lg relative">
      <TextField 
        label="Name" value={name.value} state={name.state} 
        onChange={onNameChange} />
      <UrlField 
        value={url.value} state={url.state} 
        onChange={onUrlChange} />
      <EmailField 
        value={email.value} state={email.state} 
        onChange={onEmailChange} />
      <div className="flex flex-row justify-end w-full">
        <Button 
          disabled={!isFormValid()}
          label="Submit" 
          onClick={handleOnSubmit} 
          />
      </div>
    </div>
  );
};

export default Dev;