import { Box, Grid } from "@mui/material";
import ImageAvatar from "../../../../../material-ui/src/Atoms/Avatars/ImageAvatar";
import PrimaryButton from "../../../../../material-ui/src/Atoms/PrimaryButton";
import CoverPhoto from "../../../../../material-ui/src/Molecules/CoverPhoto/index";
import Intro from "../../../../../material-ui/src/Molecules/Intro";

interface BasicInfoProps {
  profileData: {
    profilePic: string;
    coverPic: string;
    displayname: string;
    bio: string;
    location: string;
    dateofBrith: string;
    gender: string;
  };
  handleClick: () => void;
}
const BasicProfile = ({ profileData, handleClick }: BasicInfoProps) => {
  console.log(profileData);
  const { profilePic, displayname, bio, location, coverPic } =
    profileData || "";
  return (
    <Box>
      <CoverPhoto coverPic={coverPic} />
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} sx={{ position: "relative", top: "-75px" }}>
            <center>
              <ImageAvatar Src={profilePic} Txt="Name" Size={150} />
              <Intro Name={displayname} Position={bio} Location={location} />
            </center>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right", marginTop: "10px" }}>
            <PrimaryButton handleClick={handleClick} title="Edit Profile" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default BasicProfile;
