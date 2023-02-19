import { Box, Typography } from "@mui/material";
type IntroProps = { Name: string; Position: string; Location: string };
const Intro = ({ Name, Position, Location }: IntroProps) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h1">{Name}</Typography>
      <Typography variant="h3">{Position}</Typography>
      <Typography variant="h5">{Location}</Typography>
    </Box>
  );
};
export default Intro;
