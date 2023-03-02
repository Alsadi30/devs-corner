<<<<<<< HEAD:packages/client/src/components/ModalItems/ProfileModal/index.tsx
import React from 'react'
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import { Button } from '@mui/material';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { profileSchema } from '../../../utils/validation/profileValidation';
import { useCreateProfileMutation } from '../../../features/profile/profileApi';
import CoverPhoto from '../../../../../material-ui/src/Molecules/CoverPhoto/index';





=======
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormContainer from '../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../material-ui/src/Atoms/MapListItem';
import { useCreateProfileMutation } from '../../features/profile/profileApi';
import { profileSchema } from '../../utils/validation/profileValidation';
>>>>>>> bc9319820207fb1a97e771ebec06c76cd2c2fb4c:packages/client/src/components/ProfileModal/index.tsx

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

// interface ProfileProps {
//     displayname: string
//     bio: string
//     about: string
//     profilePic: string
//     coverPic: string
//     dateofBirth: string
//     nationality: string
//     location: string
//     gender: string
// }

const ProfileModal = () => {
<<<<<<< HEAD:packages/client/src/components/ModalItems/ProfileModal/index.tsx
    const { control, handleSubmit, formState: { errors }, register } = useForm({
        defaultValues: {
            displayname: '',
            bio: '',
            about: '',
            nationality: '',
            location: '',
            gender: '',
            profilePic: null,
            coverPic: null,
            date: null

        }, resolver: yupResolver(profileSchema)
    });

    const formData = new FormData()

    const [createProfile, { isSuccess: isCreateProfileSuccess, data: ProfileData }] = useCreateProfileMutation();
=======
	const {
		control,
		handleSubmit,
		formState: { errors },
		register,
	} = useForm({
		defaultValues: {
			displayname: '',
			bio: '',
			about: '',
			nationality: '',
			location: '',
			gender: '',
			profilePic: null,
		},
		resolver: yupResolver(profileSchema),
	});

	const [
		createProfile,
		{ isSuccess: isCreateProfileSuccess, data: ProfileData },
	] = useCreateProfileMutation();
>>>>>>> bc9319820207fb1a97e771ebec06c76cd2c2fb4c:packages/client/src/components/ProfileModal/index.tsx

	console.log('ProfileData: ' + ProfileData);

<<<<<<< HEAD:packages/client/src/components/ModalItems/ProfileModal/index.tsx
    const onSubmit = (data: object) => {
        for (const [key, value] of Object.entries(data)) {
            console.log(`${key}: ${value}`)
            formData.append(key, value)
        }
        console.log(data)
        createProfile(formData)
    };
=======
	const onSubmit = async (data: object) => {
		console.log(data);
		await createProfile(data);
	};
>>>>>>> bc9319820207fb1a97e771ebec06c76cd2c2fb4c:packages/client/src/components/ProfileModal/index.tsx

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

<<<<<<< HEAD:packages/client/src/components/ModalItems/ProfileModal/index.tsx

    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >
            <MapListItem Component={Input} Items={items} other={control} />

            <Button
                variant="contained"
                fullWidth={true}
                sx={{
                    margin: '10px 0px 0px 0px', bgcolor: 'primary.main', color: 'white',
                }} type="submit">Submit</Button>

        </FormContainer>
    )
}

export default ProfileModal
=======
export default ProfileModal;
>>>>>>> bc9319820207fb1a97e771ebec06c76cd2c2fb4c:packages/client/src/components/ProfileModal/index.tsx
