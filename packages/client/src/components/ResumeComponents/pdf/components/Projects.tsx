import { StyleSheet } from "@react-pdf/renderer";
import EducationItem from "./ProjectItem";
import Section from "./Section";
import { SectionContainerV } from "./SectionContainer";
const styles = StyleSheet.create({
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

type ProjectsItemType = {
  id: string;
  title: string;
  result: string;
  passingyear: string;
  institute: string;
};

const Projects = ({ Projects }: any) => {
  const latestProjects = [...Projects].reverse();
  latestProjects.slice(0, 3);
  var MainColor = "#336699";
  return (
    <Section Title="EDUCATION">
      <SectionContainerV>
        {latestProjects.map((proj: ProjectsItemType) => {
          return <EducationItem ProjItem={proj} />;
        })}
      </SectionContainerV>
    </Section>
  );
};

export default Projects;
