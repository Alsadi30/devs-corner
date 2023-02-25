import { Box, PropTypes, Typography } from '@mui/material';
import React from 'react'
import MapListItem from '../MapListItem'
import { GridDirection } from '@mui/material/Grid/index'
import { SkillItemProps } from '../../Organisms/SkillItem';
import { EducationProps } from '../../Organisms/EducationItem';
import { RepositoryItemProps } from '../../Organisms/RepositoryItem';
import { CredentialProps } from '../../Organisms/CredentialItem';
import { ExperienceProps } from '../../Organisms/ExperienceItem';

export interface SectionBodyProps {
    Component?: React.ReactNode | React.FunctionComponent<SkillItemProps> | React.FunctionComponent<EducationProps> | React.FunctionComponent<RepositoryItemProps> | React.FunctionComponent<CredentialProps> | React.FunctionComponent<ExperienceProps>
    Items?: Array<object>
    other?: any
    text?: string
    direction?: GridDirection
}

const SectionBody = ({ Component, Items, other, text, direction = 'row' }: SectionBodyProps) => {
    return (
        <Box pl={3} pr={3} display={'flex'} flexDirection={direction} flexWrap={'wrap'} >

            {text && <Typography variant='h5' color={'info.light'} component={'p'} > {text} </Typography>}

            {!text && Items && Component && <MapListItem Component={Component} Items={Items} other={other} />}

        </Box>
    )
}

export default SectionBody