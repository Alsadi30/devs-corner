import React from 'react'
import SkillSection from '../../SectionItems/SkillSection'
import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import SkillModal from '../../ModalItems/SkillModal';

interface SSProps {
    skills: Array<object>
}

const SkillSections = ({ skills }: SSProps) => {

    const [skillopen, setSOpen] = useState(false);

    const handleSkill = () => {
        setSOpen(!skillopen);
    };

    const handleSkillSubmit = (data: object) => {
        console.log(data)
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