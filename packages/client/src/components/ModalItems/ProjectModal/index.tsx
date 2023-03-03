import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { projectSchema } from '../../../../../client/src/utils/validation/projectValidation';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import { useCreateProjectMutation } from '../../../features/project/projectApi';

type Props = {};

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
	};
}

const ProjectModal = ({ data }: ProjectProps) => {
	const [createProject] = useCreateProjectMutation();

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

	const onSubmit = (data: object) => {
		createProject(data);
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

export default ProjectModal;
