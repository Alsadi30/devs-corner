import Layout from "../../../../material-ui/src/Organisms/Layout";
import BasicProfile from '../../../../material-ui/src/Organisms/BasicProfile/index';
import CoverPath from '../../assets/Cover.jpg'
import ProfilePic from '../../assets/avatar.jpg'
import LinkSection from '../../../../material-ui/src/Organisms/LinkSection/index';


type Props = {};

const Dashboard = ({ }: Props) => {


    return (
        <Layout>
            <BasicProfile CoverPath={CoverPath} Location="Sylhet" Name="Sadi" Photo={ProfilePic} Position="Front End Developer" />
            <LinkSection />
        </Layout>
    );
};

export default Dashboard;
