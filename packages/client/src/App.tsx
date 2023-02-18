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
function App() {
  const [count, setCount] = useState(0)
  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  })
  return (
    <Cont>
      <SectionHead title='Skills' />
      <SectionBody>
        <div>Heoolo</div>
        <PrimaryButton />
        <Text />
        <FormContaineer>
          <Input item={{ name: 'username', type: 'text', }} control={control} />
        </FormContaineer>
      </SectionBody>
    </Cont>
  )
}

export default App
