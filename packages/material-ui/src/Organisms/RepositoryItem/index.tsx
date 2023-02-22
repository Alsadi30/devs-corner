import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import IconWithText from '../../Molecules/IconWithText';
import GitHubIcon from '@mui/icons-material/GitHub';


interface RepositoryItemProps {
    title: string
    description: string
    gitlink: string
    livelink: string
}

const RepositoryItem = ({ title, description, gitlink, livelink }: RepositoryItemProps) => {
    return (
        <Grid container flexDirection={'column'} >
            <Typography mb={.5} variant='body1' color={'info.dark'} > Title </Typography>
            <Typography mb={.5} variant='body2' color={'info.light'}  >Paragraph</Typography>
            {/* <Link to={'githum.com'}></Link> */}
            <Grid container>
                <IconWithText text='Github' > <GitHubIcon fontSize='small' color='info' />  </IconWithText>
                <IconWithText text='Live url' > <GitHubIcon fontSize='small' color='info' />  </IconWithText>
            </Grid>
        </Grid >
    )
}

export default RepositoryItem





