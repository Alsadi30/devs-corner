import { StyleSheet } from "@react-pdf/renderer";
import EducationItem from "./EducationItem";
import Section from "./Section";
import { SectionContainerV } from "./SectionContainer";
const styles = StyleSheet.create({
  sectionChild1: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  sectionChild2: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  sectionChild3: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  innerView: {
    marginBottom: 10,
  },
});

type EducationItemType = {
  id: string;
  title: string;
  result: string;
  passingyear: string;
  institute: string;
};

const Education = ({ Education }: any) => {
  // console.log(Education);
  var MainColor = "#336699";
  return (
    <Section Title="EDUCATION">
      <SectionContainerV>
        {Education.map((edu: EducationItemType) => {
          <EducationItem EduItem={edu} />;
        })}
      </SectionContainerV>
    </Section>
  );
};

export default Education;
