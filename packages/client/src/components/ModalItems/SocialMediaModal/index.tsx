import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import FormContainer from '../../../../../material-ui/src/Atoms/FormContainer';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import Input from '../../../../../material-ui/src/Atoms/InputG';
import { Button, TextField } from '@mui/material';
import { socialMediaSchema } from '../../../utils/validation/socialMediaValidation';
import { InputStyle } from '../../../../../material-ui/src/Atoms/InputG/Input.style';
import ItemTitle from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon';

type Props = {}

const inputs = [
    'facebook', 'twitter', 'linkedin', 'github'
]

const SocialMediaModal = (props: Props) => {

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            url: '',
            type: ''
        }, resolver: yupResolver(socialMediaSchema)
    });

    const onSubmit = (data: object) => {
        console.log(data)
    };



    return (
        <FormContainer
            handleSubmit={handleSubmit(onSubmit)}
        >

            <Input item={{ name: "url", type: 'text' }} other={control} />
            <TextField sx={InputStyle} id="filled-select-currency-native"
                fullWidth
                select
                label="Select Type"
                defaultValue="EUR"
                SelectProps={{
                    native: true,
                }}
                variant="filled"
            >
                {inputs.map((value) => (
                    <option style={{ color: 'white', padding: '10px' }} key={value} value={value}>
                        {value}
                    </option>
                ))}
            </TextField>

         /** here We will show the existing socialMedia with edit and delete button  */
            {/* <ItemTitle title='dsfkl' /> */}

            <Button
                variant="contained"
                fullWidth={true}
                sx={{
                    margin: '10px 0px', bgcolor: 'primary.main', color: 'white'
                }} type="submit">Submit</Button>

        </FormContainer>
    )
}
export default SocialMediaModal