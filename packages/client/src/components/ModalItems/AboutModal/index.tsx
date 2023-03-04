import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';


const item = {
    name: 'about',
    type: 'text'
}

interface AboutModalProps {
    about?: string
    onSubmit: (data: object) => void
}

const aboutSchema = yup.object({
    about: yup.string().required().trim(),
}).required();

const AboutModal = ({ about, onSubmit }: AboutModalProps) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: !!about && {
            about: about
        }, resolver: yupResolver(aboutSchema)
    });

    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >
            <Input item={item} other={control} />
            <FormButton />
        </FormContainer>
    )
}

export default AboutModal