import { useState } from "react";

enum ValidationStates {
  Valid = 'valid',
  Invalid = 'invalid',
  Unknown = 'unknown'
}

interface IValidationFunc {
  (value: string): boolean;
}

export interface ITextFieldProps {
  label: string;
  value: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  onChange: (value: string) => void;
  validation?: IValidationFunc | RegExp;
  formatter?: (value: string) => string;
}


const validate = (value: string, validation?: IValidationFunc | RegExp) => {
  if ( value.length < 1 ) return ValidationStates.Unknown;
  else {
    if ( validation ) {
      if ( typeof validation === 'function' ) {
        if ( validation(value) ) return ValidationStates.Valid;
        else return ValidationStates.Invalid;
      } else {
        if ( validation.test(value) ) return ValidationStates.Valid;
        else return ValidationStates.Invalid;
      }
    } 
    else
      return ValidationStates.Unknown;
  }
}

const TextField = (props: ITextFieldProps) => {

  const [ value, setValue ] = useState(props.value);

  const label = props.label;
  const type = props.type || 'text';
  const placeholder = props.placeholder || label;
  const inputName = `text-field-${label.toLowerCase().replace(' ', '-')}`;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if ( props.onChange ) props.onChange(event.target.value);
  }

  const validStateStyle = () => {
    return {
      "valid": "bg-green-200",
      "invalid": "bg-red-300",
      "unknown": ""
    }[validate(value, props.validation)]
  }

  return (
    <div className="flex flex-col justify-start m-1 relative">
      <label 
        htmlFor={inputName} 
        className='pl-1 text-xs text-blue-500 inline-block'
        >{label}</label>
      <input 
        name={inputName} 
        className=' shadow-inner text-sm rounded inline-block border-2 py-2 px-3'
        type={type} 
        placeholder={placeholder} 
        onChange={handleOnChange} />
      <div className="flex flex-row justify-center w-full">
        <div className={`${validStateStyle()} m-auto absolute bottom-1 h-1 w-11/12 rounded-full`}>&nbsp;</div>
      </div>
    </div>
  );
};

export default TextField;