import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ImageAvatar from '../../../../material-ui/src/Atoms/Avatars/ImageAvatar';
import Cont from '../../../../material-ui/src/Atoms/Container';
import Copyright from '../../../../material-ui/src/Atoms/Copyright';
import FormContaineer from '../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../material-ui/src/Atoms/InputG';
import PrimaryButton from '../../../../material-ui/src/Atoms/PrimaryButton';
import SectionBody from '../../../../material-ui/src/Atoms/SectionBody';
import Text from '../../../../material-ui/src/Atoms/Text';
import SectionHead from '../../../../material-ui/src/Molecules/SectionHead';
import NavBar from '../../../../material-ui/src/Organisms/NavBar/NavBar';
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

			<NavBar />

			<SectionBody>
				<ImageAvatar Src={photo} Txt='Name' Size={150} />
				<div>Heoolo</div>
				<PrimaryButton />
				<Text />
				<FormContaineer>
					<Input
						item={{ name: 'username', type: 'text' }}
						control={control}
					/>
				</FormContaineer>
			</SectionBody>

			<Copyright />
		</Cont>
	);
};

export default Dashboard;
