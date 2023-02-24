import React from 'react'
import { Grid, Typography } from '@mui/material';
import ItemTitle from '../../Molecules/ItemTitleWithIcon';
import Image from '../../Atoms/Avatars/Image';
import KeyValue from '../../Atoms/KeyValue';

export interface CredentialProps {
    item: {
        title: string
        institution: string
        src: string
        achievedAt: string
        duration: string
    }
}

const CredentialItem = ({ item }: CredentialProps) => {
    const { title, institution, src, achievedAt, duration } = item

    return (
        <Grid container flexDirection={'column'} p={2} maxWidth={'50%'} pr={7} >
            <ItemTitle title={title} />
            <Typography pb={.5} variant='body2' color={'info.light'} >
                {institution}
            </Typography>
            <Image Src={src} Height='150px' Width='210px' />
            <KeyValue small property='Achieved At' value={achievedAt} />
            <KeyValue small property='Duration' value={duration} />
        </Grid>
    )
}

export default CredentialItem