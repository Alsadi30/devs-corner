import { Box, Grid } from "@mui/material";
// import staticData from "../../../../assets/Data.json";

import BasicIntro from "./BasicIntro";
import Contact from "./contact/contact";
import Credentials from "./Credential/Credentials";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Projects from "./projects/Project";
import Skill from "./skill/Skill";
const style = {
  pageWrapper: {
    padding: "40px 0",
    width: "800px",
    // background: 'white',
    // height: "1800px",
  },
};

const BasicTemplate = ({ Data }: any) => {
  return (
    <>
      <Grid container display={"flex"}>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          // sx={{ backgroundColor: backgroundColor }}
        >
          <Box sx={style.pageWrapper}>
            <BasicIntro
              Name={Data.profile.displayname}
              Position={Data.profile.bio}
              About={Data.profile.about}
            />
            <Contact
              Email={Data.email}
              Phone={Data.phone}
              Location={Data.profile.location}
              Linkedin="arifbtkrm"
            />
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
            {Data.projects.length > 0 ? (
              <Projects Projects={Data.projects} />
            ) : (
              ""
            )}
            {Data.credentials.length > 0 ? (
              <Credentials Credentials={Data.credentials} />
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default BasicTemplate;
