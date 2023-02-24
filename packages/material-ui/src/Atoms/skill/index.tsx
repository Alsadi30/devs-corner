import { Grid, Typography } from '@mui/material'
import React from 'react'
import Image from '../Avatars/Image'
import ImageAvatar from '../Avatars/ImageAvatar';

interface SkillProps {
  item: {
    name: string
    thumbnail: string
  }

}

const Skill = ({ item }: SkillProps) => {

  return (
    <Grid container item p={.5}  >
      <Grid pr={1} >
        <ImageAvatar Size={15} Txt='JS' Src={item.thumbnail} />
      </Grid>
      <Grid>
        <Typography variant='body2' color={'info.light'} >{item.name}</Typography>
      </Grid>
    </Grid>
  )
}

export default Skill