import React from 'react'
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { projectSchema } from '../../../../../client/src/utils/validation/projectValidation';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import Input from '../../../../../material-ui/src/Atoms/InputG';

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