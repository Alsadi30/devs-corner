import { useForm } from 'react-hook-form';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import { TextField, Autocomplete } from '@mui/material';
import { InputStyle } from '../../../../../material-ui/src/Atoms/InputG/Input.style';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

interface Props {
    onSubmit: (data: object) => void
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },

];

interface FilmOptionType {
    title: string;
    year: number;
}


const OpTheme = createTheme({
    palette: {
        secondary: {
            main: "#ffffff",
        },
    }
})


const SkillModal = ({ onSubmit }: Props) => {

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option: FilmOptionType) => option.title,
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >

            <ThemeProvider theme={OpTheme} >
                <Autocomplete
                    fullWidth={true}
                    {...defaultProps}
                    includeInputInList
                    renderInput={(params) => (
                        <TextField  {...params} sx={{ backgroundColor: '#ffffff', width: '100%', paddingLeft: '5px' }}
                            {...register("skill", { required: true })} label="Select Skill" variant="standard" />
                    )}
                />
            </ThemeProvider>
            <FormButton />

        </FormContainer>
    )
}

export default SkillModal