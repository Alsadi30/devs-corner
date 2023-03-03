import React from 'react'
import { Grid, Typography } from '@mui/material';
import ItemTitle from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon';
import KeyValue from '../../../../../material-ui/src/Atoms/KeyValue';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import EducationModal from '../../ModalItems/EducationModal';
import { useState } from 'react';


export interface EducationProps {
    item: {
        title: string
        result: string
        passingyear: number
        institute: string
    }
}

const EducationItem = ({ item }: EducationProps) => {

    console.log(item)

    const { title, institute, passingyear, result } = item
    const [eduopen, setEduOpen] = useState(false);
    const handleEducation = () => {
        setEduOpen(!eduopen);
    };

    const handleEducationDelete = () => {
        alert('Do you want to delete this Degree?')
    }

    return (
        <Grid container p={2} justifyContent={'space-between'} >
            <Grid minWidth={'20%'} >
                <ItemTitle handleDelete={handleEducationDelete} handleEdit={handleEducation} title={title} color={'info.light'} />
                <Typography variant='body1' color={'info.dark'}  >
                    {institute}
                </Typography>
            </Grid>
            <Grid container maxWidth={'68%'} justifyContent={'flex-end'} >
                <Grid container  >
                    <KeyValue property='CGPA' value={result} sx={{ justifyContent: 'flex-end' }} />
                    <KeyValue property='Passing Year' value={passingyear} sx={{ justifyContent: 'flex-end' }} />
                </Grid>
            </Grid>
            <CustomizedDialogs
                title='Update Education'
                open={eduopen}
                handleClose={handleEducation}
            >
                <EducationModal />
            </CustomizedDialogs>
        </Grid>
    )
}

export default EducationItem