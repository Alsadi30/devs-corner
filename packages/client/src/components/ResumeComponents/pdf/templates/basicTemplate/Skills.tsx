import { StyleSheet, View } from "@react-pdf/renderer";
import Section from "./Section";
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
  SkillItems: {
    padding: "5",
    margin: "4",
    borderRadius: "5",
    backgroundColor: "#336699",
    fontSize: "12px",
    color: "white",
  },
});
type skillType = { id: string; name: string; thumbnail: string };
const Skills = ({ SkillList }: any) => {
  return (
    <Section Title="SKILLS">
      <View style={styles.SkillItemsContainer}>
        {SkillList.map((skill: skillType, index: number) => (
          <SkillItem key={index}>{skill.name}</SkillItem>
        ))}
      </View>
    </Section>
  );
};

export default Skills;
