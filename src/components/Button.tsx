import { useNavigate } from "react-router-dom";

enum ButtonType {
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

interface IButtonProps {
    label?: string;
    tooltip?: string;
    type?: ButtonType | string;
    href?: string;
    path?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const styleForType = (type: ButtonType | string, isDisabled: boolean) => {
    const baseStyle = 'font-bold py-2 px-4 rounded m-1';

    if (isDisabled) return `bg-gray-100 text-gray-300 cursor-not-allowed ${baseStyle}`

    switch (type) {
        case ButtonType.Primary:
            return `bg-blue-500 hover:bg-blue-700 text-white ${baseStyle}`;
        case ButtonType.Secondary:
            return `bg-gray-500 hover:bg-gray-700 text-white ${baseStyle}`;
        case ButtonType.Tertiary:
            return `bg-green-500 hover:bg-green-700 text-white ${baseStyle}`;
        case ButtonType.Danger:
            return `bg-red-500 hover:bg-red-700 text-white ${baseStyle}`;
        case ButtonType.Warning:
            return `bg-yellow-500 hover:bg-yellow-700 text-white ${baseStyle}`;
        case ButtonType.Success:
            return `bg-green-500 hover:bg-green-700 text-white ${baseStyle}`;
        case ButtonType.Info:
            return `bg-blue-500 hover:bg-blue-700 text-white ${baseStyle}`;
        case ButtonType.Light:
            return `bg-gray-300 hover:bg-gray-400 text-white ${baseStyle}`;
        case ButtonType.Dark:
            return `bg-gray-700 hover:bg-gray-800 text-white ${baseStyle}`;
        case ButtonType.Link:
            return `bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white ${baseStyle}`;
        case ButtonType.None:
            return `bg-transparent hover:bg-transparent text-blue-700 hover:text-blue-500 ${baseStyle}`;
        default:
            return `bg-blue-500 hover:bg-blue-700 ${baseStyle}`;
    }
}

const Button = (props: IButtonProps) => {
    const navigate = useNavigate();

    const { type, path, href, disabled } = props;

    const label = props.label || 'Button';
    const tooltip = props.tooltip || label;
    const style = styleForType(type || ButtonType.Primary, disabled || false);

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