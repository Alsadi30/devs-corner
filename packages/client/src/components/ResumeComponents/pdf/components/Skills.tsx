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

const Skills = (props) => {
  return (
    <Section Title="SKILLS">
      <View style={styles.SkillItemsContainer}>
        {props.SkillList.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </View>
    </Section>
  );
};

export default Skills;
