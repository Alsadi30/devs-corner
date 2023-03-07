import { StyleSheet } from "@react-pdf/renderer";
import Section from "./Section";
import SectionContainer from "./SectionContainer";
import SectionItamH from "./SectionItemH";
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
type ExperienceItemType = {
  id: string;
  position: string;
  companyName: string;
  startAt: string;
  endAt: string;
};
const Experience = ({ Experience }: any) => {
  var MainColor = "#336699";
  return (
    <Section Title="WORK EXPERIENCE">
      <SectionContainer>
        <SectionItamH />
      </SectionContainer>
    </Section>
  );
};

export default Experience;
