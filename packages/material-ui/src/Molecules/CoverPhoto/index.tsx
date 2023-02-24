import { Box } from "@mui/material";
import Image from "../../Atoms/Avatars/Image";

export interface CoverPhotoProps {
  CoverPath: string;
}

const CoverPhoto = ({ CoverPath }: CoverPhotoProps) => {
  return (
    <Box>
      <Image Src={CoverPath} Txt="Cover Photo" Height="250" Width="100%" />
    </Box>
  );
};
export default CoverPhoto;
