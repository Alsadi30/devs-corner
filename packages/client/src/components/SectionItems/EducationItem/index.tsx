import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import KeyValue from '../../../../../material-ui/src/Atoms/KeyValue';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import ItemTitle from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon';
import {
	useDeleteEducationMutation,
	useUpdateEducationMutation,
} from '../../../features/education/educationApi';
import EducationModal from '../../ModalItems/EducationModal';

export interface EducationProps {
	item: {
		id: string;
		title: string;
		result: string;
		passingyear: number;
		institute: string;
	};
}

const EducationItem = ({ item }: EducationProps) => {
	const { id, title, institute, passingyear, result } = item;
	const [eduopen, setEduOpen] = useState(false);
	const [showIcon, setShowIcon] = useState(false);

	const [updateEducation] = useUpdateEducationMutation();
	const [deleteEducation] = useDeleteEducationMutation();

	const handleEducation = () => {
		setEduOpen(!eduopen);
	};

	const handleEducationDelete = () => {
		let confirmed = window.confirm('Do you really want to delete it??')
		if (confirmed) {
			deleteEducation(id);
		}

	};

	const handleEduSubmit = (data: object) => {
		updateEducation({ id, data });
		handleEducation();
	};

	return (
		<Grid
			onMouseOver={() => setShowIcon(true)}
			onMouseOut={() => setShowIcon(false)}
			container
			p={2}
			justifyContent={'space-between'}
		>
			<Grid minWidth={'20%'}>
				<ItemTitle
					handleDelete={handleEducationDelete}
					handleEdit={handleEducation}
					title={title}
					color={'info.light'}
					showIcon={showIcon}
				/>
				<Typography variant='body1' color={'info.dark'}>
					{institute}
				</Typography>
			</Grid>
			<Grid container maxWidth={'68%'} justifyContent={'flex-end'}>
				<Grid container>
					<KeyValue
						property='CGPA'
						value={result}
						sx={{ justifyContent: 'flex-end' }}
					/>
					<KeyValue
						property='Passing Year'
						value={passingyear}
						sx={{ justifyContent: 'flex-end' }}
					/>
				</Grid>
			</Grid>
			<CustomizedDialogs
				title='Update Education'
				open={eduopen}
				handleClose={handleEducation}
			>
				<EducationModal onSubmit={handleEduSubmit} data={item} />
			</CustomizedDialogs>
		</Grid>
	);
};

export default EducationItem;
