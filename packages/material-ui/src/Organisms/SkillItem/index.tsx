import React from 'react'
import ItemTitle, { ItemtitleProps } from '../../Molecules/ItemTitleWithIcon'
import MapListItem from '../../Atoms/MapListItem'
import Skill from '../../Atoms/skill'
import { Grid } from '@mui/material';

type item = {
    name: string,
    thumbnail: string,
    type: string
}


export interface SkillItemProps extends ItemtitleProps {
    item: { name: string }
    other: any
}
const SkillItem: React.FunctionComponent<SkillItemProps> = ({ item, other }: SkillItemProps) => {

    const filterSkill = other.filter((i: item) => i.type === item.name)
    // maxWidth={'33%'}
    return (
        <Grid container px={2} pt={1.7} flexWrap={'wrap'}   >
            < ItemTitle title={item?.name} />
            <Grid container flexDirection={'row'} >
                <MapListItem Component={Skill} Items={filterSkill} />
            </Grid >
        </Grid>
    )
}

export default SkillItem