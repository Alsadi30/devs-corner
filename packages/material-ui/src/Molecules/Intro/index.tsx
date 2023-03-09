import { Box, Typography } from "@mui/material";
import { useSelector } from 'react-redux';
type IntroProps = { Name?: string; Position?: string; Location?: string };




const Intro = ({ Name, Position, Location }: IntroProps) => {

  const auth = useSelector((state) => state?.auth);

  const username = auth?.user.username

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h1">{Name ? Name : username}</Typography>
      <Typography variant="h3">{Position}</Typography>
      <Typography variant="h5" color={'info.light'} >{Location}</Typography>
    </Box>
  );
};
export default Intro;
