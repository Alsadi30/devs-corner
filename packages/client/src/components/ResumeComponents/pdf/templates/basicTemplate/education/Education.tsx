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

const Education = ({ Education, MainColor }: any) => {
  const Edu = [...Education].reverse().slice(0, 1);
  return (
    <Section MainColor={MainColor} Title="EDUCATION">
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
