import React from 'react'
import { Grid, Typography } from '@mui/material';
import ItemTitle from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon/index';
import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import ExperienceModal from '../../ModalItems/ExperienceModal';


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
    const [expopen, setExpOpen] = useState(false);

    const handleExperience = () => {
        setExpOpen(!expopen);
    };


    const handleExperienceDelete = () => {
        alert('Do you want to delete this Experience?')
    }

    return (
        <Grid container p={2} >
            <ItemTitle handleEdit={handleExperience} handleDelete={handleExperienceDelete} title={position} />
            <Typography variant='body1' color={'info.light'} > {companyName} </Typography>
            <Typography variant='body1' color={'info.light'} px={2} > . </Typography>
            <Typography variant='body1' color={'info.light'}  > {startAt} </Typography>
            <Typography variant='body1' color={'info.light'} px={1} > - </Typography>
            <Typography variant='body1' color={'info.light'}  > {endAt} </Typography>
            <CustomizedDialogs
                title='Add Experience'
                open={expopen}
                handleClose={handleExperience}
            >
                <ExperienceModal />
            </CustomizedDialogs>
        </Grid>
    )
}

export default ExperienceItem