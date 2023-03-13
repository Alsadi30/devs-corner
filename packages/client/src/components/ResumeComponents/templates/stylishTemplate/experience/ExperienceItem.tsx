import { Typography } from "@mui/material";
import { SectionContainerV } from "./../../sharedComponents/SectionContainer";
type ExperienceItemPropsType = {
  position: string;
  companyName: string;
  startAt: string;
  endAt: string;
};
const ExperienceItem = ({
  position,
  companyName,
  startAt,
  endAt,
}: ExperienceItemPropsType) => {
  return (
    <SectionContainerV>
      <Typography variant="h4">{`* ${position} `}</Typography>
      <Typography variant="h5">{` ${companyName} `}</Typography>
      <Typography variant="h6">{` ${startAt} to ${
        endAt != null ? endAt : "Present"
      }`}</Typography>
    </SectionContainerV>
  );
};
export default ExperienceItem;
