import React from 'react'
import FormContainer from '../../../Atoms/FormContainer';
import Input from '../../../Atoms/InputG';
import { Button } from '@mui/material';
import MapListItem from '../../../Atoms/MapListItem';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { profileSchema } from '../../../../../client/src/utils/validation/profileValidation';






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
    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            displayname: '',
            bio: '',
            about: '',
            profilePic: '',
            coverPic: '',
            dateofBirth: '',
            nationality: '',
            location: '',
            gender: ''
        }, resolver: yupResolver(profileSchema)
    });

    const onSubmit = (data: object) => {
        console.log(data)
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