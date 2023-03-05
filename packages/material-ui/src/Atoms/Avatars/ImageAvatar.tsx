import Avatar from "@mui/material/Avatar";
import { serverUrl } from '../../../../client/src/utils/serverUrl/index';


type ImageAvatarProps = { Src: string; Txt: string; Size: number };

const ImageAvatar = ({ Src, Txt, Size }: ImageAvatarProps) => {
  return <Avatar alt={Txt} src={`${serverUrl}/uploads/${Src}`} sx={{ width: Size, height: Size }} />;
};
export default ImageAvatar;
