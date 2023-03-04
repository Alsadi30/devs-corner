import React from 'react'
import Section from '../../../../../material-ui/src/Organisms/Section/index';
import EducationItem from '../../SectionItems/EducationItem/index';
import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import EducationModal from '../../ModalItems/EducationModal';
import { useCreateEducationMutation } from '../../../features/education/educationApi';

interface ESProps {
    education: Array<object>
}

const EducationSection = ({ education }: ESProps) => {
    const [createEducation, { data: eduData }] = useCreateEducationMutation();
    const [eduopen, setEduOpen] = useState(false);

    const handleEducation = () => {
        setEduOpen(!eduopen);
    };

    const handleEduSubmit = (data: object) => {
        createEducation(data);
        handleEducation()
    };


    return (
        <>
            <Section
                title='Education'
                Component={EducationItem}
                Items={education}
                handleClick={handleEducation}
            />

            <CustomizedDialogs
                title='Add Education'
                open={eduopen}
                handleClose={handleEducation}
            >
                <EducationModal onSubmit={handleEduSubmit} />
            </CustomizedDialogs></>

    )
}

export default EducationSection