import Button from "../components/Button";

interface IHomeProps {

}

const Home = (props: IHomeProps) => {
    return (
        <div>
            <h1>Home</h1>
            <Button label="Click me!" onClick={() => alert('Hello World!')} />
        </div>
    );
};

export default Home;