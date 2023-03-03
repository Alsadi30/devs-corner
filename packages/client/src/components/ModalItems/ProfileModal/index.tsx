import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import { useCreateProfileMutation } from '../../../features/profile/profileApi';
import { profileSchema } from '../../../utils/validation/profileValidation';
import CoverPhoto from '../../../../../material-ui/src/Molecules/CoverPhoto/index';

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
	data: {
		displayname: string
		bio: string
		about: string
		profilePic: string
		coverPic: string
		dateofBirth: string
		nationality: string
		location: string
		gender: string
	}
}


const ProfileModal = ({ data }: ProfileProps) => {
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

	const [createProfile] = useCreateProfileMutation();

	const formData = new FormData();

	const onSubmit = (data: object) => {
		for (const [key, value] of Object.entries(data)) {
			formData.append(key, value);
		}
		createProfile(formData);
	};

	return (
		<FormContainer handleSubmit={handleSubmit(onSubmit)}>
			<MapListItem Component={Input} Items={items} other={control} />

			<Button
				variant='contained'
				fullWidth={true}
				sx={{
					margin: '10px 0px 0px 0px',
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

export default ProfileModal;
