import { Box, Typography } from "@mui/material";

const SectionHeader = ({ Header }: { Header: string }) => {
  return (
    <Box sx={{ borderBottom: "3px white solid" }}>
      <Typography variant="h4" color="black">
        {Header}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
