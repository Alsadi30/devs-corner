import React from 'react'
import Section from '../../../../../material-ui/src/Organisms/Section'
import SkillItem from '../SkillItem'

const Types = [{ name: "Language" }, { name: "Tools" }, { name: "Library" }, { name: 'Technology' }, { name: 'Stack' }, { name: "Framework" }]

interface Props {
    Items: Array<object>
    handleClick: () => void
}

const SkillSection = ({ Items, handleClick }: Props) => {
    console.log(Items)
    return (
        <Section title='Skill' handleClick={handleClick} Component={SkillItem} Items={Types} other={Items} />
    )
}

export default SkillSection