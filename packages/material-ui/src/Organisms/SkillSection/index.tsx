import React from 'react'
import Section from '../Section'
import SkillItem from '../SkillItem'

const Types = [{ name: "Language" }, { name: "Tools" }, { name: "Library" }, { name: 'Technology' }, { name: 'Stack' }, { name: "Framework" }]

type Props = {
    Items: Array<object>

}

const SkillSection = ({ Items }: Props) => {
    return (
        <Section title='Skill' Component={SkillItem} Items={Types} other={Items} />
    )
}

export default SkillSection