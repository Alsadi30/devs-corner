import { Box } from "@mui/material";
import Image from "../../Atoms/Avatars/Image";
import { serverUrl } from "../../../../client/src/utils/serverUrl";

export interface CoverPhotoProps {
  coverPic: string
}

const CoverPhoto = ({ coverPic }: CoverPhotoProps) => {
  return (
    <Box>
      <Image Src={coverPic} Txt="Cover Photo" Height="250" Width="100%" />
    </Box>
  );
};
export default CoverPhoto;
