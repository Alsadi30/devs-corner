import Layout from "../../../../material-ui/src/Organisms/Layout";
import BasicProfile from '../../../../material-ui/src/Organisms/BasicProfile/index';
import CoverPath from '../../assets/Cover.jpg'
import ProfilePic from '../../assets/avatar.jpg'
import JS from '../../assets/JS.webp'
import LinkSection from '../../../../material-ui/src/Organisms/LinkSection/index';
import Section from '../../../../material-ui/src/Organisms/Section/index';
import ItemTitle from '../../../../material-ui/src/Molecules/ItemTitleWithIcon/index';
import SkillItem from '../../../../material-ui/src/Organisms/SkillItem/index';
import SkillSection from '../../../../material-ui/src/Organisms/SkillSection/index';
import RepositoryItem from "../../../../material-ui/src/Organisms/RepositoryItem";
import Credential from '../../../../material-ui/src/Organisms/CredentialItem/index';
import CredentialItem from '../../../../material-ui/src/Organisms/CredentialItem/index';
import EducationItem from '../../../../material-ui/src/Organisms/EducationItem/index';
import ExperienceItem from '../../../../material-ui/src/Organisms/ExperienceItem/index';
import SocialMedia from '../../../../material-ui/src/Organisms/SocialMediaSection/index';

const Items = [
    {
        name: "Javascript",
        thumbnail: JS,
        type: 'Language'
    },
    {
        name: "C",
        thumbnail: JS,
        type: 'Language'
    },
    {
        name: "Github",
        thumbnail: JS,
        type: 'Tools'
    },
    {
        name: "Figma",
        thumbnail: JS,
        type: 'Tools'
    },
    {
        name: "VS Code",
        thumbnail: JS,
        type: 'Tools'
    },
    {
        name: "React",
        thumbnail: JS,
        type: 'Library'
    },
    {
        name: "Lerna",
        thumbnail: JS,
        type: 'Technology'
    },
    {
        name: "Nx",
        thumbnail: JS,
        type: 'Technology'
    },
    {
        name: "Parn",
        thumbnail: JS,
        type: 'Stack'
    },
    {
        name: "Mean",
        thumbnail: JS,
        type: 'Stack'
    },
    {
        name: "Marn",
        thumbnail: JS,
        type: 'Stack'
    },
    {
        name: "Angular",
        thumbnail: JS,
        type: 'Framework'
    }
]



const repo = [
    {
        title: "Covid",
        description: "An Ecommerce Application",
        gitlink: "github.com",
        livelink: "sdjlfkjs.com"
    },
    {
        title: "Covid",
        description: "An Ecommerce Application",
        gitlink: "github.com",
        livelink: "sdjlfkjs.com"
    },
    {
        title: "Covid",
        description: "An Ecommerce Application",
        gitlink: "github.com",
        livelink: "sdjlfkjs.com"
    }

]


const Cred = [
    {
        title: "FullStack Army",
        institution: 'Stack Learner',
        src: ProfilePic,
        achievedAt: "2nd June 2023",
        duration: "1.5 year"
    },
    {
        title: "FrontEnd BootCamp",
        institution: 'Stack Learner',
        src: ProfilePic,
        achievedAt: "2nd June 2023",
        duration: "1.5 year"
    }
]


const Edu = [
    {
        title: "HSC",
        institute: "M.C College, Sylhet, Bangladesh",
        passingyear: 2020,
        result: 3.60
    },
    {
        title: "B.SC in CS",
        institute: "Sapiyenza University, Italy",
        passingyear: 2020,
        result: 3.60
    }
]

const Exp = [
    {
        position: "Front End Developer",
        companyName: "At Home",
        startAt: '2nd December 2018',
        endAt: 'Till Now'
    },
    {
        position: "Front End Developer",
        companyName: "At Home",
        startAt: '2nd December 2016',
        endAt: '24tth June 2018'
    }
]

const Social = [
    {
        url: 'lsdflksdajklfj',
        type: 'facebook'
    },
    {
        url: 'lsdflksdajklfj',
        type: 'linkedIn'
    },
    {
        url: 'lsdflksdajklfj',
        type: 'twitter'
    }
]


type Props = {};

const Dashboard = ({ }: Props) => {



    return (
        <Layout>
            <BasicProfile CoverPath={CoverPath} Location="Sylhet" Name="Sadi" Photo={ProfilePic} Position="Front End Developer" />
            <LinkSection />
            <Section title="About" text="I am front end developer" />
            <SkillSection Items={Items} />
            <Section title="Repositories" Component={RepositoryItem} Items={repo} direction="column" />
            <Section title="Credentials" Component={CredentialItem} Items={Cred} />
            <Section title="Education" Component={EducationItem} Items={Edu} />
            <Section title="Experience" Component={ExperienceItem} Items={Exp} />
            <SocialMedia items={Social} />
        </Layout>
    );
};

export default Dashboard;
