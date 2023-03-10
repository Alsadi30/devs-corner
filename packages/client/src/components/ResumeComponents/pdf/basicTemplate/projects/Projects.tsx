import { StyleSheet } from "@react-pdf/renderer";
import Section from "./../Section";
import { SectionContainerV } from "./../SectionContainer";
import ProjectItem from "./ProjectItem";
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
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};

const Projects = ({ Projects }: any) => {
  const latestProjects = [...Projects].reverse().slice(0, 3);
  var MainColor = "#336699";
  return (
    <Section Title="PROJETS">
      <SectionContainerV>
        {latestProjects.map((proj: ProjectsItemType, index: number) => {
          return (
            <ProjectItem
              key={index}
              name={proj.name}
              description={proj.description}
              repoUrl={proj.repoUrl}
              liveUrl={proj.liveUrl}
            />
          );
        })}
      </SectionContainerV>
    </Section>
  );
};

export default Projects;
