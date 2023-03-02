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
        title: string
        description: string
        gitlink: string
        livelink: string
    }
}

const RepositoryItem = ({ item }: RepositoryItemProps) => {

    const [repoopen, setRepoOpen] = useState(false);

    const { title, description, gitlink, livelink } = item

    const handleProject = () => {
        setRepoOpen(!repoopen);
    };

    const handleProjectDelete = () => {
        alert('Do you want to delete this project?')
    }

    return (
        <Grid container flexDirection={'column'} p={2} >
            <ItemTitle title={title} handleDelete={handleProjectDelete} handleEdit={handleProject} />
            <Typography mb={.5} variant='body1' color={'info.light'}  >{description}</Typography>

            <Grid container  >
                <Grid pr={5} >
                    <IconWithText text='Github' > <GitHubIcon fontSize='12px' color='info' />  </IconWithText>
                </Grid>
                <Grid>
                    <IconWithText text='Live URL' > <AttachFileIcon fontSize='12px' color='info' />  </IconWithText>
                </Grid>
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





