import Button from "../components/Button";

interface INavProps {}

const Nav = (props: INavProps) => {

  const navItems : any  = {
    "Home": "/",
    "Dev": "/dev",
    "Components": "/components"
  }

  return (
    <div className="flex flex-row justify-center align-middle">
    {
      Object.keys(navItems).map((item, index) => {
        return (
          <Button type="link" label={item} path={navItems[item]} />
        )
      })
    }
    </div>
  );
};

export default Nav;