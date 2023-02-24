import React from 'react'
import FormContainer from '../../../Atoms/FormContainer';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import MapListItem from '../../../Atoms/MapListItem';
import Input from '../../../Atoms/InputG';
import { yupResolver } from '@hookform/resolvers/yup';
import { projectSchema } from '../../../../../client/src/utils/validation/projectValidation';

type Props = {}


const items = [
    {
        name: 'name',
        type: 'text'
    },
    {
        name: 'description',
        type: 'textarea'
    }
    ,
    {
        name: 'repoUrl',
        type: 'text'
    }
    ,
    {
        name: 'liveUrl',
        type: 'Text'
    }
]


const ProjectModal = (props: Props) => {

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            name: '',
            description: '',
            liveUrl: '',
            repoUrl: ''
        }, resolver: yupResolver(projectSchema)
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

export default ProjectModal