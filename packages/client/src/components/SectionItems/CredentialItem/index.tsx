import React from 'react'
import { Grid, Typography } from '@mui/material';
import ItemTitle from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon';
import Image from '../../../../../material-ui/src/Atoms/Avatars/Image';
import KeyValue from '../../../../../material-ui/src/Atoms/KeyValue';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import { useState } from 'react';
import CredentialModel from '../../ModalItems/CredentialModal';

export interface CredentialProps {
    item: {
        title: string
        institution: string
        image: string
        achivedAt: number
        courseDuration: string
        cartificateId: string
        cartificateUrl: string
    }
}

const CredentialItem = ({ item }: CredentialProps) => {

    const { title, institution, cartificateId, cartificateUrl, image, achivedAt, courseDuration } = item
    const [credopen, setCredOpen] = useState(false);

    const handleCredential = () => {
        setCredOpen(!credopen);
    };

    const handleCredentialDelete = () => {
        alert('Do you want to delete this Credential?')
    }

    return (
        <Grid container flexDirection={'column'} p={2} maxWidth={'50%'} pr={7} >

            <ItemTitle title={title} handleDelete={handleCredentialDelete} handleEdit={handleCredential} />
            <Typography pb={.5} variant='body1' color={'info.light'} >
                {institution}
            </Typography>
            <Image Src={image} Height='150px' Width='210px' />
            <KeyValue property='Achieved At' value={achivedAt} />
            <KeyValue property='Duration' value={courseDuration} />

            <CustomizedDialogs
                title='Update Credential'
                open={credopen}
                handleClose={handleCredential}
            >
                <CredentialModel data={item} />
            </CustomizedDialogs>
        </Grid>
    )
}

export default CredentialItem