import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import FormContainer from '../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../material-ui/src/Atoms/MapListItem/index';
import Layout from '../../components/Layout/index';
import { useRegisterMutation } from '../../features/auth/authApi';
import { registerSchema } from '../../utils/validation/AuthValidation';

export interface RegisterFormInput {
	username: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword?: string;
}

let inputs = [
	{
		name: 'username',
		type: 'text',
	},
	{
		name: 'email',
		type: 'text',
	},
	{
		name: 'phone',
		type: 'text',
	},
	{
		name: 'password',
		type: 'password',
	},
	{
		name: 'confirmPassword',
		type: 'password',
	},
];

const Register = () => {
	const [register, { data, isLoading, error: responseError }] =
		useRegisterMutation();

	const navigate = useNavigate();

	useEffect(() => {
		if (responseError?.data) {
			console.log('Err' + responseError?.data);
		}
		if (data) {
			// console.log('U data' + JSON.stringify(data?.user));
			// @TODO: if token will come we don't have to redirect "LOGIN" page
			navigate('/login');
		}
	}, [data, responseError, navigate]);

	//use of react hook from with validation by yup
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
		resolver: yupResolver(registerSchema),
	});

	const onSubmit: SubmitHandler<RegisterFormInput> = async (
		RegistrationData
	) => {
		if (RegistrationData?.password === RegistrationData?.confirmPassword) {
			register(RegistrationData);
		} else {
			alert("Password don't match with confirm password");
		}
	};

	return (
		<Layout>
			<Grid container justifyContent='center' alignItems='center'>
				<Grid item xs={12} sm={8} md={5} lg={4} xl={4}>
					<FormContainer handleSubmit={handleSubmit(onSubmit)}>
						<Typography mb={2} variant='h2' component='h6'>
							Register
						</Typography>

						{/* Input Items map through MapItems */}
						<MapListItem
							Items={inputs}
							Component={Input}
							other={control}
						/>

						<Button
							variant='contained'
							fullWidth={true}
							sx={{
								margin: '10px 0px',
								bgcolor: 'primary.main',
								color: 'white',
							}}
							type='submit'
						>
							Submit
						</Button>

						<Typography
							variant='h5'
							color={'info.main'}
							component='p'
						>
							Already have an account?{' '}
							<Link to='/login'>Login</Link>
						</Typography>
					</FormContainer>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Register;
