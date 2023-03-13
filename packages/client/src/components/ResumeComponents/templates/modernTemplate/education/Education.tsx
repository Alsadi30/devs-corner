import { Typography } from "@mui/material";
import HrBar from "./../../sharedComponents/HrBar";
import Section from "./../../sharedComponents/Section";
import { SectionContainerV } from "./../../sharedComponents/SectionContainer";
const Education = ({ Education }: any) => {
  const edu = [...Education].reverse();
  const Data = edu[0];
  return (
    <Section Header="Education">
      <HrBar />
      <SectionContainerV>
        <Typography variant="h6">{Data.title}</Typography>
        <Typography variant="h6">{Data.institute}</Typography>
        <Typography variant="h6">{`CGPA : ${Data.result}`}</Typography>
        <Typography variant="h6">{`Passing Year : ${Data.passingyear}`}</Typography>
      </SectionContainerV>
    </Section>
  );
};

export default Education;
