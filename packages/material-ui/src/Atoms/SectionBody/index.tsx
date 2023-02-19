import { Box, PropTypes, Typography } from '@mui/material';
import React from 'react'
import MapListItem from '../MapListItem'
import { GridDirection } from '@mui/material/Grid/index'

export interface SectionBodyProps {
    Component?: React.ReactNode
    Items?: Array<object>
    other?: any
    text?: string
    direction?: GridDirection
}

const SectionBody = ({ Component, Items, other, text, direction = 'row' }: SectionBodyProps) => {
    return (
        <Box p={3} display={'flex'} flexDirection={direction} >

            {text && <Typography variant='h5' color={'info.light'} component={'p'} > {text} </Typography>}

            {!text && Items && Component && <MapListItem Component={Component} Items={Items} other={other} />}

        </Box>
    )
}

export default SectionBody