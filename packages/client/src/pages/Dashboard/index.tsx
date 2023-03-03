import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomizedDialogs from '../../../../material-ui/src/Atoms/Modal/index';

import Layout from '../../components/Layout';
import Section from '../../../../material-ui/src/Organisms/Section/index';
import ProfilePic from '../../assets/avatar.jpg';
import CoverPath from '../../assets/Cover.jpg';
import JS from '../../assets/JS.webp';
import AboutModal from '../../components/ModalItems/AboutModal';
import CredentialModel from '../../components/ModalItems/CredentialModal';
import EducationModal from '../../components/ModalItems/EducationModal';
import ExperienceModal from '../../components/ModalItems/ExperienceModal';
import ProfileModal from '../../components/ModalItems/ProfileModal';
import ProjectModal from '../../components/ModalItems/ProjectModal';
import SkillModal from '../../components/ModalItems/SkillModal';
import CredentialItem from '../../components/SectionItems/CredentialItem';
import EducationItem from '../../components/SectionItems/EducationItem';
import ExperienceItem from '../../components/SectionItems/ExperienceItem';
import LinkSection from '../../components/SectionItems/LinkSection';
import RepositoryItem from '../../components/SectionItems/ProjectItem';
import SkillSection from '../../components/SectionItems/SkillSection';
import SocialMedia from '../../components/SectionItems/SocialMediaSection';
import { useGetUserQuery } from '../../features/user/userApi';
import { Socialmedia } from '../../../../server/models/socialmedia';
import BasicProfile from '../../components/SectionItems/BasicProfile';
import ProjectItem from '../../components/SectionItems/ProjectItem';


type Props = {};

const Dashboard = ({ }: Props) => {
    const [aboutopen, setAOpen] = useState(false);
    const [skillopen, setSOpen] = useState(false);
    const [repoopen, setRepoOpen] = useState(false);
    const [credopen, setCredOpen] = useState(false);
    const [eduopen, setEduOpen] = useState(false);
    const [expopen, setExpOpen] = useState(false);
    const [profileopen, setProfileOpen] = useState(false);


    const auth = useSelector((state) => state?.auth);
    const {
        data: userData,
        isError,
        isLoading,
    } = useGetUserQuery(auth.user.id);


    if (isLoading) {
        return <div>...Loading</div>
    }

    const { profile, projects, skills, credentials, education, experience, socialmedia } = userData[0]


    const handleAbout = () => {
        setAOpen(!aboutopen);
    };

    const handleSkill = () => {
        setSOpen(!skillopen);
    };

    const handleRepo = () => {
        setRepoOpen(!repoopen);
    };

    const handleCredential = () => {
        setCredOpen(!credopen);
    };

    const handleEducation = () => {
        setEduOpen(!eduopen);
    };

    const handleExperience = () => {
        setExpOpen(!expopen);
    };

    const handleProfile = () => {
        setProfileOpen(!profileopen);
    };

    return (
        <Layout>
            <BasicProfile
                profileData={profile}
                handleClick={handleProfile}
            />
            <LinkSection />
            <Section
                title='About'
                text={profile.about}
                handleClick={handleAbout}
            />
            <SkillSection Items={skills} handleClick={handleSkill} />
            <Section
                title='Projects'
                Component={ProjectItem}
                Items={projects}
                direction='column'
                handleClick={handleRepo}
            />
            <Section
                title='Credentials'
                Component={CredentialItem}
                Items={credentials}
                handleClick={handleCredential}
            />
            <Section
                title='Education'
                Component={EducationItem}
                Items={education}
                handleClick={handleEducation}
            />
            <Section
                title='Experience'
                Component={ExperienceItem}
                Items={experience}
                handleClick={handleExperience}
            />
            <SocialMedia items={socialmedia} />
            <CustomizedDialogs
                title='About'
                open={aboutopen}
                handleClose={handleAbout}
            >
                <AboutModal about={profile.about} />
            </CustomizedDialogs>
            <CustomizedDialogs
                title='Skill'
                open={skillopen}
                handleClose={handleSkill}
            >
                <SkillModal />
            </CustomizedDialogs>
            <CustomizedDialogs
                title='Add Project'
                open={repoopen}
                handleClose={handleRepo}
            >
                <ProjectModal />
            </CustomizedDialogs>
            <CustomizedDialogs
                title='Add Credential'
                open={credopen}
                handleClose={handleCredential}
            >
                <CredentialModel />
            </CustomizedDialogs>
            <CustomizedDialogs
                title='Add Education'
                open={eduopen}
                handleClose={handleEducation}
            >
                <EducationModal />
            </CustomizedDialogs>
            <CustomizedDialogs
                title='Add Experience'
                open={expopen}
                handleClose={handleExperience}
            >
                <ExperienceModal />
            </CustomizedDialogs>

            <CustomizedDialogs
                title='Update Profile'
                open={profileopen}
                handleClose={handleProfile}
            >
                <ProfileModal data={profile} />
            </CustomizedDialogs>
        </Layout>
    );
};

export default Dashboard;
