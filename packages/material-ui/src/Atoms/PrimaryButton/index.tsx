import { Button } from '@mui/material'
import React from 'react'
import { primaryButtonStyle } from './PrimaryButton.style'

interface PrimaryButtonProps {
    title: string
    handleClick: () => void
}

const PrimaryButton = ({ title, handleClick }: PrimaryButtonProps) => {
    return (
        <Button variant='contained' onClick={handleClick} sx={primaryButtonStyle} >{title}</Button>
    )
}

export default PrimaryButton