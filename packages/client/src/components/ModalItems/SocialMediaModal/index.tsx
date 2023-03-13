import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import { InputStyle } from '../../../../../material-ui/src/Atoms/InputG/Input.style';
import { useCreateSocialMediaMutation } from '../../../features/socialMedia/socialMediaApi';
import { socialMediaSchema } from '../../../utils/validation/socialMediaValidation';

type Props = {
	handleClose: () => void
};

const inputs = ['facebook', 'twitter', 'linkedin', 'github'];

const SocialMediaModal = ({ handleClose }: Props) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			url: '',
			type: '',
		},
		resolver: yupResolver(socialMediaSchema),
	});

	const [createSocialMedia] = useCreateSocialMediaMutation();

	const onSubmit = (data: object) => {
		console.log(data);
		createSocialMedia(data);
		handleClose()
	};

	return (
		<FormContainer handleSubmit={handleSubmit(onSubmit)}>
			<Input item={{ name: 'url', type: 'text' }} other={control} />
			<Controller
				name={'type'}
				control={control}
				render={({ field, fieldState: { error }, formState: { isValid } }) => (
					<TextField
						{...field}
						sx={InputStyle}
						fullWidth
						select
						label='Select Type'
						defaultValue='facebook'
						SelectProps={{
							native: true,
						}}
						variant='filled'
					>
						{inputs.map((value) => (
							<option
								style={{ color: 'white', padding: '10px' }}
								key={value}
								value={value}
							>
								{value}
							</option>
						))}
					</TextField>)}
			/>
			/** here We will show the existing socialMedia with edit and delete
			button */
			{/* <ItemTitle title='dsfkl' /> */}
			<FormButton />
		</FormContainer>
	);
};
export default SocialMediaModal;
