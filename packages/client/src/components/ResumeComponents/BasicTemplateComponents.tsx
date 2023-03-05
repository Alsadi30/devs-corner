import { Box, Typography } from "@mui/material";
import Image from "../../../../material-ui/src/Atoms/Avatars/Image";
import email from "./../../assets/logos/email.png";
import linkedin from "./../../assets/logos/linkedin.png";
import location from "./../../assets/logos/location.png";
import phone from "./../../assets/logos/phone.png";

export const SectionContainer = ({ children }: any) => {
  return <Box sx={{ padding: "2rem 2rem 1rem 2rem" }}>{children}</Box>;
};
export const SectionHeader = ({ Header }: { Header: string }) => {
  return (
    <Typography variant="h4" color="initial" sx={{ color: "#336699" }}>
      {Header}
    </Typography>
  );
};

export const Section = ({
  children,
  Header,
}: {
  children: any;
  Header: string;
}) => {
  return (
    <SectionContainer>
      <SectionHeader Header={Header} />
      {children}
    </SectionContainer>
  );
};

type BasicIntroPropsType = {
  Name: string;
  Position: string;
  About: string;
};
export const BasicIntro = ({ Name, Position, About }: BasicIntroPropsType) => {
  return (
    <SectionContainer>
      <Typography variant="h1" color="initial" sx={{ color: "#336699" }}>
        {Name}
      </Typography>
      <Typography variant="h3" color="initial" sx={{ color: "grey" }}>
        {Position}
      </Typography>
      <Typography variant="h6" color="initial">
        {About}
      </Typography>
    </SectionContainer>
  );
};

type ContactItemPropsType = {
  Logo: string;
  Alt: string;
  Text: string;
};
export const ContactItem = ({ Logo, Alt, Text }: ContactItemPropsType) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Image Src={Logo} Txt={Alt} Height="20px" Width="20px" />
      <Typography variant="h6" color="initial" sx={{ paddingLeft: "10px" }}>
        {Text}
      </Typography>
    </Box>
  );
};
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
        <ContactItem Logo={email} Alt="email" Text="kjsdhkjh@gmail.com" />
        <ContactItem Logo={phone} Alt="email" Text="01894456813" />
        <ContactItem Logo={location} Alt="email" Text="Dhaka, Bangladesh" />
        <ContactItem Logo={linkedin} Alt="email" Text="in/jjhbbmnb" />
      </Box>
      <HrLine />
    </Box>
  );
};

export const HrLine = () => {
  return <Box sx={{ borderTop: "3px #336699 solid" }}></Box>;
};

export const WorkExperience = () => {
  return <Section Header="WORK EXPERIENCE"></Section>;
};
