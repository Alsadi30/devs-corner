import Avatar from "@mui/material/Avatar";

const ImageAvatar = (size: number, txt: string, imgSrc: string) => {
  return <Avatar alt={txt} src={imgSrc} sx={{ width: size, height: size }} />;
};
export default ImageAvatar;
