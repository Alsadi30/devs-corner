import { Box, PropTypes, Typography } from '@mui/material';
import React from 'react'
import MapListItem from '../MapListItem'
import { GridDirection } from '@mui/material/Grid/index'

import { ProjectItemProps } from '../../../../client/src/components/SectionItems/ProjectItem';
import { CredentialProps } from '../../../../client/src/components/SectionItems/CredentialItem';
import { SkillItemProps } from '../../../../client/src/components/SectionItems/SkillItem';
import { EducationProps } from '../../../../client/src/components/SectionItems/EducationItem/index';
import { ExperienceProps } from '../../../../client/src/components/SectionItems/ExperienceItem/index';


export interface SectionBodyProps {
    Component?: React.ReactNode | React.FunctionComponent<SkillItemProps> | React.FunctionComponent<EducationProps> | React.FunctionComponent<ProjectItemProps> | React.FunctionComponent<CredentialProps> | React.FunctionComponent<ExperienceProps>
    Items?: Array<object>
    other?: any
    text?: string
    direction?: GridDirection
}

const SectionBody = ({ Component, Items, other, text, direction = 'row' }: SectionBodyProps) => {
    return (
        <Box pl={3} pr={3} display={'flex'} flexDirection={direction} flexWrap={'wrap'} >

            {text && <Typography pl={1.3} variant='body1' color={'info.light'} component={'h1'} > {text} </Typography>}

            {!text && Items && Component && <MapListItem Component={Component} Items={Items} other={other} />}

        </Box>
    )
}

export default SectionBody