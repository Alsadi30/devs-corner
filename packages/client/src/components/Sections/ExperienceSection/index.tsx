import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import Section from '../../../../../material-ui/src/Organisms/Section/index';
import { useCreateExperienceMutation } from '../../../features/experience/expeienceApi';
import ExperienceModal from '../../ModalItems/ExperienceModal';
import ExperienceItem from '../../SectionItems/ExperienceItem/index';

interface EXSProps {
	experience: Array<object>;
}

const ExperienceSection = ({ experience }: EXSProps) => {
	const [expopen, setExpOpen] = useState(false);
	const [createExperience] = useCreateExperienceMutation();

	const handleExperience = () => {
		setExpOpen(!expopen);
	};

	const handleExpSubmit = (data: object) => {
		console.log(data);
		createExperience(data);
		handleExperience();
	};

	return (
		<>
			{' '}
			<Section
				title='Experience'
				Component={ExperienceItem}
				Items={experience}
				handleClick={handleExperience}
			/>
			<CustomizedDialogs
				title='Add Experience'
				open={expopen}
				handleClose={handleExperience}
			>
				<ExperienceModal onSubmit={handleExpSubmit} />
			</CustomizedDialogs>
		</>
	);
};

export default ExperienceSection;
