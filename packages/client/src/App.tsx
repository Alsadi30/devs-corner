import { useState } from 'react'
import PrimaryButton from '../../material-ui/src/Atoms/PrimaryButton/index';
import Text from '../../material-ui/src/Atoms/Text'
import FormContaineer from '../../material-ui/src/Atoms/FormContainer/index';
import { TextField } from '@mui/material'
import Cont from '../../material-ui/src/Atoms/Container/index';
import Input from '../../material-ui/src/Atoms/InputG/index';
import { useForm } from 'react-hook-form';
import SectionBody from '../../material-ui/src/Atoms/SectionBody/index';
import SectionHead from '../../material-ui/src/Molecules/SectionHead/index';
import NavBar from '../../material-ui/src/Organisms/NavBar/NavBar';
import ImageAvatar from '../../material-ui/src/Atoms/Avatars/ImageAvatar';
import photo from './assets/avatar.jpg'
import Copyright from '../../material-ui/src/Atoms/Copyright/index';
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
    <Cont>
      <SectionHead title='Skills' />


      <NavBar />

      <SectionBody>
        <ImageAvatar Src={photo} Txt="Name" Size={150} />
        <div>Heoolo</div>
        <PrimaryButton />
        <Text />
        <FormContaineer>
          <Input item={{ name: 'username', type: 'text', }} control={control} />
        </FormContaineer>
      </SectionBody>


      <Copyright />
    </Cont>

  );
}

export default App;
