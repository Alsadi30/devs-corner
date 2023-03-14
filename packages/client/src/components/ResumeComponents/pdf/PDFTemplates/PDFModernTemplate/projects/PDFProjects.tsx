import HrBar from "../../sharedComponents/PDFHrBar";
import ItemWrapper from "../../sharedComponents/PDFItemWrapper";
import Section from "../../sharedComponents/PDFSection";
import ProjectItem from "./PDFProjectItem";

type ProjectsItemType = {
  id: string;
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};

const Projects = ({ Projects, MainColor }: any) => {
  const latestProjects = [...Projects].reverse().slice(0, 3);
  return (
    <Section MainColor={MainColor} Title="Projects">
      <HrBar MainColor={MainColor} />
      <ItemWrapper>
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
      </ItemWrapper>
    </Section>
  );
};

export default Projects;
