import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import Section from '../../../../../material-ui/src/Organisms/Section';
import { useCreateProjectMutation } from '../../../features/project/projectApi';
import ProjectModal from '../../ModalItems/ProjectModal';
import ProjectItem from '../../SectionItems/ProjectItem';

interface PSProps {
	projects: Array<object>;
}

const ProjectSection = ({ projects }: PSProps) => {
	const [repoopen, setRepoOpen] = useState(false);

	const [createProject] = useCreateProjectMutation();

	const handleRepo = () => {
		setRepoOpen(!repoopen);
	};

	const handleProjectSubmit = (data: object) => {
		console.log(data);
		createProject(data);
		handleRepo();
	};

	return (
		<>
			<Section
				title='Projects'
				Component={ProjectItem}
				Items={projects}
				direction='column'
				handleClick={handleRepo}
			/>
			<CustomizedDialogs
				title='Add Project'
				open={repoopen}
				handleClose={handleRepo}
			>
				<ProjectModal onSubmit={handleProjectSubmit} />
			</CustomizedDialogs>
		</>
	);
};

export default ProjectSection;
