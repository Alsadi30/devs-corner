import React from 'react'
import { Grid } from '@mui/material';
import IconWithText from '../../Molecules/IconWithText';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface Props {

}

const LinkSection = (props: Props) => {
    return (
        <Grid container flexWrap={'nowrap'} >
            <IconWithText text='Build Resume' variant={'h3'} color='info.light' > <PostAddIcon color='info' /> </IconWithText>
            <IconWithText text='Portfolio' variant={'h3'} color='info.light'   > <AttachFileIcon color='info' /> </IconWithText>
        </Grid>
    )
}

export default LinkSection