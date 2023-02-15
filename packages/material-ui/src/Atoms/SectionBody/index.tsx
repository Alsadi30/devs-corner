import { Box } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const SectionBody = ({ children }: Props) => {
    return (
        <Box p={3} >
            {children}
        </Box>
    )
}

export default SectionBody