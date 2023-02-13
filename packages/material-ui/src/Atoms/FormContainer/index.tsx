import { Box } from '@mui/material'
import React from 'react'
import { FormContaineerStyle } from './FormContainer.style'

type FormContainerProps = {
    children: React.ReactNode,
    style?: object
}

const FormContaineer = ({ children, style }: FormContainerProps) => {
    return (
        <Box component="form"
            sx={{ ...style, ...FormContaineerStyle }}
            noValidate
            autoComplete="off" >
            {children}
        </Box>
    )
}

export default FormContaineer