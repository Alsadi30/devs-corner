import { StyleSheet } from "@react-pdf/renderer";
import ExperienceItem from "./ExperienceItem";
import Section from "./Section";
import { SectionContainerV } from "./SectionContainer";
const styles = StyleSheet.create({
  sectionTitle: {
    color: "#336699",
    fontSize: "15",
    fontWeight: "bold",
  },
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

type jobPropsType = {
  id: string;
  position: string;
  companyName: string;
  startAt: string;
  endAt: string;
};
const Experience = ({ Experience }: any) => {
  var MainColor = "#336699";
  const exp = [...Experience].reverse();
  return (
    <Section Title="WORK EXPERIENCE">
      <SectionContainerV>
        {exp.map((job: jobPropsType, index: number) => {
          return (
            <ExperienceItem
              key={index}
              position={job.position}
              companyName={job.companyName}
              startAt={job.startAt}
              endAt={job.endAt}
            />
          );
        })}
      </SectionContainerV>
    </Section>
  );
};

export default Experience;
