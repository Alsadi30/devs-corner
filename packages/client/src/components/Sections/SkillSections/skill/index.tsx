import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import ImageAvatar from '../../../../../../material-ui/src/Atoms/Avatars/ImageAvatar';
import { useDeleteSkillMutation } from '../../../../features/skill/skillApi';

interface SkillProps {
	item: {
		id: string;
		name: string;
		thumbnail: string;
	};
}

const Skill = ({ item }: SkillProps) => {
	const [showIcon, setShowIcon] = useState(false);

	const [deleteSkill] = useDeleteSkillMutation();

	const handleDeleteSkill = () => {
		let confirmed = window.confirm('Do you really want to delete it?');
		if (confirmed) {
			deleteSkill(item.id);
		}
	};

	return (
		<Grid
			container
			onMouseOver={() => setShowIcon(true)}
			onMouseOut={() => setShowIcon(false)}
			px={5}
			py={1}
			width={'50%'}
			justifyContent={'space-between'}
			flexWrap={'wrap'}
		>
			<Grid item pb={1}>
				<Grid container>
					<Grid pr={1}>
						<ImageAvatar Size={15} Txt='JS' Src={item.thumbnail} />
					</Grid>
					<Grid>
						<Typography variant='body1' color={'info.light'}>
							{item.name}
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				{showIcon && (
					<DeleteForeverIcon
						onClick={handleDeleteSkill}
						fontSize='small'
						color={'primary'}
					/>
				)}
			</Grid>
		</Grid>
	);
};

export default Skill;
