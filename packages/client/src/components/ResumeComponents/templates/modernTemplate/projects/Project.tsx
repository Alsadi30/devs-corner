import HrBar from "../../sharedComponents/HrBar";
import ItemWrapper from "./../../sharedComponents/ItemWrapper";
import Section from "./../../sharedComponents/Section";
import ProjectsItem from "./ProjectsItem";
type projectPropsType = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};
const Projects = ({ Projects }: any) => {
  const topProjects = [...Projects].reverse().slice(0, 3);
  return (
    <Section Header="Projects">
      <HrBar />
      <ItemWrapper>
        {topProjects.map((project: projectPropsType, index: number) => {
          return (
            <ProjectsItem
              key={index}
              name={` Name : ${project.name}`}
              description={`Description : ${project.description}`}
              repoUrl={`Repository : ${project.repoUrl}`}
              liveUrl={`Live Link :  ${project.liveUrl}`}
            />
          );
        })}
      </ItemWrapper>
    </Section>
  );
};
export default Projects;
