import { Typography } from "@mui/material";
import SectionHeader from "../component/SectionHeader";
import ItemWrapper from "./../../sharedComponents/ItemWrapper";
import { SectionContainerV } from "./../../sharedComponents/SectionContainer";
const Education = ({ Education }: any) => {
  const edu = [...Education].reverse();
  const Data = edu[0];
  return (
    <>
      <SectionHeader Header="EDUCATION" />
      <SectionContainerV>
        <ItemWrapper>
          <Typography variant="h6">{Data.title}</Typography>
          <Typography variant="h6">{Data.institute}</Typography>
          <Typography variant="h6">{`CGPA : ${Data.result}`}</Typography>
          <Typography variant="h6">{`Passing Year : ${Data.passingyear}`}</Typography>
        </ItemWrapper>
      </SectionContainerV>
    </>
  );
};

export default Education;
