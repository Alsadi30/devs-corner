import React from 'react'
import { Grid } from '@mui/material';
import ItemTitle, { ItemtitleProps } from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon/index';
import MapListItem from '../../../../../material-ui/src/Atoms/MapListItem';
import Skill from '../../../../../material-ui/src/Atoms/skill/index';

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
    console.log(other)
    const filterSkill = other.filter((i: item) => i.skilltype.name === item.name)

    const handleDeleteSkill = () => {
        console.log(filterSkill)
    }

    const handleEditSkill = () => {

    }

    // 
    return (
        <Grid container px={2} pt={1.7} flexWrap={'wrap'} >
            <ItemTitle title={item?.name} handleDelete={handleDeleteSkill} handleEdit={handleEditSkill} />
            <Grid container flexDirection={'row'} >
                <MapListItem Component={Skill} Items={filterSkill} />
            </Grid >
        </Grid>
    )
}

export default SkillItem