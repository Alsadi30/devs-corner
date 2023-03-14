import React, { PropsWithChildren } from 'react'
import { Grid, Typography } from '@mui/material';

interface IconWithTextProps {
    children: any
    text: string
    variant?: any
    color?: string
}

const IconWithText = ({ children, text, variant = 'body2', color = 'info.dark' }: PropsWithChildren<IconWithTextProps>) => {
    return (
        <Grid container >
            <Grid item color='info' pt={.5} >{children}</Grid>
            <Typography px={.6} pt={.8} variant={variant} color={color}>{text}</Typography>
        </Grid>
    )
}

export default IconWithText