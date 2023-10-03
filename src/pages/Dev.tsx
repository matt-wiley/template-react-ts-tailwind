import Button from "../components/Button";

interface IDevProps {

}

const Dev = (props: IDevProps) => {
    return (
        <div className="flex flex-col justify-start p-1 w-60 m-auto">
            <Button type="primary" label="Primary" />
            <Button type="secondary" label="Secondary" />
            <Button type="tertiary" label="Tertiary" />
            <Button type="danger" label="Danger" />
            <Button type="warning" label="Warning" />
            <Button type="success" label="Success" />
            <Button type="info" label="Info" />
            <Button type="light" label="Light" />
            <Button type="dark" label="Dark" />
            <Button 
                type="link" 
                label="Link"
                href="https://www.google.com"
                onClick={() => { console.log('Do this before navigation.') }}/>
            <Button type="none" label="None" />
            <Button type="primary" label="Disabled" disabled />
            <Button type="primary" />
            <Button type="primary" label="Custom Tooltip" tooltip="Not the label text." />
        </div>
    );
};

export default Dev;