import React from 'react'
import { Typography, Grid, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import OurButton from '../../Atoms/Button';
import { useState } from 'react';


export interface ItemtitleProps {
    title: string
    color?: string
    showIcon: boolean
    handleEdit: () => void
    handleDelete: () => void
}

const ItemTitle = ({ title, color = 'info.dark', showIcon, handleDelete, handleEdit }: ItemtitleProps) => {



    return (

        <Grid container justifyContent={'space-between'} pb={.5}  >
            <Grid item >
                <Typography mb={.5} variant='h5' color={color} > {title} </Typography>
            </Grid>
            <Grid item style={{ visibility: showIcon ? 'visible' : 'hidden' }}  >
                <OurButton handleClick={handleEdit}  >
                    <EditIcon fontSize='small' color={'primary'} />
                </OurButton>
                <OurButton handleClick={handleDelete} >
                    <DeleteForeverIcon fontSize='small' color={'primary'} />
                </OurButton>

            </Grid>

        </Grid>
    )
}

export default ItemTitle