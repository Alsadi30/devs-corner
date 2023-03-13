import { Typography } from "@mui/material";
import HrBar from "./../sharedComponents/HrBar";
import Section from "./../sharedComponents/Section";
const Summary = ({ About }: any) => {
  return (
    <Section Header="Summary">
      <HrBar />

      <Typography variant="h6">{About}</Typography>
    </Section>
  );
};

export default Summary;
