import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { educationSchema } from '../../../../../client/src/utils/validation/educationValidation';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import { useCreateEducationMutation } from '../../../features/education/educationApi';


const items = [
	{
		name: 'title',
		type: 'text',
	},
	{
		name: 'result',
		type: 'number',
	},
	{
		name: 'passingyear',
		type: 'date',
	},
	{
		name: 'institute',
		type: 'text',
	},
];

interface EduProps {
	data?: {
		title: string,
		result: string,
		passingyear: number,
		institute: string,
	}
};


const EducationModal = ({ data }: EduProps) => {
	const [createEducation, { data: eduData }] = useCreateEducationMutation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: data && {
			title: data.title,
			result: data.result,
			passingyear: data.passingyear,
			institute: data.institute,
		},
		resolver: yupResolver(educationSchema),
	});

	const onSubmit = (data: object) => {
		createEducation(data);
	};

	return (
		<FormContainer handleSubmit={handleSubmit(onSubmit)}>
			<MapListItem Component={Input} Items={items} other={control} />

			<Button
				variant='contained'
				fullWidth={true}
				sx={{
					margin: '10px 0px',
					bgcolor: 'primary.main',
					color: 'white',
				}}
				type='submit'
			>
				Submit
			</Button>
		</FormContainer>
	);
};

export default EducationModal;
