import { Box } from "@mui/material";
import Image from "../../Atoms/Avatars/Image";
import JS from "../../../../client/src/assets/JS.webp"
import { serverUrl } from "../../../../client/src/utils/serverUrl";

export interface CoverPhotoProps {
  coverPic: string
}

const CoverPhoto = ({ coverPic }: CoverPhotoProps) => {
  return (
    <Box>
      <img src={coverPic ? `${serverUrl}/uploads/${coverPic}` : JS} height="250" width="100%" />
    </Box>
  );
};
export default CoverPhoto;
