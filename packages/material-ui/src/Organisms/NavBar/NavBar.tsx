import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import LogoPath from "../../../../client/src/assets/Devs'Corner.svg";
import AvatarMenu from '../../../../client/src/components/Layout/AvatarMenu/AvatarMenu';
import Logo from '../../Atoms/Logo';

interface NavBarProps {
	profilePic: string;
}

const NavBar = ({ profilePic }: NavBarProps) => {
	return (
		<AppBar position='sticky' sx={{ zIndex: '90' }}>
			<Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
				<Container
					sx={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<Typography
						variant='h2'
						component='h2'
						sx={{ display: 'flex', alignItems: 'center' }}
					>
						<Logo Src={LogoPath} Txt='D' Size={33} /> Devs' Corner
					</Typography>
					<AvatarMenu profilePic={profilePic} />
				</Container>
			</Toolbar>
		</AppBar>
	);
};
export default NavBar;
