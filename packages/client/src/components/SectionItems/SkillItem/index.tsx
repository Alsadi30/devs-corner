import React from 'react'
import { Grid } from '@mui/material';
import ItemTitle, { ItemtitleProps } from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon/index';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import Skill from '../../../../../material-ui/src/Atoms/skill/index';
import { useState } from 'react';

type item = {
    name: string,
    thumbnail: string,
    skilltype: {
        name: string
    }
}


export interface SkillItemProps extends ItemtitleProps {
    item: { name: string }
    other: any
}
const SkillItem: React.FunctionComponent<SkillItemProps> = ({ item, other }: SkillItemProps) => {

    const filterSkill = other.filter((i: item) => i.skilltype.name === item.name)

    return (
        <Grid container px={2} pt={1.7} flexWrap={'wrap'} >
            <ItemTitle title={item?.name} showIcon={false} />
            <Grid container flexDirection={'row'} >
                <MapListItem Component={Skill} Items={filterSkill} />
            </Grid >
        </Grid>
    )
}

export default SkillItem