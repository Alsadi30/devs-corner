import { Box } from "@mui/material";
// import Data from "../../../../assets/Data.json";
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

const ModernTemplate = ({ Data }: any) => {
  // const localData = localStorage.getItem("dynamicData");
  // const Data = JSON.parse(localData);
  // console.log(Data.)

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

      {Data.profile.about.length > 0 ? (
        <Summary About={Data.profile.about} />
      ) : (
        ""
      )}

      {Data.skills.length > 0 ? <Skill Skills={Data.skills} /> : ""}

      {Data.experience.length > 0 ? (
        <Experience Experience={Data.experience} />
      ) : (
        ""
      )}

      {Data.education.length > 0 ? (
        <Education Education={Data.education} />
      ) : (
        ""
      )}
      {Data.credentials.length > 0 ? (
        <Credentials Credentials={Data.credentials} />
      ) : (
        ""
      )}

      {Data.projects.length > 0 ? <Projects Projects={Data.projects} /> : ""}
    </Box>
  );
};
export default ModernTemplate;
