import { Typography } from "@mui/material";
import SectionWrapper from "./components/SectionWrapper";

type BasicIntroPropsType = {
  Name: string;
  Position: string;
  About: string;
};
export const BasicIntro = ({ Name, Position, About }: BasicIntroPropsType) => {
  return (
    <SectionWrapper>
      <Typography variant="h2" color={"secondary.main"}>
        {Name}
      </Typography>
      <Typography variant="h4" color="initial" sx={{ color: "grey" }}>
        {Position}
      </Typography>
      <Typography variant="h6" color="info.main">
        {About}
      </Typography>
    </SectionWrapper>
  );
};

export default BasicIntro;
