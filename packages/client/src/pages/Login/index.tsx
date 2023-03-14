import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from '../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../material-ui/src/Atoms/MapListItem/index';
import Layout from '../../components/Layout';
import ReactToastify from '../../components/ReactToastify';
import { useLoginMutation } from '../../features/auth/authApi';
import { loginSchema } from '../../utils/validation/AuthValidation';

export interface LoginFormInput {
	email: string;
	password: string;
}

let inputs = [
	{
		name: 'email',
		type: 'text',
	},
	{
		name: 'password',
		type: 'password',
	},
];

const Login = () => {
	const [login, { data, isLoading, error: responseError, isError }] =
		useLoginMutation();

	const navigate = useNavigate();

	useEffect(() => {
		if (data?.token && data?.user) {
			navigate('/dashboard');
		}
	}, [data, responseError, navigate]);

	//use of react hook from with validation by yup
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<LoginFormInput> = async (LoginData) => {
		login(LoginData);
	};

	return (
		<Layout>
			<Grid container justifyContent='center' alignItems='center'>
				<Grid item xs={12} sm={8} md={5} lg={4} xl={4}>
					{responseError && (
						<ReactToastify error={'Invalid Credential'} />
					)}
					<FormContainer handleSubmit={handleSubmit(onSubmit)}>
						<Typography mb={2} variant='h2' component='h6'>
							Login
						</Typography>

						{/* Input Items map through MapItems */}
						<MapListItem
							Items={inputs}
							Component={Input}
							other={control}
						/>

						<FormButton />

						<Typography
							variant='h5'
							color={'info.main'}
							component='p'
						>
							Don't have an account?{' '}
							<Link to='/register'>Register</Link>
						</Typography>
					</FormContainer>
				</Grid>
			</Grid>
			{/* <RepositoryItem title='Repository 1' description='A short description of the project' gitlink='dlkfjasdkljf' livelink='dlsflksadklfjdskl' /> */}
		</Layout>
	);
};

export default Login;
