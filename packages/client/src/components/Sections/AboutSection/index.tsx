import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import Section from '../../../../../material-ui/src/Organisms/Section';
import {
	useCreateProfileMutation,
	useUpdateProfileMutation,
} from '../../../features/profile/profileApi';
import AboutModal from '../../ModalItems/AboutModal';

interface ASProps {
	text?: string;
}

const AboutSection = ({ text }: ASProps) => {
	const [aboutopen, setAOpen] = useState(false);
	const userData = useSelector((state) => state?.user);
	const [createProfile] = useCreateProfileMutation();
	const [updateProfile] = useUpdateProfileMutation();

	const handleAbout = () => {
		setAOpen(!aboutopen);
	};

	const handleAboutSubmit = (data: object) => {
		userData?.user?.profile?.id
			? updateProfile({ id: userData?.user?.id, data })
			: createProfile(data);
		handleAbout();
	};

	return (
		<>
			<Section title='About' text={text} handleClick={handleAbout} />
			<CustomizedDialogs
				title='About'
				open={aboutopen}
				handleClose={handleAbout}
			>
				<AboutModal onSubmit={handleAboutSubmit} about={text} />
			</CustomizedDialogs>
		</>
	);
};

export default AboutSection;
