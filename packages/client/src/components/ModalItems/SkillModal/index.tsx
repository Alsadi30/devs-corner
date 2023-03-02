import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';


type Props = {}

const SkillModal = (props: Props) => {

    const { control, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data: object) => {
        console.log(data)
    };


    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >

            {/* after getting all skill data, need to make a filter or select option here for adding that skill to this user. */}

            <Button
                variant="contained"
                fullWidth={true}
                sx={{
                    margin: '10px 0px', bgcolor: 'primary.main', color: 'white'
                }} type="submit">Submit</Button>

        </FormContainer>
    )
}

export default SkillModal