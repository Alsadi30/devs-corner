import HrBar from "../../PDFBasicTemplate/components/PDFHrBar";
import ItemWrapper from "../../sharedComponents/PDFItemWrapper";
import Section from "../../sharedComponents/PDFSection";
import ExperienceItem from "./PDFExperienceItem";

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
    <Section MainColor={MainColor} Title="Experience">
      <HrBar MainColor={MainColor} />
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
