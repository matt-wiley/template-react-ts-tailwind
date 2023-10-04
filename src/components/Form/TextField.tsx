import { InputProps, InputState } from "./utils";


const TextField = (props: InputProps) => {

  const label = props.label || "Text Field";
  const type = props.type || "text";
  const placeholder = props.placeholder || label;
  const visualState = props.state || InputState.Empty;

  const inputName = `text-field-${label.toLowerCase().replace(' ', '-')}`;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if ( props.onChange ) props.onChange(event.target.value);
  }

  const styleForState = () => {
    return {
      "empty": "",
      "disabled": "bg-gray-200",
      "valid": "bg-green-200",
      "invalid": "bg-red-300"
    }[visualState]
  }

  return (
    <div className="flex flex-col justify-start m-1 relative w-full">
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
      {/* Validation Signal */}
      <div className="flex flex-row justify-center w-full">
        <div className={`${styleForState()} m-auto absolute bottom-1 h-1 w-11/12 rounded-full`}>&nbsp;</div>
      </div>
    </div>
  );
};

export default TextField;