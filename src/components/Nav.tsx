import Button, { ButtonSize, ButtonType } from "./Button";

interface NavItems {
  [label: string]: string;
}

interface INavProps {
  buttonType?: ButtonType | string;
  buttonSize?: ButtonSize | string;
  navItems: NavItems;
}

const Nav = (props: INavProps) => {

  const { buttonType, buttonSize, navItems } = props;

  return (
    <div className="flex flex-row justify-center align-middle">
    {
      Object.keys(navItems).map((item, index) => {
        return (
          <Button 
            key={index}
            size={buttonSize || ButtonSize.Medium} 
            type={buttonType || ButtonType.Link} 
            label={item} 
            path={navItems[item]} />
        )
      })
    }
    </div>
  );
};

export default Nav;