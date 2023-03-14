import { Autocomplete, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import { useGetSkillQuery } from '../../../features/skill/skillApi';

interface Props {
    onSubmit: (data: object) => void;
}

export interface SkillType {
    name: string;
    id: string;
}

const OpTheme = createTheme({
    palette: {
        secondary: {
            main: '#ffffff',
        },
    },
});

const Props = {

}

const SkillModal = ({ onSubmit }: Props) => {

    let id = ''// to avoid redux ts error
    const { data: skillData, isLoading, isError } = useGetSkillQuery(id);

    if (isLoading) {
        <div>Loading</div>;
    }

    const defaultProps = {
        options: skillData,
        getOptionLabel: (option: SkillType) => option.name,
    };



    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >
            <ThemeProvider theme={OpTheme} >
                skillData && <Autocomplete
                    fullWidth={true}
                    {...defaultProps}
                    includeInputInList
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            sx={{
                                backgroundColor: '#ffffff',
                                width: '100%',
                                paddingLeft: '5px',
                            }}
                            {...register('skill', { required: true })}
                            label='Select Skill'
                            variant='standard'
                        />
                    )}
                />
            </ThemeProvider>
            <FormButton />
        </FormContainer>
    )
}

export default SkillModal
