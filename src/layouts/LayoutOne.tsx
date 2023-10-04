import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

interface ILayoutOneProps {}

const LayoutOne = (props: ILayoutOneProps) => {
  return (
    <div>
      <Nav
        navItems={{
          "Home": "/",
          "Dev": "/dev",
          "Components": "/components"
        }} />
      <Outlet />
    </div>
  );
};

export default LayoutOne;