import { Box, Typography } from "@mui/material";

const BasicIntro = ({ Name, Position }: any) => {
  return (
    <Box>
      <Typography variant="h1" color="initial">
        {Name}
      </Typography>
      <Typography variant="h5" color="initial">
        {Position}
      </Typography>
    </Box>
  );
};
export default BasicIntro;
