import { Grid, Typography } from '@mui/material'
import React from 'react'
import Image from '../Avatars/Image'
import ImageAvatar from '../Avatars/ImageAvatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react';

interface SkillProps {
  item: {
    name: string
    thumbnail: string
  }

}

const Skill = ({ item }: SkillProps) => {

  const [showIcon, setShowIcon] = useState(false)

  const handleDeleteSkill = () => {
    let confirmed = window.confirm('Do you really want to delete it?')
    if (confirmed) {

    }
  }

  return (
    <Grid container onMouseOver={() => setShowIcon(true)} onMouseOut={() => setShowIcon(false)} px={5} py={1} width={'50%'} justifyContent={'space-between'} flexWrap={'wrap'} >
      <Grid item pb={1} >
        <Grid container>
          <Grid pr={1} >
            <ImageAvatar Size={15} Txt='JS' Src={item.thumbnail} />
          </Grid>
          <Grid>
            <Typography variant='body1' color={'info.light'} >{item.name}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item >
        {showIcon && <DeleteForeverIcon onClick={handleDeleteSkill} fontSize='small' color={'primary'} />
        }</Grid>
    </Grid>
  )
}

export default Skill