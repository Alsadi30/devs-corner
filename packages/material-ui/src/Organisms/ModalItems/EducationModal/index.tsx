import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormContainer from '../../../Atoms/FormContainer';
import Input from '../../../Atoms/InputG';
import MapListItem from '../../../Atoms/MapListItem';
import Button from '@mui/material/Button';
import { educationSchema } from '../../../../../client/src/utils/validation/educationValidation';

type Props = {}

const items = [
    {
        name: 'title',
        type: 'text'
    },
    {
        name: 'result',
        type: 'number'
    },
    {
        name: 'passingyear',
        type: 'number'
    },
    {
        name: 'institute',
        type: 'text'
    },
]

const EducationModal = (props: Props) => {
    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            title: '',
            result: 0,
            passingyear: 0,
            institute: ''

        }, resolver: yupResolver(educationSchema)
    });

    const onSubmit = (data: object) => {
        console.log(data)
    };



    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >


            <MapListItem Component={Input} Items={items} other={control} />

            <Button
                variant="contained"
                fullWidth={true}
                sx={{
                    margin: '10px 0px', bgcolor: 'primary.main', color: 'white'
                }} type="submit">Submit</Button>

        </FormContainer>
    )
}

export default EducationModal