import React from 'react'
import FormContainer from '../../../Atoms/FormContainer';
import Input from '../../../Atoms/InputG';
import { Button } from '@mui/material';
import MapListItem from '../../../Atoms/MapListItem';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { experienceSchema } from '../../../../../client/src/utils/validation/experienceValidation';

type Props = {}


const items = [
    {
        name: 'position',
        type: 'text'
    },
    {
        name: 'companyName',
        type: 'text'
    },
    {
        name: 'startAt',
        type: 'date'
    },
    {
        name: 'endAt',
        type: 'date'
    }
]



const ExperienceModal = (props: Props) => {
    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            position: '',
            companyName: '',
            startAt: '',
            endAt: ''

        }, resolver: yupResolver(experienceSchema)
    });

    const onSubmit = (data: object) => {
        console.log(data)
    };



    return (
        <FormContainer maxWidth='700px'
            handleSubmit={handleSubmit(onSubmit)}
        >
            <MapListItem Component={Input} Items={items} other={control} />

            <Button
                variant="contained"
                fullWidth={true}
                sx={{
                    margin: '10px 0px 0px 0px', bgcolor: 'primary.main', color: 'white'
                }} type="submit">Submit</Button>

        </FormContainer>
    )
}
export default ExperienceModal