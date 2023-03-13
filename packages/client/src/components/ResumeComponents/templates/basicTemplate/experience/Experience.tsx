import Section from "../components/Section";
import ExperienceItem from "./ExperienceItem";
type jobPropsType = {
  position: string;
  companyName: string;
  startAt: string;
  endAt: string;
};
const Experience = ({ Experience }: any) => {
  const exp = [...Experience].reverse();
  return (
    <Section Header="WORK EXPERIENCE">
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
    </Section>
  );
};

export default Experience;
