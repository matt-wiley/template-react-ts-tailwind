import { useState } from "react";
import Form from "../components/Form";
import UrlField from "../components/Form/UrlField";
import Modal from "../components/Modal";


interface IDevProps {}

const Dev = (props: IDevProps) => {

  const [ url, setUrl ] = useState<string>("")

  const handleOnSubmit = () => {
    console.dir({
      url: url
    })
  }

  return (
    <Modal title="Add Bookmark">
      <Form onSubmit={handleOnSubmit}>
        <UrlField
          value={url}
          onChange={(value) => setUrl(value)}
          />
      </Form>
    </Modal>
  );
};

export default Dev;