import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import {
	useAddSkillMutation,
	useGetSkillQuery,
} from '../../../features/skill/skillApi';
import SkillModal from '../../ModalItems/SkillModal';
import SkillSection from '../../SectionItems/SkillSection';

interface SSProps {
	skills: Array<object>;
}

const SkillSections = ({ skills }: SSProps) => {
	let id = '';
	const { data: skillData, isLoading, isError } = useGetSkillQuery(id);
	const [addSkill] = useAddSkillMutation();
	const [skillopen, setSOpen] = useState(false);

	const handleSkill = () => {
		setSOpen(!skillopen);
	};

	const handleSkillSubmit = (data: any) => {
		let skill =
			skillData &&
			skillData.find((item: any) => item.name === data.skill);
		addSkill(skill.id);

		handleSkill();
	};

	return (
		<>
			<SkillSection Items={skills} handleClick={handleSkill} />
			<CustomizedDialogs
				title='Skill'
				open={skillopen}
				handleClose={handleSkill}
			>
				<SkillModal onSubmit={handleSkillSubmit} />
			</CustomizedDialogs>
		</>
	);
};

export default SkillSections;
