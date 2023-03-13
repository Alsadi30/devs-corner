import { StyleSheet, View } from "@react-pdf/renderer";
import Section from "../components/Section";
import SkillItem from "./SkillItem";

const styles = StyleSheet.create({
  SkillItemsContainer: {
    width: "100%",
    overflow: "hidden",
    float: "right",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
type skillType = { id: string; name: string; thumbnail: string };
const Skills = ({ SkillList, MainColor }: any) => {
  return (
    <Section MainColor={MainColor} Title="SKILLS">
      <View style={styles.SkillItemsContainer}>
        {SkillList.map((skill: skillType, index: number) => (
          <SkillItem key={index} MainColor={MainColor}>
            {skill.name}
          </SkillItem>
        ))}
      </View>
    </Section>
  );
};

export default Skills;
