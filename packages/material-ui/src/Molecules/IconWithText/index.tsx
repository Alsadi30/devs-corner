import React, { PropsWithChildren } from 'react'
import { Grid, Typography } from '@mui/material';

interface IconWithTextProps {
    children: any
    text: string
}

const IconWithText = ({ children, text }: PropsWithChildren<IconWithTextProps>) => {
    return (
        <Grid container >
            <Grid item color='info' p={.5} >{children}</Grid>
            <Typography p={.6} variant='subtitle1' color={'info.dark'}>{text}</Typography>
        </Grid>
    )
}

export default IconWithText