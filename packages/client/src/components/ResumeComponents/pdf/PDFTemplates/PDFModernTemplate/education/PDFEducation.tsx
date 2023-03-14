import HrBar from "../../PDFBasicTemplate/components/PDFHrBar";
import ItemWrapper from "../../sharedComponents/PDFItemWrapper";
import Section from "../../sharedComponents/PDFSection";
import { SectionContainerV } from "../../sharedComponents/PDFSectionContainer";
import EducationItem from "./PDFEducationItem";

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
    <Section MainColor={MainColor} Title="Education">
      <HrBar MainColor={MainColor} />
      <SectionContainerV>
        <ItemWrapper>
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
        </ItemWrapper>
      </SectionContainerV>
    </Section>
  );
};

export default Education;
