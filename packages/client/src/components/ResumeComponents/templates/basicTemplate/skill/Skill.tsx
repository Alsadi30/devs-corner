import { Box } from "@mui/material";
import Section from "../components/Section";
import { SectionContainerH } from "../components/SectionContainer";
import { SkillItem } from "./SkillItem";

const Skill = ({ skills }: any) => {
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

export default Skill;
