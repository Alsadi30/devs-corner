import { Box } from "@mui/material";
import Data from "../../../../assets/Data.json";
import BasicIntro from "./BasicIntro";
import Contact from "./contact/contact";
import Credentials from "./Credential/Credentials";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Projects from "./projects/Project";
import Skill from "./skill/Skill";
import Summary from "./Summary";
const style = {
  pageWrapper: {
    width: "800px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: "10px",
  },
};

const ModernTemplate = () => {
  return (
    <Box sx={style.pageWrapper}>
      <Box
        sx={{
          width: "35%",
          padding: "15px",
          backgroundColor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <BasicIntro
          Name={Data.profile.displayname}
          Position={Data.profile.bio}
        />
        <Contact
          Email={Data.email}
          Phone={Data.phone}
          Location={Data.profile.location}
          Linkedin="arif.btkrm"
        />
        <Education Education={Data.education} />
        <Skill Skills={Data.skills} />
      </Box>
      <Box sx={{ width: "65%" }}>
        <Summary About={Data.profile.about} />
        <Experience Experience={Data.experience} />
        <Projects Projects={Data.projects} />
        <Credentials Credentials={Data.credentials} />
      </Box>
    </Box>
  );
};
export default ModernTemplate;
