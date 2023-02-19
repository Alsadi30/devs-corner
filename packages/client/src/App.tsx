import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cont from '../../material-ui/src/Atoms/Container/index';
import Login from './pages/Login';
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

    </>)
}

export default App;
