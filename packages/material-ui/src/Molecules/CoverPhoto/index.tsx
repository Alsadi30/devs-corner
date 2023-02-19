import { Box } from "@mui/material";
import CoverPath from "../../../../client/src/assets/Cover.jpg";
import Image from "../../Atoms/Avatars/Image";

const CoverPhoto = () => {
  return (
    <Box>
      <Image Src={CoverPath} Txt="Cover Photo" Height="250" Width="100%" />
    </Box>
  );
};
export default CoverPhoto;
