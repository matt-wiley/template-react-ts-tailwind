import { Outlet } from "react-router-dom";
import Nav from "../parts/Nav";

interface ILayoutOneProps {

}

const LayoutOne = (props: ILayoutOneProps) => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default LayoutOne;