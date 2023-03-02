import { Box } from '@mui/material'
import React from 'react'
import { FormContaineerStyle } from './FormContainer.style'

type FormContainerProps = {
    children: React.ReactNode,
    style?: object,
    handleSubmit: () => void,
    maxWidth?: string
}

const FormContainer = ({ maxWidth, children, style, handleSubmit }: FormContainerProps) => {
    return (
        <Box component="form"
            sx={{ maxWidth: { maxWidth }, ...style, ...FormContaineerStyle }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {children}
        </Box>
    )
}

export default FormContainer