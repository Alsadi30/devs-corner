import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ImageAvatar from '../../../../../material-ui/src/Atoms/Avatars/ImageAvatar';
import { userLoggedOut } from '../../../features/auth/authSlice';

interface Menutype {
	profilePic: string;
}

const AvatarMenu = ({ profilePic }: Menutype) => {
	const auth = useSelector((state: any) => state?.auth);
	const dispatch = useDispatch();
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogOut = () => {
		dispatch(userLoggedOut());

		localStorage.setItem('auth', '');

		handleCloseUserMenu();
	};

	return (
		<>
			<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
				<ImageAvatar Src={profilePic} Txt='Name' Size={50} />
			</IconButton>
			<Menu
				sx={{ mt: '45px' }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<MenuItem onClick={handleCloseUserMenu}>
					<Link to={'/dashboard'}>
						<Typography textAlign='center' color={'info.light'}>
							Dashboard
						</Typography>
					</Link>
				</MenuItem>
				<MenuItem onClick={handleLogOut}>
					<Typography textAlign='center' color={'info.light'}>
						Logout
					</Typography>
				</MenuItem>
			</Menu>
		</>
	);
};
export default AvatarMenu;
