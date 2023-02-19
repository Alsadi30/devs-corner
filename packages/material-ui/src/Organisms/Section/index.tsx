import React from 'react'
import { Grid } from '@mui/material';
import SectionHead from '../../Molecules/SectionHead';
import SectionBody from '../../Atoms/SectionBody';

type SectionProps = {
    title: string,
    handleClick: () => void,
    items: Array<object>
}

const Section = ({ title, handleClick }: SectionProps) => {
    return (
        <Grid>
            <SectionHead title={title} handleClick={handleClick} />
            <SectionBody >

            </SectionBody>
        </Grid>
    )
}

export default Section