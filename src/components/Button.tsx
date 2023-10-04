import { useNavigate } from "react-router-dom";

export enum ButtonType {
    // TODO: Do we need all these types?
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
    Danger = 'danger',
    Warning = 'warning',
    Success = 'success',
    Info = 'info',
    Light = 'light',
    Dark = 'dark',
    Link = 'link',
    None = 'none'
}

export enum ButtonSize {
    ExtraSmall = 'xs',
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
    ExtraLarge = 'xl'
}

interface IButtonProps {
    label?: string;
    tooltip?: string;
    type?: ButtonType | string;
    size?: ButtonSize | string;
    href?: string;
    path?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const styleForType = (type: ButtonType | string, size: ButtonSize | string, isDisabled: boolean) => {
    // const baseStyle = 'font-bold py-2 px-4 rounded m-1';
    
    const typeStyle = (() => {
      if (isDisabled)
        return `bg-gray-100 text-gray-300 cursor-not-allowed`
      else {
        return {
          "primary": `bg-blue-500 hover:bg-blue-700 text-white shadow-lg`,
          "secondary": `bg-gray-500 hover:bg-gray-700 text-white shadow-lg`,
          "tertiary": `bg-green-500 hover:bg-green-700 text-white shadow-lg`,
          "danger": `bg-red-500 hover:bg-red-700 text-white shadow-lg`,
          "warning": `bg-yellow-500 hover:bg-yellow-700 text-white shadow-lg`,
          "success": `bg-green-500 hover:bg-green-700 text-white shadow-lg`,
          "info": `bg-blue-500 hover:bg-blue-700 text-white shadow-lg`,
          "light": `bg-gray-300 hover:bg-gray-400 text-white shadow-lg`,
          "dark": `bg-gray-700 hover:bg-gray-800 text-white shadow-lg`,
          "link": `bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white`,
          "none": `bg-transparent hover:bg-transparent text-blue-700 hover:text-blue-500`
        }[`${type}`];
      }
    })();

    const sizeStyle = (() =>{
      return {
        "xs": `text-xs py-2 px-3 rounded m-1`,
        "sm": `text-sm py-2 px-3 rounded m-1`,
        "md": `text-md font-bold py-2 px-4 rounded m-1`,
        "lg": `text-lg font-bold py-3 px-5 rounded m-1`,
        "xl": `text-xl font-black py-4 px-6 rounded m-1`
      }[`${size}`];
    })();

    return `${typeStyle} ${sizeStyle} transition duration-100 ease-in-out`
  
}

const Button = (props: IButtonProps) => {
    const navigate = useNavigate();

    const { type, size, path, href, disabled } = props;

    const label = props.label || 'Button';
    const tooltip = props.tooltip || label;
    const style = styleForType(
      type || ButtonType.Primary,
      size || ButtonSize.Medium,
      disabled || false
      );

    const handleOnClick = () => {
        if (disabled) return;
        console.log('Button clicked!');
        if (props.onClick) {
            props.onClick();
        }
        if (href) {
            window.location.assign(href);
        }
        else if (path) {
            navigate(path);
        }
    }

    return (
        <button className={style} title={tooltip} onClick={handleOnClick}>{label}</button>
    );

};

export default Button;