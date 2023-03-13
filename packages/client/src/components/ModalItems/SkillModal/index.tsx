import { useForm } from 'react-hook-form';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import { TextField, Autocomplete } from '@mui/material';
import { InputStyle } from '../../../../../material-ui/src/Atoms/InputG/Input.style';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useGetSkillQuery } from '../../../features/skill/skillApi';

interface Props {
    onSubmit: (data: object) => void
}


interface SkillType {
    name: string;
    id: string;
}


const OpTheme = createTheme({
    palette: {
        secondary: {
            main: "#ffffff",
        },
    }
})


const SkillModal = ({ onSubmit }: Props) => {

    const { data: skillData, isLoading, isError } = useGetSkillQuery();

    const defaultProps = {
        options: skillData,
        getOptionLabel: (option: SkillType) => option.name,
    };

    if (isLoading) {
        <div>Loading</div>
    }

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