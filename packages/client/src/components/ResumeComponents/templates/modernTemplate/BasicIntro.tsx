import { Box, Typography } from "@mui/material";

const BasicIntro = ({
  Name,
  Position,
  Email,
  Phone,
  Location,
  Linkedin,
}: any) => {
  return (
    <Box sx={{ backgroundColor: "secondary.main", padding: "20px 40px" }}>
      <Box sx={{ color: "white", margin: "30px 0" }}>
        <Typography>{Phone}</Typography>
        <Typography>{Email}</Typography>
        <Typography>{Location}</Typography>
        <Typography>{Linkedin}</Typography>
      </Box>
      <Typography
        variant="h1"
        color="initial"
        sx={{ color: "white", fontSize: "50px" }}
      >
        {Name}
      </Typography>
      <Typography
        variant="h4"
        color="initial"
        sx={{ color: "white", marginRight: "50px" }}
      >
        {Position}
      </Typography>
    </Box>
  );
};
export default BasicIntro;
