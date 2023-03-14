import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import ItemTitle from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon/index';
import { useDeleteExperienceMutation } from '../../../features/experience/expeienceApi';
import ExperienceModal from '../../ModalItems/ExperienceModal';

export interface ExperienceProps {
	item: {
		id: string;
		position: string;
		companyName: string;
		startAt: string;
		endAt: string;
	};
}

const ExperienceItem = ({ item }: ExperienceProps) => {
	const { id, companyName, endAt, position, startAt } = item;

	const [expopen, setExpOpen] = useState(false);
	const [showIcon, setShowIcon] = useState(false);
	const [deleteExperience] = useDeleteExperienceMutation();

	const handleExperience = () => {
		setExpOpen(!expopen);
	};

	const handleExperienceDelete = () => {
		let confirmed = window.confirm('Do you really want to delete it??')
		if (confirmed) {
			deleteExperience(id);
		}

	};

	const handleExpSubmit = (data: object) => {
		console.log(data, id);
		handleExperience();
	};

	return (
		<Grid
			container
			p={2}
			onMouseOver={() => setShowIcon(true)}
			onMouseOut={() => setShowIcon(false)}
		>
			<ItemTitle
				handleEdit={handleExperience}
				handleDelete={handleExperienceDelete}
				title={position}
				showIcon={showIcon}
			/>
			<Typography variant='body1' color={'info.light'}>
				{' '}
				{companyName}{' '}
			</Typography>
			<Typography variant='body1' color={'info.light'} px={2}>
				{' '}
				.{' '}
			</Typography>
			<Typography variant='body1' color={'info.light'}>
				{' '}
				{startAt}{' '}
			</Typography>
			<Typography variant='body1' color={'info.light'} px={1}>
				{' '}
				-{' '}
			</Typography>
			<Typography variant='body1' color={'info.light'}>
				{' '}
				{endAt ? endAt : 'Till Now'}{' '}
			</Typography>
			<CustomizedDialogs
				title='Add Experience'
				open={expopen}
				handleClose={handleExperience}
			>
				<ExperienceModal onSubmit={handleExpSubmit} data={item} />
			</CustomizedDialogs>
		</Grid>
	);
};

export default ExperienceItem;
