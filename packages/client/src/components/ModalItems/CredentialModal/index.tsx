import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { credentialSchema } from '../../../../../client/src/utils/validation/credentialValidation';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton/index';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG/index';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';


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

interface credModPros {
    data?: {
        title: string
        institution: string
        image: string
        achivedAt: number
        courseDuration: string
        cartificateId: string
        cartificateUrl: string
    },
    onSubmit: (data: object) => void
}

const CredentialModel = ({ data, onSubmit }: credModPros) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: data && {
            title: data.title,
            image: data.image,
            institution: data.institution,
            cartificateUrl: data.cartificateUrl,
            cartificateId: data.cartificateId,
            courseDuration: data.courseDuration,
            achivedAt: data.achivedAt

        },
        resolver: yupResolver(credentialSchema)
    });

    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >
            <MapListItem Component={Input} Items={items} other={control} />
            <FormButton />

        </FormContainer>
    )
}
export default CredentialModel