import Section from "./../components/Section";
import { SectionContainerV } from "./../components/SectionContainer";
import ExperienceItem from "./ExperienceItem";

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
