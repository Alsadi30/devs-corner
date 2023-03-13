import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
const Section = ({ children, Header }: { children: any; Header: string }) => {
  return (
    <SectionWrapper>
      <SectionHeader Header={Header} />
      {children}
    </SectionWrapper>
  );
};

export default Section;
