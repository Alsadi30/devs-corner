import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { educationSchema } from '../../../../../client/src/utils/validation/educationValidation';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton/index';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';


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
	},
	onSubmit: (data: object) => void
};


const EducationModal = ({ data, onSubmit }: EduProps) => {
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


	return (
		<FormContainer handleSubmit={handleSubmit(onSubmit)}>
			<MapListItem Component={Input} Items={items} other={control} />
			<FormButton />
		</FormContainer>
	);
};

export default EducationModal;
