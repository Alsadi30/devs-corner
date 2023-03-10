import AttachFileIcon from '@mui/icons-material/AttachFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import IconWithText from '../../../../../material-ui/src/Molecules/IconWithText';
import ItemTitle from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon';
import {
	useDeleteProjectMutation,
	useUpdateProjectMutation,
} from '../../../features/project/projectApi';
import ProjectModal from '../../ModalItems/ProjectModal';

export interface ProjectItemProps {
	item: {
		id: string;
		name: string;
		description: string;
		repoUrl: string;
		liveUrl: string;
	};
}

const ProjectItem = ({ item }: ProjectItemProps) => {
	const { id, liveUrl, name, repoUrl, description } = item;

	const [repoopen, setRepoOpen] = useState(false);
	const [showIcon, setShowIcon] = useState(false);

	const [updateProject] = useUpdateProjectMutation();
	const [deleteProject] = useDeleteProjectMutation();

	const handleProject = () => {
		setRepoOpen(!repoopen);
	};

	const handleProjectDelete = () => {
		let confirmed = window.confirm('Do you really want to delete it??')
		if (confirmed) {
			deleteProject(id);
		}

	};

	const handleProjectSubmit = (data: object) => {
		updateProject({ id, data });
		handleProject();
	};

	return (
		<Grid
			onMouseOver={() => setShowIcon(true)}
			onMouseOut={() => setShowIcon(false)}
			container
			flexDirection={'column'}
			p={2}
		>
			<ItemTitle
				title={name}
				handleDelete={handleProjectDelete}
				handleEdit={handleProject}
				showIcon={showIcon}
			/>
			<Typography mb={0.5} variant='body1' color={'info.light'}>
				{description}
			</Typography>

			<Grid container>
				<Link to={repoUrl} target='_blank'>
					<Grid pr={5}>
						<IconWithText text='Github'>
							{' '}
							<GitHubIcon fontSize='small' color='info' />{' '}
						</IconWithText>
					</Grid>
				</Link>
				<Link to={liveUrl} target='_blank'>
					<Grid>
						<IconWithText text='Live URL'>
							{' '}
							<AttachFileIcon fontSize='small' color='info' />{' '}
						</IconWithText>
					</Grid>
				</Link>
			</Grid>
			<CustomizedDialogs
				title='Update Project'
				open={repoopen}
				handleClose={handleProject}
			>
				<ProjectModal onSubmit={handleProjectSubmit} data={item} />
			</CustomizedDialogs>
		</Grid>
	);
};

export default ProjectItem;
