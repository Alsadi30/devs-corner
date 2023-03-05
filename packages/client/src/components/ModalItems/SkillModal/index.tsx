import { useForm } from 'react-hook-form';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';


interface Props {
    onSubmit: (data: object) => void
}

const SkillModal = ({ onSubmit }: Props) => {

    const { control, handleSubmit, formState: { errors }, } = useForm();
    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >

            {/* after getting all skill data, need to make a filter or select option here for adding that skill to this user. */}

            <FormButton />

        </FormContainer>
    )
}

export default SkillModal