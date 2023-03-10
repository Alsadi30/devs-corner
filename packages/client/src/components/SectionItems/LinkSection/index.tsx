import AttachFileIcon from '@mui/icons-material/AttachFile';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import IconWithText from '../../../../../material-ui/src/Molecules/IconWithText';

interface Props {

}

const LinkSection = (props: Props) => {
    return (
        <Grid container justifyContent={'space-between'} px={2} >
            <Link to={'/resume'} >
                <Grid item >
                    <IconWithText text='Build Resume' variant={'h3'} color='info.light' > <PostAddIcon color='info' /> </IconWithText>
                </Grid>
            </Link>
            <Grid item >
                <IconWithText text='Portfolio' variant={'h3'} color='info.light'   > <AttachFileIcon color='info' /> </IconWithText>
            </Grid>
        </Grid>
    )
}

export default LinkSection