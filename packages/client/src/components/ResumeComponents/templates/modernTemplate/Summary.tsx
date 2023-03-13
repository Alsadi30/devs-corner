import { Typography } from "@mui/material";
import HrBar from "./../sharedComponents/HrBar";
import ItemWrapper from "./../sharedComponents/ItemWrapper";
import Section from "./../sharedComponents/Section";
const Summary = ({ About }: any) => {
  return (
    <Section Header="Summary">
      <HrBar />
      <ItemWrapper>
        <Typography variant="h6">{About}</Typography>
      </ItemWrapper>
    </Section>
  );
};

export default Summary;
