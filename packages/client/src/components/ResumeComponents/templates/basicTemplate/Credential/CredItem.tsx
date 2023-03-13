import { Box, Typography } from "@mui/material";
import { SectionContainerH } from "../components/SectionContainer";

type credPropsType = {
  title: string;
  institution: string;
  achivedAt: string;
};
const CredItem = ({ title, institution, achivedAt }: credPropsType) => {
  return (
    <SectionContainerH>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
        <Typography variant="h4">{`-> ${title} `}</Typography>
        <Typography variant="h5">{`, ${institution} `}</Typography>
        <Typography variant="h6">{`, ${achivedAt}`}</Typography>
      </Box>
    </SectionContainerH>
  );
};
export default CredItem;
