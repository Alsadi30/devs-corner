import React from 'react'
import FormContainer from '../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../material-ui/src/Atoms/InputG';
import { Button } from '@mui/material';
import MapListItem from '../../../../material-ui/src/Atoms/MapListItem';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { profileSchema } from '../../utils/validation/profileValidation';
import { useCreateProfileMutation } from '../../features/profile/profileApi';






const items = [
    {
        name: 'displayname',
        type: 'text'
    },
    {
        name: 'bio',
        type: 'text'
    },
    {
        name: 'about',
        type: 'text'
    },
    {
        name: 'profilePic',
        type: 'file'
    },
    {
        name: 'coverPic',
        type: 'file'
    },
    {
        name: 'nationality',
        type: 'text'
    },
    {
        name: 'location',
        type: 'text'
    },
    {
        name: 'gender',
        type: 'text'
    },
    {
        name: 'dateofBirth',
        type: 'date'
    }

]





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
    const { control, handleSubmit, formState: { errors }, register } = useForm({
        defaultValues: {
            displayname: '',
            bio: '',
            about: '',
            nationality: '',
            location: '',
            gender: '',
            profilePic: null
        }, resolver: yupResolver(profileSchema)
    });

    const [createProfile, { isSuccess: isCreateProfileSuccess, data: ProfileData }] =
        useCreateProfileMutation();

    console.log(ProfileData)

    const onSubmit = (data: object) => {
        console.log(data)
        createProfile(data)
    };



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