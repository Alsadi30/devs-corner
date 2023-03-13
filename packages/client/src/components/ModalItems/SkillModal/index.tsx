import { Autocomplete, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import { useGetSkillQuery } from '../../../features/skill/skillApi';

interface Props {
	onSubmit: (data: object) => void;
}

interface FilmOptionType {
	title: string;
	year: number;
}

const OpTheme = createTheme({
	palette: {
		secondary: {
			main: '#ffffff',
		},
	},
});

const SkillModal = ({ onSubmit }: Props) => {
	const { data: skillData, isLoading, isError } = useGetSkillQuery();

	const defaultProps = {
		options: skillData,
		getOptionLabel: (option: FilmOptionType) => option.name,
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<FormContainer handleSubmit={handleSubmit(onSubmit)}>
			<ThemeProvider theme={OpTheme}>
				<Autocomplete
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
	);
};

export default SkillModal;
