import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomizedDialogs from '../../../../material-ui/src/Atoms/Modal/index';
import BasicProfile from '../../../../material-ui/src/Organisms/BasicProfile/index';
import Layout from '../../../../material-ui/src/Organisms/Layout';
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
import RepositoryItem from '../../components/SectionItems/RepositoryItem';
import SkillSection from '../../components/SectionItems/SkillSection';
import SocialMedia from '../../components/SectionItems/SocialMediaSection';
import { useGetUserQuery } from '../../features/user/userApi';

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
		src: CoverPath,
		achievedAt: '2nd June 2023',
		duration: '1.5 year',
	},
	{
		title: 'FrontEnd BootCamp',
		institution: 'Stack Learner',
		src: CoverPath,
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

const Dashboard = ({}: Props) => {
	const [aboutopen, setAOpen] = useState(false);
	const [skillopen, setSOpen] = useState(false);
	const [repoopen, setRepoOpen] = useState(false);
	const [credopen, setCredOpen] = useState(false);
	const [eduopen, setEduOpen] = useState(false);
	const [expopen, setExpOpen] = useState(false);
	const [profileopen, setProfileOpen] = useState(false);

	//================== It wil be User not profile =========================
	const auth = useSelector((state) => state?.auth);
	const {
		data: userData,
		isError,
		isLoading,
	} = useGetUserQuery(auth.user.id);
	console.log(userData);
	//===========================================

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
				CoverPath={CoverPath}
				Location='Sylhet'
				Name='Sadi'
				Photo={ProfilePic}
				Position='Front End Developer'
				handleClick={handleProfile}
			/>
			<LinkSection />
			<Section
				title='About'
				text='I am front end developer'
				handleClick={handleAbout}
			/>
			<SkillSection Items={Items} handleClick={handleSkill} />
			<Section
				title='Projects'
				Component={RepositoryItem}
				Items={repo}
				direction='column'
				handleClick={handleRepo}
			/>
			<Section
				title='Credentials'
				Component={CredentialItem}
				Items={Cred}
				handleClick={handleCredential}
			/>
			<Section
				title='Education'
				Component={EducationItem}
				Items={Edu}
				handleClick={handleEducation}
			/>
			<Section
				title='Experience'
				Component={ExperienceItem}
				Items={Exp}
				handleClick={handleExperience}
			/>
			<SocialMedia items={Social} />
			<CustomizedDialogs
				title='About'
				open={aboutopen}
				handleClose={handleAbout}
			>
				<AboutModal />
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
				<ProfileModal />
			</CustomizedDialogs>
		</Layout>
	);
};

export default Dashboard;
