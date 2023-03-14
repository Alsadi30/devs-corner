import React from 'react'
import SkillSection from '../../SectionItems/SkillSection'
import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import SkillModal from '../../ModalItems/SkillModal';
import { useGetSkillQuery } from '../../../features/skill/skillApi';

interface SSProps {
    skills: Array<object>
}

const SkillSections = ({ skills }: SSProps) => {

    let id = ''
    const { data: skillData, isLoading, isError } = useGetSkillQuery(id);
    const [skillopen, setSOpen] = useState(false);

    const handleSkill = () => {
        setSOpen(!skillopen);
    };

    const handleSkillSubmit = (data: object) => {
        let skill = skillData && skillData.find((item: any) => item.name === data.skill)

        handleSkill()
    };

    return (
        <>
            <SkillSection Items={skills} handleClick={handleSkill} />
            <CustomizedDialogs
                title='Skill'
                open={skillopen}
                handleClose={handleSkill}
            >
                <SkillModal onSubmit={handleSkillSubmit} />
            </CustomizedDialogs>
        </>
    )
}

export default SkillSections