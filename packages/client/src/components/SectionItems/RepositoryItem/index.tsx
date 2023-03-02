import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import IconWithText from '../../../../../material-ui/src/Molecules/IconWithText';
import GitHubIcon from '@mui/icons-material/GitHub';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ItemTitle, { ItemtitleProps } from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon';
import ProjectModal from '../../ModalItems/ProjectModal';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import { useState } from 'react';


export interface RepositoryItemProps {
    item: {
        id: string
        name: string
        description: string
        repoUrl: string
        liveUrl: string
    }
}

const RepositoryItem = ({ item }: RepositoryItemProps) => {

    console.log(item)
    const { liveUrl, name, repoUrl, description } = item

    const [repoopen, setRepoOpen] = useState(false);



    const handleProject = () => {
        setRepoOpen(!repoopen);
    };

    const handleProjectDelete = () => {
        alert('Do you want to delete this project?')
    }

    return (
        <Grid container flexDirection={'column'} p={2} >
            <ItemTitle title={name} handleDelete={handleProjectDelete} handleEdit={handleProject} />
            <Typography mb={.5} variant='body1' color={'info.light'}  >{description}</Typography>

            <Grid container  >
                <Link to={repoUrl} target='_blank' >
                    <Grid pr={5} >
                        <IconWithText text='Github' > <GitHubIcon fontSize='12px' color='info' />  </IconWithText>
                    </Grid>
                </Link>
                <Link to={liveUrl} target='_blank' >
                    <Grid>
                        <IconWithText text='Live URL' > <AttachFileIcon fontSize='12px' color='info' />  </IconWithText>
                    </Grid>
                </Link>
            </Grid>
            <CustomizedDialogs
                title='Update Project'
                open={repoopen}
                handleClose={handleProject}
            >
                <ProjectModal />
            </CustomizedDialogs>
        </Grid >
    )
}

export default RepositoryItem





