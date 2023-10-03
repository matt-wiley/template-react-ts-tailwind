import Button from "../components/Button";

interface IHomeProps {

}


const Home = (props: IHomeProps) => {
  return (
    <div>
      <h1 className="text-2xl">Home</h1>
      <Button label="Click me!" onClick={() => alert('Hello World!')} />
    </div>
  );
};

export default Home;