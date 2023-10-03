interface IButtonProps {
    label: string;
    onClick: () => void;
}

const Button = (props: IButtonProps) => {

    const { label } = props;

    const handleClick = () => {
        if ( props.onClick ) props.onClick();
    }

    return (
        <button className="button" title={label} onClick={handleClick}>{label}</button>
    );
};

export default Button;