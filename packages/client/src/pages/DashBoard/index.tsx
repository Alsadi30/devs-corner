import * as React from 'react';
import CustomizedDialogs from '../../../../material-ui/src/Atoms/Modal/index';
import BasicProfile from '../../../../material-ui/src/Organisms/BasicProfile/index';
import CredentialItem from '../../../../material-ui/src/Organisms/CredentialItem/index';
import EducationItem from '../../../../material-ui/src/Organisms/EducationItem/index';
import ExperienceItem from '../../../../material-ui/src/Organisms/ExperienceItem/index';
import Layout from '../../../../material-ui/src/Organisms/Layout';
import LinkSection from '../../../../material-ui/src/Organisms/LinkSection/index';
import AboutModal from '../../../../material-ui/src/Organisms/ModalItems/AboutModal/index';
import CredentialModel from '../../../../material-ui/src/Organisms/ModalItems/CredentialModal/index';
import EducationModal from '../../../../material-ui/src/Organisms/ModalItems/EducationModal/index';

import ProjectModal from '../../../../material-ui/src/Organisms/ModalItems/ProjectModal/index';
import SkillModal from '../../../../material-ui/src/Organisms/ModalItems/SkillModal/index';
import RepositoryItem from '../../../../material-ui/src/Organisms/RepositoryItem';
import Section from '../../../../material-ui/src/Organisms/Section/index';
import SkillSection from '../../../../material-ui/src/Organisms/SkillSection/index';
import SocialMedia from '../../../../material-ui/src/Organisms/SocialMediaSection/index';
import CoverPath from '../../assets/Cover.jpg';
import JS from '../../assets/JS.webp';
import ExperienceModal from '../../../../material-ui/src/Organisms/ModalItems/ExperienceModal/index';

const Items = [
	{
		name: 'Javascript',
		thumbnail: JS,
		type: 'Language',
	},
	{
		name: 'C',
		thumbnail: JS,
		type: 'Language',
	},
	{
		name: 'Github',
		thumbnail: JS,
		type: 'Tools',
	},
	{
		name: 'Figma',
		thumbnail: JS,
		type: 'Tools',
	},
	{
		name: 'VS Code',
		thumbnail: JS,
		type: 'Tools',
	},
	{
		name: 'React',
		thumbnail: JS,
		type: 'Library',
	},
	{
		name: 'Lerna',
		thumbnail: JS,
		type: 'Technology',
	},
	{
		name: 'Nx',
		thumbnail: JS,
		type: 'Technology',
	},
	{
		name: 'Parn',
		thumbnail: JS,
		type: 'Stack',
	},
	{
		name: 'Mean',
		thumbnail: JS,
		type: 'Stack',
	},
	{
		name: 'Marn',
		thumbnail: JS,
		type: 'Stack',
	},
	{
		name: 'Angular',
		thumbnail: JS,
		type: 'Framework',
	},
];

const repo = [
	{
		title: 'Covid',
		description: 'An Ecommerce Application',
		gitlink: 'github.com',
		livelink: 'sdjlfkjs.com',
	},
	{
		title: 'Covid',
		description: 'An Ecommerce Application',
		gitlink: 'github.com',
		livelink: 'sdjlfkjs.com',
	},
	{
		title: 'Covid',
		description: 'An Ecommerce Application',
		gitlink: 'github.com',
		livelink: 'sdjlfkjs.com',
	},
];

const Cred = [
	{
		title: 'FullStack Army',
		institution: 'Stack Learner',
		src: ProfilePic,
		achievedAt: '2nd June 2023',
		duration: '1.5 year',
	},
	{
		title: 'FrontEnd BootCamp',
		institution: 'Stack Learner',
		src: ProfilePic,
		achievedAt: '2nd June 2023',
		duration: '1.5 year',
	},
];

const Edu = [
	{
		title: 'HSC',
		institute: 'M.C College, Sylhet, Bangladesh',
		passingyear: 2020,
		result: 3.6,
	},
	{
		title: 'B.SC in CS',
		institute: 'Sapiyenza University, Italy',
		passingyear: 2020,
		result: 3.6,
	},
];

const Exp = [
	{
		position: 'Front End Developer',
		companyName: 'At Home',
		startAt: '2nd December 2018',
		endAt: 'Till Now',
	},
	{
		position: 'Front End Developer',
		companyName: 'At Home',
		startAt: '2nd December 2016',
		endAt: '24tth June 2018',
	},
];

const Social = [
	{
		url: 'lsdflksdajklfj',
		type: 'facebook',
	},
	{
		url: 'lsdflksdajklfj',
		type: 'linkedIn',
	},
	{
		url: 'lsdflksdajklfj',
		type: 'twitter',
	},
];

type Props = {};

const Dashboard = ({ }: Props) => {
    const [aboutopen, setAOpen] = React.useState(false);
    const [skillopen, setSOpen] = React.useState(false);
    const [repoopen, setRepoOpen] = React.useState(false);
    const [credopen, setCredOpen] = React.useState(false);
    const [eduopen, setEduOpen] = React.useState(false);
    const [expopen, setExpOpen] = React.useState(false);


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
        setExpOpen(!expopen)
    }

    return (
        <Layout>
            <BasicProfile CoverPath={CoverPath} Location="Sylhet" Name="Sadi" Photo={ProfilePic} Position="Front End Developer" />
            <LinkSection />
            <Section title="About" text="I am front end developer" handleClick={handleAbout} />
            <SkillSection Items={Items} handleClick={handleSkill} />
            <Section title="Repositories" Component={RepositoryItem} Items={repo} direction="column" handleClick={handleRepo} />
            <Section title="Credentials" Component={CredentialItem} Items={Cred} handleClick={handleCredential} />
            <Section title="Education" Component={EducationItem} Items={Edu} handleClick={handleEducation} />
            <Section title="Experience" Component={ExperienceItem} Items={Exp} handleClick={handleExperience} />
            <SocialMedia items={Social} />
            <CustomizedDialogs title="About" open={aboutopen} handleClose={handleAbout}  >
                <AboutModal />
            </CustomizedDialogs>
            <CustomizedDialogs title="Skill" open={skillopen} handleClose={handleSkill}  >
                <SkillModal />
            </CustomizedDialogs>
            <CustomizedDialogs title="Add Repository" open={repoopen} handleClose={handleRepo}  >
                <ProjectModal />
            </CustomizedDialogs>
            <CustomizedDialogs title="Add Credential" open={credopen} handleClose={handleCredential}  >
                <CredentialModel />
            </CustomizedDialogs>
            <CustomizedDialogs title="Add Education" open={eduopen} handleClose={handleEducation}  >
                <EducationModal />
            </CustomizedDialogs>
            <CustomizedDialogs title="Add Experience" open={expopen} handleClose={handleExperience}  >
                <ExperienceModal />
            </CustomizedDialogs>
        </Layout>
    );
};

export default Dashboard;
