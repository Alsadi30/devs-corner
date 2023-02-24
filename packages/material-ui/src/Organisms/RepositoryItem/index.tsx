import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import IconWithText from '../../Molecules/IconWithText';
import GitHubIcon from '@mui/icons-material/GitHub';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ItemTitle from '../../Molecules/ItemTitleWithIcon';

export interface RepositoryItemProps {
    item: {
        title: string
        description: string
        gitlink: string
        livelink: string
    }
}

const RepositoryItem = ({ item }: RepositoryItemProps) => {

    const { title, description, gitlink, livelink } = item

    return (
        <Grid container flexDirection={'column'} p={2} >
            <ItemTitle title={title} />
            <Typography mb={.5} variant='subtitle1' color={'info.light'}  >{description}</Typography>

            <Grid container  >
                <Grid pr={5} >
                    <IconWithText text='Github' > <GitHubIcon fontSize='12px' color='info' />  </IconWithText>
                </Grid>
                <Grid>
                    <IconWithText text='Live URL' > <AttachFileIcon fontSize='12px' color='info' />  </IconWithText>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default RepositoryItem





