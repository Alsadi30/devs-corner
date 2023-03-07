import { useState } from "react";
import CustomizedDialogs from "../../../../../material-ui/src/Atoms/Modal/index";
import { useCreateProfileMutation } from "../../../features/profile/profileApi";
import ProfileModal from "../../ModalItems/ProfileModal/index";
import BasicProfile from "../../SectionItems/BasicProfile/index";

interface PSProps {
  profile: {
    displayname: string
    bio: string
    about: string
    profilePic: string
    coverPic: string
    dateofBirth: string
    nationality: string
    location: string
    gender: string
  };
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
    handleProfile();
  };

  return (
    <>
      <BasicProfile profileData={profile} handleClick={handleProfile} />
      <CustomizedDialogs
        title="Update Profile"
        open={profileopen}
        handleClose={handleProfile}
      >
        <ProfileModal data={profile} onSubmit={handleSubmitProfile} />
      </CustomizedDialogs>
    </>
  );
};

export default ProfileSection;
