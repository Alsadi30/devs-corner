import { StyleSheet } from "@react-pdf/renderer";
import Section from "./../Section";
import { SectionContainerV } from "./../SectionContainer";
import ExperienceItem from "./ExperienceItem";
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
const Experience = ({ Experience, MainColor }: any) => {
  const exp = [...Experience].reverse();
  return (
    <Section MainColor={MainColor} Title="WORK EXPERIENCE">
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
