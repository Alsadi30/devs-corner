import React from 'react'
import { Typography, Grid } from '@mui/material';

interface KeyValueProps {
    property: string
    value: string | number
    small?: boolean
    sx?: object
}

const KeyValue = ({ property, value, small = false, sx }: KeyValueProps) => {

    return (
        <Grid container pt={.5} sx={sx} >
            <Typography variant={small ? "subtitle1" : "body1"} color={'info.light'}  > {property}  </Typography>
            <Typography variant={small ? "subtitle1" : "body1"} pl={.3} pr={.3} color={'info.light'}  >  -  </Typography>

            <Typography variant={small ? "subtitle1" : "body2"} color={'info.dark'}  >  {value}</Typography>
        </Grid>
    )
}

export default KeyValue