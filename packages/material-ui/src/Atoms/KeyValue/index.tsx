import React from 'react'
import { Typography, Grid } from '@mui/material';

interface KeyValueProps {
    property: string
    value: string
    small?: boolean
}

const KeyValue = ({ property, value, small = false }: KeyValueProps) => {

    return (
        <Grid container >
            <Typography variant={small ? "subtitle1" : "body1"} color={'info.light'}  > {property}  </Typography>
            <Typography variant={small ? "subtitle1" : "body1"} pl={.3} pr={.3} color={'info.light'}  >  -  </Typography>

            <Typography variant={small ? "subtitle2" : "body2"} color={'info.dark'}  >  {value}</Typography>
        </Grid>
    )
}

export default KeyValue