import React, { useState } from 'react'
import Section from '../../../../../material-ui/src/Organisms/Section/index';
import ExperienceItem from '../../SectionItems/ExperienceItem/index';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import ExperienceModal from '../../ModalItems/ExperienceModal';

interface EXSProps {
    experience: Array<object>
}

const ExperienceSection = ({ experience }: EXSProps) => {

    const [expopen, setExpOpen] = useState(false);

    const handleExperience = () => {
        setExpOpen(!expopen);
    };

    const handleExpSubmit = (data: object) => {
        console.log(data)
        handleExperience()
    };


    return (
        <>  <Section
            title='Experience'
            Component={ExperienceItem}
            Items={experience}
            handleClick={handleExperience}
        />
            <CustomizedDialogs
                title='Add Experience'
                open={expopen}
                handleClose={handleExperience}
            >
                <ExperienceModal onSubmit={handleExpSubmit} />
            </CustomizedDialogs>
        </>
    )
}

export default ExperienceSection