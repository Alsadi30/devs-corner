import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Typography } from '@mui/material';
import { SubmitHandler, useForm } from "react-hook-form";
import FormContainer from "../../../../material-ui/src/Atoms/FormContainer";
import Input from "../../../../material-ui/src/Atoms/InputG";
import MapListItem from '../../../../material-ui/src/Atoms/MapListItem/index';
import { loginSchema } from "../../utils/validation/AuthValidation";
import Layout from '../../../../material-ui/src/Organisms/Layout';
import RepositoryItem from '../../../../material-ui/src/Organisms/RepositoryItem';



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

    }
]

const Login = () => {

    //use of react hook from with validation by yup
    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }, resolver: yupResolver(loginSchema)
    });


    const onSubmit: SubmitHandler<LoginFormInput> = async data => {
        console.log(data)
    };

    return (
        <Layout>
            <Grid container justifyContent="center"
                alignItems="center">
                <Grid item xs={12} sm={8} md={5} lg={4} xl={4} >
                    <FormContainer
                        handleSubmit={handleSubmit(onSubmit)}
                    >
                        <Typography mb={2} variant="h2" component="h6">
                            Login
                        </Typography>

                        {/* Input Items map through MapItems */}
                        <MapListItem Items={inputs} Component={Input} other={control} />

                        <Button
                            variant="contained"
                            fullWidth={true}
                            sx={{
                                margin: '10px 0px', bgcolor: 'primary.main', color: 'white'
                            }} type="submit">Submit</Button>

                        <Typography variant="h5" color={'info.main'} component="p">
                            Don't have an account?
                            Register

                        </Typography>
                    </FormContainer>
                </Grid>
            </Grid>
            <RepositoryItem title='Repository 1' description='A short description of the project' gitlink='dlkfjasdkljf' livelink='dlsflksadklfjdskl' />

        </Layout>
    )
};

export default Login