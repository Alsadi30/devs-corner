import React from 'react'
import FormContainer from '../../../Atoms/FormContainer'
import { Button, Typography } from '@mui/material';
import Input from '../../../Atoms/InputG/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface AboutModalProps {
    handleSubmit?: () => void
}

const aboutSchema = yup.object({
    about: yup.string().required().trim(),
}).required();

const AboutModal = ({ }: AboutModalProps) => {

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            about: ''
        }, resolver: yupResolver(aboutSchema)
    });

    const onSubmit = (data: object) => {
        console.log(data)
    };

    const item = {
        name: 'about',
        type: 'textarea'
    }

    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >

            <Input item={item} other={control} />

            <Button
                variant="contained"
                fullWidth={true}
                sx={{
                    margin: '10px 0px', bgcolor: 'primary.main', color: 'white'
                }} type="submit">Submit</Button>

        </FormContainer>
    )
}

export default AboutModal