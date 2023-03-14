import { StyleSheet, View } from "@react-pdf/renderer";
import HrBar from "../../sharedComponents/PDFHrBar";
import ItemWrapper from "../../sharedComponents/PDFItemWrapper";
import Section from "../../sharedComponents/PDFSection";
import { SectionContainerH } from "../../sharedComponents/PDFSectionContainer";
import SkillItem from "./PDFSkillItem";

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
    <Section MainColor={MainColor} Title="Skills Highlights">
      <HrBar MainColor={MainColor} />
      <ItemWrapper>
        <SectionContainerH>
          <View style={styles.SkillItemsContainer}>
            {SkillList.map((skill: skillType, index: number) => (
              <SkillItem key={index} MainColor={MainColor}>
                {skill.name}
              </SkillItem>
            ))}
          </View>
        </SectionContainerH>
      </ItemWrapper>
    </Section>
  );
};

export default Skills;
