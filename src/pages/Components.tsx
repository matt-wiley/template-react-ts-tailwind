import Button from "../components/Button";

interface IComponentsProps {

}

const Components = (props: IComponentsProps) => {
  return (
    <div>
      <Button label="Buttons" path="./buttons" />
    </div>
  );
};

export default Components;