import { Box, Grid, Typography } from "@mui/material";
import Image from "../../../../material-ui/src/Atoms/Avatars/Image";
import Layout from "../../../../material-ui/src/Organisms/Layout";
import email from "./../../assets/logos/email.png";
import linkedin from "./../../assets/logos/linkedin.png";
import location from "./../../assets/logos/location.png";
import phone from "./../../assets/logos/phone.png";
import { BasicIntro, HrLine } from "./BasicTemplateComponents";

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
          <BasicIntro Name="" Position="" About="" />

          <HrLine />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: "10px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Image Src={email} Txt="email" Height="20px" Width="20px" />
              <Typography
                variant="h6"
                color="initial"
                sx={{ paddingLeft: "10px" }}
              >
                ariksdlkj@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Image Src={phone} Txt="email" Height="20px" Width="20px" />
              <Typography
                variant="h6"
                color="initial"
                sx={{ paddingLeft: "10px" }}
              >
                01894456813
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Image Src={location} Txt="email" Height="20px" Width="20px" />
              <Typography
                variant="h6"
                color="initial"
                sx={{ paddingLeft: "10px" }}
              >
                Dhaka, Bangladesh
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Image Src={linkedin} Txt="email" Height="20px" Width="20px" />{" "}
              <Typography
                variant="h6"
                color="initial"
                sx={{ paddingLeft: "10px" }}
              >
                in/jjhbbmnb
              </Typography>
            </Box>
          </Box>
          <HrLine />

          <Box sx={{ padding: "2rem" }}>
            <h2>WORK EXPERIENCE</h2>
            <h3>Software Engineer (MERN)</h3>
            <p>
              lsajh;sh klasd;kalsdj ;lakjsd klajsdl;kajsd a;lksjdl;kasjd ;lakjsd
              a;lksjd l;akjs;lkzxjcl;zkxjc zlkxjczlxj lk jidslsjkd
              l;kjasdlk;ajsdl;kasjd;laksjdklnczl;kxcj;lsakjd ;askjd
            </p>
          </Box>
        </Box>
      </Grid>
    </Layout>
  );
};
export default BasicTemplate;
