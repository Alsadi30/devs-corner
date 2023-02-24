import React from 'react'
import { Grid, Typography } from '@mui/material';
import KeyValue from '../../Atoms/KeyValue';
import ItemTitle from '../../Molecules/ItemTitleWithIcon';

interface EducationProps {
    item: {
        title: string
        result: string
        passingyear: number
        institute: string
    }
}

const EducationItem = ({ item }: EducationProps) => {

    const { title, institute, passingyear, result } = item

    return (
        <Grid container p={2} >
            <Grid minWidth={'20%'} >
                <ItemTitle title={title} color={'info.light'} />
                <Typography variant='body2' color={'info.dark'}  >
                    {institute}
                </Typography>
            </Grid>
            <Grid container maxWidth={'68%'} justifyContent={'flex-end'} >
                <Grid container  >
                    <KeyValue property='CGPA' small value={result} sx={{ justifyContent: 'flex-end' }} />
                    <KeyValue property='Passing Year' small value={passingyear} sx={{ justifyContent: 'flex-end' }} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EducationItem