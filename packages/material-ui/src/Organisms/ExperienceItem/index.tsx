import React from 'react'
import { Grid, Typography } from '@mui/material';
import ItemTitle from '../../Molecules/ItemTitleWithIcon';
import KeyValue from '../../Atoms/KeyValue';

export interface ExperienceProps {
    item: {
        position: string
        companyName: string
        startAt: string
        endAt: string
    }
}

const ExperienceItem = ({ item }: ExperienceProps) => {
    const { companyName, endAt, position, startAt } = item
    return (
        <Grid container p={2} >
            <ItemTitle title={position} />
            <Typography variant='body2' color={'info.light'} > {companyName} </Typography>
            <Typography variant='body2' color={'info.light'} px={2} > . </Typography>
            <Typography variant='body2' color={'info.light'}  > {startAt} </Typography>
            <Typography variant='body2' color={'info.light'} px={1} > - </Typography>
            <Typography variant='body2' color={'info.light'}  > {endAt} </Typography>
        </Grid>
    )
}

export default ExperienceItem