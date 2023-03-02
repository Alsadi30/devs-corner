import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { credentialSchema } from '../../../../../client/src/utils/validation/credentialValidation';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import Input from '../../../../../material-ui/src/Atoms/InputG/index';


const items = [
    {
        name: 'title',
        type: 'text'
    },
    {
        name: 'image',
        type: 'file'
    }, {
        name: 'institution',
        type: 'text'
    }, {
        name: 'cartificateUrl',
        type: 'text'
    }, {
        name: 'cartificateId',
        type: 'text'
    }, {
        name: 'courseDuration',
        type: 'text'
    }, {
        name: 'achivedAt',
        type: 'date'
    },
]


type Props = {}

const CredentialModel = (props: Props) => {
    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            title: '',
            image: '',
            institution: '',
            cartificateUrl: '',
            cartificateId: '',
            courseDuration: '',
            achivedAt: ''

        }, resolver: yupResolver(credentialSchema)
    });
    const formData = new FormData()

    const onSubmit = (data: object) => {
        for (const [key, value] of Object.entries(data)) {
            console.log(`${key}: ${value}`)
            formData.append(key, value)
        }
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
export default CredentialModel