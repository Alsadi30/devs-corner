import Section from "../components/Section";
import { SectionContainerV } from "../components/SectionContainer";
import EducationItem from "./EducationItem";

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
