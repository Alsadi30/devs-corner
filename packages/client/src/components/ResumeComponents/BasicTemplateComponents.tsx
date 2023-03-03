import { Box, Typography } from "@mui/material";
import Image from "../../../../material-ui/src/Atoms/Avatars/Image";
import email from "./../../assets/logos/email.png";
import linkedin from "./../../assets/logos/linkedin.png";
import location from "./../../assets/logos/location.png";
import phone from "./../../assets/logos/phone.png";

export const SectionContainer = ({ children }: any) => {
  return <Box sx={{ padding: "2rem 2rem 1rem 2rem" }}>{children}</Box>;
};

type BasicIntroPropsType = {
  Name: string;
  Position: string;
  About: string;
};
export const BasicIntro = ({ Name, Position, About }: BasicIntroPropsType) => {
  return (
    <SectionContainer>
      <Typography variant="h1" color="initial">
        MD. Ariful Islam
      </Typography>
      <Typography variant="h3" color="initial">
        Software Engineer (MERN)
      </Typography>
      <Typography variant="h6" color="initial">
        lsajh;sh klasd;kalsdj ;lakjsd klajsdl;kajsd a;lksjdl;kasjd ;lakjsd
        a;lksjd l;akjs;lkzxjcl;zkxjc zlkxjczlxj lk jidslsjkd
        l;kjasdlk;ajsdl;kasjd;laksjdklnczl;kxcj;lsakjd ;askjd
      </Typography>
    </SectionContainer>
  );
};
type ContactItemPropsType = {
  Logo: string;
  Text: string;
};
export const ContactItem = ({ Logo, Text }: ContactItemPropsType) => {};
export const Contact = () => {
  return (
    <Box>
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
          <Typography variant="h6" color="initial" sx={{ paddingLeft: "10px" }}>
            ariksdlkj@gmail.com
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Image Src={phone} Txt="email" Height="20px" Width="20px" />
          <Typography variant="h6" color="initial" sx={{ paddingLeft: "10px" }}>
            01894456813
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Image Src={location} Txt="email" Height="20px" Width="20px" />
          <Typography variant="h6" color="initial" sx={{ paddingLeft: "10px" }}>
            Dhaka, Bangladesh
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Image Src={linkedin} Txt="email" Height="20px" Width="20px" />{" "}
          <Typography variant="h6" color="initial" sx={{ paddingLeft: "10px" }}>
            in/jjhbbmnb
          </Typography>
        </Box>
      </Box>
      <HrLine />
    </Box>
  );
};

export const HrLine = () => {
  return <Box sx={{ borderTop: "3px #336699 solid" }}></Box>;
};
