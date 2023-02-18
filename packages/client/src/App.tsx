import { useState } from "react";
import { useForm } from "react-hook-form";
import ImageAvatar from "../../material-ui/src/Atoms/Avatars/ImageAvatar";
import Cont from "../../material-ui/src/Atoms/Container/index";
import Copyright from "../../material-ui/src/Atoms/Copyright";
import FormContaineer from "../../material-ui/src/Atoms/FormContainer/index";
import Input from "../../material-ui/src/Atoms/InputG/index";
import PrimaryButton from "../../material-ui/src/Atoms/PrimaryButton/index";
import Text from "../../material-ui/src/Atoms/Text";
import NavBar from "../../material-ui/src/Organisms/NavBar/NavBar";
import photo from "../src/assets/avatar.jpg";
function App() {
  const [count, setCount] = useState(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <>
      <NavBar />
      <Cont>
        <ImageAvatar Src={photo} Txt="Name" Size={150} />
        <div>Heoolo</div>
        <PrimaryButton />
        <Text />
        <FormContaineer>
          <Input item={{ name: "username", type: "text" }} control={control} />
        </FormContaineer>
        <Copyright />
      </Cont>
    </>
  );
}

export default App;
