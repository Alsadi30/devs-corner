import BasicProfile from '../../../../material-ui/src/Organisms/BasicProfile/index';
import Layout from '../../../../material-ui/src/Organisms/Layout';
import LinkSection from '../../../../material-ui/src/Organisms/LinkSection/index';
import ProfilePic from '../../assets/avatar.jpg';
import CoverPath from '../../assets/Cover.jpg';

type Props = {};

const Dashboard = ({}: Props) => {
	return (
		<Layout>
			<BasicProfile
				CoverPath={CoverPath}
				Location='Sylhet'
				Name='Sadi'
				Photo={ProfilePic}
				Position='Front End Developer'
			/>
			<LinkSection />
		</Layout>
	);
};

export default Dashboard;
