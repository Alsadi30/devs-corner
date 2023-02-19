import React from 'react'
import { Grid } from '@mui/material';
import SectionHead, { SectionHeadProps } from '../../Molecules/SectionHead';

import SectionBody, { SectionBodyProps } from '../../Atoms/SectionBody/index';

interface SectionProps extends SectionBodyProps, SectionHeadProps {
}

const Section = ({ title, handleClick, text, Component, Items, other }: SectionProps) => {
    return (
        <Grid>
            <SectionHead title={title} handleClick={handleClick} />
            <SectionBody text={text} Component={Component} Items={Items} other={other} />
        </Grid>
    )
}

export default Section