import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cont from '../../material-ui/src/Atoms/Container/index';

import Section from '../../material-ui/src/Organisms/Section/index';
import Login from './pages/Login';
import Register from './pages/Register';
import RepositoryItem from '../../material-ui/src/Organisms/RepositoryItem/index';






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
      <Login />
      <RepositoryItem title='Repository 1' description='A short description of the project' gitlink='dlkfjasdkljf' livelink='dlsflksadklfjdskl' />
    </>
    // <Cont>
    //   {/* <SectionHead title='Skills' />


    //   <NavBar />

    //   <SectionBody>

    //     <ImageAvatar Src={photo} Txt="Name" Size={150} />
    //     <div>Heoolo</div>
    //     <PrimaryButton />
    //     <Text /> */}
    //   {/* < Register /> */}
    //   {/* <Login /> */}
    //   <Section title='About' text='I am a front end developer ,I am very pasionate to my work' />


    //   {/* <Copyright /> */}
    // </Cont>

  )
}

export default App;
