import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { projectSchema } from '../../../../../client/src/utils/validation/projectValidation';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';



const items = [
	{
		name: 'name',
		type: 'text',
	},
	{
		name: 'description',
		type: 'textarea',
	},
	{
		name: 'repoUrl',
		type: 'text',
	},
	{
		name: 'liveUrl',
		type: 'Text',
	},
];


interface ProjectProps {
	data?: {
		id: string;
		name: string;
		description: string;
		repoUrl: string;
		liveUrl: string;
	},
	onSubmit: (data: object) => void
}

const ProjectModal = ({ data, onSubmit }: ProjectProps) => {

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: data && {
			name: data.name,
			description: data.description,
			liveUrl: data.liveUrl,
			repoUrl: data.repoUrl,
		},
		resolver: yupResolver(projectSchema),
	});
	return (
		<FormContainer handleSubmit={handleSubmit(onSubmit)}>
			<MapListItem Component={Input} Items={items} other={control} />
			<FormButton />
		</FormContainer>
	);
};

export default ProjectModal;
