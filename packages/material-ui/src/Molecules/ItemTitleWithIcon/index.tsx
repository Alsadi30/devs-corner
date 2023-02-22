import React from 'react'
import { Typography, Grid, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import OurButton from '../../Atoms/Button';

export interface ItemtitleProps {
    title: string
}

const ItemTitle = ({ title }: ItemtitleProps) => {
    return (
        <Grid container justifyContent={'space-between'} pb={.5} >
            <Grid item >
                <Typography mb={.5} variant='h5' color={'info.dark'} > {title} </Typography>
            </Grid>
            <Grid item  >
                <OurButton>
                    <EditIcon fontSize='small' color={'primary'} />
                </OurButton>
                <OurButton >
                    <DeleteForeverIcon fontSize='small' color={'primary'} />
                </OurButton>
            </Grid>
        </Grid>
    )
}

export default ItemTitle