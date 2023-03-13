import { Typography } from "@mui/material";
import { SectionContainerH } from "./../components/SectionContainer";
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
    <SectionContainerH>
      <Typography variant="h4">{`* ${position} `}</Typography>
      <Typography variant="h5">{`, ${companyName} `}</Typography>
      <Typography variant="h6">{`, ${startAt} to ${
        endAt != null ? endAt : "Present"
      }`}</Typography>
    </SectionContainerH>
  );
};
export default ExperienceItem;
