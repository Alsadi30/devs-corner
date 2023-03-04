import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { experienceSchema } from '../../../../../client/src/utils/validation/experienceValidation';
import FormButton from '../../../../../material-ui/src/Atoms/FormButton';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';


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


interface ExperienceProps {
    data?: {
        position: string
        companyName: string
        startAt: string
        endAt: string
    },
    onSubmit: (data: object) => void
}

const ExperienceModal = ({ data, onSubmit }: ExperienceProps) => {

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: data && {
            position: data.position,
            companyName: data.companyName,
            startAt: data.startAt,
            endAt: data.endAt

        }, resolver: yupResolver(experienceSchema)
    });


    return (
        <FormContainer maxWidth='700px'
            handleSubmit={handleSubmit(onSubmit)}
        >
            <MapListItem Component={Input} Items={items} other={control} />
            <FormButton />
        </FormContainer>
    )
}
export default ExperienceModal