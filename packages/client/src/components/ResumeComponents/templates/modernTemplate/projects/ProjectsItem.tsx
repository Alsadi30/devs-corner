import { Link, Typography } from "@mui/material";
import { SectionContainerV } from "./../../sharedComponents/SectionContainer";

type ProjectsItemPropsType = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};
const ProjectsItem = ({
  name,
  description,
  repoUrl,
  liveUrl,
}: ProjectsItemPropsType) => {
  return (
    <SectionContainerV>
      <Typography variant="h4">{`# ${name}`}</Typography>
      <Typography variant="h5">{description}</Typography>
      <Link href={repoUrl} variant="h6">
        {repoUrl}
      </Link>
      <Link href={repoUrl} variant="h6">
        {liveUrl}
      </Link>
    </SectionContainerV>
  );
};
export default ProjectsItem;
