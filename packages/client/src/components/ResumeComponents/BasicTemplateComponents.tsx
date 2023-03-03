import { Box, Typography } from "@mui/material";

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
type ContactPropsType = {
  Logo: string;
  Text: string;
};
export const Contact = ({ Logo, Text }: ContactPropsType) => {
  return <Box></Box>;
};

export const HrLine = () => {
  return <Box sx={{ borderTop: "3px #336699 solid" }}></Box>;
};
