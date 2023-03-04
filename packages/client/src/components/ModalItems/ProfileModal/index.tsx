import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import { profileSchema } from '../../../utils/validation/profileValidation';

const items = [
	{
		name: 'displayname',
		type: 'text',
	},
	{
		name: 'bio',
		type: 'text',
	},
	{
		name: 'about',
		type: 'text',
	},
	{
		name: 'profilePic',
		type: 'file',
	},
	{
		name: 'coverPic',
		type: 'file',
	},
	{
		name: 'nationality',
		type: 'text',
	},
	{
		name: 'location',
		type: 'text',
	},
	{
		name: 'gender',
		type: 'text',
	},
	{
		name: 'dateofBirth',
		type: 'date',
	},
];

interface ProfileProps {
	data?: {
		displayname: string
		bio: string
		about: string
		profilePic: string
		coverPic: string
		dateofBirth: string
		nationality: string
		location: string
		gender: string
	},
	onSubmit: (data: object) => void
}


const ProfileModal = ({ data, onSubmit }: ProfileProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		register,
	} = useForm({
		defaultValues: data && {
			displayname: data.displayname,
			bio: data.bio,
			about: data.about,
			nationality: data.nationality,
			location: data.location,
			gender: data.gender,
			dateofBirth: data.dateofBirth
		},
		resolver: yupResolver(profileSchema),
	});

	return (
		<FormContainer handleSubmit={handleSubmit(onSubmit)}>
			<MapListItem Component={Input} Items={items} other={control} />
			<FormButton />
		</FormContainer>
	);
};

export default ProfileModal;
