import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import { Grid } from '@mui/material';
import SectionHead from '../../../../../material-ui/src/Molecules/SectionHead';
import SocialMediaModal from '../../ModalItems/SocialMediaModal';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import { useState } from 'react';


type item = {
    url: string
    type: string
}

interface SocialMediaProps {
    items: Array<item>
}

const SocialMedia = ({ items }: SocialMediaProps) => {

    let facebook: string
    let twitter: string
    let linkedIn: string
    let github: string
    let reddit: string

    const filterItems = items.map(item => {
        if (item.type === 'facebook') {
            facebook = item.url
        } else if (item.type === 'twitter') {
            twitter = item.url
        } else if (item.type === 'linkedIn') {
            linkedIn = item.url
        } else if (item.type === 'github') {
            github = item.url
        } else if (item.type === 'reddit') {
            reddit = item.url
        }
    })

    const [openModal, setOpenModal] = useState(false)

    const handleSocialMedia = () => {
        setOpenModal(!openModal)
    }


    return (
        <Grid container pt={3} justifyContent={'center'} >
            <SectionHead title='Social Media' handleClick={handleSocialMedia} />
            <Grid p={1}>
                {github && <GitHubIcon color='info' />}
            </Grid>
            <Grid p={1}>
                {facebook && <FacebookIcon color='info' />}
            </Grid>
            <Grid p={1}>
                {linkedIn && <LinkedInIcon color='info' />}
            </Grid >
            <Grid p={1}>
                {twitter && <TwitterIcon color='info' />}
            </Grid >
            <Grid p={1}>
                {reddit && <RedditIcon color='info' />}
            </Grid >
            <CustomizedDialogs
                title='Add Experience'
                open={openModal}
                handleClose={handleSocialMedia}
            >
                <SocialMediaModal />
            </CustomizedDialogs>

        </Grid >)
}

export default SocialMedia