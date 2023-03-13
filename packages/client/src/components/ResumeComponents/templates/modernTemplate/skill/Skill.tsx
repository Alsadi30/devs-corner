import { Box } from "@mui/material";
import HrBar from "../../sharedComponents/HrBar";
import Section from "../../sharedComponents/Section";

import { SectionContainerH } from "../../sharedComponents/SectionContainer";
import { SkillItem } from "./SkillItem";

const Skill = ({ Skills }: any) => {
  type skillType = {
    id: string;
    name: string;
    thumbnail: string;
  };
  return (
    <Section Header="Skills Highlights">
      <HrBar />
      <SectionContainerH>
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {Skills.map((skill: skillType, index: number) => {
            return <SkillItem key={index} name={skill.name} />;
          })}
        </Box>
      </SectionContainerH>
    </Section>
  );
};

export default Skill;
