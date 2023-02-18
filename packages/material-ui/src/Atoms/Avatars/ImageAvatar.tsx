import Avatar from "@mui/material/Avatar";
type ImageAvatarProps = { Src: string; Txt: string; Size: number };
const ImageAvatar = ({ Src, Txt, Size }: ImageAvatarProps) => {
  return <Avatar alt={Txt} src={Src} sx={{ width: Size, height: Size }} />;
};
export default ImageAvatar;
