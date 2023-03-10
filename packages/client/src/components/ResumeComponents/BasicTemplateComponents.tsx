import { Box, Link, Typography } from "@mui/material";
import LocalImage from "../../../../material-ui/src/Atoms/Avatars/LocalImage";
import email from "./../../assets/logos/email.png";
import linkedin from "./../../assets/logos/linkedin.png";
import location from "./../../assets/logos/location.png";
import phone from "./../../assets/logos/phone.png";

export const SectionWrapper = ({ children }: any) => {
  return <Box sx={{ margin: "1rem" }}>{children}</Box>;
};
export const SectionContainerV = ({ children }: any) => {
  return (
    <Box
      sx={{
        margin: "10px 0px",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};
export const SectionContainerH = ({ children }: any) => {
  return (
    <Box
      sx={{
        marginLeft: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
      }}
    >
      {children}
    </Box>
  );
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
    <SectionWrapper>
      <SectionHeader Header={Header} />
      {children}
    </SectionWrapper>
  );
};

type BasicIntroPropsType = {
  Name: string;
  Position: string;
  About: string;
};
export const BasicIntro = ({ Name, Position, About }: BasicIntroPropsType) => {
  return (
    <SectionWrapper>
      <Typography variant="h2" color={"secondary.main"}>
        {Name}
      </Typography>
      <Typography variant="h4" color="initial" sx={{ color: "grey" }}>
        {Position}
      </Typography>
      <Typography variant="h6" color="info.main">
        {About}
      </Typography>
    </SectionWrapper>
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
      <LocalImage Src={Logo} Txt={Alt} Height="20px" Width="20px" />
      <Typography variant="h6" color="initial" sx={{ paddingLeft: "10px" }}>
        {Text}
      </Typography>
    </Box>
  );
};
type ContactProps = {
  Email: string;
  Phone: string;
  Location: string;
  Linkedin: string;
};
export const Contact = ({ Email, Phone, Location, Linkedin }: ContactProps) => {
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
        <ContactItem Logo={email} Alt="email" Text={Email} />
        <ContactItem Logo={phone} Alt="phone" Text={Phone} />
        <ContactItem Logo={location} Alt="location" Text={Location} />
        <ContactItem Logo={linkedin} Alt="in" Text={Linkedin} />
      </Box>
      <HrLine />
    </Box>
  );
};

export const HrLine = () => {
  return (
    <Box
      sx={{ borderTop: "1px", borderColor: "#336699", borderStyle: "solid" }}
    ></Box>
  );
};

export const SkillItem = ({ name }: any) => {
  return (
    <Typography
      variant="h6"
      sx={{
        padding: "5px 10px",
        margin: "5px",
        backgroundColor: "#336699",
        color: "white",
        borderRadius: "10px",
      }}
    >
      {name}
    </Typography>
  );
};

export const Skill = ({ skills }: any) => {
  type skillType = {
    id: string;
    name: string;
    thumbnail: string;
  };
  return (
    <Section Header="SKILLS">
      <SectionContainerH>
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {skills.map((skill: skillType, index: number) => {
            return <SkillItem key={index} name={skill.name} />;
          })}
        </Box>
      </SectionContainerH>
    </Section>
  );
};

type ExperienceItemPropsType = {
  position: string;
  companyName: string;
  startAt: string;
  endAt: string;
};
export const ExperienceItem = ({
  position,
  companyName,
  startAt,
  endAt,
}: ExperienceItemPropsType) => {
  return (
    <SectionContainerH>
      <Typography variant="h4">{`* ${position} `}</Typography>
      <Typography variant="h5">{`, ${companyName} `}</Typography>
      <Typography variant="h6">{`, ${startAt} to ${
        endAt != null ? endAt : "Present"
      }`}</Typography>
    </SectionContainerH>
  );
};
type jobPropsType = {
  position: string;
  companyName: string;
  startAt: string;
  endAt: string;
};
export const WorkExperience = ({ experience }: any) => {
  const exp = [...experience].reverse();
  return (
    <Section Header="WORK EXPERIENCE">
      {exp.map((job: jobPropsType, index: number) => {
        return (
          <ExperienceItem
            key={index}
            position={job.position}
            companyName={job.companyName}
            startAt={job.startAt}
            endAt={job.endAt}
          />
        );
      })}
    </Section>
  );
};

export const Education = ({ Education }: any) => {
  const edu = [...Education].reverse();
  const Data = edu[0];
  return (
    <Section Header="EDUCATION">
      <SectionContainerV>
        <Typography variant="h6">{Data.title}</Typography>
        <Typography variant="h6">{Data.institute}</Typography>
        <Typography variant="h6">{`CGPA : ${Data.result}`}</Typography>
        <Typography variant="h6">{`Passing Year : ${Data.passingyear}`}</Typography>
      </SectionContainerV>
    </Section>
  );
};

type ProjectsItemPropsType = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};
export const ProjectsItem = ({
  name,
  description,
  repoUrl,
  liveUrl,
}: ProjectsItemPropsType) => {
  return (
    <SectionContainerV>
      <Typography variant="h4">{`# ${name}`}</Typography>
      <Typography variant="h5">{description}</Typography>
      <Link href={repoUrl} variant="h6">
        {repoUrl}
      </Link>
      <Link href={repoUrl} variant="h6">
        {liveUrl}
      </Link>
    </SectionContainerV>
  );
};
type projectPropsType = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};
export const Projects = ({ Projects }: any) => {
  const topProjects = [...Projects].reverse().slice(0, 3);
  return (
    <Section Header="PROJECTS">
      {topProjects.map((project: projectPropsType, index: number) => {
        return (
          <ProjectsItem
            key={index}
            name={` Name : ${project.name}`}
            description={`Description : ${project.description}`}
            repoUrl={`Repository : ${project.repoUrl}`}
            liveUrl={`Live Link :  ${project.liveUrl}`}
          />
        );
      })}
    </Section>
  );
};

type credPropsType = {
  title: string;
  institution: string;
  achivedAt: string;
};
export const CredItem = ({ title, institution, achivedAt }: credPropsType) => {
  return (
    <SectionContainerH>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
        <Typography variant="h4">{`-> ${title} `}</Typography>
        <Typography variant="h5">{`, ${institution} `}</Typography>
        <Typography variant="h6">{`, ${achivedAt}`}</Typography>
      </Box>
    </SectionContainerH>
  );
};

export const Credentials = ({ Credentials }: any) => {
  const LatestCred = [...Credentials].reverse().slice(0, 3);
  return (
    <Section Header="CREDENTIALS">
      {LatestCred.map((cred: credPropsType, index: number) => {
        return (
          <CredItem
            key={index}
            title={cred.title}
            institution={cred.institution}
            achivedAt={cred.achivedAt}
          />
        );
      })}
    </Section>
  );
};
