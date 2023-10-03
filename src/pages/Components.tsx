import { Outlet } from "react-router-dom";
import Button from "../components/Button";
import Nav from "../components/Nav";

interface IComponentsProps {

}

const Components = (props: IComponentsProps) => {
  return (
    <>
      <Nav 
        buttonSize="xs"
        buttonType="secondary"
        navItems={{
          "Buttons": './buttons'
        }}
      />
      <Outlet />
    </>
  );
};

export default Components;