import { Box, Grid } from "@mui/material";
import Layout from "../../../../material-ui/src/Organisms/Layout";
import Data from "./../../assets/Data.json";
import {
  BasicIntro,
  Contact,
  Education,
  Skill,
  WorkExperience,
} from "./BasicTemplateComponents";

const BasicTemplate = () => {
  const experience = [
    {
      position: "Senior Softare Engineer",
      companyName: "Brainstation12",
      startAt: "20-23-21",
      endAt: "22-78-43",
    },
    {
      position: "Softare Engineer",
      companyName: "Therap BD",
      startAt: "20-23-21",
      endAt: "22-78-43",
    },
    {
      position: "Fullstack Developer",
      companyName: "BJIT",
      startAt: "20-23-21",
      endAt: "22-78-43",
    },
  ];

  return (
    <Layout>
      <Grid container justifyContent="center" alignItems="center">
        <Box
          sx={{
            margin: "5px",
            width: "800px",
            background: "white",
            // height: "1800px",
          }}
        >
          <BasicIntro
            Name="MD. Ariful Islam"
            Position="Software Engineer (MERN)"
            About="lsajh;sh klasd;kalsdj ;lakjsd klajsdl;kajsd a;lksjdl;kasjd ;lakjsd
        a;lksjd l;akjs;lkzxjcl;zkxjc zlkxjczlxj lk jidslsjkd
        l;kjasdlk;ajsdl;kasjd;laksjdklnczl;kxcj;lsakjd ;askjd"
          />
          <Contact />
          <Skill skills={Data.skills} />
          <WorkExperience experience={experience} />
          <Education Education={Data.education} />
        </Box>
      </Grid>
    </Layout>
  );
};
export default BasicTemplate;
