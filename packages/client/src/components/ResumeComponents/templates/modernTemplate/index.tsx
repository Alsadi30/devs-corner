import { Box } from "@mui/material";
import Data from "../../../../assets/Data.json";
import BasicIntro from "./BasicIntro";
import Credentials from "./Credential/Credentials";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Projects from "./projects/Project";
import Skill from "./skill/Skill";
import Summary from "./Summary";
const style = {
  pageWrapper: {
    width: "800px",
    // background: 'white',
    // height: "1800px",
  },
};

const ModernTemplate = () => {
  return (
    <Box sx={style.pageWrapper}>
      <BasicIntro
        Name={Data.profile.displayname}
        Position={Data.profile.bio}
        Email={Data.email}
        Phone={Data.phone}
        Location={Data.profile.location}
        Linkedin="arif.btkrm"
      />
      <Summary About={Data.profile.about} />
      <Skill Skills={Data.skills} />
      <Experience Experience={Data.experience} />
      <Education Education={Data.education} />
      <Credentials Credentials={Data.credentials} />
      <Projects Projects={Data.projects} />
    </Box>
  );
};
export default ModernTemplate;
