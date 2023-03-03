import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import { useGetUserQuery } from '../../../features/user/userApi';


const item = {
    name: 'about',
    type: 'text',
    defaultValue: 'hasdlfj'

}

interface AboutModalProps {
    about: string
    // handleSubmit?: () => void
}

const aboutSchema = yup.object({
    about: yup.string().required().trim(),
}).required();

const AboutModal = ({ about }: AboutModalProps) => {

    console.log(about)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            about: about
        }, resolver: yupResolver(aboutSchema)
    });

    const onSubmit = (data: object) => {
        console.log(data)
    };



    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >

            <Input item={item} other={control} />

            <Button
                variant="contained"
                fullWidth={true}
                sx={{
                    margin: '10px 0px', bgcolor: 'primary.main', color: 'white'
                }} type="submit">Submit</Button>

        </FormContainer>
    )
}

export default AboutModal