import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ImageAvatar from '../../../../material-ui/src/Atoms/Avatars/ImageAvatar';
import Cont from '../../../../material-ui/src/Atoms/Container';
import Copyright from '../../../../material-ui/src/Atoms/Copyright';
import KeyValue from '../../../../material-ui/src/Atoms/KeyValue/index';
import PrimaryButton from '../../../../material-ui/src/Atoms/PrimaryButton';
import Text from '../../../../material-ui/src/Atoms/Text';
import IconWithText from '../../../../material-ui/src/Molecules/IconWithText/index';
import SectionHead from '../../../../material-ui/src/Molecules/SectionHead';
import photo from '../../assets/avatar.jpg';

type Props = {};

const Dashboard = ({}: Props) => {
	const [count, setCount] = useState(0);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: '',
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
		},
	});

	return (
		<Cont>
			<SectionHead title='Skills' />

			<KeyValue property='CGPA' value='5.343' />

			<ImageAvatar Src={photo} Txt='Name' Size={150} />

			<PrimaryButton />
			<Text />

			<IconWithText text='Github Link'>
				<GitHubIcon fontSize='inherit' />
			</IconWithText>

			<Copyright />
		</Cont>
	);
};

export default Dashboard;
