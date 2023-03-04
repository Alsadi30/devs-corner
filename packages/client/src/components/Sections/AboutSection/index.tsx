import React, { useState } from 'react'
import Section from '../../../../../material-ui/src/Organisms/Section'
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import AboutModal from '../../ModalItems/AboutModal';

interface ASProps {
    text?: string
}

const AboutSection = ({ text }: ASProps) => {

    const [aboutopen, setAOpen] = useState(false);

    const handleAbout = () => {
        setAOpen(!aboutopen);
    };

    const handleAboutSubmit = (data: object) => {
        console.log(data)
        handleAbout()
    };

    return (
        <><Section
            title='About'
            text={text}
            handleClick={handleAbout}

        />
            <CustomizedDialogs
                title='About'
                open={aboutopen}
                handleClose={handleAbout}
            >
                <AboutModal onSubmit={handleAboutSubmit} about={text} />
            </CustomizedDialogs>
        </>
    )
}

export default AboutSection