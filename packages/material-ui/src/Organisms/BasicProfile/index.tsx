import { Box, Grid } from "@mui/material";
import ImageAvatar from "../../Atoms/Avatars/ImageAvatar";
import PrimaryButton from "../../Atoms/PrimaryButton";
import CoverPhoto, { CoverPhotoProps } from "../../Molecules/CoverPhoto";
import Intro from "../../Molecules/Intro";


interface BasicInfoProps extends CoverPhotoProps {
  Photo: string
  Name: string
  Position: string
  Location: string
};
const BasicProfile = ({ Photo, Name, Position, Location, CoverPath }: BasicInfoProps) => {
  return (
    <Box>
      <CoverPhoto CoverPath={CoverPath} />
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} sx={{ position: "relative", top: "-75px" }}>
            <center>
              <ImageAvatar Src={Photo} Txt="Name" Size={150} />
              <Intro Name={Name} Position={Position} Location={Location} />
            </center>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <PrimaryButton></PrimaryButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default BasicProfile;
