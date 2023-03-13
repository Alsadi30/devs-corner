import HrBar from "../../sharedComponents/HrBar";
import ItemWrapper from "./../../sharedComponents/ItemWrapper";
import Section from "./../../sharedComponents/Section";
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
    <Section Header="PROFESSIONAL EXPERIENCE">
      <HrBar />
      <ItemWrapper>
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
      </ItemWrapper>
    </Section>
  );
};

export default Experience;
