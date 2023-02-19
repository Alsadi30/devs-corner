import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from "../../utils/validation/AuthValidation";
import MapListItem from '../../../../material-ui/src/Atoms/MapListItem/index';
import Input from "../../../../material-ui/src/Atoms/InputG";
import { Typography, Grid, Button } from '@mui/material';
import FormContainer from "../../../../material-ui/src/Atoms/FormContainer";
import Layout from '../../../../material-ui/src/Organisms/Layout/index';

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
    }
]

const Register = () => {

    //use of react hook from with validation by yup
    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            username: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }, resolver: yupResolver(registerSchema)
    });


    const onSubmit: SubmitHandler<RegisterFormInput> = async data => {
        if (data.password === data.confirmPassword) {



        } else {
            alert("Password don't match with confirm password")
        }
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
                            Register
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
                            Already have an account?
                            Login

                        </Typography>
                    </FormContainer>
                </Grid>
            </Grid>
        </Layout>
    )
};

export default Register