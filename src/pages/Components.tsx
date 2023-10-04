import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

interface IComponentsProps {}

const Components = (props: IComponentsProps) => {
  return (
    <>
      <Nav 
        buttonSize="xs"
        buttonType="tertiary"
        navItems={{
          "Buttons": './buttons'
        }}
      />
      <Outlet />
    </>
  );
};

export default Components;