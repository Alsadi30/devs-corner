import React from 'react'
import { Grid } from '@mui/material';

import PostAddIcon from '@mui/icons-material/PostAdd';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconWithText from '../../../../../material-ui/src/Molecules/IconWithText';

interface Props {

}

const LinkSection = (props: Props) => {
    return (
        <Grid container justifyContent={'space-between'} px={2} >
            <Grid item >
                <IconWithText text='Build Resume' variant={'h3'} color='info.light' > <PostAddIcon color='info' /> </IconWithText>
            </Grid>
            <Grid item >
                <IconWithText text='Portfolio' variant={'h3'} color='info.light'   > <AttachFileIcon color='info' /> </IconWithText>
            </Grid>
        </Grid>
    )
}

export default LinkSection