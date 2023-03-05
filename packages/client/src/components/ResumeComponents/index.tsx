import { Box, Grid } from "@mui/material";
import Layout from "../../../../material-ui/src/Organisms/Layout";
import { BasicIntro, Contact, WorkExperience } from "./BasicTemplateComponents";
const BasicTemplate = () => {
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
          <WorkExperience />
        </Box>
      </Grid>
    </Layout>
  );
};
export default BasicTemplate;
