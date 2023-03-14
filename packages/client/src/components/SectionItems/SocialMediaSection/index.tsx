import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import SectionHead from '../../../../../material-ui/src/Molecules/SectionHead';
import SocialMediaModal from '../../ModalItems/SocialMediaModal';

type item = {
	url: string;
	type: string;
};

interface SocialMediaProps {
	items: Array<item>;
}

const SocialMedia = ({ items }: SocialMediaProps) => {

	let facebook: string = '';
	let twitter: string = ''
	let linkedIn: string = ''
	let github: string = ''
	let reddit: string = ''

	const filterItems = items.map((item) => {
		if (item.type === 'facebook') {
			facebook = item.url;
		} else if (item.type === 'twitter') {
			twitter = item.url;
		} else if (item.type === 'linkedIn') {
			linkedIn = item.url;
		} else if (item.type === 'github') {
			github = item.url;
		} else if (item.type === 'reddit') {
			reddit = item.url;
		}
	});

	const [openModal, setOpenModal] = useState(false);

	const handleSocialMedia = () => {
		setOpenModal(!openModal);
	};

	return (
		filterItems && <Grid container pt={3} justifyContent={'center'}>
			<SectionHead title='Social Media' handleClick={handleSocialMedia} />
			{github && (
				<Grid p={1}>
					<Link to={github} target='_blank'>
						{' '}
						<GitHubIcon color='info' />
					</Link>
				</Grid>
			)}
			{facebook && (
				<Grid p={1}>
					<Link to={facebook} target='_blank'>
						{' '}
						<FacebookIcon color='info' />
					</Link>
				</Grid>
			)}
			{linkedIn && (
				<Grid p={1}>
					<Link to={linkedIn} target='_blank'>
						{' '}
						<LinkedInIcon color='info' />
					</Link>
				</Grid>
			)}
			{twitter && (
				<Grid p={1}>
					<Link to={twitter} target='_blank'>
						{' '}
						<TwitterIcon color='info' />
					</Link>
				</Grid>
			)}
			{reddit && (
				<Grid p={1}>
					<Link to={reddit} target='_blank'>
						{' '}
						<RedditIcon color='info' />
					</Link>
				</Grid>
			)}
			<CustomizedDialogs
				title='Add Social Media'
				open={openModal}
				handleClose={handleSocialMedia}
			>
				<SocialMediaModal handleClose={handleSocialMedia} />
			</CustomizedDialogs>
		</Grid>
	);
};

export default SocialMedia;
