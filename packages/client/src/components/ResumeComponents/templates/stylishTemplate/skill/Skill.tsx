import { Box } from "@mui/material";
import { SectionContainerH } from "../../sharedComponents/SectionContainer";
import SectionHeader from "../component/SectionHeader";
import ItemWrapper from "./../../sharedComponents/ItemWrapper";
import { SkillItem } from "./SkillItem";

const Skill = ({ Skills }: any) => {
  type skillType = {
    id: string;
    name: string;
    thumbnail: string;
  };
  return (
    <>
      <SectionHeader Header="RELEVANT SKILLS " />
      <ItemWrapper>
        <SectionContainerH>
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {Skills.map((skill: skillType, index: number) => {
              return <SkillItem key={index} name={skill.name} />;
            })}
          </Box>
        </SectionContainerH>
      </ItemWrapper>
    </>
  );
};

export default Skill;
