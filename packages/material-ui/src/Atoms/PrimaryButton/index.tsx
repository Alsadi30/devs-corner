import { Button } from '@mui/material'
import React from 'react'
import { primaryButtonStyle } from './PrimaryButton.style'

type Props = {}

const PrimaryButton = (props: Props) => {
    return (
        <Button variant='contained' sx={primaryButtonStyle} >Primary Button</Button>
    )
}

export default PrimaryButton