import { Box, Typography } from "@mui/material";
import HrBar from "../basicTemplate/components/HrBar";

export const BasciIntro = () => {
  return (
    <Box sx={{ backgroundColor: "#333E50", padding: "20px 40px" }}>
      <Box sx={{ color: "white", margin: "30px 0" }}>
        <Typography>01521770102</Typography>
        <Typography>asdaslkjd@gmail.com</Typography>
        <Typography>Dhaka, Bangladesh</Typography>
      </Box>
      <Typography
        variant="h1"
        color="initial"
        sx={{ color: "white", fontSize: "50px" }}
      >
        MD. Ariful Islam
      </Typography>
    </Box>
  );
};
export const Summary = () => {
  return (
    <Box sx={{ padding: "30px" }}>
      <Typography variant="h4" color="initial">
        Summary
      </Typography>
      <HrBar />
    </Box>
  );
};
