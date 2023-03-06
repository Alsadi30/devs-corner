import { Box, Grid } from "@mui/material";
import Data from "./../../assets/Data.json";
// import Layout from "./../Layout";
import {
  BasicIntro,
  Contact,
  Credentials,
  Education,
  Projects,
  Skill,
  WorkExperience,
} from "./BasicTemplateComponents";

const style = {
  pageWrapper: {
    margin: "5px",
    padding: "20px 0",
    width: "800px",
    background: "white",
    // height: "1800px",
  },
};

const BasicTemplate = () => {
  return (
    // <Layout>
    <Grid container justifyContent="center" alignItems="center">
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
        <Skill skills={Data.skills} />
        {Data.experience.length > 0 ? (
          <WorkExperience experience={Data.experience} />
        ) : (
          ""
        )}
        <Education Education={Data.education} />
        <Projects Projects={Data.projects} />
        <Credentials Credentials={Data.credentials} />
      </Box>
    </Grid>
    // </Layout>
  );
};
export default BasicTemplate;
