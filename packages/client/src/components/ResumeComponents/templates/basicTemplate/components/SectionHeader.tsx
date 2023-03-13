import { Typography } from "@mui/material";

const SectionHeader = ({ Header }: { Header: string }) => {
  return (
    <Typography variant="h4" color="secondary.main">
      {Header}
    </Typography>
  );
};

export default SectionHeader;
