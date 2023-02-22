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

type Props = {};

const Dashboard = ({ }: Props) => {


    return (
        <Layout>
            <BasicProfile CoverPath={CoverPath} Location="Sylhet" Name="Sadi" Photo={ProfilePic} Position="Front End Developer" />
            <LinkSection />
            <Section title="About" text="I am front end developer" />
            <SkillSection Items={Items} />
            <RepositoryItem title="Covid" description="An Ecommerce Application" gitlink="github.com" livelink="sdjlfkjs.com" />
        </Layout>
    );
};

export default Dashboard;
