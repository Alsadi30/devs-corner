import React from 'react'
import BasicProfile from '../../SectionItems/BasicProfile/index';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal/index';
import ProfileModal from '../../ModalItems/ProfileModal/index';
import { useState } from 'react';
import { useCreateProfileMutation } from '../../../features/profile/profileApi';

interface PSProps {
    profile: {
        profilePic: string
        coverPic: string
        displayname: string
        bio: string
        location: string
        dateofBrith: string
        gender: string
    }
}

const ProfileSection = ({ profile }: PSProps) => {


    const [profileopen, setProfileOpen] = useState(false);
    const [createProfile] = useCreateProfileMutation();


    const handleProfile = () => {
        setProfileOpen(!profileopen);
    };


    const formData = new FormData();

    const handleSubmitProfile = (data: object) => {
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        createProfile(formData);
        handleProfile()
    };


    return (
        <>
            <BasicProfile
                profileData={profile}
                handleClick={handleProfile}
            />
            <CustomizedDialogs
                title='Update Profile'
                open={profileopen}
                handleClose={handleProfile}
            >
                <ProfileModal data={profile} onSubmit={handleSubmitProfile} />
            </CustomizedDialogs>
        </>
    )
}

export default ProfileSection 