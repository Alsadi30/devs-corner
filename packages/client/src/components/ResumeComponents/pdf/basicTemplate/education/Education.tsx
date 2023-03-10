import { StyleSheet } from "@react-pdf/renderer";
import Section from "../Section";
import { SectionContainerV } from "../SectionContainer";
import EducationItem from "./EducationItem";
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
  const Edu = [...Education].reverse().slice(0, 1);
  var MainColor = "#336699";
  return (
    <Section Title="EDUCATION">
      <SectionContainerV>
        {Edu.map((edu: EducationItemType, index: number) => {
          return (
            <EducationItem
              key={index}
              title={edu.title}
              institute={edu.institute}
              result={edu.result}
              passingyear={edu.passingyear}
            />
          );
        })}
      </SectionContainerV>
    </Section>
  );
};

export default Education;
